var table=document.getElementById('table-wrapper');
function createInputs(){


  
    for(let i=0;i<sourceData.length;i++){
    var input=document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('value',sourceData[i].product);
    table.appendChild(input);
    var input2=document.createElement('input');
    input2.setAttribute('type','text');
    input2.setAttribute('value',sourceData[i].region);
    table.appendChild(input2);
    for(let j=0;j<sourceData[i].sale.length;j++){
        var input3=document.createElement('input');
        input3.setAttribute('type','text');
        input3.setAttribute('value',sourceData[i].sale[j]);
        table.appendChild(input3);
    }
    var br=document.createElement('br');
    table.append(br);    
}
//input的onblur事件
table.addEventListener('focusout',function(ev){
    var ev=ev||window.event;
    var target=ev.target||ev.srcElement;
    if(target.nodeName.toLocaleLowerCase()=='input'){
      
       if(isNaN(target.value)==true){
           alert('输入的数字不正确');
       }
        
    }
}
)
//检测LocalStorage是否含有数据
//含有数据时 首先采用缓存数据
if(localStorage.getItem('key')!=null){
    let inputs=document.querySelectorAll('input');
    for(let i=0;i<inputs.length;i++){
        let getArr=JSON.parse(localStorage.getItem('key'));
        inputs[i].value=getArr[i];
    }
    
}




}
window.onload=createInputs();


var inputCr=document.querySelectorAll('input');         //inputCr意指input Created
//收集新数据 封装
/**function collectData(){
    var objArr=[];
    for(let i=0;i<9;i++){           //数组中的9的对象数组
        var saleArr=[];
        for(let j=2+14*i;j<13+14*i;j++){
            saleArr.push(inputCr[j].value);
        }

        var Obj={product:inputCr[0+i*14].value,
                 region:inputCr[1+i*14].value,
                 sale:saleArr};
        objArr.push(Obj);

    }
    return objArr;
}
**/
//简单型封装收集
function simpleCollect(){
    var collectArr=[];
    for(let i=0;i<inputCr.length;i++){
        collectArr.push(inputCr[i].value);
    }
    return collectArr;
}


//移送至本地缓存
function save2Localstorage(){
    if(typeof(Storage)!=='undefined'){
        //数据存储
       localStorage.setItem('key',JSON.stringify(simpleCollect()));

    }
    else{
        return false;
    }
}
//为按钮绑定保存事件

var button=document.querySelector('button');
button.addEventListener('click',function(){
    simpleCollect();
    save2Localstorage();
    let read=JSON.parse(localStorage.getItem('key'));
    console.log(read);
})
