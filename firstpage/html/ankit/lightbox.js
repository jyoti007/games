var i=0;
function light(id)
{
    if(i>0){
        document.removeChild('div');
        div.removeChild('im');

    }

    var x=id.src;
    alert(x);
    var div=document.createElement('div');
   div.setAttribute("class","light");
    document.body.appendChild(div);
    var im=document.createElement('img');

    im.setAttribute("id","light");
    im.setAttribute("src",x);
    div.appendChild(im);

    id.style.visibility="hidden";

    document.body.style.color='black';

    //i++;

}