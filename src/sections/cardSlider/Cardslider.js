import React from "react";
import Slider from "react-slick";
import { CardWithImage, SectionHeader } from "@/components";

const CardSlider = (props) => {
  const { customClass, data = [], link, title } = props;
  var settings = {
    className: "slider variable-width",
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    data?.length > 0 && (
      <section className={"cardSlider"}>
        <div className={`${customClass} flex flex-col gap-5`}>
          <SectionHeader
            customClass={"pr-6"}
            text={title}
            link={link || "#"}
            linkText={"See all"}
          />
          <div className="overflow-hidden">
            <Slider {...settings}>
              {data?.map((item, index) => {
                return (
                  <div className="mr-5">
                    <CardWithImage
                      data={item}
                      customClass={"min-h-[15.938rem] w-[14.813rem]"}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    )
  );
};

export default CardSlider;
