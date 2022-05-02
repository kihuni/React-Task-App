import Header from "./components/Header";
import { useState } from 'react'
import Tasks from "./components/Tasks"

function App() {

  const [tasks, setTasks] = useState(
    [
           {
             id: 1,
             text: 'Meeting at school',
             day: '2022-01-10T17:30:31.098Z',
             reminder: true
           },
           {
             id: 2,
             text: 'Writing javascript',
             day: '2022-01-10T18:39:34.091Z',
             reminder: false
           },
           {
             id: 3,
             text: 'Learn Nodejs',
             day: '2022-01-10T19:20:14.298Z',
             reminder: true
           }
   ]
       
    )
  return (
    <div className="container">
    <Header />
    <Tasks tasks ={tasks} />
    </div>
  );
}

export default App;
