
$('<button class="fullWidthButton button_2" id="restart_button" type="button" style="background-color:gray;"><span class="glyphicon glyphicon-repeat" aria-hidden="true"></span> Switch to a New User ( Can use after "Custom Score WITHOUT Answer!" ) </button>').insertAfter('#name_button');
$('<button class="fullWidthButton button_2" id="cheat_score_button2" type="button" style="background-color:black;display:inline;width:38%;">Custom Score WITHOUT Answer!</button>').insertAfter('#name_button');
$('<button class="fullWidthButton button_2" id="cheat_score_button" type="button" onclick="save_name()" style="background-color:green;display:inline;margin-right:1%;width:35%;">Auto Answer & Custom Score!</button>').insertAfter('#name_button');
$('<input type="text" id="custom_score" class="form-control input-lg" style="width:25%;display:inline;margin-right:1%;" placeholder="The score you want."></input>').insertAfter('#name_button');
$('<button class="fullWidthButton button_2" id="cheat_button" type="button" onclick="save_name()" style="background-color:red;">Auto Answer Start!</button>').insertAfter('#name_button');

$('<button class="fullWidthButton button_2" id="restart_button" type="button" style="background-color:red;"> <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>  Restart  </button>').insertAfter('#create_poll_button');

function answerMachine() {
    name = 'option_' + questionArray[question_number].answer;
    document.getElementById(name).click();
    $("#question").bind("DOMSubtreeModified", () => {
        counter += 1;
        if(question_number == 10 && cheat_score == true) {
            score = $("#custom_score").val() - 1;
        }
        if (counter >= 2) {
            counter = 0;
            name = 'option_' + questionArray[question_number].answer;
            document.getElementById(name).click();
        }
    });
}

$('#cheat_button').on( "click", function() {
    counter = 0;
    cheat_score = false;
    answerMachine();  
});


$('#cheat_score_button').on( "click", function() {
    counter = 0;
    cheat_score = true;
    answerMachine();  
});

$(document).on('click', "#restart_button", function() {
    localStorage.clear();
    location.reload();
});

$("#cheat_score_button2").on( "click", function() {
    answerer_name = $("#name_text").val();
    score = $("#custom_score").val();
    if(answerer_name == "") {
        alert("Please enter a name.");
    } else if(score == "") {
        alert("Please enter a score.");
    }
    else {
        send_score_to_firebase(parseFloat(score))
    }
});