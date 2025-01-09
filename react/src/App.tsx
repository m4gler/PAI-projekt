import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import './App.css';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <div className="h-screen w-screen">
      <MainPage />
    </div>
  );
}

export default App;