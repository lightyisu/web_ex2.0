var taskAsync = function(){
    var result=setTimeout(function(){
        console.log('async re');
    },3000)
    return result;
}
