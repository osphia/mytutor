import React from 'react';
import StudyPlanViewer from './pages/StudyPlanViewer';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>AP Study Plan Generator</h1>
      <StudyPlanViewer />
    </div>
  );
};

export default App;
