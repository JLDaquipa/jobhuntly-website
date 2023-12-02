/* eslint-disable react/prop-types */

const CategoryLabel = ({type, caption, textColor, bgColor}) => {
  const typeStyle = type === "outline" 
  ? {border:`1px solid ${textColor}`}  
  : {backgroundColor:`${bgColor}`}

  return (
    <div 
      className="flex items-center px-[16px] py-1 text-sm font-semibold rounded-full capitalize"
      style={typeStyle}
    >
      <span style={{color:`${textColor}`}}>
        {caption}
      </span>
    </div>
  )
}

export default CategoryLabel