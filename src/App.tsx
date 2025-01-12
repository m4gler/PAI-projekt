
import './index.css';
import { MainPage } from './pages/MainPage';
import { PaymentSystem } from './pages/PaymentSystem';
import { PlanProvider } from './context/PlanContext';

function App() {
  return (
    <PlanProvider>
      <MainPage />
    </PlanProvider>
  );
}

export default App;