//创造数据环境
var arr = [{
    name: 'pp',
    time: 2
},
{
    name: 'kk',
    time: 9
}];

 

var promise=Promise.resolve();
for(let i=0;i<arr.length;i++){
    promise=promise.then(()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(arr[i].name);
            }, arr[i].time*1000);
        })
    }).then((value)=>{
        console.log(value);
    })
}

