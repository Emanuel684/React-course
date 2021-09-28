import React from 'react'

export const TodoListItem = ({ i, id, todo, done, handleDelete, handleToggle }) => {
    return (
        <li
            key={id}
            className="list-group-item"
            onClick={() => {
                handleToggle(id);
            }}
        > <p
            className={`${done && 'complete'}`}
        > {i + 1}. {todo} </p>
            <button
                className="btn btn-danger"
                onClick={() => {
                    handleDelete(id);
                }}
            >
                Borrar
            </button>
        </li>
    )
}
