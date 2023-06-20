import {useState} from "react";
import './App.css';

function App() {
  const [birth,setBirth] = useState('');
  const [age,setAge] = useState('');
  function result(event){
    event.preventDefault();
    const today = new Date();
    const birthdateObj = new Date(birth);
    const timeDiff = today.getTime() - birthdateObj.getTime();
    const ageDate = new Date(timeDiff);

    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  }
  return (
    <div className="App">
      <div className="sub-app">
        <h2>Age Calculator</h2>
        <h4>Enter your date of birth</h4>
        <input type="date" onChange={(event) =>setBirth(event.target.value)}placeholder="Choose Your Date of Birth" />
        <br></br>
        <button onClick={result}>Calculate Age</button>
        <p>You are {age} years old</p>
      </div>
    </div>
  );
}

export default App;
