import React from 'react'
import './Footer.css'

function Footer() {
    return (

        <div className="footer">

            <div className="back__totop">
                <a href='#top'><h4>Back to Top</h4></a>
            </div>

            <div className="footer__links">

                <div>
                    <h3>Get to Know Us</h3>
                </div>

                <div>
                    <h3>Make Money with Us</h3>
                </div>

                <div>
                    <h3>Amazon Payment Products</h3>
                </div>

                <div>
                    <h3>Let Us Help You</h3>
                </div>

            </div>

            <div className="footer__logo__container">
                <img className="footer__logo" alt="" src="./footer_logo.png" />
            </div>

        </div>
    )
}

export default Footer
