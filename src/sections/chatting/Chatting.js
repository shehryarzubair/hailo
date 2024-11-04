import { CustomAudioBox, CustomMessageBox } from "@/components";
import { Fragment } from "react";

const Chatting = (props) => {
  const { data = [] } = props;
  return (
    <section className="chatting">
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <Fragment key={index}>
            {item.type == "audio" ? (
              <CustomAudioBox data={item} />
            ) : (
              <CustomMessageBox data={item} />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Chatting;
