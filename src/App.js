import React, {useReducer} from "react";
import "./index.css";

const iState = {name: "Jack", wish: 'Eat'};

const reducer = (state, action) => {
  switch(action.type){
    case 'CHANGE_NAME': 
      return{
        ...state,
        name: action.payload[0],
        wish: action.payload[1]
      }
    default: 
      return state
  }
}

export default function App() {
  const [data1, dispatch1] = useReducer(reducer, iState);
  const [data2, dispatch2] = useReducer(reducer, iState);
  const getName = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(res2=>{
    dispatch1({type: "CHANGE_NAME", payload: [res2[0].name, "Sleep"]})
  })
}
  return (
    <div>
      <h1>My name is {data1.name}</h1>
      <h2>I wish to {data1.wish}</h2>
      <button onClick={() => getName()}>Change Name</button>
      <h2>I am {data2.name} and I wish to {data2.wish}</h2>
      <button onClick={() => dispatch2({type: "CHANGE_NAME", payload: ["Jill", "Code"]})}>Change Name</button>
    </div>
  );
}