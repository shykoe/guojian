import React from 'react';
import { Route } from 'react-router-dom';
import UserInfo from './UserCenter/UserInfo';

export default [
    <Route exact path="/UserInfo" component={UserInfo} />,
];