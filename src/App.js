import React, {useReducer} from "react";
import "./index.css";
/*
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
*/

const people = [
  {name: 'Jay', alive: true},
  {name: 'Kailee', alive: true},
  {name: 'John', alive: true},
  {name: 'Mia', alive: true}
]

const reducer = (people, action) => {
  if(action.type === 'chomp'){
    return people.map(person => {
      if(person.name === action.payload){
        person.alive = false;
      }
      return person
    });
  }
  if(action.type === 'revive'){
    return people.map(person => {
      if(person.name === action.payload){
        person.alive = true;
      }
      return person
    });
  }
}

function App(){
  const [state, dispatch] = useReducer(reducer, people);
  const devour = (name) => {
    dispatch({type: 'chomp', payload: name});
  }
  const spitOut = (name) => {
    dispatch({type: 'revive', payload: name});
  }
  return(
    <div className="fun">
      <table>
      {state.map((person, index) => (
        <tr key={index}>
          <td style={{width: "50%"}}>
            {person.name}
          </td>
          {person.alive?
            <td>Alive &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => devour(person.name)}>Devour</button>
          </td>:<td>Dead &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => spitOut(person.name)}>SpitOut</button>
          </td>
        }
          </tr>
      ))}
      </table>
    </div>
  );
}

export default App;