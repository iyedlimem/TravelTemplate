import React from 'react'
import { Link } from 'react-router-dom'

function PackageOne ()  {
    return (
        <div>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">
                                Tour 1
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a href="/">Home</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-white active"
                                        aria-current="page"
                                    >
                                        Tour 1
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    {/* Left Side - Overview */}
                    <div className="col-md-8 wow fadeInUp">
                        <h2 className='display-6 mb-5 text-black '>11 Days Safari Trip Tanzania Zanzibar</h2>
                        <p className='mb-4'>
                            Experience Tanzania’s mesmerising beauty in 11 days on our Tanzania Safari & Zanzibar travel adventure! From discovering the wildlife on an African safari to basking on the tropical beaches of Zanzibar : Get the most out of your time in Tanzania.
                        </p>
                        <p className='mb-4'>
                            This private luxury safari offers you the opportunity to experience Tanzania at your own pace. Travel to the famous <a href="/">Serengeti National Park</a> and <a href="/">Ngorongoro Crater</a> with your experienced English-speaking guide, and enjoy the comfort and safety of your own private safari vehicle. Let majestic elephants and tropical birds in the Tarangire National Park inspire you, and end a perfect Tanzania itinerary by soaking up the sun on the white sandy beaches of Zanzibar.
                        </p>
                        {/* Images Carousel */}
                        <div id="safariCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://picsum.photos/800/400" className="d-block w-100" alt="Serengeti" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://picsum.photos/800/400" className="d-block w-100" alt="Ngorongoro Crater" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://picsum.photos/800/400" className="d-block w-100" alt="Zanzibar Beach" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#safariCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#safariCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        {/* Accordion for Daily Program */}
                        <div className="accordion" id="dayProgramAccordion">
                            {[
                                "DAY 1 : lorem ipsum kineti",
                                "DAY 2 : lorem ipsum kineti",
                                "DAY 3 : lorem ipsum kineti",
                                "DAY 4 : lorem ipsum kineti",
                                "DAY 5 : lorem ipsum kineti",
                            ].map((question, index) => (
                                <div className="accordion-item" key={index}>
                                    <h1 className="accordion-header"   id={`heading${index}`}>
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse${index}`}
                                            style={{ color : "#446400" }}
                                        >
                                            {question}
                                        </button>
                                    </h1>
                                    <div
                                        id={`collapse${index}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#dayProgramAccordion"
                                    >
                                        <div className="accordion-body">
                                            Content for "{question}" goes here.
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Video */}
                        <div className="mt-4">
                            <iframe
                                width="100%"
                                height="500"
                                src="https://www.youtube.com/embed/TTXsXMBkDEM"
                                title="Discover Tanzania"
                                
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="text-center mt-5 mb-5 animated slideInDown">
  <Link
    to="/contact"
    className="btn btn-primary rounded-pill py-2 px-4"
   
  >
    Book now
  </Link>
</div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="col-md-4 wow fadeInUp" >
                        <div className=" p-3  shadow-sm " style={{ backgroundImage: 'url("https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-203cb0f/tanzania-specialist.com/wp-content/themes/tanzania-specialist/public/images/fill-masked-widget.svg")',
    backgroundRepeat: 'no-repeat',
    
    
    // or 'contain' depending on your layout
}}>
                            <h5>11 Days Safari Trip Tanzania Zanzibar</h5>
                            <p><strong>Low Season (Apr 1 – May 19)</strong></p>
                            <ul>
                                <li>2 persons: $2,682</li>
                                <li>4 persons: $2,226</li>
                                <li>6+ persons: $2,100</li>
                            </ul>
                            <p><strong>Mid Season (Rest of the year)</strong></p>
                            <ul>
                                <li>2 persons: $2,939</li>
                                <li>4 persons: $2,385</li>
                                <li>6+ persons: $2,227</li>
                            </ul>
                            <p><strong>High Season (Jul – Aug + Sep + 20 Dec – 10 Jan)</strong></p>
                            <ul>
                                <li>2 persons: $3,287</li>
                                <li>4 persons: $2,641</li>
                                <li>6+ persons: $2,453</li>
                            </ul>
                            <hr />
                            <h6>Included</h6>
                            <ul>
                                <li>All accommodations</li>
                                <li>11 days</li>
                                <li>24/7 service</li>
                                <li>English speaking guide</li>
                                <li>Full board during your safari</li>
                                <li>Game drives</li>
                                <li>Private 4×4 Safari Jeep</li>
                                <li>Park fees</li>
                                <li>Pickup and airport transfer</li>
                                <li>Zanzibar meals (depending on package)</li>
                                <li>Reservation costs</li>
                            </ul>
                            <h6>Excluded</h6>
                            <ul>
                                <li>International flights and visas</li>
                                <li>Travel insurance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageOne