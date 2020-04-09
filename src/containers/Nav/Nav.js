import React from 'react';
import { Menu } from 'antd';
import './Nav.less';

const { SubMenu } = Menu;

const Nav = () => {

  return (
    <Menu className="nav" mode="horizontal">
      <Menu.Item>Menu</Menu.Item>
      <SubMenu title="SubMenu">
        <Menu.Item>SubMenuItem</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default Nav;