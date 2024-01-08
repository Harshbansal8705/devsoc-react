import React from 'react'

export default function FAQs() {
    return (
        <section className="faq bg-dark py-10">
            <div className="container px-5">
                <div className="row gx-5 my-10">
                    <div className="col-lg-6 mb-5">
                        <div className="d-flex h-100">
                            <div className="icon-stack flex-shrink-0 bg-teal text-white"><i
                                className="fas fa-question"></i></div>
                            <div className="ms-4">
                                <h5 className="text-white">What is SB UI Kit Pro?</h5>
                                <p className="text-white-50">SB UI Kit Pro is a fully coded, responsive, Bootstrap
                                    based UI toolkit for developers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="d-flex h-100">
                            <div className="icon-stack flex-shrink-0 bg-teal text-white"><i
                                className="fas fa-question"></i></div>
                            <div className="ms-4">
                                <h5 className="text-white">What can I build with SB UI Kit Pro?</h5>
                                <p className="text-white-50">Build anything you want to using this UI kit! It is
                                    flexible, multipurpose, and full of tools for you to use during development.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="d-flex h-100">
                            <div className="icon-stack flex-shrink-0 bg-teal text-white"><i
                                className="fas fa-question"></i></div>
                            <div className="ms-4">
                                <h5 className="text-white">Do I get free updates?</h5>
                                <p className="text-white-50">All of Start Bootstrap's premium products will come
                                    with updates for feature additions, bugfixes, and other small updates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex h-100">
                            <div className="icon-stack flex-shrink-0 bg-teal text-white"><i
                                className="fas fa-question"></i></div>
                            <div className="ms-4">
                                <h5 className="text-white">What frameworks does it integrate with?</h5>
                                <p className="text-white-50">Our HTML based pro products are build with framework
                                    integration in mind. The compiled code is HTML and CSS, which is able to
                                    integrate with any framework.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-5 justify-content-center text-center">
                    <div className="col-lg-8">
                        <div className="badge bg-transparent-light rounded-pill badge-marketing mb-4">Get Started
                        </div>
                        <h2 className="text-white">Save time with SB UI Kit Pro</h2>
                        <p className="lead text-white-50 mb-5">Start Bootstrap's premium UI Kit beautifully and
                            intuitively extends the Bootstrap framework making it easy to build your next
                            project!</p>
                        <a className="btn btn-teal fw-500" href="#!">Buy Now!</a>
                    </div>
                </div>
            </div>
            <div className="svg-border-rounded text-white">
                {/* <!-- Rounded SVG Border--> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none"
                    fill="currentColor">
                    <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
            </div>
        </section>

    )
}
