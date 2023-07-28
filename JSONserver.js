
 

 

function setLike(element) {
    element.style.fill = 'red'
}

let znac = [
    {
        emeil: '',
        body: ''
    }
]

const cont = document.querySelector('.kontener')
const addBut = document.querySelector('.addBut')

function handlClick(e) {
    if(e.target.tagName === 'path') {
        setLike(e.target)
    }
}

cont.addEventListener('click', handlClick)
let men = 2
let bob = 1
addBut.addEventListener("click", function(){
    men = men + 1
    console.log(men);

    fetch('https://jsonplaceholder.typicode.com/comments')
 .then((response) => response.json())
 .then((result) => {
    console.log(result);
    //  for (let men in result) {
        //  znac.emeil = result[men].email   
        //  znac.body = result[men].body   
    //  }
     znac.emeil = result[men].email   
     znac.body = result[men].body 
    
    console.log(znac);
 })

 cont.innerHTML += `<div class="comBl">
 <div class="com">
     <p class="meil">${znac.emeil}</p>
     <p>${znac.body}</p>
 </div>
 <svg class="svg1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
</div>`
})