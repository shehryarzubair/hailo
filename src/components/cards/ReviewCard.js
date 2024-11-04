import React from "react";

const ReviewCard = (props) => {
  const { data } = props;
  return (
    <div className="rviewCard">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-4">
          <img
            src={data?.image}
            alt={data?.name}
            className="w-[2.5rem] h-[2.5rem] rounded-full"
          />
          <div>
            <h2 className="text-[1.125rem] text-[#1E293B] font-medium">
              {data?.name}
            </h2>
            <h5 className="text-blue text-[0.813rem]">{data?.date}</h5>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <iconify-icon
            icon="ic:round-star"
            class="text-yellow text-[1.2rem] "
          />
          <iconify-icon
            icon="ic:round-star"
            class="text-yellow text-[1.2rem] "
          />
          <iconify-icon
            icon="ic:round-star"
            class="text-yellow text-[1.2rem] "
          />
          <iconify-icon
            icon="ic:round-star"
            class="text-yellow text-[1.2rem] "
          />
        </div>
        <p className="text-[#475569] text-[0.938rem]">{data?.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
