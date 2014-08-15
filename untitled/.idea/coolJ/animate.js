/**
 * Created with IntelliJ IDEA.
 * User: three
 * Date: 25/6/14
 * Time: 10:18 AM
 * To change this template use File | Settings | File Templates.
 */
var img_data=["1.jpg","2.jpg","3.jpg","4.jpg"];
var i=0;
var ste;
var x;
function onds()
{
    document.getElementById("next").style.visibility="hidden";
    document.getElementById("prev").style.visibility="hidden";
    document.getElementById("stop").style.visibility="hidden";
    document.getElementById("play").style.visibility="hidden";
    document.getElementById('imagess').src=img_data[i];
}
function start()
{
    document.getElementById("next").style.visibility="visible";
    document.getElementById("prev").style.visibility="visible";
    document.getElementById("stop").style.visibility="visible";
    document.getElementById("play").style.visibility="visible";
}

 function play()
{
    document.getElementById("next").style.visibility="hidden";
    document.getElementById("prev").style.visibility="hidden";
 ste=  setInterval(function()
        {
            document.getElementById('imagess').src=img_data[i];
            i++;
            if(i==img_data.length)
            {
                           i=0;
            }
        }
        ,500);

}
function stop()
{

 window.clearInterval(ste);
    document.getElementById("next").style.visibility="visible";
    document.getElementById("prev").style.visibility="visible";
}
     function next()
     {
         document.getElementById("stop").style.visibility="hidden";
         document.getElementById("play").style.visibility="hidden";
         i++;
         if(i==img_data.length)
         {
            i=0;
         }
         document.getElementById('imagess').src=img_data[i];
     }
function pre()

{

    i--;
    if(i<0)
    {
        i=img_data.length-1;

    }
    alert(i);
    document.getElementById('imagess').src=img_data[i];

}