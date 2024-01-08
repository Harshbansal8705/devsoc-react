import React from 'react';
import './App.css';
import './assets/css/styles.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import WhatDoWeDo from './Components/WhatDoWeDo';
import ApnaInsti from './Components/ApnaInsti';
import { FaLocationArrow, FaMailBulk, FaMailchimp, FaPhoneAlt } from "react-icons/fa";
import { Mail } from 'react-feather';

function App() {
    React.useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div id="layoutDefault">
            <div id="layoutDefault_content">
                <main>
                    <Navbar />
                    <Header />
                    <AboutUs />
                    <WhatDoWeDo />
                    <ApnaInsti />
                    <hr className="m-0" />
                    {/* <FAQs />
                    <Blogs />
                    <Cards /> */}
                    <hr className="m-0" />
                </main>
            </div>
            <div id="layoutDefault_footer">
                <footer className="bg-dark text-white pb-5 pt-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <h2 className="mb-4 text-white text-dark">Contact Information</h2>
                                <div className='flex align-items-center'><FaLocationArrow className='text-lg mb-3' /><p className='px-3'>IIT Kharagpur</p></div>
                                <div className='flex align-items-center'><FaPhoneAlt className='text-lg mb-2' /><p className='px-3'>+1 555 123456</p></div>
                                <div className='flex align-items-center'><Mail className='text-lg mb-2' /><p className='px-3'>support@company.com</p></div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-4">
                                <h2 className="mb-4 text-white text-dark">About the company</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <a href="#" className="text-white mr-3"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-white mr-3"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white mr-3"><i className="fab fa-linkedin-in"></i></a>
                                <p className="mt-4 mb-0">&copy; 2024 Company Name. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
