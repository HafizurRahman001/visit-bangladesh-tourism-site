import React from 'react';
import './TourRivews.css';
import img1 from '../../images/rivewsImg/img1.jpg';
import img2 from '../../images/rivewsImg/img2.jpg';
import img3 from '../../images/rivewsImg/img3.jpg';
import img4 from '../../images/rivewsImg/img4.jpg';

const TourRivews = () => {
    return (
        <div className="mb-5">
            <div className="container">
                <div className="my-5">
                    <h1 className="fw-bold">Tours Reviews</h1>
                    <p>Some people what think about us</p>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100 review-card-section">
                            <img src={img1} className="card-img-top review-profile" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Saimon Sasland</h5>
                                <div className="pb-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="card-text text-justify">This is Really amaging website i ever seen in Bangladesh. By this site it is possible to me to visit many places of Bangladesh. Thanks VISIT BANGLADESH</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 review-card-section">
                            <img src={img2} className="card-img-top review-profile" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Paraday Porker</h5>
                                <div className="pb-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="card-text text-justify">This website is very good. Me and my family make very injoyfull trip in many places of Bangladesh by this site.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 review-card-section">
                            <img src={img3} className="card-img-top review-profile" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Brandil Buss</h5>
                                <div className="pb-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="card-text text-justify">I love this Site. It is really really amaging and spandanious. It make my journey more easier and enjoyable.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 review-card-section">
                            <img src={img4} className="card-img-top review-profile" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Kar Karimson</h5>
                                <div className="pb-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="card-text text-justify">Thanks VISIT BANGLADESH for making my trip easier and comfortable. I really want to thankful to you. May allah Bless this site.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourRivews;