import { ReviewCard } from "@/components";
import React, { Fragment } from "react";

const Reviews = (props) => {
  const { customClass, data = [] } = props;
  return (
    <section className="reviews">
      <div className={`${customClass} flex flex-col gap-3 px-5`}>
        <h3 className="text-[#1E293B] font-medium">Reviews</h3>
        <div className="flex flex-col gap-5 mt-1">
          {data?.map((item, index) => {
            return (
              <Fragment key={index}>
                <ReviewCard data={item} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
