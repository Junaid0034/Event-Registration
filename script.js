const submit = document.getElementById("submit");
const ul = document.getElementById("ul");
const deleteBtn = document.createElement("btn");
const validation = document.getElementsByClassName("notEmpty");
submit.addEventListener("click",function(e){
  const firstNameValue = document.getElementById("firstname").value;
  const lastNameValue = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  let array = [];
  const selectEvent = document.getElementById("inputState1").value;
  const selectCountry = document.getElementById("inputState2").value;
  array.push(selectEvent,selectCountry,firstNameValue,lastNameValue,email,address);
  deleteBtn.classList.add("delete");
    array.forEach(function(item, index){
      const para = document.createElement("p");
      para.appendChild(document.createTextNode(array[item,index]));
      const createList = document.createElement("li");
      createList.appendChild(para);
      createList.appendChild(deleteBtn);
      deleteBtn.innerHTML="Delete";
      ul.appendChild(createList);   
    })
     const dletebtn = document.getElementsByClassName("delete");
     for(i=0 ; i < dletebtn.length; i++){
  dletebtn[i].addEventListener("click",function(e){
   removedList = e.target;
   const hello = removedList.parentElement.parentElement;
    hello.textContent = '';
  })
}
     
})






