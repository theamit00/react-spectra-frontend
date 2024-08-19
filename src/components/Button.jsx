const Button = ({ children, className="",isOrange, ...props }) => {
  return (
    <button
      className={`rounded-full border-[1.5px] px-[16px] py-[12px] font-spaceGrotesk font-medium text-[14px] transition-all ease-linear duration-200 flex justify-center items-center ${
        isOrange ? "bg-orange-100 text-white border-orange-100 box-shadow-orange-200 hover:bg-orange-200 hover:border-orange-200 hover:box-shadow-orange-300" : 
                  "text-black border-black sm-box-shadow hover:bg-[rgb(248,246,242)]"
      } ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
