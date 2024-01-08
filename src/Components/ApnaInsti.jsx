import React from 'react'
import ApnaInstiLogo from "../assets/img/ApnaInstiLogo.png";
import ApnaInstiHomePage from "../assets/img/ApnaInstiHomePage.png";

export default function ApnaInsti() {
    return (
        <section className="apna-insti bg-light py-10">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="skewed-image col-md-9 col-lg-6 order-1 order-lg-0" data-aos="fade-right">
                        <div className="content-skewed content-skewed-right"><img
                            className="content-skewed-item shadow-lg rounded-5"
                            src={ApnaInstiLogo}
                            alt="..." /></div>
                        <div className="content-skewed content-skewed-right"><img
                            className="content-skewed-item shadow-lg rounded-5"
                            src={ApnaInstiHomePage}
                            alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0" data-aos="fade-left">
                        <div className="mb-5">
                            <h2 className="text-xl">ApnaInsti</h2>
                            <h2>The KGPians' guide</h2>
                            <p className="lead">ApnaInsti is the central mobile application for all student activities within Indian Institute of Technology Kharagpur, developed by Developers’ Society in coordination with the Technology Students’ Gymkhana, the official student body of IIT Kharagpur.</p>
                        </div>
                        <div className="row gx-5">
                            <div className="col-md-6 mb-4">
                                <h6>TravelShare</h6>
                                <p className="mb-2 small">Find Travel buddy to travel with.</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h6>Buy and Sell</h6>
                                <p className="mb-2 small mb-0">One's junk is another's gold.</p>
                            </div>
                        </div>
                        <div className="row gx-5">
                            <div className="col-md-6 mb-4">
                                <h6>Slot Booking</h6>
                                <p className="mb-2 small mb-0">No need to stand in long queues.</p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h6>Stay informed</h6>
                                <p className="small mb-0">Campus happenings and information.</p>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <a href="https://play.google.com/store/apps/details?id=com.apnainsti" className="btn btn-primary btn-lg" role="button" download>Download Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
