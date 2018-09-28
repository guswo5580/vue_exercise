<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <!-- addtodoItem이란 event를 통해 넘어온 newTodoItem을 가지고 addOneItem이 실행 -->
    <todo-list v-bind:propsdata="todoItems" 
          v-on:removeItem="removeOneItem"
          v-on:toggleItem="toggleOneItem"
    ></todo-list>
    <!-- v-on:이벤트 이름, 실행될 메소드 -->
    <todo-footer v-on:clearItems="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data : function(){
    return{
      todoItems : []
    }
  },
  methods : {
    //Input에서 실행되는 정보를 event화 시켜서 app.vue에서 뿌려주는 방향으로 간다
    addOneItem : function(todoItem){
      //넘어온 newTodoItem에 대한 인자를 todoItem으로 받아 새롭게 매핑해준다
      var obj = {
                    completed : false,
                    //item : this.newTodoItem
                    item : todoItem
                }; 
      
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
      //localStorage에서의 목록과 실제 웹상의 목록을 동기화시켜준다
    },

    removeOneItem : function(todoItem, index){
     localStorage.removeItem(todoItem.item);
     //todoItem으로 지우면 객체가 모두 지워져버려 이상이 생긴다
     //명확하게 todoItem.item으로 지워주자 -- todoItem.item == key로 설정했기 때문
     this.todoItems.splice(index, 1); 
    },

    toggleOneItem : function(todoItem, index){
      //app.vue로 올렸음에도 todoItem을 바로 건드리는 것은 좋지 않다
      //todoItems 배열을 건드리는 것이 좋다
     //todoItem.completed = !todoItem.completed;
     this.todoItems[index].completed = !this.todoItems[index].completed;

     localStorage.removeItem(todoItem.item);
     localStorage.setItem(todoItem, JSON.stringify(todoItem));
    },
    clearAllItems : function(){
      localStorage.clear();
      //local을 비운 후 배열을 마찬가지로 지워주어 동기화를 해준다
      this.todoItems = [];
    }
  },
  //app.vue에서 todoItem에 대한 내용을 List.vue에게 내려보내준다 -- props 
  created : function(){
        if(localStorage.length > 0){
            for(var i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    //넣을 때는 JSON stringify , 빼낼 때는 JSON parse
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    
                    //this.todoItems.push(localStorage.key(i)); input이 obj로 바뀌었기에 새롭게 선언해주어야 한다
               
                }
            }
        }
    },
  components : {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }

}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: groove;
    width : 200px;
  }
  button {
    border-style : groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.3);
  }
</style>
