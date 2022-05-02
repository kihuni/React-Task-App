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
   //For deleting items
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

  // for toggle

    const onToggle = (id) => {

      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
    <Header />
   
   {tasks.length > 0 ? 
    (<Tasks tasks ={tasks} onDelete = {deleteTask}  onToggle = {onToggle}/>) 
   : ("No task to show")}

    </div>
  );
}

export default App;
