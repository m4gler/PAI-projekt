import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/Router";
import { PlanProvider } from "./context/PlanContext";
import { TrainingProvider } from "./context/WorkoutContext";
import { UserProvider } from "./context/UserContex";

function App() {
  return (
    <PlanProvider>
      <UserProvider>
        <TrainingProvider>
          <RouterProvider router={router} />
        </TrainingProvider>
      </UserProvider>
    </PlanProvider>
  );
}

export default App;
