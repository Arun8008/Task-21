let form=document.querySelector('#form');
let name=document.querySelector('#name');
let age=document.querySelector('#age');

form.addEventListener('click',function(e){
	e.preventDefault();
	let name=document.querySelector('#name').value;
	let age=document.querySelector('#age').value;
	
	let result=document.querySelector('#result');
	
	localStorage.setItem("name",data);
	localStorage.setItem("age",age);
	
	readPost();
});
let data={};
function readPost(){
	data["name"]=name.value;
	data["age"]=age.value;
	console.log(data);
}