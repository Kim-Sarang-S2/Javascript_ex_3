// let input = document.getElementById('input');
// let addBtn = document.getElementById('add');
// let toDoList = document.getElementById('todo_list');
// let clear = document.getElementById('clear');

// console.log(input);
// console.log(addBtn);
// console.log(toDoList);
// console.log(clear);

init();

function init(){
    document.querySelector('form').addEventListener('submit', addToDo);
    document.getElementById('clear').addEventListener('click', clearTodoList);
    document.querySelector('ul').addEventListener('click', deleteOrCheck);
}

function strikeThrough(e){
    e.target.classList.toggle("done");
}

function deleteOrCheck(e){
    if(e.target.className == 'delete')  
        deleteToDo(e); 
}

function deleteToDo(e){ // X 버튼을 누르면 목록에서 항목 삭제
    let remove = e.target.parentNode;
    // .target : 이벤트가 발생한 요소를 반환
    let parentNode = remove.parentNode;
    // .parentNode : 객체의 부모 요소를 찾아줌.
    // method가 아니라 속성 (무슨 뜻인지 모르겠음)
    parentNode.removeChild(remove);
}
 

function clearTodoList(e){ // clear버튼 눌렀을 때 list 전체 삭제
    let ul = document.querySelector('ul').innerHTML = '';
}

function addToDo(e){ // 새로운 할 일 추가하는 경우
    e.preventDefault();
  // 해당 이벤트에 대해 브라우저의 기본 동작을 실행하지 않도록 함.

    let toDoValue = document.getElementById('input');
    if(toDoValue.value !== '')
        addTask(toDoValue.value);
        toDoValue.value = ''; 
        // -> input 창에 값이 입력된 상태에서 버튼 클릭 시 입력창 비우기

}

function addTask(value){ // 입력한 내용을 출력
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = 
      `<span>${value}</span>
      &nbsp; &nbsp; &nbsp;
      <button class="delete">x</button>`;
    ul.appendChild(li);
    // document.querySelector('.todolist').style.display = 'block';


    // 내맘대로 만든 line-through 이벤트
    // 문제 1 : 클릭 뒤에 이전 상태로 수정 불가능
    // 문제 2 : 처음 작성한 텍스트에만 적용
    // toggle을 사용해서 수정해보자
    let text = document.querySelector('span');

    text.addEventListener("click", () => {
      let clicked = 1;

      if(clicked % 2 == 1){
        text.style.textDecoration = "line-through";
        clicked --;
      }else{
        text.style.textDecoration = "";
      }
    
    })
    
}


