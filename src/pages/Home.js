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
        </div>
    )
}

export default Home;