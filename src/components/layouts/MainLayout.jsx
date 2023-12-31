import { Outlet,ScrollRestoration } from "react-router-dom";

import Nav from "../Nav";
import Footer from "../../sections/Footer";

const MainLayout = () => {
  return (
    <div className="relative">
      <header className="lg:absolute md:z-10 w-full padding-x">
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='padding-x bg-[#202430] py-10 lg:py-16'>
        <Footer />
      </footer>
      <ScrollRestoration />
    </div>
  )
}

export default MainLayout