import React from 'react';
import payMehod from '../../assets/media/png/payment-method.png';
import godaddy from '../../assets/media/svg/godaddy.svg';
import norton from '../../assets/media/svg/norton.svg';
import ssl from '../../assets/media/svg/ssl.svg';

const AppFooter = () => {
    return (
        <>
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">

                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Follow Us</h2>
                                <div className="contact-info">
                                    <div className="social">
                                        <a ><i className="bi bi-twitter"></i></a>
                                        <a ><i className="bi bi-facebook"></i></a>
                                        <a ><i className="bi bi-linkedin"></i></a>
                                        <a ><i className="bi bi-instagram"></i></a>
                                        <a ><i className="bi bi-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">

                        </div>

                        <div className="col-lg-3 col-md-6">

                        </div>
                    </div>

                    <div className="row payment align-items-center">
                        <div className="col-md-6">
                            <div className="payment-method">
                                <h2>We Accept:</h2>
                                <img src={payMehod} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="payment-security">
                                <h2>Secured By:</h2>
                                <img src={godaddy} />
                                <img src={norton} />
                                <img src={ssl} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="back-to-top"><i className="bi bi-chevron-double-up"></i></a>
        </>
    )
}

export default AppFooter