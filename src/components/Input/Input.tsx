import { useId, useState } from "react";
import { EyeNoVisible } from "../../assets/icons/eyeNoVisible";
import { EyeVisible } from "../../assets/icons/eyeVisible";

type Props = {
  type?: string;
  placeholder?: string;
  label?: string;
  name: string;
  error: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type = "text", name, error, value, onChange, label, placeholder }: Props) => {
  const uuid = useId();
  const [visible, setVisible] = useState(false);

  const handlePasswordVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {label && (
        <label htmlFor={uuid} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={uuid}
          name={name}
          value={value}
          onChange={onChange}
          type={type === "password" && visible ? "text" : type}
          className={`bg-white border border-[#D3D8DC] text-gray-900 focus:ring-inset focus:outline-none text-sm rounded-md block w-full px-3 py-[14px] placeholder:text-[#A1ABB5] ${
            error && "border-red-500"
          }`}
          placeholder={placeholder}
          required
        />
        <span className="text-red-500 text-sm absolute bottom-[-20px]">{error}</span>

        {type === "password" && (
          <div
            className="cursor-pointer absolute right-[16px] top-1/2 transform -translate-y-1/2"
            onClick={handlePasswordVisible}
          >
            {visible ? <EyeNoVisible /> : <EyeVisible />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
