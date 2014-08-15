var y;
var j;
var h=0;
var m=0;
var s=0;
var i=0;
var count=0;
var error=0;
var str1="";
var stopper=true;
var test=["If a man empties his purse into his head no man can take it away from him for an investment in knowledge pays the best interest.","The word data is the traditional plural form of the now-archaic datum neuter past participle of the Latin dare to givehence something given"];
function setText(){
y=Math.floor(Math.random()*2);
document.getElementById('typeText').value=test[y];
    document.getElementById('userType').disabled=false;
    document.getElementById('stop1').disabled=false;
    document.getElementById('next1').disabled=false;
    document.getElementById('reset1').disabled=false;
    document.getElementById('speed').disabled=false;



}

function matchText(e)
{
	var unicode=e.keyCode? e.keyCode : e.charCode

	var str=test[y];
    j=str.charCodeAt(i);
    if(e.keyCode==37 || e.keyCode==39)
    {
        return false;
    }

    if(unicode==8){
        i--;

    }
    else if(unicode==j)
{
	if(j==32)
	{

		count++;
	}
    i++;
}else
{

	error++;

    i++;
    document.getElementById('error').value=error;
}


}

function clears()
{

    document.getElementById('userType').value=" ";
    error=0;
    document.getElementById('error').value=0;
    document.getElementById('speed').value=0;
    document.getElementById('timer').value=0+":"+0+":"+0;
    i=0;
    j=0;


}

function timers()
{

   if(s<59){
       s++;
   }if(s==59)
   {
       document.getElementById('speed').value=count;
       count=0;
       if(m<60){
           s=0;
                 m++;

       }
   }
    if(m==60)
    {
        h++;

    }
    document.getElementById('timer').value=h+":"+m+":"+s;
    if(stopper){
    setTimeout(timers,1000);
    }



}
function stops(){


      stopper=false;


}

function setPage(){
    document.getElementById('error').disabled=true;
    document.getElementById('timer').disabled=true;

    document.getElementById('typeText').disabled=true;
    document.getElementById('userType').disabled=true;
    document.getElementById('stop1').disabled=true;
    document.getElementById('next1').disabled=true;
    document.getElementById('reset1').disabled=true;
    document.getElementById('speed').disabled=true;
    document.getElementById('userType').value=" ";

}

function changeText(id)
{
                       id.value="thanku";
}
           document.getElementById('butn').addEventListener("click",changeText);
function downMouse(id){
    id.style.color='pink';
    id.value="release me";


}

