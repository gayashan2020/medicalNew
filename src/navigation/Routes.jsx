import {
  Login,
  Dashboard,
  HealthStatus,
  LungDisease,
  RiskLevel,
  SpreadRate,
  Home,
  Disease1,
  Disease2,
  Disease3,
  Disease4,
  Disease5,
  Disease6,
  Disease7,
  Disease8,
  Disease9,
  Disease10,
  Disease11,
} from "../pages";
import { Redirect, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { DashBoardLayOut } from "../components/layouts/dashBoard";
import { RoutesConstant, StringConstant } from "../assets/constants";
import React, { useContext, useState, useEffect } from "react";

export default () => {
  return [
    <PrivateRoutes
      exact
      key="dashBoard"
      path={RoutesConstant.dashboard}
      component={Dashboard}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="healthStatus"
      path={RoutesConstant.healthStatus}
      component={HealthStatus}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="riskLevel"
      path={RoutesConstant.riskLevel}
      component={RiskLevel}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="lungDisease"
      path={RoutesConstant.lungDisease}
      component={LungDisease}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="spreadRate"
      path={RoutesConstant.spreadRate}
      component={SpreadRate}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="home"
      path={RoutesConstant.home}
      component={Home}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease1"
      path={RoutesConstant.disease1}
      component={Disease1}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease2"
      path={RoutesConstant.disease2}
      component={Disease2}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease3"
      path={RoutesConstant.disease3}
      component={Disease3}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease4"
      path={RoutesConstant.disease4}
      component={Disease4}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease5"
      path={RoutesConstant.disease5}
      component={Disease5}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease6"
      path={RoutesConstant.disease6}
      component={Disease6}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease7"
      path={RoutesConstant.disease7}
      component={Disease7}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease8"
      path={RoutesConstant.disease8}
      component={Disease8}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease9"
      path={RoutesConstant.disease9}
      component={Disease9}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease10"
      path={RoutesConstant.disease10}
      component={Disease10}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <PrivateRoutes
      exact
      key="disease11"
      path={RoutesConstant.disease11}
      component={Disease11}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
    <Route exact key="login" path={RoutesConstant.login} component={Login} />,
    <Route
      key="root"
      path="/"
      component={Home}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
  ];
};
