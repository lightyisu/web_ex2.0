var data=sourceData[0].sale;
var data2=sourceData[1].sale;
var data3=sourceData[2].sale;
var Color=['#277DF4','orange','red']
function drawLineChart(data,lineColor){
    var axisHeight=350;
    var axisWidth=790;
    var LCC=document.getElementById('lineCartCanvas');
    var ctx=LCC.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle='black';
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 380);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(15,370);
    ctx.lineTo(805,370);
    ctx.stroke();
    var radius=4;
    var pointFill='white';
    var pointStroke='#277DF4';
    
    var lineWidth=5;
    var gap=65;
    var maxValue=findMax(data);
    
    for(let i=0;i<data.length;i++){
        var lineX;
        var lineY;
        let pointHeight=350-(data[i]/maxValue*350)+30;
        ctx.beginPath();
        ctx.strokeStyle=pointStroke;
        ctx.fillStyle=pointFill;
        ctx.arc(60+gap*i,pointHeight,radius,0,Math.PI*2);
        ctx.stroke();
        if(i!=0){
            ctx.beginPath();
            ctx.strokeStyle=lineColor;
            ctx.moveTo(lineX,lineY);
            ctx.lineTo(60+gap*i,pointHeight);
            ctx.stroke();
        }
         lineX=60+gap*i;
         lineY=pointHeight;
    }
}
window.onload=drawLineChart(data,Color[0]);
window.onload=drawLineChart(data2,Color[2]);
window.onload=drawLineChart(data3,Color[1]);


function findMax(data){
    var max=0;
    for(let i=0;i<data.length-1;i++){
        if(data[i+1]>data[i]){
            max=data[i+1];
        }
    }
    return max;
}
function checkMain(){
    var region=document.getElementById('region-radio-wrapper');
    var selectAll=region.querySelectorAll('input');
    
   
    

}
window.onload=checkMain();
