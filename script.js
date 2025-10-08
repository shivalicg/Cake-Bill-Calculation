// This function runs once the HTML document is fully loaded
$(document).ready(function(){

    // Attach a click event listener to the button with the id "order-btn"
    $("#order-btn").on("click", function(){
        
        // Get the value from each input field using its ID.
        let rainbow = parseInt($("#rainbow").val()) || 0;
        let chocolate = parseInt($("#chocolate").val()) || 0;
        let redvelvet = parseInt($("#redvelvet").val()) || 0;
        let blackforest = parseInt($("#blackforest").val()) || 0;

        // Perform the calculation
        let total = (rainbow * 300) + (chocolate * 200) + (redvelvet * 250) + (blackforest * 350);

        // Update the content of the "bill-box" div with the calculated total.
        $("#bill-box").html(`Total Price: ₹${total}`);
    });

});