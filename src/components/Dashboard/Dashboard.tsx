import TaskList from "../TasksList/TasksList";
import type { Task } from "../../Types/types";

interface DashboardProps {
    tasks: Task[]
}


function Dashboard({tasks}: DashboardProps) {

    return (
        <div>

    <h3>Dashboard</h3>
        <div>
            <div>Stats</div>
            <div>
                <div>Completed Tasks: 10</div>
                <div>Pending Tasks: {tasks.length}</div>
                <div>In Progress Tasks: 8</div>
            </div>
        </div>
        <div>
            <h3>Recently Created Tasks</h3>
            <div>
                <TaskList tasks={tasks}/>
            
            </div> 
      </div>
 </div>
 
    )
}

export default Dashboard;