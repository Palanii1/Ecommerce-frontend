import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
                <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to='/product' onClick={toggle}>Product</SidebarLink>
                <SidebarLink to='/services' onClick={toggle}>Services</SidebarLink>
                <SidebarLink to='/contact' onClick={toggle}>Contact Us</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin' onClick={toggle}>Sign In/Up</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>

  );
};

export default Sidebar;
