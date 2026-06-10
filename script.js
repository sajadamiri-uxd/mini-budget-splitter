function calculateSplit() {
    const bill = parseFloat(document.getElementById("billInput").value);
    const people = parseInt(document.getElementById("peopleInput").value);
    const tip = parseFloat(document.getElementById("tipInput").value);

    if (!bill || !people || people <= 0) {
        alert("Please enter valid numbers.");
        return;
    }

    const total = bill + (bill * (tip || 0) / 100);
    const perPerson = total / people;

    document.getElementById("resultBox").textContent =
        `Per person: $${perPerson.toFixed(2)}`;
}
