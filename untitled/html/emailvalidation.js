function chec(){
    var a=document.getElementById('emailid');
    var em=/^[a-zA-Z0-9#_^.]+@[a-zA-Z.]+$/;
    if(a.value.match(em))
    {
        alert('correct');
    }
    else
    {
        alert('incorrect');
    }
               alert('hello');

}
function multiply()
{
    var a=document.getElementById('number1').value;
    var b=document.getElementById('number2').value;
    var c=a*b;

    document.getElementById('ABCD').innerHTML=c;
         alert('hello');
}

function daysleft(){
         var today=new Date();
    document.write(today);
    var date=today.getDate();
    document.write(date);
    var mnth=today.getMonth();
    var a=mnth;
    document.write(mnth);
    var sum=0;
    for(i=mnth; i<=12;i++)
    {
                        if(i==a)
                        {
                                  if(i==2)
                                  {
                                      if(i%4==0)
                                      {
                                          var b=29-date;
                                          sum=sum+b;
                                      }
                                      else
                                      {
                                                    b=28-date;
                                          sum=sum+b;
                                      }

                                  }else if(i%2!=0 || i==8)
                                  {
                                                          var c=31-date;
                                      sum=sum+c;
                                  }



                        }   else  if(i==12)
                        {
                            sum=sum+25;
                        }
                        else if(i%2!=0 || i==8)
                        {
                            sum=sum+31;
                        }
                        else
                        {
                            sum=sum+30;
                        }




    }

    document.write(sum);
    alert('the left days are'+sum);


}

function animation() {
var ar=["green","red","yellow","orange","pink"];
    var i=0;
setInterval(function(){
    document.getElementById("center").style.margin=i+'px';
    i++;


},1000);

    var j=10;


}
