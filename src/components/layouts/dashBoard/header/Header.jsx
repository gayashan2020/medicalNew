import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  $Dropdown,
  $Menu,
  $AntIcons,
  $Avatar,
  $Image,
  $Button,
} from "../../../antd";
import {
  removeAccessToken,
} from "../../../../config/LocalStorage";
import "./Header.scss";
import avater from "../../../../assets/images/avater.png";
import { RoutesConstant } from "../../../../assets/constants";
import { Menu } from "antd";
const { HomeOutlined, FileDoneOutlined, LogoutOutlined, PhoneOutlined } =
  $AntIcons;
const Header = (props) => {
  const history = useHistory();
  const location = useLocation();
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

  let Mainmenu = [
    <HomeOutlined style={{fontSize:24}} />,
    <FileDoneOutlined />,
    <LogoutOutlined />,
    <PhoneOutlined style={{fontSize:24}} />,
  ];

  const navigation = (url) => {
    // console.log(url);
    history.push(`${url}`);
  };

  // console.log("currentAccess", currentAccess);

  const getMainPath = () => {
    let parm = location.pathname.toString();
    let parmArray = [parm];
    // console.log(parmArray);
    let index = 1;
    while (parm.indexOf("/", index) > 0) {
      parmArray.push(parm.substring(0, parm.indexOf("/", index)));
      index = parm.indexOf("/", index) + 1;
    }
    return parmArray;
  };
  return (
    <div className="top-header-h" style={{ paddingLeft: "5%" }}>
      <div className="topbar-btn-wrapper-h">
        <$Menu
          defaultSelectedKeys={[RoutesConstant.dashboard]}
          mode="horizontal"
          theme="dark"
          selectedKeys={getMainPath()}
          defaultOpenKeys={getMainPath()}
        >
          <img
            src={avater}
            style={{
              alignContent: "flex-start",
              width: "50px",
              display: "flex",
              flexDirection: "column",
            }}
          />
          {/* <$Menu.Item
            style={{
              alignContent: "flex-start",
              paddingRight: "50%",
              fontSize: 24,
            }}
            disabled={true}
          >
            Medisafe Health System
          </$Menu.Item> */}
          <h2
            style={{
              alignContent: "flex-start",
              paddingRight: "45%",
              paddingLeft: "5%",
              fontSize: 20,
              color: "GrayText",
            }}
          >
            Medisafe Health System
          </h2>
          <$Menu.Item
            key={RoutesConstant.home}
            style={{fontSize:20}}
            icon={Mainmenu[0]}
            onClick={() => history.push(RoutesConstant.home)}
          >
            Home
          </$Menu.Item>
          <$Menu.Item
            key={RoutesConstant.contactUs}
            style={{fontSize:20}}
            icon={Mainmenu[3]}
            onClick={() => history.push(RoutesConstant.contactUs)}
          >
            Contact Us
          </$Menu.Item>
        </$Menu>
        {/* <$Avatar src={displayProfileImage(currentUser)} /> */}
      </div>
    </div>
  );
};
export default Header;
