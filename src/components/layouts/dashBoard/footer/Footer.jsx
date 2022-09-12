import React from "react";
import { useHistory } from "react-router-dom";
import {
  $Dropdown,
  $Menu,
  $AntIcons,
  $Avatar,
  $Image,
  $Button,
  $Col,
  $Row,
} from "../../../antd";
import {
  removeAccessToken,
} from "../../../../config/LocalStorage";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import "./Footer.scss";
import avater from "../../../../assets/images/avater.png";
const Footer = (props) => {
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      removeAccessToken();
      history.push("/login");
    } catch (error) {}
  };

  const handleProfile = async () => {
    // try {
    //   history.push("/edit_profile");
    // } catch (error) {}
  };


  const { UserOutlined, DownOutlined } = $AntIcons;

  function handleButtonClick(e) {}

  function handleMenuClick(e) {}


  const menu = (
    <$Menu onClick={handleMenuClick} className="top-bar-dropdown">
      <$Menu.Item key="1" icon={<UserOutlined />} onClick={handleLogOut}>
        Log Out
      </$Menu.Item>
    </$Menu>
  );
  return (
    <footer class="footer-distributed">
      <div class="footer-right">
      <a href="#">
          <FacebookOutlined />
        </a>
        <a href="#">
          <YoutubeOutlined />
        </a>
        {/* <a href="#">
          <TwitterOutlined />
        </a> */}
      </div>

      <div class="footer-left">
        <p class="footer-links">
          <a class="link-1" href="#">
            071 7644 169
          </a>
        </p>

        <p>mediSafe.research@gmail.com</p>
      </div>
      <div class="footer-center">
        <p>Copy Rights @2022</p>
      </div>
    </footer>
  );
};
export default Footer;
