function check(){
    var a=document.getElementById('salary');
    var decimal=  /^[+-]?[0-9]+\.[0-9]+$/;


    if(a.value.match(decimal))
    {
        alert('Correct, try another...');
        return true;
    }
    else
    {
        alert('Wrong...!')
        return false;
    }

    alert('hello');

}