import Vue from 'vue'
import Vuex from 'vuex'

// import * as getters from './getters.js'
// import * as mutations from './mutations.js'

import todoApp from './modules/todoApp.js'


Vue.use(Vuex);
//vue plugin을 사용하는 방법



export const store = new Vuex.Store({
    //store를 export 하는 파일로 설정

    modules : {
        todoApp
    }
    
});

//export main.js 에서 불러와서 사용할 수 있도록 한다