import { createBrowserRouter } from "react-router-dom";
import { Links } from "../constants/links";
import { MainPage } from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";
import { PaymentSystem } from "../pages/PaymentSystem";
import { HomeAfterLog } from "../pages/HomeAfterLog";
import { AddWorkout } from "../pages/AddWorkout";
import { ShowTraining } from "../pages/ShowTrainings";
import ManageTrainingPage from "../pages/ManageTrainingPage";
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
  },
  {
    path: Links.HOMEAFTER,
    element: <HomeAfterLog />
  },
  {
    path: Links.ADDWORKOUT,
    element: <AddWorkout />
  },
  
  {
    path: Links.SHOWWORKOUT,
    element: <ShowTraining />
  },
  {
    path: Links.MANAGETRAININGS,
    element: <ManageTrainingPage />
  },
]);
