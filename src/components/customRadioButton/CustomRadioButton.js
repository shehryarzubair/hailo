import { RadioButton } from "primereact/radiobutton";

const CustomRadioButton = (props) => {
  const { name = "field", data, value, setValue = () => {} } = props;

  return (
    <div className="customRadioButton">
      <div
        className={`${
          value === data.value
            ? "text-white bg-blue"
            : "text-[#475569] bg-white"
        }  h-[3.5rem] flex items-center justify-center rounded-[0.75rem] relative`}
      >
        <RadioButton
          inputId={data.value}
          name={name}
          value={data.value}
          onChange={(e) => setValue(e.value)}
          checked={value === data.value}
        />
        <label
          className="w-full text-center absolute font-medium text-[1rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          htmlFor={data.value}
        >
          {data.label}
        </label>
      </div>
    </div>
  );
};

export default CustomRadioButton;
