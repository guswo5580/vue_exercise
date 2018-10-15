<template>
    <div>
        <!-- ul 태그를 transition 태그로 변환시켜 준다 -->
        <transition-group name="list" tag ="ul">
            <li class = "shadow" v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item">
                                        <!-- this.$store.state.todoItems에서 mapgetters를 통해 todoItems를 가져오고 this.todoItems로 실행하는 경우 -->
                <!-- v-for에서 list item의 순서를 알 수 있는 방법 -->
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" 
                        v-on:click="toggleComplete({todoItem, index})"></i>
                
                <span v-bind:class = "{textCompleted : todoItem.completed}">
                    <!-- v-bind class의 힘 -- todoItem의 completed요소가 true일 대만 textCompleted의 class가 실행됨 -->

                    {{ todoItem.item }}
                <!-- obj에서 item의 요소만 꺼내서 표현하는 것으로 변환 -->

                </span>
                
                <span class = "removeBtn" v-on:click="removeTodo({todoItem, index})">
                <!-- todoItem 과 index를 받아서 넘긴다 -->
                <i class="fas fa-trash-alt"></i>
                </span> 
            </li>
            <!-- 화면에 바로 todoItem에 담긴 내용을 랜더링한다 -->
        </transition-group>
    </div>
</template>

<script>
import {mapgetters, mapGetters, mapMutations} from 'vuex';

export default {
    //app.vue에서 내려보내는 정보를 받는다
    methods : {
        ...mapMutations({
            removeTodo : 'removeOneItem',
            //mapMutations는 인자를 선언하지 않아도 자동적으로 인자를 넘겨준다
            //대신 인자를 보내는 경우 {}로 묶어 하나의 객체로 보내도록 해야한다
            //아래처럼 굳이 store.commit을 해줄 필요가 없게 된다
            toggleComplete : 'toggleOneItem'
        }),
        
        // removeTodo(todoItem, index){
        //     //this.$emit('removeItem' , todoItem, index);
        //     this.$store.commit('removeOneItem', {todoItem, index});
        // },

        // toggleComplete(todoItem, index){
        //     //this.$emit('toggleItem', todoItem, index);
        //     this.$store.commit('toggleOneItem', {todoItem, index});
        // }
    },
    computed : {
        // todoItems(){
        //     return this.$store.getters.storedTodoItems;
        // }
        //...를 통해 mapGetters에 있는 것을 모두 가져오게 되고, 그 중에서 storedTodoItems만 가져온다!!!
        ...mapGetters(['storedTodoItems'])

        //[]로 선언하는 경우 - getters 내부의 이름과 list안에 들어가는 이름이 같은 경우
        
        // ...mapGetters({
        //     todoItems : 'storedTodoItems'
        // }) {}객체로 선언하는 경우 - getters 내부의 이름과 list안에 들어가는 이름이 다른 경우 객체화로 만들어주기

    },
    
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

    /* list item transition */ 
    .list-enter-active, .list-leave-active{
        transition : all 1s;
    }
    .list-enter, .list-leave-to{
        opacity : 0;
        transform : translateY(30px);
    }
</style>
