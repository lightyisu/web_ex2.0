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
    console.log('服务员:好的我拿到了你要的菜单了哦~你的菜单是' + ' ' + dish)
    return dish;
}
Waiter.prototype.tellChef = function (dish) {

    console.log('服务员：厨师快去做这些' + ' ' + dish + '趴');
}
Waiter.prototype.passDish = function (dish) {
    console.log('服务员：来了，我来上' + dish, '大家吃吧');
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
    console.log('厨师：好的我要开始做' + ' ' + dish);

}
Chef.prototype.passDish = function (dish) {
    console.log('厨师：我做完了' + dish + ',过来传菜~ ');
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
        console.log('顾客：我来了，让我想想我要吃点啥');
    }
    this.eat = function () {
        console.log('Enjoy your meal');
    }
}
Customer.prototype.order = function (dish) {
    var dishes1 = [];
    for (var i = 0; i < randomOrder(1, dish.length); i++) {
        dishes1.push(dish[randomOrder(0, dish.length)].name);
    }
    var dishes = [];
    for (let j = 0; j < dishes1.length; j++) {

        if (dishes.indexOf(dishes1[j]) == -1) {
            dishes.push(dishes1[j]);
        }

    }


    console.log('顾客：我需要 ' + ' ' + dishes);
    return dishes;
}
Customer.prototype.enjoyDeal = function (dish) {
    console.log('顾客：我已经吃完了' + dish + '味道还是可以的~');
}
Customer.prototype.pay = function () {
    console.log('顾客：啊哈我~都吃完了，用支付宝支付吧');
}
//菜品类
function Dishes(name, price, time) {
    this.name = name;
    this.price = price;
    this.time = time;
}


//为每一道菜创建对象
var D1 = new Dishes('红烧鲫鱼', 100, 8);
var D2 = new Dishes('豆腐', 100, 3);
var D3 = new Dishes('龙虾', 200, 10);
var D4 = new Dishes('鱼', 300, 5);
var D5 = new Dishes('米饭', 200, 2);
var D6 = new Dishes('蛋糕', 120, 3);
var D7 = new Dishes('北京烤鸭', 90, 10);
var D8 = new Dishes('拌海蜇', 70, 1);



var menu = [D1, D2, D3, D4, D5, D6, D7, D8];


//随机点餐方法                              
function randomOrder(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//顾客队列
var customerArr = ['C1', 'C2', 'C3'];


//员工：001服务员 002厨师 +顾客
var Waiter = new ProxySingleWaiter(001, 'melody', 1000);
var Chef = new ProxySingleChef(002, 'dam', 1000);
var customer = new Customer();


//餐厅工作开始------------------------------------------------------------
//                                                  ---------------------
//                                                           ------------
//Promise对象
function Work(){
var Pro = Promise.resolve();


Pro=Pro.then(() => {
    return new Promise(function (resolve, reject) {

        customer.goseat();

        setTimeout(resolve, 3000);

    })
}).then(() => {
    var d = customer.order(menu);
    Waiter.serveOrder(d);
    Waiter.tellChef(d);
    return d;
}).then((post) => {


    /**-----------------------------------做菜区------------ */
    var deskDishes = [];
    Chef.cook(post);
    //提取需要做的菜 （菜名+时间)
    var dishObjArr = [];

    for (let i = 0; i < post.length; i++) {
        for (let j = 0; j < menu.length; j++) {
            if (post[i] == menu[j].name) {
                var obj = {};
                obj.name = post[i];
                obj.time = menu[j].time;
                dishObjArr.push(obj);

            }
        }
    }
    //师傅做菜+传菜
    var promise = Promise.resolve();
    var promise2 = Promise.resolve();
    for (let i = 0; i < dishObjArr.length; i++) {
        promise = promise.then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(dishObjArr[i].name);
                }, dishObjArr[i].time * 1000);
            })
        }).then((value) => {
            Chef.passDish(value);
            Waiter.passDish(value);
            deskDishes.push(value);//将菜加到桌子上

            var dish = deskDishes[0];
            promise2 = promise2.then(() => {


                return new Promise((resolve, reject) => {

                    setTimeout(() => {
                        resolve(dish)
                    }, 3000);
                }).then((value) => {

                    customer.enjoyDeal(value);

                })

            })
            deskDishes.pop();
            if (i == dishObjArr.length - 1) {
                promise2.then(() => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve();
                        }, 3000);
                    })
                }).then(() => {
                    customer.pay()
                    return new Promise((resolve,reject)=>{
                        setTimeout(() => {
                            resolve();
                        }, 3000);
                    })
                }).then(()=>{
                    Work();
                })
            }

        })
    }
    /**------------------------做菜区------------------------ */


})


}
Work();