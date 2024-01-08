import React from 'react'
import { Layers, Smartphone, Code } from 'react-feather';

export default function WhatDoWeDo() {
    return (
        <section className="what-do-we-do bg-white py-10">
            <div className="container px-5">
                <div className="row gx-5 text-center">

                    <h1>What do we do?</h1>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                            <Layers />
                        </div>
                        <h3>Community First </h3>
                        <h4>We serve the student community as a group and as individuals </h4>

                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                            <Smartphone />
                        </div>
                        <h3>Learn. Build. Share</h3>
                        <h4>We aim to promote and distribute new technologies while uplifting the student developers' community </h4>

                    </div>

                    <div className="col-lg-4">
                        <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                            <Code />
                        </div>
                        <h3>For KGP</h3>
                        <h4>We assist the TSG, IIT Kharagpur in developing applications helpful to the student community</h4>


                    </div>
                </div>
            </div>
            <div className="svg-border-rounded text-light">
                {/* <!-- Rounded SVG Border--> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none"
                    fill="currentColor">
                    <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
            </div>
        </section>
    )
}
