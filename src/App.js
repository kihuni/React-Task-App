import Header from "./components/Header";
import { useState, useEffect } from 'react'
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";


function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getData = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getData()
  }, [])

  // fetching data
  const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')

      const data = await res.json()

      return data
    }

   // adding items

   const onAdd = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    }) 

    const data = await res.json()
    setTasks([...tasks, data])
   }
  
  
    //For deleting items
    const deleteTask = async (id) => {

      await fetch (`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      })

      setTasks(tasks.filter((task) => task.id !== id))
    }

  // for toggle

    const onToggle = (id) => {

      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }


  return (
    <div className="container">
    <Header  onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>

   {showAddTask && <AddTask  onAdd = {onAdd}/>}

   {tasks.length > 0 ? 
    (<Tasks tasks ={tasks} onDelete = {deleteTask}  onToggle = {onToggle}/>) 
   : ("No task to show")}

    </div>
  );
}

export default App;
