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

}
//厨师类
function Chef(ID,name,salary){
    Employee.call(this,ID,name,salary);
    this.doWork=function(){
        console.log('cooked a dish');
    }
}
//顾客类
function Customer(){
    this.order=function(){
        console.log('order a dish');
    }
    this.eat=function(){
        console.log('Enjoy your meal');
    }
}
//菜品类
function Dishes(name,cost,price){
    this.name=name ;
    this.cost=cost;
    this.price=price;
}
