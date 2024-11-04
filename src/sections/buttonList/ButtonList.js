import { CustomRadioButton } from "@/components";
import React, { Fragment } from "react";

const ButtonList = (props) => {
  const { data, label, name, setValue = () => {}, value } = props;
  return (
    data?.length > 0 && (
      <section className="buttonList">
        <h3 className="text-[#1E293B] font-semibold my-3">{label}</h3>
        <div className="grid w-full grid-cols-3 gap-2">
          {data?.map((item, index) => {
            return (
              <Fragment key={index}>
                <CustomRadioButton
                  data={item}
                  name={name}
                  setValue={setValue}
                  value={value}
                />
              </Fragment>
            );
          })}
        </div>
      </section>
    )
  );
};

export default ButtonList;
