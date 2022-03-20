function taoSoNgauNhien(){
    arr=[]
    for (let i =0; i<Math.floor(Math.random() *(20-10)) +10;i++){
        arr.push(Math.floor(Math.random() *(100-10)) +10);
        
    }
    
    document.getElementById('demo').innerHTML=arr.join(" , ");
}



function sapXep(){
    arr= document.getElementById('demo').innerHTML.split(',')
   if(document.getElementById('increase').checked == true){
        arr.sort(function(a, b){return a - b});
        document.getElementById('demoChanged').innerHTML=arr;
   }
   if(document.getElementById('decrease').checked == true){
    arr.sort(function(a, b){return b - a});
    document.getElementById('demoChanged').innerHTML=arr;
    }

} 


function themViTri(){
    number= document.getElementById('number').value
    index= document.getElementById('index').value
    if(number != "" && index != "" ){

        arr= document.getElementById('demoChanged').innerHTML.split(",")
        
        arr.splice( index, 0, number)
        document.getElementById('demoChanged').innerHTML=arr.join(" , ");
    }
    else{
        alert("dien day du thong tin")
    }
}