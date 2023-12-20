/* eslint-disable react/prop-types */

const Button = ({label, action, style, className}) => {
  let buttonStyle = "text-brand-primary bg-white";

  if(style === "outlined"){
    buttonStyle = "text-brand-primary bg-white border-solid border-brand-primary hover:bg-[#cccccc]";
  } else if(style === "filled") {
    buttonStyle = "bg-brand-primary text-white hover:bg-[#3f3ac8]";
  }

  return (
    <button 
      className={`px-6 py-3 font-bold cursor-pointer font-epilogue ${buttonStyle} w-full lg:w-max ${className} rounded-sm transition-all ease-in-out`} 
      onClick={() => action()}
    >
      {label}
    </button>
  )
}

export default Button