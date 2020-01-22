var Pet=new Interface('pet',['eat','run','sing','register']);
var PetShop=function(){};
PetShop.prototype={
    sellPet:function(kind){
        var pet;
        switch(kind){
            case 'dog':
                pet=new Dog();
            break;
            case 'cat':
                pet=new cat();
            break;
            case 'pig':
                pet=new Pig();
            break;
            default:
                pet=new Bird();
        }
        Interface.ensureImplement(pet,Pet);
        pet.eat();
        pet.register();
        return pet;

    }
}
function basePet(){
    this.register=function(){
        document.write('宠物登记...<br/>')
    }
    this.eat=function(){
        document.write('宠物吃饭..<br/>')
    }

}

function Dog(){
    Dog.superClass.constructor.call(this);
    this.run=function(){
        document.write('狗跑....<br/>');
    }
    this.sing=function(){
        document.write('狗唱....<br/>')
    }
}

function Cat(){
    Cat.superClass.constructor.call(this);
    this.run=function(){
        document.write('猫跑....<br/>');
    }
    this.sing=function(){
        document.write('猫唱....<br/>')
    }
}
function Pig() {
    Pig.superClass.constructor.call(this);//继承父类
    //实现接口部分
    this.run=function () {
        document.write("小猪跑......<br>")
    }
    this.sing=function () {
        document.write("小猪唱歌......<br>")
    }
}
function Bird() {
    Bird.superClass.constructor.call(this);//继承父类
    //实现接口部分
    this.run=function () {
        document.write("小鸟跑......<br>")
    }
    this.sing=function () {
        document.write("小鸟唱歌......<br>")
    }
}

extend(Dog,basePet);
extend(Cat,basePet);
extend(Pig,basePet);
extend(Bird,basePet);

