import React from 'react'
import ReactDOM from 'react-dom'
import './sass/app.scss'
import { FaBars, FaMoon, FaSun } from "react-icons/all";
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
                    <header>
                        <div className='logo'>Christian</div>
                        <nav>
                            <ul className='navbar'>
                                <li className={`item item-dark${ expandMobile ? ' show' : '' }`}>Home</li>
                                <li className={`item item-dark${ expandMobile ? ' show' : '' }`}>Blog</li>
                                <li className={`item item-dark${ expandMobile ? ' show' : '' }`}>Portfolio</li>
                                <li className={`item item-dark${ expandMobile ? ' show' : '' }`}>Contact</li>
                                <li className={`item ${ expandMobile ? ' show' : '' }`}>
                                    <button className='btn-reset' onClick={toggleTheme}>
                                        {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
                                    </button>
                                </li>
                                <li className='toggle'>
                                    <button
                                        type='button'
                                        className='btn btn-dark'
                                        onClick={this.click}>
                                        <FaBars size={22}/>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </header>
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