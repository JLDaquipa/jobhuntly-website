/* eslint-disable react/prop-types */
import { Card, List, ListItem, ListItemPrefix, IconButton } from "@material-tailwind/react";
import Button from "./Button";

const MenuBar = ({close}) => {
  return (
    <Card className="w-full shadow-none p-0">
      <IconButton variant="text" color="blue-gray" onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
        </IconButton>
      <List>
        <ListItem className="font-clashDisplay font-medium" ripple={false}>
          <ListItemPrefix>
            <i className="ri-home-4-line text-2xl"></i>
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem className="font-clashDisplay font-medium" ripple={false}>
          <ListItemPrefix>
            <i className="ri-briefcase-2-line text-2xl"></i>
          </ListItemPrefix>
          Find Jobs
        </ListItem>
        <ListItem className="font-clashDisplay font-medium" ripple={false}>
          <ListItemPrefix>
            <i className="ri-building-2-line text-2xl"></i>
          </ListItemPrefix>
          Browse Companies
        </ListItem>
      </List>
      <Button label="Login" action={()=>{}}/>
      <Button label="Sign Up" action={()=>{}} style="filled"/>
    </Card>
  )
}

export default MenuBar