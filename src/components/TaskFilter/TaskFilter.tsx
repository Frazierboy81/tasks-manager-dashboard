import { useState } from "react"
import type { TaskStatus } from "../../Types/types";


export interface TaskFilterProps {

    onFilterChange: (filters: {
        status?: TaskStatus;
        priority?: "low" | "medium" | "high";
    }) => void;
}


function TaskFilter({onFilterChange}: TaskFilterProps) {
    const [filter, setFilter] = useState({
        status: undefined,
        priority: undefined,
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFilter(prev =>({...prev, [name]: value}));

        

        const newFilter = {
            ...filter,
            [name]: value
        }
        
    }

    return(

        <div className="flex m-4">
            <h3 className="m-2">Status</h3>
            <select className="bg-zinc-400 rounded-md" name="status" onChange={handleChange}>
                <option value="">All</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <br></br>
            <h3 className="m-2">Priority</h3>
            <select className="bg-zinc-400 rounded-md" name="priority"  id="">
                <option value="">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
    )
}

export default TaskFilter;