import react, { useEffect } from 'react';
import './App.css';
import JobsList from './components/home/JobsList';


function App() {
  return (
    <div className="main-container">
      <h1>All Jobs</h1>
      <JobsList />
    </div>
  );
}


export default App;
