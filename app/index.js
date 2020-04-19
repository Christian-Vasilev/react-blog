import React from 'react'
import ReactDOM from 'react-dom'
import './sass/app.scss'
import { FaBars } from "react-icons/all";
import Homepage from "./components/Homepage";

class Nav extends React.Component {
    state = { expandMobile: false }

    click = () => this.setState(({ expandMobile }) => {
        return { expandMobile: !expandMobile }
    });

    render() {
        const { expandMobile } = this.state;

        return (
            <header>
                <div className='logo'>Christian</div>
                <nav>
                    <ul className='navbar'>
                        <li className={`item item-dark${ expandMobile ? ' show' : '' }`}>Home</li>
                        <li className={`item item-dark${ expandMobile ? ' show' : '' }`}>Blog</li>
                        <li className={`item item-dark${ expandMobile ? ' show' : '' }`}>Portfolio</li>
                        <li className={`item item-dark${ expandMobile ? ' show' : '' }`}>Contact</li>
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
        );
    }
}

function App() {
    return (
        <React.Fragment>
            <Nav />
            <Homepage />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));