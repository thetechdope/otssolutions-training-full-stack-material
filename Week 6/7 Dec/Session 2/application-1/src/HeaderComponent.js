import React from "react";
import { Menu } from "semantic-ui-react";

function HeaderComponent() {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item as="a" header>
        Home
      </Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
    </Menu>
  );
}

export default HeaderComponent;
