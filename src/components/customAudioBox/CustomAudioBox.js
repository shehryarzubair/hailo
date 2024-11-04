import { formatDuration, formatTime } from "@/utils/globalFunctions";
import { useWavesurfer } from "@wavesurfer/react";
import dayjs from "dayjs";
import { Avatar } from "primereact/avatar";
import { useEffect, useRef, useState } from "react";

const CustomAudioBox = (props) => {
  const { data } = props;
  const [duration, setDuration] = useState(false);
  const containerRef = useRef(null);

  const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    url: data?.audio,
    waveColor: "white",
    height: 32,
    progressColor: "#ffffff50",
    barWidth: 2,
    barGap: 2,
  });

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  useEffect(() => {
    if (wavesurfer && isReady) {
      setDuration(wavesurfer.getDuration());
    }
  }, [wavesurfer, isReady]);

  return (
    data && (
      <div className="customAudioBox">
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
            className={`flex flex-col w-full gap-2 ${
              data?.position == "left" ? "pt-1" : ""
            }`}
          >
            {data?.position == "left" && (
              <h3 className="text-[#1E293B] font-bold">
                {data?.name}
                <span className="text-[#747688] font-medium text-[0.75rem] ml-1">
                  {data?.time || dayjs(data?.time).format("HH:mm A")}
                </span>
              </h3>
            )}
            <div
              className={`${
                data?.position == "right"
                  ? "bg-blue text-white ml-auto"
                  : "bg-white text-[#475569]"
              }  rounded-[1.5rem] p-[0.75rem] flex flex-col gap-1 w-[75%]`}
            >
              <div className="flex items-center w-full gap-2">
                <button
                  onClick={onPlayPause}
                  className="w-[2rem] min-w-[2rem] flex items-center justify-start"
                >
                  {isPlaying ? (
                    <iconify-icon
                      icon={"ic:round-pause-circle"}
                      class="text-[2rem]"
                    />
                  ) : (
                    <iconify-icon
                      icon={"solar:play-circle-bold"}
                      class="text-[2rem]"
                    />
                  )}
                </button>
                <div ref={containerRef} className="w-full" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[0.75rem]">
                  {isPlaying
                    ? formatDuration(currentTime)
                    : formatDuration(duration)}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-[0.75rem]">
                    {formatTime(data?.time, false)}
                  </span>
                  <iconify-icon icon="bi:check-all" class="text-[1.1rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CustomAudioBox;
