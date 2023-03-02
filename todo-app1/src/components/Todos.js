import React from "react";


const Todos = ({ todos, markComplete }) => {
    // const { todos, dispatch } = useContext(TodoContext);

    return (
        <>
            <div class="flex items-center flex-col mt-8 gap-1">
                {todos.map(todo => (
                    <div key={todo.id} className="flex gap-2 border-4 border-sky-500 text-black bg-white ">
                        {todo.todoString}
                        <span className="grow" onClick={() =>
                            markComplete(todo.id)
                        }
                        >
                            <input type="checkbox" class="h-4 w-4 text-black-400 rounded-sm border-black-300 focus:ring-black-500 grow-0" />
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todos;