//Project 2
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
showPage(newList, 1);
//console.log(newList.length); To show that this variable has 54 students in the list
/*
This function I am dynamicaly creating pagination links to my page
so I can separate the student list into different pages.
*/
const appendPageLinks = (list) => {
  let totalList = Math.ceil(list.length / 10);
  const page = document.querySelector('.page');
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  div.className = 'pagination';
  page.appendChild(div);
  div.appendChild(ul);
  //This for loop gives my pages the page numbers at the bottom of the page
  for(let i = 1; i <= totalList; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);
    a.textContent = i;
    //Allowing those page numbers at the bottom being able to be clicked.
    a.addEventListener('click', (e) => {
      showPage(list, i);
      const allA = document.querySelectorAll('a');
      //This highlists the page that I have clicked and that I am on.
      if(event.target.tagName === 'A')
        for (let x = 0; x < allA.length; x++){
          allA[x].classList.remove('active');
        }
        e.target.className = 'active';
    });
  }
}
appendPageLinks(newList);
