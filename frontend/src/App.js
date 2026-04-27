import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useTodos } from './hooks/useTodos';
import { Layout } from './components/layout/Layout';
import { TodoStats } from './components/todos/TodoStats';
import { TodoForm } from './components/todos/TodoForm';
import { TodoList } from './components/todos/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const {
        todos,
        loading,
        stats,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
    } = useTodos();

    return (
        <>
            <Toaster position="top-right" />
            <Layout title="Todo App" subtitle="Manage your tasks efficiently">
                <TodoStats stats={stats} />
                <TodoForm onSubmit={addTodo} loading={loading} />
                <TodoList
                    todos={todos}
                    loading={loading}
                    onUpdate={updateTodo}
                    onDelete={deleteTodo}
                    onToggle={toggleComplete}
                />
            </Layout>
        </>
    );
}

export default App;