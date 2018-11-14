$("#submit").on("click", function(event){
    event.preventDefault();

    const newCustomer = {
       customerName:$("#name").val().trim(),
       customerPicture:$("#photoImage").val().trim(),
       goingOut:$("#goingOut").val().trim(),
       danceSkill:$("#dance").val().trim(),
       drinking:$("#drink").val().trim(),
       experiences:$("#newExp").val().trim(),
       festival:$("#festivals").val().trim()
    };

    console.log(newCustomer);
    
    $.post("/api/friends", newCustomer, function(data){

        if (data) {
            alert("Yay! You are officially booked!");
        }

          // If a table is available... tell user they on the waiting list.
        else {
            alert("Sorry you are on the wait list");
        }
        $("#name").val("");
        $("#photoImage").val("");
        $("#goingOut").val("");
        $("#dance").val("");
        $("#drink").val("");
        $("#newExp").val("");
        $("#festivals").val("");
    });
});