import React from "react";
import Slider from "react-slick";


export const TesCarousel = () => {
    const testimonials = [
        {
            name: "John Doe",
            title: "CEO at Example",
            text: "This product changed my life. It's absolutely amazing!",
            image: "https://i.pravatar.cc/100?img=1",
        },
        {
            name: "Jane Smith",
            title: "CTO at Startup",
            text: "Fantastic service and support. Highly recommended!",
            image: "https://i.pravatar.cc/100?img=2",
        },
        {
            name: "Sam Lee",
            title: "Freelancer",
            text: "Slick, modern, and super easy to use recommend!",
            image: "https://i.pravatar.cc/100?img=3",
        },
    ];


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="container py-5 ">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="text-center px-3 ">
              <div className="card border-2 shadow p-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <p className="fst-italic text-muted">"{t.text}"</p>
                <h5 className="mt-3">{t.name}</h5>
                <p className="text-secondary mb-0">{t.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
}
