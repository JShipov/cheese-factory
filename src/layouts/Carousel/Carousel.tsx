export const Carousel = () => {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-background" style={{background: '#ffd890', height: '400px'}}>
                        <div className="container">
                            <div className="carousel-caption text-start text-dark">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-orange" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-background" style={{background: '#ffd890', height: '400px'}}>
                        <div className="container">
                            <div className="carousel-caption text-dark">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-orange" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-background" style={{background: '#ffd890', height: '400px'}}>
                        <div className="container">
                            <div className="carousel-caption text-end text-dark">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-orange" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
