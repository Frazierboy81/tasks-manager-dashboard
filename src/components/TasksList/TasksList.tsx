import TaskItem from "./TaskItem";
import type { Task, TaskStatus, } from "../../Types/types";
import TaskFilter from "../TaskFilter/TaskFilter";
import { useState, type ChangeEvent, } from "react";



 interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
    

}

function TaskList({ tasks, onStatusChange, onDelete}: TaskListProps) {
    const [filterTasks, setFilterTasks] = useState<Task[]>(tasks);

    const[text, setText] = useState('');

    const onFilterChange = (filters: {

        status?: TaskStatus;
        priority?: "low" | "medium" | "high";
    }) => { console.log(filters);

        const result = tasks.filter((tasks) => {

            if (filters.status && filters.priority) {
                (tasks.status === filters.status && tasks.priority === filters.priority);
            }

            if (filters.status) {
                return tasks.status === filters.status
            }

            if (!filters.status && ! filters.priority) {
                
                return true
            }
        });

        console.log(result);
        setFilterTasks(result);
        return result
    }

    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setText(e.target.value);
    }
    
    // const newTasks = {
    //         ...tasks,
    //         [name]: value
    //     }
        

    // {filterTasks.map((tasks) => (
    //         setFilterTasks(prevTasks => [...prevTasks, newTasks]);
    //     ))}
    

    return(
        <div>
            <h2>Task List:</h2>
            
        <div>
            {tasks.map((task) =>  (
                <TaskItem task={task} key={task.id} onStatusChange={onStatusChange} onDelete={onDelete}/>
            ))}
        </div>

        <TaskFilter onFilterChange={onFilterChange}
        />
            
        
            <input 
            className="outline rounded-md" 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>

            <button className="outline m-2 rounded-md p-1" onClick= {() => handleClick}>Submit</button>

    
        
        </div>
    )
}

export default TaskList;