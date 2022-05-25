import React, { useState, useEffect, createContext, useRef, useReducer, useMemo } from 'react';
const moods="happy";
export const MoodContext = createContext(moods);



const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

const ACTIONS=
    {
      INCREMENT:'TestIncrement',
      DECREMENT:'TestDecrement'
    }
const testReducer = (testState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return{testCount: testState.testCount+1}
      case ACTIONS.DECREMENT:
        return{testCount: testState.testCount-1}
default:
  return testState
  }
};


function StatusPage({headingname})
{
  
  //useState Code
  const[year]=useState(2022);
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("Banana");
  const[checked,setChecked]=useState(false);
  const[data,setData]=useState(null);
const [todos, setTodos] = useState([{ 
  text: "Learn Hooks",
  model: "Mustang"
}]);

//useEffect Code

  useEffect(() => 
  {
    
    //alert(`${year} ${checked.toString()}`)
    fetch(`https://api.github.com/users/eveporcello`)
    .then(res=> res.json())
    .then(setData)
    .catch(console.error);
  },[]);
  
   const updateList = () => {
     setTodos(previousState => {
       return { ...previousState, text: "Lern Plotly", model:"Xyz" }
     });
   }

  //useContext Code
   //const [user, setUser] = useState("Jesse Hall");
  //const user = useContext(UserContext); 

  //useRef Code
  const [name, setName] = useState('');
  //const [rendercount, setrendercount] = useState(0);
  const rendercount=useRef(0);
  useEffect(()=>
  {
    //setrendercount(rendercount+1); 
    rendercount.current=rendercount.current+1; 

  })
  const prevName=useRef('');
  useEffect(()=>
  {
    prevName.current=name
  },[name])
  

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value="Focus Input"
  };

    //useReducer  Code
    
    const[testState,testDispatch]=useReducer(testReducer,{testCount:0})

    function testIncrement () {
      testDispatch({type:ACTIONS.INCREMENT})
    };
    function testDecrement () {
      testDispatch({type: ACTIONS.DECREMENT})
    };

    

  //useMemo Code

  const [counter, setCounter] = useState(0);
  const calculation = useMemo(() => expensiveCalculation(counter), [counter]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  

  
if(data)
{
  return (
    <div>
     
      <h1>{headingname}</h1>
      <p>{year}</p>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add
      </button> 
      <button onClick={() => setCount(count - 1)}>
        Remove
      </button>
      <p>Fruis: {fruit}</p>
      <button onClick={() => setFruit("Apple")}>
      Apple
      </button>
      <button onClick={() => setFruit("Banana")}>
      Banana
      </button>

      <button onClick={() => setFruit("Mengo")}>
      Mengo
      </button>
      <p>
      Status: {checked ? "Checked":"Not Checked"}
      </p>
<input type="checkbox" value={checked} onChange={()=> setChecked(checked=>!checked)}></input>

<p>Todoes: {todos.text} {todos.model}</p>
   <button 
       onClick={updateList}>
        Click me
      </button> 
      

<h1>UseEffectExample</h1>
<p>Company Name: {data.company}</p>
<img src={data.avatar_url} width={100}></img>

<h1>UseRefExample</h1>

<input value={name} onChange={e=>setName(e.target.value)}></input>
<p>Name:{name}</p>
<p>Total Character:{rendercount.current}</p>
<p>OldName:{prevName.current}</p>

<input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>

   <h1>
   useReducerExample
   </h1>
   
<button onClick={testIncrement}>+</button>
<p>Total: {testState.testCount}</p>
<button onClick={testDecrement}>-</button>

      <h1>useMemoExample</h1>
      <button onClick={decrement}> - </button>
   {count}
        <button onClick={increment}>+</button>

        <h2>Expensive Calculation</h2>
        {calculation}
      
<h1>UseContextExample</h1>
{/* <UserContext.Provider value="testDhara">
      <Home></Home>
    </UserContext.Provider>  */}

    </div>
  );
}

return null
}

export default StatusPage;