import { useContext, useState } from "react";
import TodoDispatchContext from "../Context/TodoDispatchContext";
function AddTodo(){
 const [inputText , setinputText] = useState('') ;
 const {dispatch} = useContext(TodoDispatchContext) ;
     return(
        <>
        <div>
            <input 
            type="text" 
            placeholder="Write here"
            value={inputText}
            onChange={e => setinputText(e.target.value)}/>
            <button onClick={ () => {
                  dispatch({type:'add_todo' , payload:{textTodo:inputText}});
                  setinputText('');
                } }>Add</button>
        </div>
        </>
     )
}
export default AddTodo ;