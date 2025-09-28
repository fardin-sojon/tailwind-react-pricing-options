import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigatonData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Profile",
    path: "/profile",
  },
];

const Navber = () => {

    const [open, setOpen] = useState(false)

    const links = navigatonData.map((route) => (
          <Link key={route.id} route={route}></Link>))


  return (
    <nav className="flex justify-between mx-10">
      <span className="flex cursor-pointer" onClick={()=>setOpen(!open)}>
        { open ? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu> }
        
        <ul className={`md:hidden absolute duration-1000
          ${open ? "top-8" : "-top-40"} 
          bg-blue-200 text-black rounded-md`}>
            {links}
        </ul>
        
        <h3 className="ml-4">My Navber</h3>
      </span>
      <ul className="md:flex hidden">
        {
            links
        }
      </ul>

      <button>Sign In</button>

      {/* <ul className='flex'>
                {
                    navigatonData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

      {/* <ul className='flex'>
                <li className='mr-10'><a href="/home">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
    </nav>
  );
};

export default Navber;
