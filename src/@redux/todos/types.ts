export type Dispatch = (payload: any) => void;
// fix Payload type


export const actionTypes = {
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO",
}

export interface Todo {
    id: string;
    isCompleted: boolean,
    title: string,
    description: string
}

export type TodoList = Todo[]