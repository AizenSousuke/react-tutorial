import React, { Component } from "react";
import './homepage.styles.scss';
import MenuItem from '../../component/homepage/header/menu/menu.component'

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="header">
                    <div className="header-image"><img src="https://via.placeholder.com/128" alt="ecommerce-store" /></div>
                    <div className="menu">
                        <MenuItem />
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="content-block">Content block</div>
                        <div className="content-block">Content block</div>
                    </div>
                    <div className="row">
                        <div className="content-block">Content block</div>
                    </div>
                    <div className="row">
                        <div className="content-block">Content block</div>
                        <div className="content-block">Content block</div>
                    </div>
                </div>
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