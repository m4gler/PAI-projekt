import { createBrowserRouter } from "react-router-dom";
import { Links } from "../constants/links";
import { MainPage } from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";
import { PaymentSystem } from "../pages/PaymentSystem";

export const router = createBrowserRouter([
  {
    path: Links.HOMEPAGE,
    element: <MainPage />,
  },
  {
    path: Links.REGISTER,
    element: <RegisterPage />,
  },
  {
  path: Links.PAYMENT,
  element: <PaymentSystem />
  }
]);
