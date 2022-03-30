import React, { FC } from 'react';
// import { Navigate, Route } from 'react-router-dom';
import { RouteType } from '@Models/routes';

const PrivatRoute: FC<RouteType> = () => {
  // const { role, ...otherProps } = props;
  return <div>privat router</div>;
  // return role ? (
  //   <Route {...props} />
  // ) : (
  //   <Route path="*" element={<Navigate to={RoutesEnum.LOGIN_PAGE} />} />
  // );
};

export default PrivatRoute;
