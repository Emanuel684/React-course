import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos = [], handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((element, i) => (
                    <TodoListItem key={element .id } i={i} id={element.id} todo={element.todo} done={element.done} handleDelete={handleDelete} handleToggle={handleToggle} />
                ))
            }
        </ul>
    )
}
