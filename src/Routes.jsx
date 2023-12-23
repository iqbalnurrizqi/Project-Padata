import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const CheckoutSuccessfulTablet = React.lazy(() =>
  import("pages/CheckoutSuccessfulTablet")
);
const OrderTablet = React.lazy(() => import("pages/OrderTablet"));
const RegisterTablet = React.lazy(() => import("pages/RegisterTablet"));
const LoginTablet = React.lazy(() => import("pages/LoginTablet"));
const HomeTablet = React.lazy(() => import("pages/HomeTablet"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeTablet />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/hometablet" element={<HomeTablet />} />
          <Route path="/logintablet" element={<LoginTablet />} />
          <Route path="/registertablet" element={<RegisterTablet />} />
          <Route path="/ordertablet" element={<OrderTablet />} />
          <Route path='/news' component={() => {
    window.location.href = 'https://example.com/1234';
    return null;
}}/>
          <Route
            path="/checkoutsuccessfultablet"
            element={<CheckoutSuccessfulTablet />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
