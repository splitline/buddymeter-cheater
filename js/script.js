
$('<button class="fullWidthButton button_2" id="cheat_score_button" type="button" onclick="save_name()" style="background-color:green;display:inline;width:73%;">Auto Answer & Custom Score!</button>').insertAfter('#name_button');
$('<input type="text" id="custom_score" class="form-control input-lg" style="width:25%;display:inline;margin-right:2%;" placeholder="The score you want. (0 ~ 10)"></input>').insertAfter('#name_button');
$('<button class="fullWidthButton button_2" id="cheat_button" type="button" onclick="save_name()" style="background-color:red;">Auto Answer Start!</button>').insertAfter('#name_button');

function answerMachine() {
    name = 'option_' + questionArray[question_number].answer;
    document.getElementById(name).click();
    $("#question").bind("DOMSubtreeModified", () => {
        counter += 1;
        if(ans_counter == 8 && cheat_score == true) {
            score = $("#custom_score").val() - 1;
        }
        if (counter >= 2) {
            counter = 0;
            ans_counter += 1;
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
    ans_counter = 0;
    cheat_score = true;
    answerMachine();  
});
