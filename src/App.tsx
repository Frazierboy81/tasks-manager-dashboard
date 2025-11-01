import Dashboard from "./components/Dashboard/Dashboard";


function App() {

  return (
    <div className="flex flex-col items-center bg-zinc-500 h-screen">
      <h1 className="text-3xl">Task Manager Dashboard</h1>

      <Dashboard/>
    </div>
  )
}

export default App;