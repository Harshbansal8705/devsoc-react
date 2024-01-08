import React from 'react'

export default function Cards() {
    return (
        <section className="cards bg-light py-10">
            <div className="container px-5 mt-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <h4>Ready to get started?</h4>
                        <p className="lead mb-5 mb-lg-0 text-gray-500">Get in touch or create an account.</p>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <a className="btn btn-primary fw-500 me-3 my-2" href="#!">Contact Sales</a>
                        <a className="btn btn-white fw-500 my-2 shadow" href="#!">Create Account</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
