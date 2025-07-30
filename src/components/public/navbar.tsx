import React from 'react'
import { FloatingNav } from '../ui/floating-navbar';

export default function Navbar() {
      const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    },
  ]; 


    return <FloatingNav navItems={navItems}/>
}
