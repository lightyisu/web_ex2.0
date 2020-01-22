var Interface=function(name,methods){
    if(arguments.length<2){
        alert('必须是两个参数')
    }
    this.name=name;
    this.methods=[];
    for(var i=0;i<methods.length;i++){
        if(typeof methods[i]!='string'){
            alert('函数名必须是字符串');
        }
        else
        {
            this.methods.push(methods[i]);
        }
    }
};
//总结：该接口首先检查参数个数
//其次赋予 name和Methods两个属性
//开始检查每一个方法参数的名称 符合字符串=>进入接口方法数组中

Interface.ensureImplement=function(object){
    if(arguments.length<2){
        throw new Error('参数必须不少于两个')
        return false;
    }
    for(var i=1;i<arguments.length;i++){
        var inter=arguments[i];
        if(inter.constructor!=Interface){
            throw new Error('如果是接口类的话，必须是Interface类型');
        }

        //判断接口中的方法是否全部实现
        for(var j=0;j<inter.methods.length;j++){
            var method=inter.methods[j];
            if(!object[method]||typeof object[method]!='function'){
                throw new Error('实现类中没有完全实现接口的方法')
            }
        }
    }
}

//继承
/*创建extend函数为了程序中所有的继承操作*/
//subClass:子类  superClass：超类
function extend(subClass,superClass) {
    //1，使子类原型属性等于父类的原型属性

    //初始化一个中间空对象，目的是为了转换主父关系
    var F = function () {};
    F.prototype = superClass.prototype;
    //2， 让子类继承F
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    //3，为子类增加属性 superClass ==》原型链的引用
    subClass.superClass = superClass.prototype;
    //4，增加一个保险，就算你的原型类是超类（Object）那么也要把你的构造函数级别降下来
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}