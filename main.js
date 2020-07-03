//get all keys
const keys = document.querySelectorAll('.key');

//play notes
function playNote(e){
  let audioKeyCode = getKeyCode(e);
  const key = document.querySelector(`[data-key="${audioKeyCode}"]`);
  const cantFoundAnyKey = !key;

  if(cantFoundAnyKey){
    return;
  }
  addPlayinClass(key);
  playAudio(audioKeyCode);
}

function addPlayinClass(key){
  key.classList.add('playing')
}

function playAudio(audioKeyCode){
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function removePlayinClass(e){
  e.target.classList.remove('playing');
}

function getKeyCode(e){
  let keyCode 
  const isKeyboard = e.type === "keydown";
  if(isKeyboard){
    keyCode = e.keyCode;
  }else{
    keyCode = e.target.dataset.key;
  }
 // console.log(keyCode);
 return keyCode;
}

//click with mouse
function registerEvents(){
  keys.forEach(key=>{
    key.addEventListener('click',playNote);
    key.addEventListener('transitionend',removePlayinClass);
  })
  
  //keyboard type
  window.addEventListener('keydown',playNote);
}

window.addEventListener('load',registerEvents);