import React, { useEffect, useState } from 'react';

const TodoForm = () => {

    const getLocalStorageItems = () => {
        const listItems = localStorage.getItem('lists');

        if (listItems) {
            return JSON.parse(localStorage.getItem('lists'));
        } else {
            return [];
        }
    };


    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalStorageItems());
    const [toggleUpdateButton, setToggleUpdateButton] = useState(true);
    const [updateItems, setUpdateItems] = useState(null);


    // add items
    const addItem = () => {
        if (!inputData) {

        } else if (inputData && !toggleUpdateButton) {
            setItems(
                items.map((e) => {
                    if (e.id === updateItems) {
                        return { ...e, name: inputData };
                    }
                    return e;
                })
            );
            setToggleUpdateButton(true);
            setInputData("");
            setUpdateItems(null);
        } else {
            const allInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            };
            setItems([...items, allInputData]);
            setInputData("");
        }
    };


    // delete item
    const deleteItem = (index) => {
        const updateItems = items.filter((e) => {
            return e.id !== index;
        });
        setItems(updateItems);
    };


    // update item
    const updateItem = (id) => {
        let newItems = items.find((e) => {
            return e.id === id;
        });
        setToggleUpdateButton(false);
        setInputData(newItems.name);
        setUpdateItems(id);
    }


    // delete all items
    const removeAll = () => {
        setItems([]);
    }


    // add item in local storage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
                <div className="relative py-3 sm:mx-auto sm:max-w-xl">
                    <div className="to-light-blue-500 absolute inset-0 rotate-6 skew-y-0 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:rotate-12 sm:rounded-3xl"></div>
                    <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
                        <h1 className="mb-8 text-center text-4xl font-bold">To-Do List</h1>
                        <div className="mb-4 flex">
                            <input
                                type="text"
                                id="todo"
                                name="todo"
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                                placeholder="Add a new to-do item"
                                className="w-full rounded-lg border-gray-200 py-2 px-3 focus:border-blue-400 focus:outline-none"
                            />

                            {toggleUpdateButton ? (
                                <button
                                    onClick={addItem}
                                    className="ml-2 flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16 10a1 1 0 0 1-1 1H11v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            ) : (
                                <button
                                    onClick={addItem}
                                    className="ml-2 flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16 10a1 1 0 0 1-1 1H11v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            )}
                        </div>

                        <div >

                            {items.map((e) => {
                                return (
                                    <div className='flex items-center'>
                                        <input id="todo-0" name="todo-0" type="checkbox" class="h-4 w-4 text-light-blue-600 focus:ring-light-blue-500 border-gray-300 rounded" />
                                        <label for="todo-0" class="ml-3 text-sm font-medium text-gray-700">{e.name}</label>
                                        <div class="flex items-center ml-auto">
                                            <button
                                                onClick={() => updateItem(e.id)}
                                                type="button" class="text-light-blue-600 hover:text-light-blue-900 focus:outline-none focus:underline" title='update Todo'>Edit</button>
                                            <button
                                                title='Delete Todo'
                                                onClick={() => deleteItem(e.id)}
                                                type="button" class="text-red-600 hover:text-red-900 ml-3 focus:outline-none focus:underline">Delete</button>
                                        </div>
                                    </div>
                                )
                            })}
                            {items[0] ? (
                                <button
                                    title='Delete Todo'
                                    onClick={removeAll}
                                    type="button" class="text-red-600 hover:text-red-900 ml-3 focus:outline-none focus:underline pl-28 mt-4">Delete ALL</button>
                            ) : (
                                <p className='empty'>To-Do List-Empty...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoForm;