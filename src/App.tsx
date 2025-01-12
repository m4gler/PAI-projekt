import React from "react";
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/Router";
import { PlanProvider } from "./context/PlanContext";

function App() {
  return (
    <PlanProvider>
      <RouterProvider router={router} />
    </PlanProvider>
  );
}

export default App;
