import React from 'react'
import { Menu } from 'react-feather'
import DevSocLogo from "../assets/img/devsoc-logo.png"

export default function Navbar() {
    const [navbarCollapsed, setNavbarCollapsed] = React.useState(true)
    return (
        <nav className="navbar navbar-marketing navbar-expand-lg navbar-dark fixed-top">
            <div className="container px-5">
                <a className="navbar-brand text-white" href="#"><img className='devsoc-logo mx-4' src={DevSocLogo} alt="Logo" /></a>
                <button className={`navbar-toggler ${navbarCollapsed ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded={`${navbarCollapsed ? 'false' : 'true'}`} aria-label="Toggle navigation" onClick={() => setNavbarCollapsed(prev => !prev)}><Menu /></button>
                <div className={`collapse navbar-collapse ${navbarCollapsed ? "" : "show"}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-lg-5">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item dropdown dropdown-xl no-caret">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownDemos" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Landings
                            </a>
                        </li>
                        <li className="nav-item dropdown dropdown-xl no-caret">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownPages" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                            </a>
                            <div className="dropdown-menu dropdown-menu-end me-lg-n20 me-xl-n15 animated--fade-in-up"
                                aria-labelledby="navbarDropdownPages">
                                <div className="row g-0">
                                    <div className="col-lg-4 p-lg-5">
                                        <h6 className="dropdown-header text-primary">Company</h6>
                                        <a className="dropdown-item" href="page-basic.html">Basic Page</a>
                                        <a className="dropdown-item" href="page-company-about.html">About</a>
                                        <a className="dropdown-item" href="page-company-pricing.html">Pricing</a>
                                        <a className="dropdown-item" href="page-company-contact.html">Contact</a>
                                        <a className="dropdown-item" href="page-company-team.html">Team</a>
                                        <a className="dropdown-item" href="page-company-terms.html">Terms</a>
                                        <div className="dropdown-divider border-0"></div>
                                        <h6 className="dropdown-header text-primary">Support</h6>
                                        <a className="dropdown-item" href="page-help-center.html">Help Center</a>
                                        <a className="dropdown-item"
                                            href="page-help-knowledgebase.html">Knowledgebase</a>
                                        <a className="dropdown-item" href="page-help-message-center.html">Message
                                            Center</a>
                                        <a className="dropdown-item" href="page-help-support-ticket.html">Support
                                            Ticket</a>
                                        <div className="dropdown-divider border-0 d-lg-none"></div>
                                    </div>
                                    <div className="col-lg-4 p-lg-5">
                                        <h6 className="dropdown-header text-primary">Careers</h6>
                                        <a className="dropdown-item" href="page-careers-overview.html">Careers
                                            List</a>
                                        <a className="dropdown-item" href="page-careers-listing.html">Position
                                            Details</a>
                                        <div className="dropdown-divider border-0"></div>
                                        <h6 className="dropdown-header text-primary">Blog</h6>
                                        <a className="dropdown-item" href="page-blog-overview.html">Overview</a>
                                        <a className="dropdown-item" href="page-blog-post.html">Post</a>
                                        <a className="dropdown-item" href="page-blog-archive.html">Archive</a>
                                        <div className="dropdown-divider border-0"></div>
                                        <h6 className="dropdown-header text-primary">Portfolio</h6>
                                        <a className="dropdown-item" href="page-portfolio-grid.html">Grid</a>
                                        <a className="dropdown-item" href="page-portfolio-large-grid.html">Large
                                            Grid</a>
                                        <a className="dropdown-item" href="page-portfolio-masonry.html">Masonry</a>
                                        <a className="dropdown-item" href="page-portfolio-case-study.html">Case
                                            Study</a>
                                        <a className="dropdown-item" href="page-portfolio-project.html">Project</a>
                                        <div className="dropdown-divider border-0 d-lg-none"></div>
                                    </div>
                                    <div className="col-lg-4 p-lg-5">
                                        <h6 className="dropdown-header text-primary">Error</h6>
                                        <a className="dropdown-item" href="page-error-400.html">400 Error</a>
                                        <a className="dropdown-item" href="page-error-401.html">401 Error</a>
                                        <a className="dropdown-item" href="page-error-404-1.html">404 Error (Option
                                            1)</a>
                                        <a className="dropdown-item" href="page-error-404-2.html">404 Error (Option
                                            2)</a>
                                        <a className="dropdown-item" href="page-error-500.html">500 Error</a>
                                        <a className="dropdown-item" href="page-error-503.html">503 Error</a>
                                        <a className="dropdown-item" href="page-error-504.html">504 Error</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-caret">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Documentation
                                <i className="fas fa-chevron-right dropdown-arrow"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end animated--fade-in-up"
                                aria-labelledby="navbarDropdownDocs">
                                <a className="dropdown-item py-3"
                                    href="https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart"
                                    target="_blank">
                                    <div className="icon-stack bg-primary-soft text-primary me-4"><i
                                        data-feather="book-open"></i></div>
                                    <div>
                                        <div className="small text-gray-500">Documentation</div>
                                        Usage instructions and reference
                                    </div>
                                </a>
                                <div className="dropdown-divider m-0"></div>
                                <a className="dropdown-item py-3"
                                    href="https://docs.startbootstrap.com/sb-ui-kit-pro/components"
                                    target="_blank">
                                    <div className="icon-stack bg-primary-soft text-primary me-4"><i
                                        data-feather="code"></i></div>
                                    <div>
                                        <div className="small text-gray-500">Components</div>
                                        Code snippets and reference
                                    </div>
                                </a>
                                <div className="dropdown-divider m-0"></div>
                                <a className="dropdown-item py-3"
                                    href="https://docs.startbootstrap.com/sb-ui-kit-pro/changelog"
                                    target="_blank">
                                    <div className="icon-stack bg-primary-soft text-primary me-4"><i
                                        data-feather="file-text"></i></div>
                                    <div>
                                        <div className="small text-gray-500">Changelog</div>
                                        Updates and changes
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <a className="btn fw-500 ms-lg-4 btn-teal" href="https://shop.startbootstrap.com/sb-ui-kit-pro">
                        Buy Now
                        <i className="ms-2" data-feather="arrow-right"></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}
