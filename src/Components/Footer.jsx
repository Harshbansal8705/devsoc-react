import React from 'react'

export default function Footer() {
    return (
        <footer className="footer pt-10 pb-5 mt-auto bg-light footer-light">
            <div className="container px-5">
                <div className="row gx-5">
                    <div className="col-lg-3">
                        <div className="footer-brand">SB UI Kit Pro</div>
                        <div className="mb-3">Design made easy</div>
                        <div className="icon-list-social mb-5">
                            <a className="icon-list-social-link" href="#!"><i className="fab fa-instagram"></i></a>
                            <a className="icon-list-social-link" href="#!"><i className="fab fa-facebook"></i></a>
                            <a className="icon-list-social-link" href="#!"><i className="fab fa-github"></i></a>
                            <a className="icon-list-social-link" href="#!"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-5">
                            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                <div className="text-uppercase-expanded text-xs mb-4">Product</div>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><a href="#!">Landing</a></li>
                                    <li className="mb-2"><a href="#!">Pages</a></li>
                                    <li className="mb-2"><a href="#!">Sections</a></li>
                                    <li className="mb-2"><a href="#!">Documentation</a></li>
                                    <li><a href="#!">Changelog</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                <div className="text-uppercase-expanded text-xs mb-4">Technical</div>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><a href="#!">Documentation</a></li>
                                    <li className="mb-2"><a href="#!">Changelog</a></li>
                                    <li className="mb-2"><a href="#!">Theme Customizer</a></li>
                                    <li><a href="#!">UI Kit</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                                <div className="text-uppercase-expanded text-xs mb-4">Includes</div>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><a href="#!">Utilities</a></li>
                                    <li className="mb-2"><a href="#!">Components</a></li>
                                    <li className="mb-2"><a href="#!">Layouts</a></li>
                                    <li className="mb-2"><a href="#!">Code Samples</a></li>
                                    <li className="mb-2"><a href="#!">Products</a></li>
                                    <li className="mb-2"><a href="#!">Affiliates</a></li>
                                    <li><a href="#!">Updates</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="text-uppercase-expanded text-xs mb-4">Legal</div>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><a href="#!">Privacy Policy</a></li>
                                    <li className="mb-2"><a href="#!">Terms and Conditions</a></li>
                                    <li><a href="#!">License</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="row gx-5 align-items-center">
                    <div className="col-md-6 small">Copyright © Your Website 2023</div>
                    <div className="col-md-6 text-md-end small">
                        <a href="#!">Privacy Policy</a> ·
                        <a href="#!">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
