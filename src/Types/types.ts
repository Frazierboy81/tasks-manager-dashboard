
export type TaskStatus = 'pending' | 'in-progress' | 'completed';


export interface Task {
    priority: string;
    id: string,
    title: string,
    description: string,
    status: string,
    completed: boolean,
}
