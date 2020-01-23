//餐厅类
function Restaurant(cash, seats, staff) {
    this.cash = cash;
    this.seats = seats;
    this.staff = staff;
    this.hire = function (a) {
        console.log(a.name + '  is be hired');
        staff.push(a.name);
    }
    this.fire = function (a) {
        console.log(a.name + '   is be fired');
        var num = staff.indexOf(a.name);
        staff.splice(num, 1);
    }
}
//职员类
function Employee(ID, name, salary) {
    this.ID = ID;
    this.name = name;
    this.salary = salary;
}
//职员类原型方法
Employee.prototype.doWork = function () {
    console.log('do work at once');
}


/** 
//继承自职员的服务员类
function Waiter(ID,name,salary){
    Employee.call(this,ID,name,salary);
    //继承服务员类
    //完成一次工作
    this.doWork=function(order){
        if(order instanceof Array==true){
            console.log('customer order'+order);
        }
        else{
            console.log('serve the dishes');
        }
    }

}**/



//重新设计的服务员类
var Waiter = function (ID, name, salary) {
    Employee.call(this, ID, name, salary);
};
Waiter.prototype.serveOrder = function (dish) {
    console.log('Waiter:I got your order and your order is' +' '+ dish)
    return dish;
}
Waiter.prototype.tellChef = function (dish) {

    console.log('Waiter:chef,we need do' + ' ' + dish);
}
Waiter.prototype.passDish = function () {
    console.log('Waiter:ok,I got the dish,go ahead');
}

var ProxySingleWaiter = (function () {
    var instance;
    return function (ID, name, salary) {
        if (!instance) {
            instance = new Waiter(ID, name, salary);
        }
        return instance;

    }
})();


//厨师类
/**function Chef(ID,name,salary){
    Employee.call(this,ID,name,salary);
    this.doWork=function(){
        console.log('cooked a dish');
    }
}**/



//重新设计的厨师类(代理型单例模式)
var Chef = function (ID, name, salary) {
    Employee.call(this, ID, name, salary);
};
Chef.prototype.cook = function (dish) {
    console.log('Chef:Got it I will do' + ' ' + dish);

}
Chef.prototype.passDish = function () {
    console.log('Chef:I am done,get it to customer');
}

var ProxySingleChef = (function () {
    var instance;
    return function (ID, name, salary) {
        if (!instance) {
            instance = new Chef(ID, name, salary);
        }
        return instance;
    }
})();


//顾客类
function Customer() {
    this.goseat = function () {
        console.log('Customer:I am on the seat');
    }
    this.eat = function () {
        console.log('Enjoy your meal');
    }
}
Customer.prototype.order = function (dish) {
    var dishes=[];
    for(var i=0;i<randomOrder(0,dish.length);i++){
        dishes.push(dish[randomOrder(0,dish.length)]);
    }

    
    console.log('Customer:I need a ' + ' ' + dishes);
    return dishes;
}
Customer.prototype.enjoyDeal = function () {
    console.log('Customer:I got It and hope enjoy it');
}

//菜品类
function Dishes(name,price,time) {
    this.name = name;
        this.price = price;
        this.time=time;
}


//为每一道菜创建对象
var D1=new Dishes('红烧鲫鱼',100,1);
var D2=new Dishes('豆腐',100,3);
var D3=new Dishes('龙虾',200,4);
var D4=new Dishes('鱼',300,1);
var D5=new Dishes('米饭',200,2);
var D6=new Dishes('蛋糕',120,3);
var D7=new Dishes('北京烤鸭',90,2);
var D8=new Dishes('拌海蜇',70,1);



var menu=[D1.name,D2.name,D3.name,D4.name,D5.name,D6.name,D7.name,D8.name];


//随机点餐方法                              
function randomOrder(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//顾客队列
var customerArr = ['C1', 'C2', 'C3', 'C4', 'C5'];


var P1=new Promise(function(resolve,reject){
    var customer=new Customer();
    customer.goseat();

    setTimeout(resolve,3000,customer.order(menu));

})

P1.then((value)=>{
    var Waiter=new ProxySingleWaiter(001,'melody',1000);
    Waiter.serveOrder(value);
    Waiter.tellChef(value);
})




