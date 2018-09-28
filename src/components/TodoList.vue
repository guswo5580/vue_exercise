<template>
    <div>
        <ul>
            <li class = "shadow" v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
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
        </ul>
    </div>
</template>

<script>
export default {
    //app.vue에서 내려보내는 정보를 받는다
    props : ['propsdata'],

    methods : {
        removeTodo : function(todoItem, index){
            this.$emit('removeItem' , todoItem, index);
            //app.vue를 통해 event 전송을 위해 받은 값을 그대로 전달해준다
            //event를 발생시킬 때는 인자가 있는지 없는지 잘 확인한다
        },
        toggleComplete : function(todoItem, index){
            this.$emit('toggleItem', todoItem, index);
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
