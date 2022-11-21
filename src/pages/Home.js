const Home = () => {
    return (
        <div id="index-page" className="page-wrapper">
            <section id="home-section" className="rel">
                <div className="row full-height">
                    <div className="container">
                        <div className="home-content-container">
                            <div className="home-txt-side">
                                <h1 className="home-title">Bridging <br className="hidden-xs" /> Financial Gaps</h1>
                                <p className="home-desc">
                                    Providing technology to enable access to financial services for the underbanked and
                                    financially excluded in rural as well as urban communities.
                                </p>

                                <div className="home-btn-wrapper flex-div">
                                    <a href="/#contact" className="home-btn-link">
                                        <button className="pry-bg">Contact Us</button>
                                    </a>
                                    <a href="/#products" className="home-btn-link">
                                        <button className="sec-bg">Our Products</button>
                                    </a>
                                </div>
                            </div>

                            <div className="home-img-side">
                                <img src={require("../images/map-2.svg").default} alt="map" className="map-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="angala-benefits">
                <div className="row">
                    <div className="container">
                        <div className="benefits-wrapper">
                            <div className="benefits-block flex-div">
                                <img src={require("../images/speed.svg").default} alt="benefit img" className="benefits-block-img" />
                                <div className="benefits-block-txt">
                                    <div className="benefits-block-title">Speed</div>
                                    <div className="benefits-block-desc">
                                        Open a business & agency account in 10 minutes
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-block flex-div">
                                <img src={require("../images/security.svg").default} alt="benefit img" className="benefits-block-img" />
                                <div className="benefits-block-txt">
                                    <div className="benefits-block-title">Security</div>
                                    <div className="benefits-block-desc">
                                        With bank-grade security with your monies fully insured by NDIC
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-block flex-div">
                                <img src={require("../images/speed.svg").default} alt="benefit img" className="benefits-block-img" />
                                <div className="benefits-block-txt">
                                    <div className="benefits-block-title">Support</div>
                                    <div className="benefits-block-desc">
                                        Get access to a trusted support team and resources
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="rows">
                    <div className="container">
                        <div className="about-content-wrapper">
                            <div className="about-img-side">
                                <img src={require("../images/about.png")} alt="about img" className="about-img" />
                            </div>
                            <div className="about-txt-side">
                                <h3 className="section-title">About Angala Fintech</h3>
                                <p className="section-sub-title">
                                    At Angala Fintech, our aim is to remove the barriers associated with financial services.
                                </p>
                                <p className="section-txts">
                                    Alongside this, we desire to reduce the gender inequality gap and encourage more women
                                    and youths to be financially independent through job creation and access to finance for MSMEs. <br />
                                    Our method is simple - We deploy technology to provide unbanked communities with comprehensive and
                                    innovative financial services such as agency banking, local and inter-African payments, thereby
                                    enabling financial inclusion. <br /> As a company, we are revolutionizing payments and improving
                                    data management and record keeping for merchants and MSMEs. We do not stop here - We provide our
                                    partners with a platform that enables them to monitor and effectively disburse credit
                                    facilities or other services to small holder farmers and MSMEs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="why-we-exist">
                <div className="row">
                    <div className="container">
                        <div className="wwe-content-wrapper">
                            <div className="wwe-txt-side">
                                <div className="section-top-title">WHY WE EXIST</div>
                                <h3 className="section-title">
                                    Less than 45% of Africans have some sort of financial understanding.
                                </h3>
                                <p className="section-txts">
                                    This lack of proper financial literacy constitutes a challenge that holds innovation back in
                                    target markets. The gender gap in account ownership remains at 9% in developing countries,
                                    hindering women from being able to effectively control their financial lives (World Bank).
                                    We exist to overcome barriers in Financial Service, solve the problem of Payments innovation,
                                    collections, disbursement and reconciliation - which is still a major challenge for most
                                    organizations.
                                </p>
                            </div>
                            <div className="wwe-img-side">
                                <img src={require("../images/pie-data.svg").default} alt="pie-data" className="wwe-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="business-objectives">
                <div className="row">
                    <div className="container">
                        <div className="bo-content-wrapper">
                            <div className="bo-img-side">
                                <img src={require("../images/business-objective.png")} alt="business woman" className="bo-img" />
                            </div>
                            <div className="bo-txt-side">
                                <h3 className="section-title">Our Business Objective</h3>
                                <ul className="bo-list">
                                    <li className="flex-div">
                                        <img src={require("../images/tick.svg").default} alt="tick" className="tick" />
                                        <span>Enhance access to financial services for smallholders and SMEs</span>
                                    </li>
                                    <li className="flex-div">
                                        <img src={require("../images/tick.svg").default} alt="tick" className="tick" />
                                        <span>Facilitate Access to finance for SMEs and aggregators</span>
                                    </li>
                                    <li className="flex-div">
                                        <img src={require("../images/tick.svg").default} alt="tick" className="tick" />
                                        <span>Provide a safe and secure payment gateway for Merchant and MSMEs to effectively receive payments.</span>
                                    </li>
                                    <li className="flex-div">
                                        <img src={require("../images/tick.svg").default} alt="tick" className="tick" />
                                        <span>Provide businesses with comprehensive financial data management and record keeping services to improve their business processes.</span>
                                    </li>
                                    <li className="flex-div">
                                        <img src={require("../images/tick.svg").default} alt="tick" className="tick" />
                                        <span>Enhance financial literacy and financial inclusion.</span>
                                    </li>
                                    <li className="flex-div">
                                        <img src={require("../images/tick.svg").default} alt="tick" className="tick" />
                                        <span>Increase the adoption of technology and digital payments in Africa.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="products">
                <div className="row">
                    <div className="container">
                        <div className="section-header center">
                            <h3 className="section-title">Our Products</h3>
                            <div className="section-sub-title">
                                The complementary effect of our products and services ensure that users are guaranteed fast,
                                efficient and effective support .
                            </div>
                        </div>

                        <div className="products-content-wrapper">
                            <div className="product-block rel">
                                <img src={require("../images/payrail-agency.png")} alt="agency" className="product-img" />
                                <div className="product-block-txt">
                                    <div className="product-block-title">Payrail Agency</div>
                                    <div>
                                        Your branchless nextdoor banking platform that provides individuals, farmers
                                        and MSMEs in rural regions access to banking services, financial literacy and
                                        value-added services such as insurance. Built to prioritize the needs of our
                                        users, we help you with your day-to-day agency banking needs like Account Creation​,
                                        Cash deposits/withdrawals, Fund transfers and Bill Payment.
                                    </div>
                                </div>

                                <a href="https://payrail.co/agency" target="_blank" rel="noopener noreferrer" className="learn-more-link flex-div">
                                    <span>Learn more</span> <span>&#10093;</span>
                                </a>
                            </div>

                            <div className="product-block rel">
                                <img src={require("../images/payrail-business.png")} alt="agency" className="product-img" />
                                <div className="product-block-txt">
                                    <div className="product-block-title">Payrail Business</div>
                                    <div>
                                        provides a one stop solution for Aggregators, MSMEs and Merchant. The payment gateway
                                        enables seamless payments and collections using our built-in technology which
                                        includes- QR codes, Card payments, offline payment and USSD all at a reduced cost.
                                        Payrail Business also provides a system for Record keeping, Reporting and Reconciliation.
                                        Aggregators, Merchants and SMEs view transactions real time, store and analyse their data
                                        for future use, conduct proper reconciliation, collate and report business data
                                        efficiently and most importantly with ease.
                                    </div>
                                </div>

                                <a href="https://payrail.co/business" target="_blank" rel="noopener noreferrer" className="learn-more-link flex-div">
                                <span>Learn more</span> <span>&#10093;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;