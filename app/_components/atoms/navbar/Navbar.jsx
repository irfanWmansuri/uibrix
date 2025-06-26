import Link from "next/link"

export const Navbar = () => {
    const menuItems = [
        {navTitle: "Home", navLink: "/", navIcon: "HomeIcon"},
        {navTitle: "About Us", navLink: "/about-us", navIcon: "AboutIcon"},
        {navTitle: "Projects", navLink: "/projects", navIcon: "ProjectIcon"},
        {navTitle: "Contact Us", navLink: "/contact-us", navIcon: "ContactIcon"},
    ]
  return (
    <nav className="mainmenu">
        <ul className="unset flex justify-center gap-4">
            {menuItems?.map((item, index)=>(
                <li key={index}><Link href={item.navLink}>{item.navTitle}</Link></li>
            ))}
        </ul>
    </nav>
  )
}
