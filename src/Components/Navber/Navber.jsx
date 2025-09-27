import React from "react";
import Link from "./Link";

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
  return (
    <nav>
      <ul className="flex">
        {
          navigatonData.map((route) => (<Link key={route.id} route={route}></Link>))
        }
      </ul>

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
