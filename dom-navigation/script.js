let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

// console.log('list', list);
// console.log('listItem', listItem);

val = list.childNodes; // NodesList 반환, line break 도 포함 O -> 0:text, 2: text
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3];
// val = list.childNodes[3].nodeType;
// // NodeType

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment node
// // 9 - document itself
// // 10 - Doctype

// // children element nodes 반환
// val = list.children; // HTML Collection 반환 (line break 포함 x)
// val = list.children[1];
// list.children[1].textContent = 'Hi';

// // First child
// val = list.firstChild;
// // list.firstChild === list.childNodes[0]

// val = list.firstElementChild;

// // Last childe
// val = list.lastChild;
// // list.firstChild === list.childNodes[list.childNodes.length - 1];
// val = list.lastElementChild;

// // child 요소 count
// val = list.childElementCount;

// // parent node 반환
// val = listItem.parentNode;
// val = listItem.parentElement.parentElement;

// // next silbling 반환
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;
// val = listItem.nextElementSibling.previousElementSibling;

// // previous sibling 반환
// val = list.previousSibling;
// val = list.previousElementSibling;

// for (let node of list.childNodes) {
//   console.log(node);
// }

console.log(Array.from(list.childNodes).filter);

// console.log('val', val);

const array = [1, 2, 3];
console.log(array.filter);

// console.log(list.childNodes.map);
