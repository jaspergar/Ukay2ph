import React,{ useState }  from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SidebarLink = styled(Link)`
   display: flex;
   color: grey;
   justify-content: space-between;
   align-items:center;
   padding:20px;
   list-style: none;
   height: 60px;
   text-decoration:none;
   font-size:18px;
   font-weight:600;

   &:hover{
        ${'' /* background:#252831;
        border-left:4px solid #632ce4; */}
        border-left:4px solid #f20c5c;
        background: #FAFAFA;
        cursor:pointer;
   }
 `

 const SidebarLabel = styled.span`
   margin-left: 16px;
 `
 
 const DropdownLink = styled(Link)`
   ${'' /* background:#414757; */}
   height: 60px;
   padding-left 3rem;
   display:flex;
   align-items:center;
   font-weight:500;
   text-decoration:none;
   color: #111;
   font-size:1rem;

   &:hover{
       border-left:4px solid #f20c5c;
       background: #FAFAFA;
       cursor: pointer;
   }
 `

 const SideBarSubMenu = ({item}) => {
 
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            <SidebarLink onClick={item.subNav && showSubnav}>
                   <div>
                       {item.icon}
                       <SidebarLabel>{item.title}</SidebarLabel>
                   </div>
                   <div>
                       {item.subNav && subnav ? item.iconDropdownOpened : item.subNav ? item.iconDropdownClosed : null}
                   </div>
            </SidebarLink>
            {subnav && item.subNav.map((item,index) => {
                return(
                    <DropdownLink to={item.path} key={index}>
                       
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}
export default SideBarSubMenu