import { Route, Redirect } from "react-router-dom";
import { getAccessToken, getUser } from "../config/LocalStorage";
import { RoutesConstant } from "../assets/constants";

const PrivateRoutes = ({
  exact,
  key,
  path,
  component: Component,
  isLayOut,
  Layout,
  accessLevel,
}) => {
  return (
    <Route
      exact={exact}
      key={key}
      path={path}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoutes;
