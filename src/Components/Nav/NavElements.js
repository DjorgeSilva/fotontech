import styled from "styled-components";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const NavMenu = styled.nav`
    width: 100%;
    height: fit-content;
    background-color: ${props => props.theme.primary_color};;
    z-index:100000000;
    position: relative;
`;

export const NavWrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0 30px;
    padding-top: 35px;

    @media (min-width: 950px){
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media (min-width: 1300px){
            width:1300px;
            margin:0 auto;
    }
    `

export const NavIconWrap = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    position: relative;

    @media (min-width: 950px){
         width:fit-content;
        margin:0 20px;
    }
`;

export const IconMenuLateral = styled(RiMenuFill)`
    cursor: pointer;
    color: ${props => props.theme.secundary_color};
    font-size: 2rem;
    margin-top: 8px;
    
    @media (min-width: 950px){
         display: none;
    }
`;

export const IconCloseLateral = styled(AiOutlineClose)`
    cursor: pointer;
    color: ${props => props.theme.secundary_color};
    font-size: 2rem;
    margin-top: 8px;
    
    @media (min-width: 950px){
         display: none;
    }
`;

export const NavLogoWrap = styled.div`
    width: 80%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    overflow: hidden;
    
    img{
        width: 150px;
    }

    @media (min-width: 950px){
        width: 20%;
        overflow: hidden;
        img{
            width: 200px;
        }
    }
`
export const SideBar = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.primary_color};
    position: absolute;
    z-index:1000;
    left:0;
    top: ${({ isOpen }) => (isOpen ? '90px' : '-2000px')};
    transition: 0s all;
    z-index: 100;

    @media (min-width: 950px){
        display: none;
    }
`

export const NavSideBar = styled.nav`
    width: 100%;
    height: fit-content;
    
`;

export const SideBarUl = styled.ul`
    width: 100%;
    height: fit-content;
    padding: 40px 25px;
    list-style: none;

`

export const SideBarLi = styled.li`
    width: 100%;
`

export const LinkSideBar = styled(Link)`
    display: block;
    width: 100%;
    height: 60px;
    font-size: 1.4rem;
    color: ${props => props.theme.secundary_color};
    font-weight: lighter;
    text-decoration: none;
    outline: none;

    &:hover{
        color:  ${props => props.theme.secundary_color};
        outline: none;
        text-decoration:none;
    }
`
export const NavMenuDesktop = styled.div`
    width: 80%;
    height: 90px;
    display: flex;
    justify-content:center;
    align-items: center;
    @media (max-width: 950px){
        display: none;
    }

`;


export const MenuUl = styled.ul`
    width: fit-content;
    height: fit-content;
    list-style: none;
`

export const MenuLi = styled.li`
    width: 100%;
    margin-top: 10px;
`

export const LinkMenu = styled(Link)`
display: inline;
width: 100%;
height: 60px;
font-size: 1.3rem;
color: #fff;;
font-weight: 600;
text-decoration: none;
margin-right: 40px;
outline: none;
text-transform: uppercase;
&:hover{
    color:  ${props => props.theme.ternary_color};
    border-bottom: 4px solid #F5C32E;
    outline: none;
    text-decoration:none;
    padding-bottom: 6px;
}
`