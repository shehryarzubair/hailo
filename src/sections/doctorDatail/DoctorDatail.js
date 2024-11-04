import { BackButton } from "@/components";
import { useRouter } from "next/router";
import React from "react";

const DoctorDatail = (props) => {
  const { data } = props;
  return (
    <section className="doctorDatail">
      <div className="relative h-[15.25rem] w-full mb-4">
        <img src={data?.image} alt={data?.name} className="w-full h-full" />
        <BackButton customClass="absolute top-5 left-5">
          Back to chat
        </BackButton>
      </div>
      <div className="flex flex-col gap-4 px-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[2.188rem] font-bold text-[#1E293B]">
            {data?.name}
          </h2>
          <div className="flex items-center gap-2 bg-[#62A1C710] rounded-[0.5rem] h-[2.25rem] px-2">
            <iconify-icon
              icon="ic:round-star"
              class="text-yellow text-[1.063rem] "
            />
            <h6 className="text-[0.75rem] text-[#000000] font-normal">
              {data?.rating}
            </h6>
          </div>
        </div>
        <h6 className="text-[0.875rem] font-normal text-[#716E9090] flex items-center gap-1">
          <iconify-icon icon="hugeicons:location-01" class={"text-blue"} />
          {data?.location}
        </h6>
        <div className="flex items-center justify-center gap-3">
          <div className="h-[2.875rem] flex items-center justify-center bg-[#62A1C710] rounded-[0.5rem] w-[53%]">
            <h2 className="text-[1.25rem] font-bold text-blue px-2">
              {data?.online_fee}
              <span className="text-[#101010] text-[1rem] font-normal inline-block ml-1">
                virtual online
              </span>
            </h2>
          </div>
          <div className="h-[2.875rem] w-[45%] flex items-center justify-center bg-[#62A1C710] rounded-[0.5rem] ">
            <h2 className="text-[1.25rem] font-bold text-blue px-2">
              {data?.inperson_fee}
              <span className="text-[#101010] text-[1rem] font-normal inline-block ml-1">
                in person
              </span>
            </h2>
          </div>
        </div>
        <div>
          <h2 className="text-[1.125em] font-medium text-[#1E293B] mb-2">
            {data?.speciality}
          </h2>
          <p className="text-[#475569]">{data?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default DoctorDatail;
