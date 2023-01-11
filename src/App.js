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

import { useState } from "react";
// import axios from "axios";

function App(props) {
  const [newNote, setNewNote] = useState("add a note here");
  const [notes, setNotes] = useState(props.notes);
  const [showAll, setshowAll] = useState(true)

  const notesToShow = showAll 
  ? notes
  : notes.filter(n => n.important == true) 

  // useEffect(() => {
  //   axios.get('http://localhost:3001/notes')
  //   .then((response) => {
  //     console.log(response)
  //     setNotes(response.data)
  //   })
  // }, [])

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    // console.log(event.target)
    // alert('Testing ..')

    // Create a new note
    const note = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toString(),
      important: Math.random() < 0.5,
    };

    if (newNote != "") setNewNote(notes.concat(note));
    setNewNote("");
  };

  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setshowAll(!showAll)}>toggle</button>

      {
        <ul>
          {notesToShow.map((note) => (
            <li key={note.id}>
              <p>{note.content}</p>
              <p>{note.data}</p>
            </li>
          ))}
        </ul>
      }

      <form>
        <input value={newNote} onChange={handleInputChange} />
        <button onClick={handleAdd}>add</button>
      </form>
    </>
  );
}

export default App;
