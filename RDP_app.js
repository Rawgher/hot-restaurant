// We have so many tables left looking at database to reference it

$("#submit").on("click", function () {

    let count = "";

    count++;

    if (count <= 4) {
        let number =  5 - count;
        $("#RDP_tableRef").html("We only have " + number + " tables available! Book your seat while you can!");
    } else {
        $("#RDP_tableRef").html("We're all out of tables! Feel free to put your name on our waiting list.");
    }

});

