function timer(){
 let obj=document.getElementById('timer');

 obj.innerHTML--;

 if(obj.innerHTML==0){alert('Вы победили в конкурсе!');setTimeout(function(){},100);}
 else{setTimeout(timer,100);}
}
setTimeout(timer,100);
