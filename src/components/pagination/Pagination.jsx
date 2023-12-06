import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
 
const Pagination = ({dataItems, itemsPerPage, setCurrentItems}) => {
  const [active, setActive] = React.useState(1);
 
  const getItemProps = (index) =>
    ({
      className: active === index 
        ? "bg-brand-primary text-base font-semibold shadow-none " 
        : "bg-white text-neutral-80 text-base font-semibold shadow-none hover:shadow-none hover:text-neutral-100",
      onClick: () => setActive(index),
    });
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        ripple={false}
        className="flex items-center gap-2 p-0 text-neutral-80 hover:text-neutral-100 hover:bg-white active:bg-white rounded-"
        onClick={prev}
        disabled={active === 1}
      >
        
        <i className="ri-arrow-left-s-line text-2xl font-light"></i>
      </Button>
      <div className="flex items-center gap-2">
        <IconButton ripple={false} {...getItemProps(1)}>1</IconButton>
        <IconButton ripple={false} {...getItemProps(2)}>2</IconButton>
        <IconButton ripple={false} {...getItemProps(3)}>3</IconButton>
        <IconButton ripple={false} {...getItemProps(4)}>4</IconButton>
        <IconButton ripple={false} {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        ripple={false}
        className="flex items-center gap-2 p-0 text-neutral-80 hover:text-neutral-100 hover:bg-white active:bg-white"
        onClick={next}
        disabled={active === 5}
      >
        <i className="ri-arrow-right-s-line text-2xl font-light"></i>
      </Button>
    </div>
  );
}

export default Pagination