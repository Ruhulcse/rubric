import React from 'react'
import Fade from 'react-reveal/Fade';
function Team() {
    return (
        <div className="da-section">
            <div className="container">
                <Fade bottom>
                <div className="h3 text-center">Meet our Team Memebers</div>
                </Fade>
            </div>
            <div className="da-team carousel slide py-5" id="da-carouselIndicator" data-ride="carousel" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="container">
                <ol className="carousel-indicators">
                    <li className="active" data-target="#da-carouselIndicator" data-slide-to="0"></li>
                    <li data-target="#da-carouselIndicator" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="card d-block mb-3"><img className="card-img-top" src={'images/da-emp-1.jpg'} alt="not found"/>
                            <div className="card-body text-center">
                            <div className="h5">Pamela Lopez</div>
                            <p className="text-muted">CEO</p>
                            </div>
                        </div>
                        </div>
                        {/* <div className="col-md-4">
                        <div className="card d-block mb-3"><img className="card-img-top" src={'images/da-emp-2.jpg'} alt="not found"/>
                            <div className="card-body text-center">
                            <div className="h5">John Bowman</div>
                            <p className="text-muted">Graphic Designer</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card d-block mb-3"><img className="card-img-top" src="images/da-emp-3.jpg" alt="not found"/>
                            <div className="card-body text-center">
                            <div className="h5">Mark Shaw</div>
                            <p className="text-muted">Software Developer</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="card d-block mb-3"><img className="card-img-top" src="images/da-emp-4.jpg" alt="not found"/>
                            <div className="card-body text-center">
                            <div className="h5">Melissa Long</div>
                            <p className="text-muted">Software Developer</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card d-block mb-3"><img className="card-img-top" src="images/da-emp-5.jpg" alt="not found"/>
                            <div className="card-body text-center">
                            <div className="h5">Betty West</div>
                            <p className="text-muted">Software Developer</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card d-block mb-3"><img className="card-img-top" src="images/da-emp-6.jpg" alt="not found"/>
                            <div className="card-body text-center">
                            <div className="h5">Jeremy Little</div>
                            <p className="text-muted">Software Developer</p>
                            </div>
                        </div>
                        </div> */}
                    </div>
                    </div>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Team
