var text="";
k=100;
var i;
var pos;
var y;
var x;
function start()
{
    document.getElementById("dice").style.visibility="hidden";
    document.getElementById("timer").style.visibility="hidden";
    document.getElementById("get").style.visibility="hidden";
    document.getElementById("player1").style.visibility="hidden";
    document.getElementById("red1").style.visibility="hidden";
    document.getElementById("red2").style.visibility="hidden";
    document.getElementById("red3").style.visibility="hidden";
    document.getElementById("red4").style.visibility="hidden";
    document.getElementById("red5").style.visibility="hidden";
    document.getElementById("red6").style.visibility="hidden";
    document.getElementById("red7").style.visibility="hidden";
    document.getElementById("player2").style.visibility="hidden";
}
function draw()
{

    document.getElementById("draw").style.visibility="hidden";
    for(var i=1;i<=10;i++)
    {
        if(i%2==0){
            k=k-9;
            for(var j=1;j<=10;j++)
            {

                text +="<input type='button' id="+k+" value="+k+" style='text-align: center;font-weight: bold;font-size:18px;width:50px;height:50px;margin-bottom:0px;margin-left:0px;color:red;'>";
                k++;

            }

        }   else{
            if(i==1)
            {
                k=100;
            }
            else if(i==3)
            {
                k=80;
            }
            else if(i==5)
            {
                k=60;
            }
            else if(i==7)
            {
                k=40;
            }
            else if(i=9)
            {
                k=20;
            }
            for(var j=1;j<=10;j++)
            {


                text +="<input type='button' id="+k+" value="+k+" style=' text-align: center;font-weight: bold;font-size:18px; width:50px;height:50px;margin-bottom:0px;margin-left:0px;color:blue;'>";
                k--;

            }

        }
        text +="<br>";
    }


    document.getElementById("board").innerHTML=text;
    document.getElementById("player1").style.visibility="visible";
    document.getElementById("dice").src='images/dice.jpg';
    document.getElementById("player1").src='images/2.jpg';
    document.getElementById("player2").src='images/3.jpg';

    document.getElementById("dice").style.visibility="visible";
    document.getElementById("timer").style.visibility="visible";
    document.getElementById("get").style.visibility="visible";

    document.getElementById("red1").style.visibility="visible";
    document.getElementById("red2").style.visibility="visible";
    document.getElementById("red3").style.visibility="visible";
    document.getElementById("red4").style.visibility="visible";
    document.getElementById("red5").style.visibility="visible";
    document.getElementById("red6").style.visibility="visible";
    document.getElementById("red7").style.visibility="visible";
    document.getElementById("player2").style.visibility="visible";

    document.getElementById("player1").style.marginLeft='-750px';
    document.getElementById("player1").style.marginTop='500px';
    document.getElementById("player2").style.marginLeft='-750px';
    document.getElementById("player2").style.marginTop='500px';
    y=parseInt(y);
    x=parseInt(x);
}
var counter=1;
;
function move()
{

    i=Math.floor((Math.random()*6)+1);
    document.getElementById("get").value=i;
    if(counter%2==0)
    {
        y=document.getElementById("player1").style.marginLeft;
        x=document.getElementById("player1").style.marginTop;
    }
    else
    {
        y=document.getElementById("player2").style.marginLeft;
        x=document.getElementById("player2").style.marginTop;
    }
    y=parseInt(y);
    x=parseInt(x);

    for(var p=1;p<=i;p++)
    {
        a=x;
        b=y;
        if((y<-300&&y>=-750)&&((x==500)||(x==400)||(x==300)||(x==200)||(x==100)))
        {
            y=y+50;


            if((x==400&&y==-300)&&(p==i))
            {
                x=500;
            }
            else  if((x==100&&y==-700)&&(p==i))
            {
                x=300;
                y=-600;
            }
            else if((x==200&&y==-300)&&(p==i))
            {
                x=300;
                y=-350;
            }
            else if((x==200&&y==-400)&&(p==i))
            {
                x=50;
                y=-350;
            }
            else if((x==300&&y==-400)&&(p==i))
            {
                x=200;
                y=-500;
            }
            y=y+"px";
            x=x+"px";
            if(counter%2==0)
            {
                document.getElementById("player1").style.marginLeft=y;
                document.getElementById("player1").style.marginTop=x;
            }
            else
            {
                document.getElementById("player2").style.marginLeft=y;
                document.getElementById("player2").style.marginTop=x;
            }
            x=parseInt(x);
            y=parseInt(y);
        }
        else if((y==-300&&((x==500)||(x==400)||(x==300)||(x==200)||(x==100)))||(y==-750&&((x==450)||(x==350)||(x==250)||(x==150))))
        {
            x=x-50;


            x=x+"px";
            if(counter%2==0)
            {
                document.getElementById("player1").style.marginLeft=y;
                document.getElementById("player1").style.marginTop=x;
            }
            else
            {
                document.getElementById("player2").style.marginLeft=y;
                document.getElementById("player2").style.marginTop=x;
            }
            x=parseInt(x);

        }
        else if(( y>-750)&&((x==450)||(x==350)||(x==250)||(x==150)||(x==50)))
        {

            y=y-50;
            if((x==450&&y==-650)&&(p==i))
            {
                x=250;
                y=-600;
            }
            else  if((x==450&&y==-450)&&(p==i))
            {
                x=350;
                y=-500;
            }
            else  if((x==50&&y==-750)&&(p==i))
            {
                document.getElementById("board").style.display="none";
                document.getElementById("draw").style.visibility="visible";
                start();
                if(counter%2==0)
                {
                    alert("Player 1 is winner" );

                }
                else
                {
                    alert("Player 2 is winner" );
                }


            }
            else if((x==50&&y==-750)&&(p!=i))
            {
                x=a;
                y=b;
                break;
            }
            x=x+"px";
            y=y+"px";
            if(counter%2==0)
            {
                document.getElementById("player1").style.marginLeft=y;
                document.getElementById("player1").style.marginTop=x;
            }
            else
            {
                document.getElementById("player2").style.marginLeft=y;
                document.getElementById("player2").style.marginTop=x;
            }
            y=parseInt(y);
            x=parseInt(x);
        }
    }
    counter++;
}
