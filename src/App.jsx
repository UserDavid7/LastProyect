import './App.css'
import { TaskProvider } from "./reducer"
import Task from "./components/pure/Task"
import TaskForm from "./components/pure/FormTask"

export default function App() {
  return (
    <TaskProvider>
      <div className='container'>
        <div className="menuContainer">
          <nav>
            <div className="logo">
              <a href="#"> <h1>LOGO</h1> </a>
              
            </div>
            <ul>
              <li><a href="#"> Menu</a></li>
              <li><a href="#"> Courses</a></li>
              <li><a href="#"> Programing </a></li>
              <li><a href="#"> about me</a></li>
            </ul>
          </nav>
        </div>

        <div className="body">
          <div className='left-side'>
           <TaskForm> </TaskForm>
          </div>
          <div className='rigth-side'> 
          <Task></Task>
          </div>
        </div>
        
        
      </div>
    </TaskProvider>

  )
}
