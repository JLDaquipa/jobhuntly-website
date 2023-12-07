/* eslint-disable react/prop-types */

const Button = ({label, action, style, className}) => {
  let buttonStyle = "text-brand-primary bg-white";

  if(style === "outlined"){
    buttonStyle = "text-brand-primary bg-white border-solid border-brand-primary";
  } else if(style === "filled") {
    buttonStyle = "bg-brand-primary text-white";
  }

  return (
    <button 
      className={`px-6 py-3 font-bold cursor-pointer font-epilogue ${buttonStyle} w-max max-lg:w-full ${className}`} 
      onClick={() => action}
    >
      {label}
    </button>
  )
}

export default Button