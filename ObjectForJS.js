//餐厅类
function Restaurant(cash,seats,staff){
    this.cash=cash;
    this.seats=seats;
    this.staff=staff;
    this.hire=function(a){
        console.log(a.name+'  is be hired');
        staff.push(a.name);
    }
    this.fire=function(a){
        console.log(a.name+'   is be fired');
        var num=staff.indexOf(a.name);
        staff.splice(num,1);
    }
}
//职员类
function Employee(ID,name,salary){
    this.ID=ID;
    this.name=name;
    this.salary=salary;
}
//职员类原型方法
Employee.prototype.doWork=function(){
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
var Waiter=function(ID,name,salary){
    Employee.call(this,ID,name,salary);
};
Waiter.prototype.serveOrder=function(dish){
    console.log('Waiter:I got your order and your order is'+' '+dish)
}
Waiter.prototype.tellChef=function(dish){
    
    console.log('Waiter:chef,we need do'+' '+dish);
}
Waiter.prototype.passDish=function(){
    console.log('Waiter:ok,I got the dish,go ahead');
}

var ProxySingleWaiter=(function(){
    var instance;
    return function(ID,name,salary){
        if(!instance){
            instance=new Waiter(ID,name,salary);
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
var Chef=function(ID,name,salary){
    Employee.call(this,ID,name,salary);
};
Chef.prototype.cook=function(dish){
    console.log('Chef:Got it I will do'+' '+dish);

}
Chef.prototype.passDish=function(){
    console.log('Chef:I am done,get it to customer');
}

var ProxySingleChef=(function(){
    var instance;
    return function(ID,name,salary){
        if(!instance){
            instance=new Chef(ID,name,salary);
        }
        return instance;
    }
})();


//顾客类
function Customer(){
    this.goseat=function(){
    console.log('Customer:I am on the seat');    
    }
    this.eat=function(){
        console.log('Enjoy your meal');
    }
}
Customer.prototype.order=function(dish){
    console.log('Customer:I need a '+' '+dish);
    return dish;
}
Customer.prototype.enjoyDeal=function(){
    console.log('Customer:I got It and hope enjoy it');
}

//菜品类
function Dishes(name,cost,price){
    this.name=name ;
    this.cost=cost;
    this.price=price;
}

var menu=['红烧鲫鱼','豆腐','龙虾','鱼','米饭','蛋糕','北京烤鸭','烧鱼头',' 瓜丝儿','拌海蜇','龙须菜'];

function WorkForU(){
    var customer1=new Customer();
    customer1.goseat();
   
   var menuDishChoose=menu[random(0,menu.length-1)];
    var dish=customer1.order(menuDishChoose);
    var waiter=ProxySingleWaiter(001,'sarly',4200)
    waiter.serveOrder(dish);
    waiter.tellChef(dish);
    var chef=ProxySingleChef(002,'jim',5000);
    chef.cook(dish);
    chef.passDish();
    waiter.passDish();
    customer1.enjoyDeal();

}
function random(min,max) {
    return Math.floor(Math.random()*(max-min)) + min;
  }
var customerNum=7;
for(let i=0;i<customerNum;i++){
    WorkForU();
}







