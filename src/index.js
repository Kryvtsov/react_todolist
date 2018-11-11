import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'
import ItemStatusFilter from './components/item-status-filter';

import './index.css';


const App = () => {
    const todoData = [
        {label: "drink coffee", important: false, id:1},
        {label: "make app", important: true, id:2},
        {label: "drink tea", important: false, id:3}
    ]
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    )
}


ReactDom.render(<App/>, document.getElementById('root'))