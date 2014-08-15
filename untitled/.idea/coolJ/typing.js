/**
 * Created with IntelliJ IDEA.
 * User: New
 * Date: 19/6/14
 * Time: 3:52 PM
 * To change this template use File | Settings | File Templates.
 */
var data=["May today bring you the joy that escaped from your reach yesterday; the focus to strive for a better tomorrow; the motivation to live victoriously today.",
    "If a situation does not work then let it be. It is never okay to seek revenge. Inner peace and forgiveness are sources of strength.","Distance can separate you and me, but can never separate you from me.",
    "If a man empties his purse into his head,no man can take it away from him,for an investment in knowledge pays the best interest."];

function start()
{

    document.getElementById('one').value=data[y];
    document.getElementById("two").disabled=false;
    document.getElementById('stop').disabled=false;
    document.getElementById('reset').disabled=false;
    document.getElementById('next').disabled=false;
    document.getElementById('text1').disabled=false;
    document.getElementById('error').disabled=false;
    document.getElementById("timer").innerHTML=k+":"+j+":"+i;

    setInterval(function()
    {
        if(stopper==true){
            i=i+1;
            if(i==59)
            {
                j=j+1;
                i=0;
            }
            else if(j==59)
            {
                k=k+1;
                j=0;
            }

            document.getElementById("timer").innerHTML=k+":"+j+":"+i;
        }
        else
        {
            document.getElementById("timer").innerHTML=0+":"+0+":"+0;
        }
    },1000)

}
function set_data()
{
    i=00;
     j=00;
   k=00;
   count=0;
 text=[];
 error=0;
    y=Math.floor(Math.random()*data.length);
    document.getElementById('one').value=data[y];
    document.getElementById("two").disabled=true;
    document.getElementById('stop').disabled=true;
    document.getElementById('reset').disabled=true;
    document.getElementById('next').disabled=true;
    document.getElementById('text1').disabled=true;
    document.getElementById('error').disabled=true;
    document.getElementById("text1").value="";
    document.getElementById("error").value="";
    document.getElementById("two").value="";


}

function reset_data()
{
      document.getElementById("two").value="";
    document.getElementById("text1").value="";
    document.getElementById("error").value="";
    error=0;
}
stopper=true;

var l=0;
 var back=0;
    function displayunicode(e){
        var unicode=e.keyCode? e.keyCode : e.charCode;
        if(unicode==32)
        {
          count =count+1;
        }
 text=data[y];
       // var z=text.charCodeAt(0);
        var x=text.charCodeAt(l);

      if(unicode==x)
        {
          l++;
        }
        else if(unicode!=x)
        {
            if(unicode==8)
            {
              l--;
            }
            else if(unicode==37||unicode==38||unicode==39||unicode==40)
            {
                   return true;
            }
            else{
            error++;
                document.getElementById("error").value=error;
            l++;
            }
        }


    }
function stop()
{
   document.getElementById('text1').value=count;
    stopper=false;
}
