import type { Task } from "../../Types/types";

interface TaskItemProps {
    task: Task;
}


function TaskItem({task}: TaskItemProps) {
    return(

        <div className="flex flex-col gap-2 outline m-4 rounded-md">
            <h3 className="m-2">{task.title}</h3>
            <p className="m-2">{task.description}</p>
            <p className="m-2">Status:{task.status}</p>
            <p className="m-2">Due Date:</p>
        </div>
    )
}
    export default TaskItem;