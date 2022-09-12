import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./PageHeader.scss";

const $PageHeader = () => {
  const location = useLocation();

  //breadcrumbs will be taken from url and each section will be mapped
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);


    return (
      <div className="page-header">
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/dashboard">Home</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item>
                {routeTo.replace("_", " ")}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <Link to={`${routeTo}`}>
                  {routeTo.replace("_", " ")}
                </Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default $PageHeader;
