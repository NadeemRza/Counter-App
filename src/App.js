import React, {useState} from "react";
import "./style.css";




//To set range for counter
function setRange() {
    let val = prompt("Enter Your Target.");
    if(val <= 0 || null){
        console.log("Counter Set to 100");
        val = 100;
    } else{
        console.log(`Counter set to ${val}`);
    }

    return val;
}

let rang = setRange();




function App() {

    const [count, setCount] = useState(0);
    //name variables as below for above line,
    // super setSuper
    // icetea setIcetea
    //set is responsible for updating variable say count
    //initial/default value of count is declared in () of useState say 0 here.Can be number,string as "name",false,object etc.


  return (
    <div className="App">
        <header>
            <h1>Counter App</h1>
        </header>
        <h2>Current Value of Count is : <br /><span>{count}</span></h2>
        {/* <button onClick={() => setCount(0)}>Reset Counter</button> */}
        {/* <button onClick={() => setCount(count + 1)}>Increase Count</button> */}
        {/* lets keep our counter value within a range */}
        {/* <button onClick={() => ((count > 10) ? "": setCount(count + 1))}>Increase Count</button> */}
        {/* to restrict till 10 use as below */}
        {/* <button onClick={() => ((count >= 10) ? "": setCount(count + 1))}>Increase Count</button> */}
        {/* <button onClick={() => setCount(count - 1)}>Decrease Count</button> */}
        {/* <button onClick={() =>((count <= 0) ? "":setCount(count - 1))}>Decrease Count</button> */}

        
        {/* lets write for range values as given by user */}
        {/* <button onClick={() => ((count >= rang) ? "": setCount(count + 1))}>Increase Count</button>
        <button onClick={() =>((count <= 0) ? "":setCount(count - 1))}>Decrease Count</button> */}
        {/* Modified with symbols */}
        <button onClick={() => ((count >= rang) ? "": setCount(count + 1))}> + </button>
        <button onClick={() =>((count <= 0) ? "":setCount(count - 1))}> - </button>
        <button onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  );
};

export default App;


//never mutate/change state directly.