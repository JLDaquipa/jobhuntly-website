/* eslint-disable react/prop-types */

const CategoryLabel = ({type, caption, textColor, bgColor}) => {
  return (
    <div className={`px-[6px] py-[10px] border rounded-full capitalize text-[${textColor}] ${type === "outline" ? `border-[${textColor}]`:`bg-[${bgColor}]`}`}>
      {caption}
    </div>
  )
}

export default CategoryLabel