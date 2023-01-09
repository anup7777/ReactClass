// import { useState } from "react";
// import Feedback from "./components/Feedback";

// function App({name, age}) {
//   const[counter, setCounter] = useState(0)

//   // setTimeout(() => setCounter(counter+1), 1000)

//   console.log(`Rendering ${counter} ....`)

//   const handlePlus = () => {
//     setCounter(counter + 1)
//   }

//   return (
//     <div>
//     <h2>Hello {name}, You're {age} years old.</h2>
//     <h2>{counter}</h2>
//     <button onClick = {handlePlus} >Plus</button>

//     <Feedback />
//     </div>
//   );
// }

// export default App;

// // import { useState } from 'react';
// import "./App.css";

// // import Feedback_app  from './components/Feedback_app';
// import History_app from "./components/History";

// function App({ name, age }) {
//   // const [counter,setCounter]= useState(0)

//   // const handleCounter = () =>{
//   //   setCounter(counter+1)
//   // }





import { useState , useEffect} from "react";
import axios from "axios";

function App() {

  const [newNote, setNewNote] = useState('add a note here')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/notes')
    .then((response) => {
      console.log(response)
      setNotes(response.data)
    })
  }, [])

  
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const handleAdd = (event) => {
    event.preventDefault()
    alert('Testing ..')
  }

  return (
    <>
      <h2>Notes</h2>
      {/* <ul>
        {notes.map(note=>
        <li key={note.id}>
        {note.content}
        </li>)}
      </ul> */}

      <form>
        <input value={newNote} onChange={handleInputChange}/>
        <button onClick={handleAdd}>
          add
        </button>
      </form>
    </>
  );
}

export default App;
