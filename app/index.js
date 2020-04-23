import React from 'react'
import ReactDOM from 'react-dom'
import './sass/app.scss'
import { FaBars, FaMoon, FaSun, FaWindowClose } from "react-icons/all";
import Homepage from "./components/Homepage";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "./contexts/theme";
import { ThemeConsumer } from "./contexts/theme";

class Nav extends React.Component {
    state = {
        expandMobile: false,
    }

    click = () => this.setState(({ expandMobile }) => {
        return { expandMobile: !expandMobile }
    });

    render() {
        const { expandMobile } = this.state;

        return (
            <ThemeConsumer>
                { ({ theme, toggleTheme }) => (
                    <div className='inner-wrapper'>
                        <header>
                            <div className='logo'>Christian</div>
                            <button className='btn-reset theme-mobile' onClick={toggleTheme}>
                                {theme === 'light' ? <FaMoon size={26} /> : <FaSun size={26} />}
                            </button>
                            <button onClick={this.click} className='btn-reset toggle'><FaBars size={26}/></button>
                            <nav>
                                <div className={`mobile-menu${ expandMobile ? ' open' : '' }`}>
                                    <div className='main-nav'>
                                        <ul>
                                            <li onClick={this.click} className='menu-item lg-hidden'><FaWindowClose size={26}/></li>
                                            <li className='menu-item'>Home</li>
                                            <li className='menu-item'>Blog</li>
                                            <li className='menu-item'>Portfolio</li>
                                            <li className='menu-item'>Contacts</li>
                                            <li>
                                                <button className='btn-reset theme' onClick={toggleTheme}>
                                                    {theme === 'light' ? <FaMoon size={26} /> : <FaSun size={26} />}
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    </div>
                )}
            </ThemeConsumer>
        );
    }
}

class App extends React.Component {
    state = {
        theme: 'dark',
        toggleTheme: () => {
            this.setState(({ theme }) => ({
                theme: theme === 'light' ? 'dark' : 'light'
            }))
        }
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <body data-theme={this.state.theme} />
                </Helmet>
                <ThemeProvider value={this.state}>
                    <Nav />
                    <Homepage />
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));