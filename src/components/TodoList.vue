<template>
    <div>
        <ul>
            <li class = "shadow" v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
                <!-- v-for에서 list item의 순서를 알 수 있는 방법 -->
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" 
                        v-on:click="toggleComplete(todoItem, index)"></i>
                
                <span v-bind:class = "{textCompleted : todoItem.completed}">
                    <!-- v-bind class의 힘 -- todoItem의 completed요소가 true일 대만 textCompleted의 class가 실행됨 -->
                    {{ todoItem.item }}
                <!-- obj에서 item의 요소만 꺼내서 표현하는 것으로 변환 -->
                </span>
                <span class = "removeBtn" v-on:click="removeTodo(todoItem)">
                <!-- todoItem 과 index를 받아서 넘긴다 -->
                <i class="fas fa-trash-alt"></i>
                </span> 
            </li>
            <!-- 화면에 바로 todoItem에 담긴 내용을 랜더링한다 -->
        </ul>
    </div>
</template>

<script>
export default {
    data : function(){
        return {
            todoItems : []
        }
    },
    //view lifecycle을 이용, instance가 생성되자 마자 실행되는 부분
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
    methods : {
        removeTodo : function(todoItem, index){
            //todoItem과 index를 넘겨 받아 어떤 list가 되었는지 확인한다
            localStorage.removeItem(todoItem);
            //localStorage에서 어떤 것을 지울지 선언하는 과정
            //화면에 반응하도록 다시 선언해주는 과정이 필요
            this.todoItems.splice(index, 1);
            //js에서 이용하는 method를 확인할 필요!!
        },
        toggleComplete : function(todoItem, index){
            todoItem.completed = !todoItem.completed;
            //click이 일어났을 때 todoItem의 completed의 값을 반대로 바꾼다.

            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem, JSON.stringify(todoItem));
            //update를 해주는 api가 없기때문에 localStorage에서 값을 삭제후 새로 값을 가져오는 것으로 한다
        }
    }
    
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top : 0;
        text-align: left;
    }
    li{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin : 0.5rem 0;
        padding : 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right : 5px;
    }
    .checkBtnCompleted {
        color : #b3adad;
    }
    .textCompleted {
        text-decoration: line-through;
        color : #b3adad;
    }
    .removeBtn{
        margin-left:auto;
        color : #de4343;
    }
</style>
