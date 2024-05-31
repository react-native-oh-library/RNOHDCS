
let nextTodoId = 0;
//添加代办
export const addTodo =(text) =>{
    return{
        type:'ADD_TODO',
        id:nextTodoId++,
        text:text
    }
};
//设置代办状态
export const setVisibility =(filter) =>{
    return{
        type:'SET_VISIBILITY',
        filter
    }
};
export const toggleTodo = (id) =>{
    return{
        type:'TOGGLE_TODO',
        id
    }
};

//延时添加
export const addTodoasync=(text) =>{
    return dispatch => {
      setTimeout(() => {
        dispatch(addTodo(text))
      }, 3000)
    }
  }


  //延时添加
export const toggleTodoAsync=(id) =>{
    return dispatch => {id
      setTimeout(() => {
        dispatch(toggleTodo(id))
      }, 3000)
    }
  }