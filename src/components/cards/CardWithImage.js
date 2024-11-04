import React from "react";
import "iconify-icon";
import dayjs from "dayjs";
import Link from "next/link";

const CardWithImage = (props) => {
  const { customClass, type = "image", data } = props;
  return (
    <>
      {type === "image" && (
        <Link href={`/doctor-detail`}>
          <div className="cardWithImage">
            <div className={`${customClass} rounded-[1.125rem] bg-white p-2`}>
              <div className="relative h-[8.188rem] rounded-[1.125rem] overflow-hidden">
                <div className="absolute top-2 left-2 w-[2.813rem] h-[2.813rem] bg-blue-light rounded-[0.625rem] flex flex-col items-center ">
                  <h2 className="text-[1.125rem] font-blod text-blue mt-[0.1rem]">
                    {dayjs(data.date).format("DD")}
                  </h2>
                  <h2 className="text-[0.625rem] font-medium text-blue uppercase">
                    {dayjs(data.date).format("MMM")}
                  </h2>
                </div>
                <img
                  src={data?.image}
                  alt={data?.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start gap-1 p-2">
                <h2 className="text-[1.125rem] font-medium text-[#000000] mb-1 line-clamp-1 uppercase">
                  {data.name}
                </h2>
                <h2 className="text-[0.813] font-normal text-blue">
                  {dayjs(data.date).format("dddd, MMM DD")} •
                  {dayjs(data.date).format("hh:mm A")}
                </h2>
                <h2 className="text-[1.125rem] font-normal text-[#475569]">
                  {data?.speciality}
                </h2>
                <h2 className="text-[1.125rem] font-normal text-[#716E9090] flex items-center gap-1">
                  <iconify-icon icon="fluent:location-16-filled" />
                  {data?.location}
                </h2>
              </div>
            </div>
          </div>
        </Link>
      )}

      {type === "price" && (
        <div className="cardWithImage">
          <div
            className={`${customClass} rounded-[1.125rem] bg-white p-4 drop-shadow-sm`}
          >
            <div className="flex items-center justify-between gap-2 mb-5">
              <h2 className="text-[1.125rem] font-normal text-[#1E293B]">
                {data?.appointmentType === "Online"
                  ? "Online Virtual Meeting"
                  : "In-Person Meeting"}
              </h2>
              <div className="flex items-center gap-1 bg-[#f7f7fe] rounded-[0.5rem] px-[0.75rem] py-[0.375rem]">
                <h2 className="text-[1.25rem] font-bold text-blue">
                  {data?.online_fee}
                </h2>
              </div>
            </div>
            <div className="relative h-[11.25rem] rounded-[1.125rem] overflow-hidden mb-3">
              <img
                src={data?.image}
                alt={data?.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <div>
                <h2 className="text-[1.5rem] font-bold text-[#000000] mb-1 line-clamp-1 uppercase">
                  {data?.name}
                </h2>
                <h2 className="text-[1.125rem] font-medium text-[#1E293B] mb-1">
                  {data?.speciality}
                </h2>
                <h2 className="flex items-center gap-2 text-gray">
                  <img src="/images/location.svg" className="w-4 h-4" />
                  {data?.location}
                </h2>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <h2 className="flex items-center gap-2 text-[#1E293B]">
                  <iconify-icon icon="uil:calender" class={"text-blue"} />
                  {dayjs(data?.date).format("MMMM DD, YYYY,")} &nbsp;
                  {dayjs(data?.date).format("dddd")}
                </h2>
                <h2 className="flex items-center gap-2 text-[#1E293B]">
                  <iconify-icon icon="tabler:clock" class={"text-blue"} />
                  {dayjs(data?.date).format("h:m A")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {type === "rating" && (
        <div className="cardWithImage">
          <div
            className={`${customClass} h-[24.188rem] rounded-[1.125rem] bg-white overflow-hidden `}
          >
            <div className="relative h-[11.25rem]">
              <img
                src={data?.image}
                alt={data?.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative flex flex-col items-start gap-1 p-5">
              <div className="flex items-center justify-between w-full mb-1">
                <h2 className="text-[1.125rem] font-medium text-[#000000] line-clamp-1 uppercase">
                  {data?.name}
                </h2>
                <div className="flex items-center gap-1">
                  <iconify-icon
                    icon="ic:round-star"
                    class="text-yellow text-[1.063rem] "
                  />
                  <h6 className="text-[0.75rem] text-[#000000] font-bold">
                    {data?.rating}
                  </h6>
                </div>
              </div>

              <h6 className="text-[0.875rem] font-normal text-[#716E9090] flex items-center gap-1">
                <iconify-icon icon="fluent:location-16-filled" />
                {data?.location}
              </h6>
              <p className="font-normal text-left text-[#475569] line-clamp-4">
                {data?.description}
              </p>
              <Link
                href={data?.link || "/doctor-detail"}
                className="mt-1 font-medium text-blue hover:underline"
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardWithImage;
