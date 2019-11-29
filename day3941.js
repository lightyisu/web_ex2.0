function ChangeURL(){
    var state1Obj={cont:'state1'}
    history.replaceState(state1Obj,null,'state1.html');
    
}
window.onload=ChangeURL();