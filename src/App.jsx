import { useState } from 'react'
import './index.css'

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);

  // State for the add task form
  const [newTask, setNewTask] = useState({
      taskName: '',
      dueDate: '',
      priority: 'low',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
      setNewTask({
          ...newTask,
          [e.target.name]: e.target.value,
      });
  };

  // Function to handle form submission (add task)
  const handleAddTask = (e) => {
      e.preventDefault();
      
      // Check if the taskName is not empty before adding
      if (newTask.taskName.trim() !== '') {
          setTasks([...tasks, newTask]);
          setNewTask({
              taskName: '',
              dueDate: '',
              priority: 'low',
          });
      }
  };

  return (
      <div className="container">
          <h1>Task Management App</h1>

          {/* Add Task Form */}
          <div className="task-form">
              <h2>Add Task</h2>
              <form onSubmit={handleAddTask}>
                  <label htmlFor="taskName">Task Name:</label>
                  <input
                      type="text"
                      id="taskName"
                      name="taskName"
                      value={newTask.taskName}
                      onChange={handleInputChange}
                      required
                  />

                  <label htmlFor="dueDate">Due Date:</label>
                  <input
                      type="date"
                      id="dueDate"
                      name="dueDate"
                      value={newTask.dueDate}
                      onChange={handleInputChange}
                      required
                  />

                  <label htmlFor="priority">Priority:</label>
                  <select
                      id="priority"
                      name="priority"
                      value={newTask.priority}
                      onChange={handleInputChange}
                      required
                  >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                  </select>

                  <button type="submit">Add Task</button>
              </form>
          </div>

          {/* Display Tasks */}
          <div className="task-list">
              <h2>Task List</h2>
              <ul>
                  {tasks.map((task, index) => (
                      <li key={index}>
                          <strong>{task.taskName}</strong> - Due Date: {task.dueDate}, Priority: {task.priority}
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
}

export default App;