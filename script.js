const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        let value = btn.innerText;

        // Clear
        if (value === "C") {
            currentValue = "";
            display.value = "";
        }

        // Delete
        else if (value === "DEL") {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue;
        }

        // Equal
        else if (value === "=") {

            try {
                currentValue = eval(currentValue);
                display.value = currentValue;
            }
            catch {
                display.value = "Error";
                currentValue = "";
            }

        }

        // Other buttons
        else {
            currentValue += value;
            display.value = currentValue;
        }

    });

});
