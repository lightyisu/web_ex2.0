function drawBarChart(){
    var height='500';
    var width='1200';
    var axisWidth=755;
    var axisHeight=340;
    var barWidth=40;
    var gap=75;
    var barColor='#277DF4';
    var axisColor='black';
    var maxValue=findMax();
   
    var ns="http://www.w3.org/2000/svg";
    var svg=document.createElementNS(ns,'svg');
    svg.setAttribute('width',width);
    svg.setAttribute('height',height);
    svg.setAttribute('version','1.1');
    var body=document.body;
    body.appendChild(svg);
    var line=document.createElementNS(ns,'line');
    line.setAttribute('x1','25');
    line.setAttribute('y1','25');
    line.setAttribute('x2','25');
    line.setAttribute('y1','450');
    line.setAttribute('stroke','black');
    line.setAttribute('stroke-width','3');
    svg.appendChild(line);
    var line2=document.createElementNS(ns,'line');
    line2.setAttribute('x1','10');
    line2.setAttribute('y1','420');
    line2.setAttribute('x2','920');
    line2.setAttribute('y2','420');
    line2.setAttribute('stroke','black');
    line2.setAttribute('stroke-width','3');
    svg.appendChild(line2);
    var barX=0;
    for(let i=0;i<sourceData[0].sale.length;i++){
        var bar=document.createElementNS(ns,'rect');
        let data=sourceData[0].sale[i];
        let rectHeight=(data/maxValue)*378;
        barX+=gap;
        bar.setAttribute('x',barX);
        bar.setAttribute('y','420');
        bar.setAttribute('width','30');
        bar.setAttribute('height',rectHeight);
        bar.setAttribute('fill',barColor);
        bar.setAttribute('transform','rotate(180)');
        bar.setAttribute('transform-origin',barX+'px'+' '+'420px');
        svg.appendChild(bar);
    }


}
drawBarChart();
function findMax(){
    var max=0;
    for(let i=0;i<sourceData[0].sale.length-1;i++){
        if(sourceData[0].sale[i+1]>sourceData[0].sale[i]){
            max=sourceData[0].sale[i+1];
        }
    }
    return max;
}