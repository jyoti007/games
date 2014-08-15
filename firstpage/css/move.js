
function myFunction() {
    var ar=['red','blue','green'];
    var i=0;
    setInterval(
        function(){
            document.getElementById('hr').style.background =ar[i];i++;
    if(i>3)
    {
        i=0;

    }}, 3000);
}

function mv() {
    var i=250;
    var j=0;
    setInterval(
        function(){

        document.getElementById('but').style.left =i+'px';
            document.getElementById('but').style.top =j+'px';
           if((i>=250&&i<500)&&(j>=0&&j<=250) )
           {
                 i=i+10;
                        j=j+10;
           }
            else if((i<=500&&i>250) &&(j<500&&j>=250))
           {
              i=i-10;
               j=j+10;
           }
           else if((i<280 && i>0) && (j<=500 && j>250))
            {
                j=j-10;
                i=i-10;
            }
            else if((i>=0&&i<=250)&&(j<=250&&j>=0))
           {

               j=j-10;
               i=i+10;
           }
            }, 200);

}