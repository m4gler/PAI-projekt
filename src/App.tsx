import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/Router";
import { PlanProvider } from "./context/PlanContext";
import { TrainingProvider } from "./context/WorkoutContext";

function App() {
  return (
    <PlanProvider>
      <TrainingProvider>
        <RouterProvider router={router} />
      </TrainingProvider>
    </PlanProvider>
  );
}

export default App;
