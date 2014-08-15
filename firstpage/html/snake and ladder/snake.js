var counter=1;
var x=0;
var my=new Array(10);
var text='';
var k=100;
var a=0;
var b=0;
var ab=0;
    function draw()

{          var colr=["red","lightblue","green","white"];

         for(var i=1;i<=10;i++)
         {
                     my[i]=new Array(10);
             if(i%2==0)     {
                 k=k-9;
                 for(var j=1;j<=10;j++)
                 {


                     var z=colr[ab];
                     ab++;
                     if(ab==4){
                         ab=0;
                     }
                     text+='<input type="image" id="'+k+'" class="cls_btn" readonly value="'+k+'" style="text-align:center;font-size:20px;color:black;cursor:pointer;width:70px;height:60px;border:1px solid black;box-shadow:1px 1px 1px 1px;opacity:1;background-color:'+z+'">';
                            k++;
                 }

             }else{
                 if(i==1){
                         k=100;


                 }else if(i==3)
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
                 }        else if(i==9)
                 {
                     k=20;
                 }
                 for(var j=1;j<=10;j++)
                 {
                     var z=colr[ab];
                     ab++;
                     if(ab==4){
                         ab=0;
                     }
                     text+='<input type="image" id="'+k+'" class="cls_btn" readonly value="'+k+'" style="text-align:center;font-size:20px;color:black;cursor:pointer;width:70px;height:60px;border:1px solid black;box-shadow:1px 1px 1px 1px;opacity:1;background-color:'+z+'">';
                     k--;
                 }
             }

             text+='<br>';
         }

                          document.getElementById('game').innerHTML=text;
    document.getElementById('img').src='sn1.gif';
    document.getElementById('img').style.visibility="visible";
    document.getElementById('img1').src='sn2.gif';
    document.getElementById('img1').style.visibility="visible";
    document.getElementById('img2').src='sn3.gif';
    document.getElementById('img3').style.visibility="visible";
    document.getElementById('img3').src='lad1.gif';
    document.getElementById('img4').style.visibility="visible";
    document.getElementById('img4').src='lad2.gif';

    document.getElementById('img5').src='lad3.gif';
    document.getElementById('img5').style.visibility="visible";

    document.getElementById('img6').src='lad4.gif';
    document.getElementById('img6').style.visibility="visible";



}
function getRandomNumber()
{
    x=Math.floor(Math.random()*6)+1;


     if(counter%2==0){

        document.getElementById('player2').value=x;
        if(a>0)
        {
            document.getElementById(a).src="";
        }
        a=a+x;
        if(a>100){
            a=a-x;
        }
        else if(a==100){
            document.getElementById(a).src='2.jpg';
            alert("player 2 won the match");
        }else if(a==6)
        {
            a=25;
        }else if(a==23)
        {
            a=97;
        }
        else if(a==35)
        {
            a=86;
        }else if(a==30)
        {
            a=52;
        }
        else if(a==99)
        {
            a=3;
        }
        else if(a==73)
        {
            a=13;
        }
        else if(a==77)
        {
            a=45;
        }  else if(a==b){






            b=1;
            document.getElementById(b).src='3.jpg';

        }
        document.getElementById(a).src='2.jpg';
        //document.getElementById(a).style.width='10px';
        //document.getElementById(a).style.height='10px';
        counter++;

    }
    else{
        document.getElementById('player1').value=x;
        if(b>0)
        {
            document.getElementById(b).src="";
        }
        b=b+x;
        if(b>100){
            b=b-x;
        }
        else if(b==100){
            document.getElementById(b).src='3.jpg';
            alert("player 1 won the match");
        }
        else if(b==6)
        {
            b=25;
        }else if(b==23)
        {
            b=97;
        }
        else if(b==35)
        {
            b=86;
        }else if(b==30)
        {
            b=52;
        }
        else if(b==99)
        {
            b=3;
        }
        else if(b==73)
        {
            b=13;
        }
        else if(b==77)
        {
            b=45;
        }else if(a==b){






                a=1;
                document.getElementById(a).src='2.jpg';

        }
        document.getElementById(b).src='3.jpg';
        counter++;

    }        }



function buttons(){

  document.getElementById('btn1').style.visibility="visible";
    document.getElementById('player1').style.visibility="visible";
    document.getElementById('player2').style.visibility="visible";

}

