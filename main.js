var icons = new Array('icons/00.gif','icons/01.gif','icons/02.gif','icons/03.gif','icons/04.gif','icons/05.gif','icons/06.gif','icons/07.gif','icons/08.gif','icons/09.gif')
var interval = setInterval(function(){
    var date= new Date();
    var hrs= String(date.getHours());
    var mns= String(date.getMinutes());
    var scn= String(date.getSeconds());

    if(hrs<10){
        $('#hrs1').attr('scr',icons[0]);
        $('#hrs2').attr('scr',icons[hrs.charAt(0)]);
    }
    else{
        $('#hrs1').attr('scr',icons[hrs.charAt(0)]);
        $('#hrs2').attr('scr',icons[hrs.charAt(1)]);
    }

    if(mns<10){
        $('#mns1').attr('scr',icons[0]);
        $('#mns2').attr('scr',icons[mns.charAt(0)]);
   }
   else{
        $('#mns1').attr('scr',icons[mns.charAt(0)]);
        $('#mns2').attr('scr',icons[mns.charAt(1)]);
   }

   if(hrs<10){
        $('#scn1').attr('scr',icons[0]);
        $('#scn2').attr('scr',icons[scn.charAt(0)]);
    }
    else{
        $('#scn1').attr('scr',icons[scn.charAt(0)]);
        $('#scn2').attr('scr',icons[scn.charAt(1)]);
    }
},1000)