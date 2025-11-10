import type React from "react";
import TaskItem from "../TasksList/TaskItem";


function SearchBar() {

        const taskSearch = (e: React.FC<HTMLInputElement>) => {


        }

    return (
        <div className="flex flex-row">
            <p className="mt-4">Search:</p>
            <label htmlFor="Search">
                <input className="flex justify-center outline w-96 rounded-md m-4" type="text" placeholder="search tasks"/>
            </label>
        </div>
        
    )
}

    export default SearchBar;