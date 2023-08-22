import { useContext } from 'react';
import Todo from '../Todo/Todo'
import TodoContext from '../Context/TodoContext';
function TodoList(){
 
  function onFinished(isFinished , todo){
    const updatedList = list.map(t =>{
        if(t.id == todo.id){
            todo.finished = isFinished ;
        }
        return t ;
    });
    setList(updatedList) ;
   }

   function onDelete(todo){
    const updatedList = list.filter((t) => t.id != todo.id)
    setList(updatedList) ;   
   }
  
   function onEdit(todo , textTodo){
    const updatedList = list.map((t) => {
        if(t.id == todo.id){
            todo.todoData = textTodo ;
        }
        return t ;
    })
    setList(updatedList) ;  
   }


    const {list , setList} = useContext(TodoContext) ;
    
   return(
    <>
       <div>
        { list.length > 0 && 
        list.map((todo) => <Todo 
                           key={todo.id} 
                           id={todo.id} 
                           isFinished={todo.finished} 
                           todoData={todo.todoData}
                           changeFinished={(isFinished) => onFinished(todo , isFinished)}
                           onDelete={() => {onDelete(todo)}}
                        
                           onEdit={(textTodo) => onEdit(todo , textTodo) }
                            />
        )}
       </div>
    </>
   )
}
export default TodoList ;