function getResult2() {

    // 构建队列
    function queue(arr) {
        var sequence = Promise.resolve();
        arr.forEach(function (item) {
            
         sequence=sequence.then((item)=>{
             
                console.log(item); 

             
         })

        })
    }
    queue(objArr);
}
var objArr = [{
    data: 1000,
    time: 1000
}, {
    data: 3000,
    time: 3000
}, {
    data: 7000,
    time: 3000
}]
getResult2();