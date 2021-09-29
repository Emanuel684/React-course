import React from 'react';
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({ handleAddTodo }) => {

    const [{ todo }, handleInputChange, reset] = useForm({
        todo: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        if (todo.trim().length >= 1) {

            const newTodo = {
                id: new Date().getTime(),
                todo: todo,
                done: false
            };

            handleAddTodo(newTodo);

            reset();
        }
    }

    return (
        <>
            <h4> Agregar TODO </h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    placeholder="Aprender ..."
                    className="form-control"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={todo}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-3 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
