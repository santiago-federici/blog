import { NavbarDesktop } from "./navbarDesktop"
import { NavbarMobile } from "./navbarMobile"
import './navbar.css'

export function NavBar() {
    return (
        <header>
            <NavbarDesktop />
            {/* <NavbarMobile /> */}
        </header>
    )
}