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
            //Object로 넘기는 것이 일상으로 되어야 한다
            //Text로 넘기는 것이 아니라 obj로 받고 넘기는 과정으로 접근
                var obj = {
                    completed : false,
                    item : this.newTodoItem
                };  

                //localStorage.setItem('key', 'value')
            
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                //JSON으로 변환해서 obj를 넘기는 것으로 확인!!
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
