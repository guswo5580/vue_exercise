<template>
    <div>
        <!-- ul 태그를 transition 태그로 변환시켜 준다 -->
        <transition-group name="list" tag ="ul">
            <li class = "shadow" v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
                <!-- v-for에서 list item의 순서를 알 수 있는 방법 -->
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" 
                        v-on:click="toggleComplete(todoItem, index)"></i>
                
                <span v-bind:class = "{textCompleted : todoItem.completed}">
                    <!-- v-bind class의 힘 -- todoItem의 completed요소가 true일 대만 textCompleted의 class가 실행됨 -->

                    {{ todoItem.item }}
                <!-- obj에서 item의 요소만 꺼내서 표현하는 것으로 변환 -->

                </span>
                
                <span class = "removeBtn" v-on:click="removeTodo(todoItem, index)">
                <!-- todoItem 과 index를 받아서 넘긴다 -->
                <i class="fas fa-trash-alt"></i>
                </span> 
            </li>
            <!-- 화면에 바로 todoItem에 담긴 내용을 랜더링한다 -->
        </transition-group>
    </div>
</template>

<script>
export default {
    //app.vue에서 내려보내는 정보를 받는다
    methods : {
        removeTodo(todoItem, index){
            //this.$emit('removeItem' , todoItem, index);
            this.$store.commit('removeOneItem', {todoItem, index});
        },
        toggleComplete(todoItem, index){
            //this.$emit('toggleItem', todoItem, index);
            this.$store.commit('toggleOneItem', {todoItem, index});
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

    /* list item transition */ 
    .list-enter-active, .list-leave-active{
        transition : all 1s;
    }
    .list-enter, .list-leave-to{
        opacity : 0;
        transform : translateY(30px);
    }
</style>
