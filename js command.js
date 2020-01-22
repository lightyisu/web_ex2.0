//(1)定义一个接口类
var Interface=function (name,methods) {//name：接口名字
    if(arguments.length<2){
        alert("必须是两个参数")
    }
    this.name=name;
    this.methods=[];//定义一个空数组装载函数名
    for(var i=0;i<methods.length;i++){
        if(typeof  methods[i]!="string"){
            alert("函数名必须是字符串类型");
        }else {
            this.methods.push( methods[i]);
        }
    }
};
Interface.ensureImplement=function (object) {
    if(arguments.length<2){
        throw  new Error("参数必须不少于2个")
        return false;
    }
    for(var i=1;i<arguments.length;i++){
        var inter=arguments[i];
        //如果是接口就必须是Interface类型
        if(inter.constructor!=Interface){
            throw  new Error("如果是接口类的话，就必须是Interface类型");
        }
        //判断接口中的方法是否全部实现
        //遍历函数集合
        for(var j=0;j<inter.methods.length;j++){
            var method=inter.methods[j];//接口中所有函数

            //object[method]传入的函数
            //最终是判断传入的函数是否与接口中所用函数匹配
            if(!object[method]||typeof object[method]!="function" ){//实现类中必须有方法名字与接口中所用方法名相同
                throw  new Error("实现类中没有完全实现接口中的所有方法")
            }
        }
    }
}

var ReversibleCommand=new Interface('ReversibleCommand',['execute','undo']);
var MoveUp=function(cursor){
  this.cursor=cursor;
}
MoveUp.prototype={
    execute:function(){
        this.cursor.move(0,-10);
    },
    undo:function(){
        this.cursor.move(0,10);
    }

}
var MoveDown=function(cursor){
    this.cursor=cursor;
}
MoveDown.prototype={
    execute:function(){
        this.cursor.move(0,10);
    },
    undo:function(){
        this.cursor.move(0,-10);
    }
}
var MoveLeff=function(cursor){
    this.cursor=cursor;
}
MoveLeff.prototype={
    execute:function(){
        this.cursor.move(-10,0);
    },
    undo:function(){
        this.cursor.move(10,0);
    }
}
var MoveRight=function(cursor){
    this.cursor=cursor;
}
MoveRight.prototype={
    execute:function(){
        this.cursor.move(10,0);
    },
    undo:function(){
        this.cursor.move(-10,0);
    }
    
}

var Cursor=