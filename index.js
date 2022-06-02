document.getElementById('start').addEventListener('click', function(){
    document.getElementById('index').style.display = "none";
    document.getElementById('set-1').style.display = "block";
}); //테스트 스타트



document.getElementById('answer-11').addEventListener('click', function(){
    document.getElementById('set-1').style.display = "none";
    document.getElementById('set-2').style.display = "block";
});

document.getElementById('answer-12').addEventListener('click', function(){
    document.getElementById('set-1').style.display = "none";
    document.getElementById('set-2').style.display = "block";
});


//여기서부터 결과


document.getElementById('answer-21').onclick = function(){
    document.getElementById('set-2').style.display = "none";
    if(document.querySelector('input[name="1"]:checked').value == "answer-11")
        {document.getElementById('result-1').style.display = "block"}
     //IN
    
else {document.getElementById('result-3').style.display = "block"};
        //EN
                  }; //21 눌렀을 때

document.getElementById('answer-22').onclick = function(){
    document.getElementById('set-2').style.display = "none";
    if(document.querySelector('input[name="1"]:checked').value == "answer-11")
        {document.getElementById('result-2').style.display = "block"}
     //IS
    
else {document.getElementById('result-4').style.display = "block"};
        //ES
                  }; //22 눌렀을 때
    
    
    
                                  