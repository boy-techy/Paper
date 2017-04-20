/**
 * Created by yatindra on 20/4/17.
 */
for(let i=0; i<5;i++){
    for(let j=0; j<Math.pow(2,i);j++){
        var width = 90/(Math.pow(2,i));
        var para = document.createElement("p");
        var node = document.createTextNode("T");
        para.appendChild(node);
        para.setAttribute("style","width:"+width+"%"+";"+"float:left"+";"+"text-align:center");

        var element = document.getElementById("div");
        element.appendChild(para);
    }
}