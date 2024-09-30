import React from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import MedicineList from './components/MedicineList/MedicineList';
import './App.css';
import AlertComorbidity from './components/AlertComorbidity/AlertComorbidity';
import AlertInteractions from './components/AlertInteractions/AlertInteractions';

function App() {
  return (
    <div className="App">
        <div>
          <Searchbar medicineName=''></Searchbar>
        </div>
        <div id='alerts'>
          <MedicineList></MedicineList>
          <AlertComorbidity></AlertComorbidity>
          <AlertInteractions></AlertInteractions>
        </div>
    </div>
  );
}

export default App;
