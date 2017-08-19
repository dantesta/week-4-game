  $(document).ready(function() {


var targetNumber = "";
  var wins = 0;
  var losses = 0; 
  var gameOver = false;


//function newGame() {
  
 // gameOver = false;



  targetNumber = Math.floor(Math.random() * 101) + 19;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;



   var numberOptions = [

   Math.floor(Math.random() * 12) + 1,
   Math.floor(Math.random() * 12) + 1, 
   Math.floor(Math.random() * 12) + 1, 
   Math.floor(Math.random() * 12) + 1

   ];


     for (var i = 0; i < numberOptions.length; i++) {


    var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");



    imageCrystal.attr("src", "assets/images/blue.png");

 

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

         $("#crystals").prepend(imageCrystal);
  }




 
// }


  
  $(".crystal-image").on("click", function() {

  
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    counter += crystalValue;



 // newGame();


   $("#currentScore").html("Your Total Score: " + counter);



 

    if (counter === targetNumber) {

            gameOver = true;
            wins++;

            $("#winsUp").html("Wins: " + wins);


      console.log(wins);

      alert("You Win!");

     
    }

    else if (counter >= targetNumber) {
      
    	gameOver = true;
      losses++;


      $("#lossesUp").html("Losses: " + losses);

       
        console.log(losses);

		alert("You Lose!");
    }

  });

 // $('.newGame').on('click', function(){ 
 //   newGame();
 //  });


});





