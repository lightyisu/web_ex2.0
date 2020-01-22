var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');

//设置捆绑命令 命令接口
var setCommand=function(button,command){
    button.onclick=function(){
        command.execute();//命令对象的执行函数
    }
}

//功能
var MenuBar={
    refresh:function(){
        console.log('刷新菜单');
    }
};
var SubMenu={
    add:function(){
        console.log('添加子菜单');
    },
    del:function(){
        console.log('删除子菜单');
    }

}
//命令类的封装
var refreshMenuBarCommand=function(receiver){
    this.receiver=receiver;
};
refreshMenuBarCommand.prototype.execute=function(){
    this.receiver.refresh();
}
var AddSubMenuCommand=function(receiver){
    this.receiver=receiver;
}
AddSubMenuCommand.prototype.execute=function(){
    this.receiver.add();
}
var DelSubMenuCommand=function(receiver){
    this.receiver=receiver;
}
DelSubMenuCommand.prototype.execute=function(){
    this.receiver.del();
}

var RMBC=new refreshMenuBarCommand(MenuBar);
var ASMC=new AddSubMenuCommand(SubMenu);
var DSMC=new DelSubMenuCommand(SubMenu);
setCommand(btn1,RMBC);
setCommand(btn2,ASMC);
setCommand(btn3,DSMC);