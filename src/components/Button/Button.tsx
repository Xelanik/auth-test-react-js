type Props = {
  type: "default" | "outlined";
  children: React.ReactNode;
  onClick?: () => unknown;
};

const Button = ({ type, children, onClick }: Props) => {
  const buttonTypes: { [key: string]: string } = {
    default:
      "w-full text-white bg-[#316FEA] text-base leading-[21px] py-[13.5px] hover:bg-blue-800 rounded-lg focus:outline-none",
    outlined:
      "w-full text-gray-900 bg-white border-[1.2px] border-[#D3D8DC] focus:outline-none hover:bg-gray-100 text-base leading-[21px] py-[13.5px] font-medium rounded-lg ",
  };

  return (
    <button type="button" className={`${buttonTypes[type]}`} onClick={onClick}>
      <div className="flex justify-center gap-3">{children}</div>
    </button>
  );
};

export default Button;
