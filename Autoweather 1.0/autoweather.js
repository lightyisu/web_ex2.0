//基于WEB的AJAX desktop天气控件 使用jQuery3.4.1库 AJAX
var api=$.ajax('https://free-api.heweather.net/s6/weather/now?location=hefei&lang=en&key=2a1de23a69cf49f4925e04ab1a6c9167',{
    method:'GET'
}).done(function(data){
        desktopWeather(data);
}).fail(function(xhr,status){
        retry();
        failOut(xhr,status);
}).always(function(){
    console.log('完成获取天气数据操作（并不代表成功');
})
//天气获取成功的回调函数
function desktopWeather(data){
    var basic=data.HeWeather6[0].basic;
        var location=basic.admin_area+' '+basic.location;
        var updateTime=data.HeWeather6[0].update.loc;
        var weather=data.HeWeather6[0].now;
        var tem=weather.tmp;
        var cloud=weather.cond_txt;
        
        var timeHalf=$('ul#time-half');
        var li=$('<li>');
        li.addClass('time-half');
        li.addClass('weather');
        li.text(location);
        timeHalf.append(li);
        var li2=$('<li>');
        li2.addClass('time-half');
        li2.addClass('weather');
        li2.text(tem+'℃');
        timeHalf.append(li2);
       var li3=$('<li>');
       li3.addClass('time-half weather');
       li3.text(cloud);
       timeHalf.append(li3);

       var li4=$('<li>');
       li4.addClass('time-half weather');
       li4.text('update on:'+updateTime);
       timeHalf.append(li4);
       li4.css('font-size','13px');
    



}
//天气获取失败的回调函数
function failOut(xhr,status){
  let timeHalf=$('ul#time-half');
  
  var li5=$('<li>');
  li5.addClass('time-half weather');
  li5.text('不能获取到天气数据，请检查网络');
  timeHalf.append(li5);
  li5.css('font-size','10px')


}
setInterval(() => {
    window.location.reload();
}, 3600000);
function retry(){
    var p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },30000)
    }).then(()=>{
        window.location.reload();
        console.log('正在重连.....重连已完成（并不代表重连成功）');
    })
}