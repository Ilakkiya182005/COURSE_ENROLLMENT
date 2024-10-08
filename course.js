function addition() {

    let coursename = document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let count = document.getElementById("count").value;

    if (!coursename || !code || !count) {
        alert("Please fill in all fields.");
        return;
    }

    let results = document.getElementById("result")

    results.innerHTML += `
        <p><strong>Course Name:</strong> ${coursename}
        <strong>Code:</strong> ${code}
        <strong>Count:</strong> ${count}</p>
       `;

    document.getElementById("name").value = "";
    document.getElementById("code").value = "";
    document.getElementById("count").value = "";

}

function deletion() {

    let results = document.getElementById("result");

    if (results.firstElementChild) {
        results.removeChild(results.firstElementChild);
    } else {
        alert("No course details to delete.");
    }
}
