function pp(){
    console.log('I am piedpper');
}
function t1(callback){
    if(typeof callback === 'function'){
        if(callback()){
            alert('p');
            return 'ok';
        }
      
    }
 
}
var re=pp();