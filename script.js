document.getElementById("guestForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var car = document.getElementById("car").value;
    var members = document.getElementById("members").value;

    var data = {name: name, car: car, members: members};

    fetch("https://script.google.com/macros/library/d/1kJr8KrzTQZjQSLVL5eJpsqb80K_XwdZ2zzCEH1zpNPtnwzP7LMsiUi02/1", {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then(() => {
        alert("Guest Registered!");
    });
});