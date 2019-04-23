$(document).ready(function(){
   //1-rock
   //2-paper
   //3-scissors
function clear(){
   $("#wins").html("0");
   $("#remises").html("0");
   $("#loses").html("0");
   $winCount=0;
   $loseCount=0;
   $remisCount=0;
}
clear();
   


var $winCount=0;
var $loseCount=0;
var $remisCount=0;

function check(a){
    
    $(".levels").children().css("color", "white");
    $(".levels").children().css("font-weight", "normal");

    $(a).css("color","yellow");
    $(a).css("font-weight","bold");
}
var level=3;
check("#normal")

$("#tooeasy").click(function(){
    level = 1;
    check(this);
    clear();
})

$("#easy").click(function(){
    level = 2;
    check(this);
    clear();
})

$("#normal").click(function(){
    level = 3;
    check(this);
    clear();
});

$("#hard").click(function(){
    level = 4;
    check(this);
    clear();
})

$("#imposible").click(function(){
    level = 5;
    check(this);
    clear();
});

$("img").click(function(){

    var $imgScissors="<img src='scissors.png'></img>"
    var $imgRock="<img src='rock.png'></img>"
    var $imgPaper="<img src='paper.png'></img>"

if(level==1){
       
        var $id = parseInt($(this).attr("id"));
        var $pcImg, $myImg;

        switch($id){
         case 1:
         $myImg = $imgRock;
         $pcImg = $imgScissors;
         break;
         case 2:
         $myImg = $imgPaper;
         $pcImg = $imgRock
         break;
         case 3:
         $myImg = $imgScissors;
         $pcImg = $imgPaper;
         break;
     }
         $result="WYGRAŁEŚ!";
         $winCount++;
     
     $(".me").html($myImg);
     $(".pc").html($pcImg);
     
     
     $("#wins").html($winCount);
     $("#remises").html($remisCount);
     $("#loses").html($loseCount);
          
     $(".result").html($result);
     
} 
else if(level==2){

    var $id = parseInt($(this).attr("id"));
            var $pcChoice = Math.floor((Math.random()*100)+1);
            var $pcImg, $myImg;
         
            
         var $imgScissors="<img src='scissors.png'></img>"
         var $imgRock="<img src='rock.png'></img>"
         var $imgPaper="<img src='paper.png'></img>"
         
         
            switch($id){
             case 1:
             $myChoiceName = "Kamień";
             $myImg = $imgRock;

                if($pcChoice<=70){
                    $pcImg = $imgScissors;
                    $pcChoice = 3;
                } else if($pcChoice>=85){
                    $pcImg = $imgPaper;
                    $pcChoice = 2;
                }
                else{
                    $pcImg = $imgRock
                    $pcChoice = 1;
                }

             break;
             case 2:
             $myChoiceName = "Papier";
             $myImg = $imgPaper;

                
             if($pcChoice<=70){
                $pcImg = $imgRock;
                $pcChoice = 1;
            } else if($pcChoice>=85){
                $pcImg = $imgPaper;
                $pcChoice = 2;
            }
            else{
                $pcImg = $imgScissors;
                $pcChoice = 3;
            }


             break;
             case 3:
             $myChoiceName = "Nożyce";
             $myImg = $imgScissors;

            
             if($pcChoice<=70){
                $pcImg = $imgPaper;
                $pcChoice = 2;
            } else if($pcChoice>=85){
                $pcImg = $imgScissors;
                $pcChoice = 3;
            }
            else{
                $pcImg = $imgRock;
                $pcChoice = 1;
            }

             break;
         }




         
         $result="";
         
         if(($id==1 && $pcChoice==3)||($id==2 && $pcChoice==1)||($id==3 && $pcChoice==2)){
             $result="WYGRAŁEŚ!";
             $winCount++;
         
         }
         else if(($id==1 && $pcChoice==1)||($id==2 && $pcChoice==2)||($id==3 && $pcChoice==3)){
             $result="REMIS";
             $remisCount++;
         } else{
             $result="PRZEGRAŁEŚ";
             $loseCount++;
         }
         
         $(".me").html($myImg);
         $(".pc").html($pcImg);
         
         
         $("#wins").html($winCount);
         $("#remises").html($remisCount);
         $("#loses").html($loseCount);
         
         
         $(".result").html($result);
         

} 
else if( level==3){
                var $id = parseInt($(this).attr("id"));
                
            
         
            var $pcChoice = Math.floor((Math.random()*3)+1);
            var $pcChoiceName="";
            var $myChoiceName;
            var $pcImg, $myImg;
         
            
         var $imgScissors="<img src='scissors.png'></img>"
         var $imgRock="<img src='rock.png'></img>"
         var $imgPaper="<img src='paper.png'></img>"
         
            switch($pcChoice){
                case 1:
                $pcChoiceName = "Kamień";
                $pcImg=$imgRock;
                break;
                case 2:
                $pcChoiceName = "Papier";
                $pcImg=$imgPaper;
                break;
                default:
                $pcChoiceName = "Nożyce";
                $pcImg=$imgScissors;
                break;
            }
         
            switch($id){
             case 1:
             $myChoiceName = "Kamień";
             $myImg = $imgRock;
             break;
             case 2:
             $myChoiceName = "Papier";
             $myImg = $imgPaper;
             break;
             case 3:
             $myChoiceName = "Nożyce";
             $myImg = $imgScissors;
             break;
         }
         
         $result="";
         
         
         
         
         if(($id==1 && $pcChoice==3)||($id==2 && $pcChoice==1)||($id==3 && $pcChoice==2)){
             $result="WYGRAŁEŚ!";
             $winCount++;
         
         }
         else if(($id==1 && $pcChoice==1)||($id==2 && $pcChoice==2)||($id==3 && $pcChoice==3)){
             $result="REMIS";
             $remisCount++;
         } else{
             $result="PRZEGRAŁEŚ";
             $loseCount++;
         }
         
         $(".me").html($myImg);
         $(".pc").html($pcImg);
         
         
         $("#wins").html($winCount);
         $("#remises").html($remisCount);
         $("#loses").html($loseCount);
         
         
         $(".result").html($result);
         
}
else if(level==4){

    

    var $id = parseInt($(this).attr("id"));
            var $pcChoice = Math.floor((Math.random()*100)+1);
            var $pcImg, $myImg;
         
            
         var $imgScissors="<img src='scissors.png'></img>"
         var $imgRock="<img src='rock.png'></img>"
         var $imgPaper="<img src='paper.png'></img>"
         
         
            switch($id){
             case 1:
             $myChoiceName = "Kamień";
             $myImg = $imgRock;

                if($pcChoice<=70){
                    $pcImg = $imgPaper;
                    $pcChoice = 2;
                } else if($pcChoice>=85){
                    $pcImg = $imgRock;
                    $pcChoice = 1;
                }
                else{
                    $pcImg = $imgScissors
                    $pcChoice = 3;
                }

             break;
             case 2:
             $myChoiceName = "Papier";
             $myImg = $imgPaper;

                
             if($pcChoice<=70){
                $pcImg = $imgScissors;
                $pcChoice = 3;
            } else if($pcChoice>=85){
                $pcImg = $imgPaper;
                $pcChoice = 2;
            }
            else{
                $pcImg = $imgRock;
                $pcChoice = 1;
            }


             break;
             case 3:
             $myChoiceName = "Nożyce";
             $myImg = $imgScissors;

            
             if($pcChoice<=70){
                $pcImg = $imgRock;
                $pcChoice = 1;
            } else if($pcChoice>=85){
                $pcImg = $imgScissors;
                $pcChoice = 3;
            }
            else{
                $pcImg = $imgPaper;
                $pcChoice = 2;
            }

             break;
         }




         
         $result="";
         
         if(($id==1 && $pcChoice==3)||($id==2 && $pcChoice==1)||($id==3 && $pcChoice==2)){
             $result="WYGRAŁEŚ!";
             $winCount++;
         
         }
         else if(($id==1 && $pcChoice==1)||($id==2 && $pcChoice==2)||($id==3 && $pcChoice==3)){
             $result="REMIS";
             $remisCount++;
         } else{
             $result="PRZEGRAŁEŚ";
             $loseCount++;
         }
         
         $(".me").html($myImg);
         $(".pc").html($pcImg);
         
         
         $("#wins").html($winCount);
         $("#remises").html($remisCount);
         $("#loses").html($loseCount);
         
         
         $(".result").html($result);
         



}
else {
        var $id = parseInt($(this).attr("id"));
        var $pcImg, $myImg;

            $pcChoice = Math.floor((Math.random()*100)+1);
          

        switch($id){
         case 1:
         $myImg = $imgRock;

         if($pcChoice<=95){
            $pcImg = $imgPaper;
            $pcChoice = 2;
         } 
         else if($pcChoice==100){
            $pcImg = $imgScissors
            $pcChoice = 3;
         }else{
            $pcImg = $imgRock;
            $pcChoice = 1;
         }


         break;
         case 2:

         $myImg = $imgPaper;

         if($pcChoice<=95){
            $pcImg = $imgScissors;
            $pcChoice = 3;
         } 
         else if($pcChoice==100){
            $pcImg = $imgRock;
            $pcChoice = 1;
         }else{
            $pcImg = $imgPaper;
            $pcChoice = 2;
         }

         break;
         case 3:
         $myImg = $imgScissors;

         if($pcChoice<=95){
            $pcImg = $imgRock;
            $pcChoice=1;
         } 
         else if($pcChoice==100){
            $pcImg = $imgPaper;
            $pcChoice=2;
         }else{
            $pcImg = $imgScissors;
            $pcChoice=3;
         }

         break;
     }
     $result="";
         
     if(($id==1 && $pcChoice==3)||($id==2 && $pcChoice==1)||($id==3 && $pcChoice==2)){
         $result="WYGRAŁEŚ!";
         $winCount++;
     
     }
     else if(($id==1 && $pcChoice==1)||($id==2 && $pcChoice==2)||($id==3 && $pcChoice==3)){
         $result="REMIS";
         $remisCount++;
     } else{
         $result="PRZEGRAŁEŚ";
         $loseCount++;
     }
     
     $(".me").html($myImg);
     $(".pc").html($pcImg);
     
     
     $("#wins").html($winCount);
     $("#remises").html($remisCount);
     $("#loses").html($loseCount);
          
     $(".result").html($result);
}
});

$(".choice").hide();



});

