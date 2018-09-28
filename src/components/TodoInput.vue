<template>
    <div class = "inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class = "addContainer" v-on:click="addTodo">
            <!-- 영역을 클릭했을 때도 같은 효과를 얻도록 한다 -->
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
export default {
    data : function(){
        return{
            newTodoItem : ""
        }
    },
    //v-model에 접근할 수 있는 data를 선언
    methods : {
        addTodo : function(){
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem' , this.newTodoItem);
                //input.vue에서 app.vue로 newTodoItem에 대한 정보를 emit해준다
                this.clearInput();
            }
        },
        clearInput : function() {
            this.newTodoItem = '';
        }
        
    }
}
</script>

<style scoped>
    input:focus{
        outline : none;
    }
    .inputBox{
        background : white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input{
        border-style: none;
        font-size : 1rem;
    }
    .addContainer {
        float : right;
        background : linear-gradient(to right, #6478FB, #8763FB);
        width: 3rem;
        border-radius: 0 5px 0 5px;
    }
    .addbtn{
        color : white;
        vertical-align: middle;
    }
</style>
