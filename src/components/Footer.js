const Footer = () => {
    return (
        <footer id="contact">
            <div className="row">
                <div className="container">
                    <div className="getting-started center">
                        <h1 className="getting-started-title">Get started for free</h1>
                        <div className="getting-started-txt">
                            Join us as we accelerate your financial ease and simplify modern commerce
                        </div>

                        <div className="getting-started-links flex-div justify-content-btw">
                            <a href="https://payrail.co/agency" target="_blank" rel="noopener noreferrer" className="gs-link flex-div">
                                <span>Download Payrail Agency</span>
                                <img src={require("../images/arrow-right.svg").default} alt="arrow-right" className="right-arr-2" />
                            </a>
                            <a href="https://payrail.co/business" target="_blank" rel="noopener noreferrer" className="gs-link flex-div">
                                <span>Explore Payrail Business</span>
                                <img src={require("../images/arrow-right.svg").default} alt="arrow-right" className="right-arr-2" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-grid-wrapper">
                        <div className="footer-block">
                            <div className="footer-block-title">Headquaters</div>
                            <ul className="footer-block-list">
                                <li>
                                    20 Layi Yusuf Crescent, <br /> Lekki, Lagos, <br /> Nigeria
                                </li>
                            </ul>
                        </div>
                        <div className="footer-block">
                            <div className="footer-block-title">Products</div>
                            <ul className="footer-block-list">
                                <li>
                                    <a href="https://payrail.co/agency" target="_blank" rel="noopener noreferrer" className="footer-link">Payrail Agency</a>
                                </li>
                                <li>
                                    <a href="https://payrail.co/business" target="_blank" rel="noopener noreferrer" className="footer-link">Payrail Business</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-block">
                            <div className="footer-block-title">General inquiries</div>
                            <ul className="footer-block-list">
                                <li>
                                    If it's easier, email us?
                                </li>
                                <li>
                                    <a href="mailto:info@angalafintech.com" className="footer-link flex-div">
                                        <img src={require("../images/email-icon.svg").default} alt="call" className="footer-link-icon" />
                                        <span>info@angalafintech.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+2349042222281" className="footer-link flex-div">
                                        <img src={require("../images/call.svg").default} alt="call" className="footer-link-icon" />
                                        <span>+234 904 2222 281</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-block">
                            <div className="footer-block-title">Sign up for the newsletter</div>
                            <form action="#" className="footer-newsletter-form">
                                <div className="input-field flex-div">
                                    <input type="email" id="newsletter-inp" placeholder="name@company.com" />
                                    <button id="subscribe-btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="footer-copyright-social flex-div justify-content-btw">
                        <div className="footer-copyright">
                            © 2022 Angala Fintech. All Right Reserved
                        </div>
                        <div className="flex-div footer-social">
                            <a href="https://twitter.com/search?q=angala%20fintech&src=recent_search_click" target="_blank" rel="noopener noreferrer" className="footer-link flex-div">
                                <img src={require("../images/twitter.svg").default} alt="twitter" className="social-link-icon" />
                                <span>Twitter</span>
                            </a>
                            <a href="https://www.instagram.com/angalafintech/" target="_blank" rel="noopener noreferrer" className="footer-link flex-div">
                                <img src={require("../images/instagram.svg").default} alt="instagram" className="social-link-icon" />
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/company/angala-financial-technology-limited/" target="_blank" rel="noopener noreferrer" className="footer-link flex-div">
                                <img src={require("../images/linkedin.svg").default} alt="linkedin" className="social-link-icon" />
                                <span>Linkedin</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;