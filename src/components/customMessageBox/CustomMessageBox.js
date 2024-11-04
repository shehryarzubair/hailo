import { formatTime } from "@/utils/globalFunctions";
import { Avatar } from "primereact/avatar";
import CardWithImage from "../cards/CardWithImage";

const CustomMessageBox = (props) => {
  const { data } = props;
  return (
    data && (
      <div className="customMessageBox">
        <div
          className={`flex gap-4 ${
            data?.position == "right" ? "flex-row-reverse" : ""
          }`}
        >
          <Avatar
            label={<img src={data?.image} alt={data?.name} />}
            className="h-[2.5rem] w-[2.5rem] min-w-[2.5rem]"
            shape="circle"
          />
          <div
            className={`flex flex-col gap-2 ${
              data?.position == "left" ? "pt-1" : ""
            }`}
          >
            {data?.position == "left" && (
              <h3 className="text-[#1E293B] font-bold">
                {data?.name}
                <span className="text-[#747688] font-medium text-[0.75rem] ml-1">
                  {formatTime(data?.time)}
                </span>
              </h3>
            )}
            {data?.suggestion ? (
              <CardWithImage type={"rating"} data={data?.suggestion} />
            ) : (
              <div
                className={`${
                  data?.position == "right"
                    ? "bg-blue text-white"
                    : "bg-white text-[#475569]"
                }  rounded-[1.5rem] p-[0.75rem]`}
              >
                <p>{data?.text}</p>
              </div>
            )}
            {data?.position == "left" && data?.feedbacks?.length > 0 && (
              <div className="flex flex-col gap-2">
                {data?.feedbacks?.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="h-[3.125rem] text-blue text-left px-[0.75rem] rounded-full w-full border-[1px] bg-[#62A1C710] border-solid border-[#62A1C730]"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            )}
            {data?.position == "right" && (
              <span className="text-[#747688] font-medium text-[0.75rem] ml-1 text-right">
                {formatTime(data?.time)}
              </span>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CustomMessageBox;
