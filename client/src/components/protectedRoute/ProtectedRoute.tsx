import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


// interface IProps {
//     children: ReactNode;
//     component: any;
// } possible refactor

export const ProtectedRoute = ({
    component: Component,
    ...rest
  }: any) => {
    const auth = useSelector((state: any) => state);
    return (
      <Route
        {...rest}
        render={props => {
          if (auth?.message?.isLoggedIn) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };
  

export default ProtectedRoute;