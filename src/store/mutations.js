const addOneItem = (state, todoItem) => {
    const obj = {
        completed : false,
        //item : this.newTodoItem
        item : todoItem
    }; 
    localStorage.setItem(todoItem, JSON.stringify(obj));
    //this.todoItems.push(obj);
    state.todoItems.push(obj);
    //this 의 scope의 차이가 생기기 때문에 state로 재선언을 하여 push
}

const removeOneItem = (state, payload)=>{
    localStorage.removeItem(payload.todoItem.item);

    //this.todoItems.splice(index, 1); 
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem, JSON.stringify(payload.todoItem));
}

export {addOneItem, removeOneItem, toggleOneItem}