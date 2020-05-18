import React, { Component } from "react";
import './homepage.styles.scss';
import Directory from '../../component/homepage/directory/directory.component';

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <h1>Home Page</h1>
                <div className="header">
                    <div className="header-image">
                        <img src="http://loremflickr.com/800/200/teens" alt="ecommerce-store" />
                    </div>
                </div>
                <Directory />
                <div className="footer">
                    <div className="footer-menu">
                        <li className="footer-link"><a href="\">Home</a></li>
                        <li className="footer-link"><a href="\">Collections</a></li>
                        <li className="footer-link"><a href="\">About Us</a></li>
                        <li className="footer-link"><a href="\">Login\Register</a></li>
                        <li className="footer-link"><a href="\">Cart</a></li>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;