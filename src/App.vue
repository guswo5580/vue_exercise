<template>
  <div id="app">
    <!-- 중앙 처리 장치를 app.vue 에서 store.js가 받도록 한다 -->
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <!-- v-on:이벤트 이름, 실행될 메소드 -->
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

import {eventBus} from './utils/eventBus.js';

export default {
  // data (){
  //   return{
  //     todoItems : []
  //   }
  // },
  methods : {
    
    clearAllItems : function(){
      localStorage.clear();
      //local을 비운 후 배열을 마찬가지로 지워주어 동기화를 해준다
      this.todoItems = [];
    }
  },
  //app.vue에서 todoItem에 대한 내용을 List.vue에게 내려보내준다 -- props 
    
  components : {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }

};
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
