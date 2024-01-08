import React from 'react'
import AboutImage from "../assets/img/about.png";

export default function AboutUs() {
    return (
        <section className="about-us bg-transparent">
            <div className="content">
                <h1>About Us</h1>
                <p className="text-lg">Developers’ Society is an initiative by the Tech Team, Technology Students’
                    Gymkhana, Indian Institute of Technology Kharagpur, to foster and encourage the
                    software development culture in IIT Kharagpur. We help Technology Students’ Gymkhana develop
                    projects aimed at the
                    betterment of the student community and, therefore, the technological
                    advancement of IIT Kharagpur.
                </p>
            </div>
            <div className="image"><img src={AboutImage} alt="" /></div>
        </section>

    )
}
