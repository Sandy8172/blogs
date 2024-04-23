import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        <Link to={"/"} className="flex items-center gap-1 p-1 font-bold">
          HOME
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        <Link to={"/profile"} className="flex items-center gap-1 p-1 font-bold">
          PROFILE
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        <Link to={"/admin-panel"} className="flex items-center gap-1 p-1 font-bold">
          ADMIN PANEL
        </Link>
      </Typography>
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3 min-w-full absolute z-10">
      <div className=" mx-auto flex items-center justify-between text-white ">
        <Link to="/">
          <Typography className="cursor-pointer py-1.5 font-extrabold text-2xl">
            HOME
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse 
        className="rounded-xl bg-white px-4 text-gray-900 hover:text-blue-gray-700"
        open={openNav}
      >
        <div className="container mx-auto">{navList}</div>
      </Collapse >
    </MTNavbar>
  );
}

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
