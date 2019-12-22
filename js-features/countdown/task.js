function timer(){
 let obj=document.getElementById('timer');

 obj.innerHTML--;

 if(obj.innerHTML == 0) {
 	setTimeout (() => alert('Вы победили в конкурсе!'),0);
 }
 else {setTimeout(timer,100);}
}
setTimeout(timer,100);
