// NPM으로 설치한 뷰 라이브러리를 node_modules로부터 로딩
import Vue from "vue";

// 컴포넌트 번호 = 40
export var eventBus = new Vue();

// TodoFooter
// eventBus.$emit('이벤트 이름', 인자);

// App
// eventBus.$on('이벤트 이름', 인자);
