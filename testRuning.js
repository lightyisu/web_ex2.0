//定义一个静态方法来实现接口与实现类的直接检验
//静态方法不要写出Interface.prototype ,因为这是写到接口的原型链上的
//我们要把静态的函数直接写到类层次上
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
Interface.ensureImplement=function (object) {////////注意Object只会接收第一个参数！！！！！！！！！！！！！！！！！！！！
    if(arguments.length<2){
        throw  new Error("参数必须不少于2个")
        return false;
    }
    console.log('参数长度'+arguments.length);
    for(var i=1;i<arguments.length;i++){
        var inter=arguments[i];
        console.log(inter);
        //如果是接口就必须是Interface类型
        if(inter.constructor!=Interface){
            throw  new Error("如果是接口类的话，就必须是Interface类型");
        }
        //判断接口中的方法是否全部实现
        //遍历函数集合
        console.log(object);
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
var Pet=new Interface("Pet",["eat","run","sing","register"]);
var PetShop=function () {}
    PetShop.prototype={
        //出售宠物的方法
        sellPet:function (kind) {
            //宠物对象
            var pet;
           //宠物种类
            switch (kind){
                case  'dog':
                    pet=new Dog();
                break;
                case  'cat':
                    pet=new Cat();
                    break;
                case  'pig':
                    pet=new Pig();
                    break;
                default:
                    pet=new Bird();
            }
           //验证接口  
         Interface.ensureImplement(pet,Pet);//判断pet对象是否全部实现接口Pet里面全部的方法    （对象，接口）
          pet.eat();
          pet.register();
          return pet;

        }
    }
    var newPetShop=new PetShop();
    var cat=newPetShop.sellPet('cat');
    function Cat() {
        
        //实现接口
        this.run=function () {
            document.write("小猫跑......<br>")
        }
        this.sing=function () {
            document.write("小猫唱歌......<br>")
        }
    }