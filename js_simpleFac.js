var Interface=function(name,methods){   //name:Interface name
    if(arguments.length<2){
        alert('arguments.length must be 2');
    }
    this.name;
    this.methods=[];
    for(var i=0;i<methods.length;i++){
        if(typeof methods[i]!='string'){
            alert('function name must be string');
        }
        else{
            this.methods.push(methods[i]);
        }
    }
};

Interface.ensureImplement=function(object){
        if(arguments.length<2){
            throw new Error('参数必须不少于两个');
            return false;
        }
       
        for(var i=1;i<arguments.length;i++){
            var inter=arguments[i];
            //如果是接口则为Interface
            if(inter.constructor!=Interface){
                throw new Error('如果是接口类，必须是Interface类型');
            }
            //判断接口中的方法是否全部实现
            //遍历
            for(var j=0;j<inter.methods.length;j++){
                var method=inter.methods[j];
                if(!object[method]||typeof object[method]!='function'){
                    throw new Error('not completely all methods');
                }
            }
        }
}

//继承文件
function extend(subClass,superClass){
    var F=function(){};
    F.prototype=superClass.prototype;
    subClass.prototype=new F();
    subClass.prototype.constructor=subClass;
    //为子类增加属性superClass的原型链引用
    subClass.superClass=superClass.prototype;
    //降级超类
    //检测是否是超类
    if(superClass.prototype.constructor==Object.prototype.constructor){
            superClass.prototype.constructor=superClass;
    }
}

var Pet=new Interface('Pet',["eat","run","sing","register"]);
var PetShop=function(){};
PetShop.prototype={
    //出售宠物
    sellPet:function(kind){
        //宠物对象
        var pet;
        //宠物种类
        switch (kind){
            case 'dog':
                 pet=new Dog();
            break;
            case 'cat':
                 pet=new Cat();
            break;
            case 'pig':
                 pet=new Pig();
            break;
            default:
                 pet=new Bird();
        }
        //验证接口
      
        Interface.ensureImplement(pet,Pet);
        
        pet.eat();
        pet.register();
        return pet;
    }
}

function publicPetFeature(){
    this.register=function(){
        document.write('pet register...<br>');
    }
    this.eat=function(){
        document.write('pet eat....<br>');
    }
}

//实现类
function Dog(){
    Dog.superClass.constructor.call(this);//继承父类
    //实现接口部分
    this.run=function(){
        document.write('dag run <br>');
    }
    this.sing=function(){
        document.write('dog sing  <br>');
    }
}
function Cat(){
    Cat.superClass.constructor.call(this);
    this.run=function(){
        document.write('cat run <br>');
    }
    this.sing=function(){
        document.write('cat sing  <br>');
    }
}
function Pig(){
    Pig.superClass.constructor.call(this);
    this.run=function(){
        document.write('Pig run <br>');
    }
    this.sing=function(){
        document.write('pig sing <br>');
    }
}
function Bird(){
    Bird.superClass.constructor.call(this);
    this.run=function(){
        document.write('Bird run  <br>');
    }
    this.sing=function(){
        document.write('Bird sing  <br>')
    }
}

extend(Dog,publicPetFeature);
extend(Cat,publicPetFeature);
extend(Pig,publicPetFeature);
extend(Bird,publicPetFeature);

var newPetShop=new PetShop();
var flowerPig=newPetShop.sellPet('pig');
flowerPig.run();