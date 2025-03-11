const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

// 로컬스토리지에서 데이터 불러오기
function loadFromLocalStorage() {
  const data = localStorage.getItem('my_todos');
  if (data) {
    todos = JSON.parse(data);
  }
}

// 로컬스토리지에 데이터 저장
function saveToLocalStorage() {
  localStorage.setItem('my_todos', JSON.stringify(todos));
}

// 할 일 목록을 화면에 표시
function displayTodos() {
  loadFromLocalStorage();
  list.innerHTML = ''; // 기존 목록 초기화

  todos.forEach((item) => {
    const { itemEl } = createTodoElement(item);
    list.append(itemEl);
  });
}

// 새로운 할 일 추가
createBtn.addEventListener('click', () => {
  createNewTodo();
});

function createNewTodo() {
  // 새로운 아이템 객체 생성
  const item = {
    id: new Date().getTime(),
    text: '',
    complete: false,
  };

  // 배열 처음에 추가
  todos.unshift(item);

  // 요소 생성 및 추가
  const { itemEl, inputEl } = createTodoElement(item);
  list.prepend(itemEl);

  // 입력 필드 활성화
  inputEl.removeAttribute('disabled');
  inputEl.focus();

  saveToLocalStorage();
}

// 할 일 요소 생성
function createTodoElement(item) {
  const itemEl = document.createElement('div');
  itemEl.classList.add('item');

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = item.complete;

  if (item.complete) {
    itemEl.classList.add('complete');
  }

  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = item.text;
  inputEl.setAttribute('disabled', '');

  const actionsEl = document.createElement('div');
  actionsEl.classList.add('actions');

  const editBtnEl = document.createElement('button');
  editBtnEl.classList.add('material-icons');
  editBtnEl.innerText = 'edit';

  const removeBtnEl = document.createElement('button');
  removeBtnEl.classList.add('material-icons', 'remove-btn');
  removeBtnEl.innerText = 'remove_circle';

  checkboxEl.addEventListener('change', () => {
    item.complete = checkboxEl.checked;

    if (item.complete) {
      itemEl.classList.add('complete');
    } else {
      itemEl.classList.remove('complete');
    }

    saveToLocalStorage();
  });

  inputEl.addEventListener('input', () => {
    item.text = inputEl.value;
  });

  inputEl.addEventListener('blur', () => {
    inputEl.setAttribute('disabled', '');
    saveToLocalStorage();
  });

  editBtnEl.addEventListener('click', () => {
    inputEl.removeAttribute('disabled');
    inputEl.focus();
  });

  removeBtnEl.addEventListener('click', () => {
    todos = todos.filter((t) => t.id !== item.id);
    itemEl.remove();
    saveToLocalStorage();
  });

  actionsEl.append(editBtnEl);
  actionsEl.append(removeBtnEl);

  itemEl.append(checkboxEl);
  itemEl.append(inputEl);
  itemEl.append(actionsEl);

  return { itemEl, inputEl };
}

// 초기화 실행
displayTodos();
