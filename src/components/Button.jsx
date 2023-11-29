/* eslint-disable react/prop-types */

const Button = ({label, action, style}) => {
  let buttonStyle = "text-primary-blue bg-white";

  if(style === "outlined"){
    buttonStyle = "text-primary-blue bg-white border-solid border-primary-blue";
  } else if(style === "filled") {
    buttonStyle = "bg-primary-blue text-white";
  }

  return (
    <button 
      className={`px-6 py-3 font-bold cursor-pointer font-epilogue ${buttonStyle}`} 
      onClick={() => action}
    >
      {label}
    </button>
  )
}

export default Button