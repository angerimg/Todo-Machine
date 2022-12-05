import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import {TodoContext} from '../TodoContext'
import {Modal} from '../modal';
import {TodoForm} from '../TodoForm'

function AppUI() {
 const {
  error,
  loading,
  searchedTodos,
  completeTodos,
  deleteTodos, 
  openModal,
  setOpenModal
} = React.useContext(TodoContext)
    return (   
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
     
  
           <TodoList>
           {loading && <p>espera</p>}
           {error && <p>estamos cargando</p>}
           {(!loading && !searchedTodos.length) && <p>crea tu primer todo</p>}
   
             {searchedTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}
             onComplete={() => {completeTodos(todo.text)}} onDelete = { () =>{deleteTodos(todo.text)}}
             />))}
           </TodoList> 
          {!!openModal && ( 
          <Modal>
           <TodoForm />
          </Modal>)} 
        <CreateTodoButton 
        setOpenModal = {setOpenModal}
        />
      </React.Fragment>);
}

export {AppUI}