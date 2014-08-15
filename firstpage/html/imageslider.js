var i=0;
var ar=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
function moveImage(ids)
{
      if(ids=="nextImage")
      {  if(i==7){
          i=0;
      }
       i++;
          document.getElementById('outer').style.backgroundImage="url("+ar[i]+")";
      }
    else if(ids=="prevImage")
      {if(i==0)
      {
          i=7;
      }
          i--;
          document.getElementById('outer').style.backgroundImage="url("+ar[i]+")";
      }




}

function imageLoad(){
    var a=Math.floor(Math.random()*8);
    var b=ar[a];
    document.getElementById('outer').style.backgroundImage="url("+ar[a]+")";
}
function play()
{
    if(i==7)
    {
            i=0;
    }
    document.getElementById('outer').style.backgroundImage="url("+ar[i]+")";
    i++;
     setTimeout(play,5000);
}