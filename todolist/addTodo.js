'use strict';

const list = document.getElementById('list');
const todoBox = document.getElementById('item');

todoBox.addEventListener('focusout', (event) => {
    event.target.placeholder = 'Add a to-do';});

    
todoBox.addEventListener("keyup", (nyang) => { //anonymous, 이름없는 함수 선언 + arrow function
    if (nyang.keyCode === 13) { //keyCode 반드시 대문자 C 
        const todo = todoBox.value;
        if(todo) {
            addToDo(todo);
        }
        todoBox.value = "";
    }
});

function addToDo(parameter) {
    const todo = `<li class="todo">
        <i class="co fa fa-circle-thin" job="complete"></i>
        <article class="text"> ${parameter} </article>
        <i class="de fa fa-trash-o" job="delete"></i>
        </li>`
    list.insertAdjacentHTML('beforeend', todo);
} // function declaration 함수 선언식은(표현식x) hoisted 되기 때문에 상단의 이벤트리스너에서 호출 가능!

    /*
function pushEnter(hello) {
    if (hello.keyCode === 13) {
        const todoBoxText = todoBox.value;
        if(inputText) {
            addToDo(inputText);
        }
        todoBox.value = "";
    }
}
todoBox.addEventListener("keyup", pushEnter);
*/  // 이렇게 별도로 함수를 선언후 인자로 넣어도 되지만. ()까지를 인자로 넣으면 함수가 즉각 실행되어 이벤트에 반응해서 함수가 실행되도록 할 수 없다.



