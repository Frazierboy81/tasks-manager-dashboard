import Dashboard from "./components/Dashboard/Dashboard";
import TaskFilter from "./components/TaskFilter/TaskFilter";
// import TaskFilter from "./components/TaskFilter/TaskFilter";
// import TaskForm from "./components/TaskForm/TaskForm";
import type { Task } from "./Types/types";
import { useState } from "react";


function App() {

   const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design landing page",
      description:
        "Create the initial wireframe and mockups for the landing page.",
      status: "pending",
      priority: "high",
      dueDate: "2025-06-20",
    },
    {
      id: "2",
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
      status: "pending",
      priority: "medium",
      dueDate: "2025-06-18",
    },
    {
      id: "3",
      title: "Fix login bug",
      description:
        "Resolve the issue where users can’t log in with Google OAuth.",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-06-14",
    },
    {
      id: "4",
      title: "Write unit tests",
      description: "Add coverage for the user service module.",
      status: "in-progress",
      priority: "low",
      dueDate: "2025-06-22",
    },
    {
      id: "5",
      title: "Deploy to staging",
      description: "Push the latest build to the staging environment for QA.",
      status: "completed",
      priority: "medium",
      dueDate: "2025-06-10",
    },
  ]);

  return (
    <div className="flex flex-col items-center bg-zinc-500">
      <h1 className="text-3xl">Task Manager Dashboard</h1>
     

      <Dashboard tasks={tasks}/>
    
    </div>
  )
}

export default App;