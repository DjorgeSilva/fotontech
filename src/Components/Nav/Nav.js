import React from 'react'
import { Link } from "react-router-dom"
import {
    NavMenu,
    NavWrapper,
    NavIconWrap,
    NavLogoWrap,
    IconMenuLateral,
    IconCloseLateral,
    SideBar,
    NavSideBar,
    SideBarUl,
    SideBarLi,
    LinkSideBar,
    NavMenuDesktop,
    MenuUl,
    MenuLi,
    LinkMenu
} from "./NavElements.js"
import LogoIMG from "../../img/logo.png";

export const Nav = ({ isOpen, toggleCloseIcon }) => {

    return (
        <>
            <NavMenu id="menu">
                <NavWrapper>

                    <NavLogoWrap>
                        <Link to="/">
                            <img src={LogoIMG} alt="Logomarca Constru Service" />
                        </Link>
                    </NavLogoWrap>

                    <NavIconWrap>
                        {isOpen ?
                            <IconCloseLateral onClick={toggleCloseIcon} /> :
                            <IconMenuLateral onClick={toggleCloseIcon} />
                        }
                    </NavIconWrap>

                    <SideBar isOpen={isOpen}>
                        <NavSideBar>
                            <SideBarUl>

                                <SideBarLi>
                                    <LinkSideBar to="/work-here" onClick={toggleCloseIcon}>Work Here</LinkSideBar>
                                </SideBarLi>

                                <SideBarLi>
                                    <LinkSideBar to="/contact" onClick={toggleCloseIcon}>Contact us</LinkSideBar>
                                </SideBarLi>

                            </SideBarUl>
                        </NavSideBar>
                    </SideBar>


                    <NavMenuDesktop id="menu">
                        <MenuUl>
                            <MenuLi>
                                <LinkMenu to="/" onClick={toggleCloseIcon}>Work Here</LinkMenu>
                                <LinkMenu to="/about" onClick={toggleCloseIcon}>Contact Us</LinkMenu>
                            </MenuLi>
                        </MenuUl>
                    </NavMenuDesktop>
                </NavWrapper>
            </NavMenu>
        </>
    )
}
