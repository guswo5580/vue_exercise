const storage = {
    fetch() {
        const arr = [];

        if(localStorage.length > 0){
            for(let i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    //넣을 때는 JSON stringify , 빼낼 때는 JSON parse
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    //this.todoItems.push(localStorage.key(i));
                    //scope이 달라져 this로 접근이 안되기 때문에 arr로 새로 담아 return 해준다
                }
            }
        }
        return arr;

        const vm = this;
        eventBus.$on('delete:all', function(){
          vm.clearAllItems();
        });
    }
};

const state = {
    todoItems : storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addOneItem (state, todoItem)  {
        const obj = {
            completed : false,
            //item : this.newTodoItem
            item : todoItem
        }; 
        localStorage.setItem(todoItem, JSON.stringify(obj));
        //this.todoItems.push(obj);
        state.todoItems.push(obj);
        //this 의 scope의 차이가 생기기 때문에 state로 재선언을 하여 push
    },
    removeOneItem (state, payload) {
        localStorage.removeItem(payload.todoItem.item);
    
        //this.todoItems.splice(index, 1); 
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem (state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem, JSON.stringify(payload.todoItem));
    }

};

export default {
    state,
    getters,
    mutations
}