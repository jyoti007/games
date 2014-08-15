var c;
function lighted(c)
{

   var x=c.src;
    document.getElementById("main").style.zIndex=-1;
 document.getElementById("main").style.opacity=-1;
    document.getElementById("main").style.zIndex=-1;
  // document.getElementById("main").style.visibility="hidden";
     var y=document.createElement("div");
    y.setAttribute("id","image");
    y.textContent("")
  document.body.appendChild(y);
    var z=document.createElement("img");
    z.setAttribute("src",x) ;
    z.setAttribute("id","image_on");

 y.appendChild(z);

}