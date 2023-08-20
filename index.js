const displaybox = document.getElementById('displaybox');
const audiobox = document.getElementById('audiobox');
const audiobox1 = document.getElementById('audiobox1');
const audiobox2 = document.getElementById('audiobox2');
// console.log(displaybox)
function num(box){
 displaybox.value += box.innerHTML;
}
function epual(){
  displaybox.value = eval(displaybox.value)
}
function remove(){
  displaybox.value = displaybox.value.slice(0,-1)
  // audiobox2.play()
  
}
function clearAll(){
  displaybox.value = '';
  audiobox1.play();
}