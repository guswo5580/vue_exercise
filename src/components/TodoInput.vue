<template>
    <div class = "inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class = "addContainer" v-on:click="addTodo">
            <!-- 영역을 클릭했을 때도 같은 효과를 얻도록 한다 -->
            <i class="fas fa-plus addBtn"></i>
        </span>
        
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고
                <i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i>
            </h3>
            <div slot="body">
                아무것도 입력하지 않았습니다.
            </div>
            <div slot="footer">
                copyright
            </div>
        </Modal>
    </div>
</template>

<script>
//modal.vue를 하위 컴포넌트로 가질 수 있도록 import
import Modal from './common/modal.vue';

export default {
    data : function(){
        return{
            newTodoItem : "",
            
            //modal을 이용할 때는 모달이 떠있는지의 여부를 파악하기 위해 bool변수를 선언해준다
            showModal : false
        }
    },
    //v-model에 접근할 수 있는 data를 선언
    methods : {
        addTodo : function(){
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem' , this.newTodoItem);
                //input.vue에서 app.vue로 newTodoItem에 대한 정보를 emit해준다
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput : function() {
            this.newTodoItem = '';
        }
        
    },
    //input.vue에 대한 하위 컴포넌트로 modal을 지정
    components : {
        'Modal' : Modal
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
    .closeModalBtn{
        color : #42b983;
        float : right;
    }
</style>
