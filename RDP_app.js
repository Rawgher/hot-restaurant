// // stuff we can try later

// <script type="text/javascript">
    
//     let myCount = require("./reservationForm.html");
//     let count = myCount.count;
//     if (count <= 4) {
//       let number = 5 - count;
//       $("#RDP_tableRef").html("We only have " + number + " tables available! Book your seat while you can!");
//     } else {
//       $("#RDP_tableRef").html("We're all out of tables! Feel free to put your name on our waiting list.");
//     }
//   </script>


// <script type="text/javascript">
//             let count = "";
//             console.log(count);
    
//             $("#submit").on("click", function () {
//                 event.preventDefault();
    
//                 count++;
//                 console.log(count);
    
//                 let newReservations = {
//                     name: $("#name").val().trim(),
//                     phoneNumber: $("#phoneNumber").val().trim(),
//                     email: $("#email").val().trim(),
//                     uniqueID: $("#uniqueID").val().trim()
//                 };
    
//                 console.log(newReservations);
    
//                 // Question: What does this code do??
//                 $.post("/api/reservation", newReservations)
//                     .then(function (data) {
//                         console.log("reservationForm.html", data);
//                         alert("Adding reservation...");
//                     });
//             });
            
//             exports.count = count;
//             </script>