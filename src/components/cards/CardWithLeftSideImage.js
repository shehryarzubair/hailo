import React from "react";

const CardWithLeftSideImage = (props) => {
  const { data } = props;
  return (
    <div className="cardWithLeftSideImage">
      <div className="bg-white rounded-[1rem] px-3 py-2 flex gap-4">
        <img
          src={data.image}
          alt="doctor"
          className="w-[5.738rem] h-[5.75rem] rounded-[0.75rem] object-cover"
        />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-[#1E293B] line-clamp-1">
            {data?.name}
          </h2>
          <h2 className="text-[0.813rem] text-blue">{data?.date_time}</h2>
          <h2 className="text-[0.813rem] text-[#475569]">{data.speciality}</h2>
          <h2 className="text-[0.813rem] text-gray flex items-center gap-1">
            <iconify-icon icon="fluent:location-16-filled" />
            {data.location}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardWithLeftSideImage;
