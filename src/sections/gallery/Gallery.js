import React from "react";
import Slider from "react-slick";

const Gallery = (props) => {
  const { customClass, data } = props;
  var settings = {
    className: "slider variable-width",
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    spaceBetween: 10,
  };

  return (
    <section className={"gallery"}>
      <div className={`${customClass} flex flex-col gap-3 px-5 w-full`}>
        <h3 className="text-[#1E293B] font-medium">Gallery</h3>
        <div className="overflow-hidden">
          <Slider {...settings}>
            {data?.map((item, index) => {
              return (
                <div key={index} className="pr-3">
                  <img
                    src={item}
                    alt={`gallery-img-${index + 1}`}
                    className="w-full h-full rounded-[0.5rem]"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
