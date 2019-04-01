//Project 2
const page = document.querySelector('.page');
const studentList = document.querySelector('.student-list');
let newList = studentList.querySelectorAll('li.student-item');
/*
This showPage function shows only 10 students per page.
I have variable newList as a let so it change to number of students in its newList
*/
const showPage = (list,page) => {
  const maxPage = (page * 10) - 1;
  const minPage = (page * 10) - 10;
  for(let i = 0; i < list.length; i++) {
    if(i >= minPage && i <= maxPage) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}
//showPage(newList, 1);
//console.log(newList.length); To show that this variable has 54 students in the list
const appendPageLinks = (list) => {
  let totalList = Math.ceil(list / 10);
  const div = document.createElement('div');
  div.className = 'pagination';
  page.appendChild(div);
  const ul = document.createElement('ul');
  div.appendChild(ul);
  for(let i = 1; i < totalList; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);
    a.textContent = i;
  }
}
appendPageLinks(newList);
