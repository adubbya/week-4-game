$(document).ready(function () {



    // VAIABLE        
        var randomNumber = [Math.floor(Math.random() * 120) + 19];
        var crystalNumber = 0;
        var crystalCount = 0;
        var win = 0;
        var lose = 0;
        console.log(randomNumber);
        console.log(crystalCount);
    
    // Crystal Clicks, obv randomizes per click no bueno, need to randomize ONCE per click, per button
        $("#crystal-button-1").on("click", function () {
            var crystalNumber = [Math.floor(Math.random() * 12) + 1];
            console.log(crystalNumber);
            crystalCount = parseInt(crystalCount) + parseInt(crystalNumber);
            $("#random-number").html(randomNumber);
            $("#my-number").html(crystalCount);
            console.log(crystalCount);
        });

        $("#crystal-button-2").on("click", function () {
            var crystalNumber = [Math.floor(Math.random() * 12) + 1];
            console.log(crystalNumber);
            crystalCount = parseInt(crystalCount) + parseInt(crystalNumber);
            $("#random-number").html(randomNumber);
            $("#my-number").html(crystalCount);
            console.log(crystalCount);
        });

        $("#crystal-button-3").on("click", function () {
            var crystalNumber = [Math.floor(Math.random() * 12) + 1];
            console.log(crystalNumber);
            crystalCount = parseInt(crystalCount) + parseInt(crystalNumber);
            $("#random-number").html(randomNumber);
            $("#my-number").html(crystalCount);
            console.log(crystalCount);
        });

        $("#crystal-button-4").on("click", function () {
            var crystalNumber = [Math.floor(Math.random() * 12) + 1];
            console.log(crystalNumber);
            crystalCount = parseInt(crystalCount) + parseInt(crystalNumber);
            $("#random-number").html(randomNumber);
            $("#my-number").html(crystalCount);
            console.log(crystalCount);
        });

    // TODO: win if logic
        if (crystalCount === randomNumber) {
            $("#win").text("you win");
            win += 1;
         //   reinit() 
        }

    // TODO lose if logic
        if (crystalCount > randomNumber) {
            $("#lose").text("you lose");
            lose += 1;
            console.log("wellll", crystalCount, randomNumber)
        //    reinit()    
        }
    
    // Reset/reinit logic    
});
