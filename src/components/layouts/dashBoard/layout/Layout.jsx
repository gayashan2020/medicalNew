import React, { useState } from "react";
import "./Layout.scss";
// import { LayoutHeader } from "/layouts/DashBoard/Header";
import { LayoutHeader } from "../header";
import { LayoutFooter } from "../footer";
// import { DashBoard } from "components/STComponents";
import { $Button, $Layout, $Menu, $AntIcons, $Row } from "../../../antd";
import { useHistory, useLocation } from "react-router";
import { RoutesConstant } from "../../../../assets/constants";
import {
  removeAccessToken,
} from "../../../../config/LocalStorage";
const {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  LogoutOutlined,
  BookOutlined,
  ShoppingCartOutlined,
  ToolOutlined,
  UserOutlined,
  FileDoneOutlined,
  IdcardOutlined,
  PaperClipOutlined,
} = $AntIcons;

const Layout = (props) => {
  // const { userRole, getRole } = props;

  const [isCollapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const toggleCollapse = () => {
    isCollapsed ? setCollapsed(false) : setCollapsed(true);
  };

  let Mainmenu = [
    <HomeOutlined />,
    <FileDoneOutlined />,
    <PaperClipOutlined />,
    <UserOutlined />,
    <IdcardOutlined />,
    <LogoutOutlined />,
  ];

  const navigation = (url) => {
    // console.log(url);
    history.push(`${url}`);
  };

  // console.log("currentAccess", currentAccess);

  const handleLogOut = async () => {
    try {
      removeAccessToken();
      history.push("/login");
    } catch (error) {}
  };

  const getMainPath = () => {
    let parm = location.pathname.toString();
    let parmArray = [parm];
    console.log(parmArray);
    let index = 1;
    while (parm.indexOf("/", index) > 0) {
      parmArray.push(parm.substring(0, parm.indexOf("/", index)));
      index = parm.indexOf("/", index) + 1;
    }
    return parmArray;
  };
  return (
    <>
      <LayoutHeader />
      <$Layout>
        <div className="content-container">{props.children}</div>
      </$Layout>
      <LayoutFooter />
    </>
  );
};

export default Layout;
