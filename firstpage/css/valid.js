function req()
{
    var x=document.forms["reg"]["text1"].value;
    if(x=="")
    {
        alert("Please fill the value of user name...");
    }
    var y=document.forms["reg"]["pass"].value;
    var y1=document.forms["reg"]["cpass"].value;

   if(y=="" || y1=="")
    {
        alert("Please fill the value of Password...");
    }
   else if(y!=y1)
   {
       alert("password not match");
   }
    else if(y.length<9)
   {
       alert("Paswword length is small") ;
   }

    var z=document.forms["reg"]["email"].value;
     if(z=="")
     {
         alert("Please fill the value of Email...");
     }
    else if(z!==/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ )
     {
         alert("Please fill the valid  Email...");
     }
   var ph=document.forms["reg"]["numb"].value;
          if(ph!=10)
          {
              alert("Please enter valid phone number");
          }
    else if(ph=="")
          {
              alert("Please fill the number");
          }
}
function dat()
{
   var da= new Date();
    var d=da.getDay();
    var mon=da.getMonth();
    var year=da.getYear();
    var yea=da.getFullYear();
    var mi=da.getMinutes();
    var hou=da.getHours();
    var sec=da.getSeconds();
    var df=da.getDate();
    if(hou<12)
    {
     var x= "A.M";
    }
    else
    {
       var x= "P.M";
    }
    var data=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.write("Today is : "+data[d]+"<br>");
    document.write("Current time  is : "+hou +x+ ":"+mi+":"+sec+"<br>");
    document.write("Date  is : "+df + "-"+mon+"-"+yea+"<br>");
    document.write(mon);
    document.write(year);
    document.write(yea);
    document.write(hou);
    document.write(mi);
    document.write(sec);

}

function prin()
{
    window.print();
}
function areatri(a,b,c)
{
    document.write(a);
    document.write(b);
    document.write(c);

    var ar=(a+b+c)/2;
    var tr=Math.sqrt(ar*(ar-a)*(ar-b)*(ar-c));
    document.write(tr);
}
function rotat()
{
    var str="W3SCHOOLS";

}
function check()
{
    var re = /^[0-9]+$/;
    var a=document.getElementById("text1");
    if(a.value.match(re))
    {
        alert("no correct");
    }
    else
    {
        alert(false);
    }


}

function compute()
{
    var x=Math.floor(Math.random()*10)+1;

    var no= prompt("Assume a number and enter it ") ;
    if(no==x)
    {
             alert("matched");
    }
    else
    {
        alert("not matched");
    }
}

function getur()
{
    alert(document.url);
}
function conversctof()
{
    var c=parseInt(document.getElementById("cel").value);

       var ctof=  c * 9 / 5 + 32;

    document.getElementById("far").value=ctof;

}
function converftoc()
{
    var f=parseInt(document.getElementById("far").value);
    var ftoc=  (f - 32) * 5 / 9;
    document.getElementById("cel").value=ftoc;
}
function add()
{
    var x=parseInt(document.getElementById("ist").value);
    var y=parseInt(document.getElementById("2nd").value);
    var z=x+y;
    document.getElementById("fr").innerHTML=z;
}
function sub()
{
    var x=parseInt(document.getElementById("ist").value);
    var y=parseInt(document.getElementById("2nd").value);
    var z=x-y;
    document.getElementById('fr').innerHTML=z;
}
function mul()
{
    var x=parseInt(document.getElementById("ist").value);
    var y=parseInt(document.getElementById("2nd").value);
    var z=x*y;
    document.getElementById('fr').innerHTML=z;
}
function div()
{
    var x=parseInt(document.getElementById("ist").value);
    var y=parseInt(document.getElementById("2nd").value);
    var z=x/y;
    document.getElementById('fr').innerHTML=z;
}

function christmas()
{
    var x=0;
    var da= new Date();
    var d=da.getDate();
    var mon=da.getMonth();
    var yea=da.getFullYear();
    document.write("Date  is : "+d + "-"+mon+"-"+yea+"<br>");


     for(var i=mon;i<=12;i++)
     {
         if(i==1)
         {
             x=x+31;
         }
         if(i==2)
         {
             if(yea%4==0)
             {
                 x=x+29;
             }
             else
             x=x+28;
         }
         if(i==3)
         {
             x=x+31;
         }
         if(i==4)
         {
             x=x+30;
         }
         if(i==5)
         {
             x=x+31;
         }
         if(i==6)
         {
             x=x+30;
         }
         if(i==7)
         {
             x=x+31;
         }
         if(i==8)
         {
             x=x+31;
         }
         if(i==9)
         {
             x=x+30;
         }
         if(i==10)
         {
             x=x+31;
         }
         if(i==11)
         {
             x=x+30;
         }
         if(i==12)
         {
           x=x+24;
         }


     }
    x=x-d;
        document.write(da);
    document.write(x);
}