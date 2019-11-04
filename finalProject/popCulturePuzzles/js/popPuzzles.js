//This MoveMe code allows the pieces to be dragged and droped to a new location.

    $(function(){
            $("#MoveMe1").draggable();
            $("#MoveMe2").draggable();
            $("#MoveMe3").draggable();
            $("#MoveMe4").draggable();
            $("#MoveMe5").draggable();
            $("#MoveMe6").draggable();
            $("#MoveMe7").draggable();
            $("#MoveMe8").draggable(); 
            $("#MoveMe9").draggable(); 
            
            $("#MoveMe10").draggable();
            $("#MoveMe11").draggable();
            $("#MoveMe12").draggable();
            $("#MoveMe13").draggable();
            $("#MoveMe14").draggable();
            $("#MoveMe15").draggable();
            $("#MoveMe16").draggable();
            $("#MoveMe17").draggable(); 
            $("#MoveMe18").draggable();

            $("#MoveMe19").draggable();
            $("#MoveMe20").draggable();
            $("#MoveMe21").draggable();
            $("#MoveMe22").draggable();
            $("#MoveMe23").draggable();
            $("#MoveMe24").draggable();
            $("#MoveMe25").draggable();
            $("#MoveMe26").draggable(); 
            $("#MoveMe27").draggable();

            $("#MoveMe28").draggable();
            $("#MoveMe29").draggable();
            $("#MoveMe30").draggable();
            $("#MoveMe31").draggable();
            $("#MoveMe32").draggable();
            $("#MoveMe33").draggable();
            $("#MoveMe34").draggable();
            $("#MoveMe35").draggable(); 
            $("#MoveMe36").draggable();

            $("#MoveMe37").draggable();
            $("#MoveMe38").draggable();
            $("#MoveMe39").draggable();
            $("#MoveMe40").draggable();
            $("#MoveMe41").draggable();
            $("#MoveMe42").draggable();
            $("#MoveMe43").draggable();
            $("#MoveMe44").draggable(); 
            $("#MoveMe45").draggable();

//This code below toggles(open and close puzzle) using the click function and an id on the button and section to show and hide the puzzle pieces.
            
            $("#puzzleOne").click(function() {
              $("#Puzzle1").toggle();
              $("#Puzzle2").hide();
              $("#Puzzle3").hide();
              $("#Puzzle4").hide();
              $("#Puzzle5").hide();
        });

            $("#puzzleTwo").click(function() {
              $("#Puzzle2").toggle();
              $("#Puzzle1").hide();
              $("#Puzzle3").hide();
              $("#Puzzle4").hide();
              $("#Puzzle5").hide();
        });

            $("#puzzleThree").click(function() {
              $("#Puzzle3").toggle();
              $("#Puzzle1").hide();
              $("#Puzzle2").hide();
              $("#Puzzle4").hide();
              $("#Puzzle5").hide();

        });

            $("#puzzleFour").click(function() {
              $("#Puzzle4").toggle();
              $("#Puzzle1").hide();
              $("#Puzzle2").hide();
              $("#Puzzle3").hide();
              $("#Puzzle5").hide();
        });

            $("#puzzleFive").click(function() {
              $("#Puzzle5").toggle();
              $("#Puzzle1").hide();
              $("#Puzzle2").hide();
              $("#Puzzle3").hide();
              $("#Puzzle4").hide();
        });
    });