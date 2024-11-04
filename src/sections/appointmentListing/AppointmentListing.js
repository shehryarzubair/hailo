import { CardWithLeftSideImage, SectionHeader } from "@/components";
import React, { Fragment } from "react";

const AppointmentListing = (props) => {
  const { data } = props;
  return (
    <section className="appointmentListing">
      <SectionHeader
        customClass={"pr-2 pb-4"}
        text={"My Appointments"}
        link={"#"}
        size="small"
        linkText={"See all"}
      />
      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <Fragment key={index}>
            <CardWithLeftSideImage data={item} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default AppointmentListing;
