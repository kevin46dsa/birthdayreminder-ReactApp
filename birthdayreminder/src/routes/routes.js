import React from "react";
import { Routes as Switch, Route as Routing } from "react-router-dom";

import Login from "../Components/login/login";
import Signup from "../Components/Signup";
import Homepage from "../Components/homepage/homepage";

import Layout from "../Components/layout/layout";



const Routesr = () => {
  return (
    <>
      <Layout>
        <Switch>
          {/* Auth Routes */}
          <Routing exact path="/login" element={<Login />} />
          <Routing exact path="/signup" element={<Signup />} />

          {/* Private: Only logged in user can access */}
          <Routing exact path="/home" element={<Homepage />} />
        </Switch>
      </Layout>
    </>
  );
};
export default Routesr;
