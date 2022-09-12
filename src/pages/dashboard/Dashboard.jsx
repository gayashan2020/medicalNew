import React, { Component } from "react";
import {
  removeAccessToken,
  removeUser,
  getAccessToken,
  getUser,
} from "../../config/LocalStorage";
import { DemoArea, DemoColumn, DemoPie } from "../../components";
import {
  $Message,
  $FormHeader,
  $Row,
  $Col,
  $Button,
} from "../../components/antd";
// import DemoColumn from '../../components';
class Dashboard extends Component {
  render() {
    return (
      <div>
        <$Row>
          <$Col xl={8} style={{ padding: "20px" }}>
            <DemoArea />
          </$Col>
          <$Col xl={8} style={{ padding: "20px" }}>
            <DemoColumn />
          </$Col>
          <$Col xl={8} style={{ padding: "20px" }}>
            <DemoPie />
          </$Col>
        </$Row>
      </div>
    );
  }
}

export default Dashboard;
