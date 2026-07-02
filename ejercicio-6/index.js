document.addEventListener("DOMContentLoaded", function() {
    const originUnit = document.getElementById("origin-unit");
    const destinationUnit = document.getElementById("destination-unit");
    const convertButton = document.getElementById("convert");
    const alertModal = createAlert();

    convertButton.addEventListener("click", function() {
        const [valid, message, converter] = isValidConversion(originUnit.value, destinationUnit.value);
        if(!valid) {
            alertModal.show(message);
            return;
        }
        const value = parseFloat(document.getElementById("value").value);
        if(isNaN(value)) {
            alertModal.show("Please enter a valid number.");
            return;
        }
        const result = converter(value);
        document.getElementById("unit-result").textContent = result.toFixed(2);
    });
    
});


const validation = {
    "cel": {
        "far": true,
        "message": "Conversion from Celsius to Fahrenheit is valid.",
        convert: function(value) {
            return (value * 9/5) + 32;
        }
    },
    "far": {
        "cel": true,
        "message": "Conversion from Fahrenheit to Celsius is valid.",
        convert: function(value) {
            return (value - 32) * 5/9;
        }
    },
    "ml": {
        "km": true,
        "message": "Conversion from Miles to Kilometers is valid.",
        convert: function(value) {
            return value * 1.60934;
        }
    },
    "km": {
        "ml": true,
        "message": "Conversion from Kilometers to Miles is valid.",
        convert: function(value) {
            return value / 1.60934;
        }
    },
    "pd": {
        "kg": true,
        "message": "Conversion from Pounds to Kilograms is valid.",
        convert: function(value) {
            return value * 0.453592;
        }
    },
    "kg": {
        "pd": true,
        "message": "Conversion from Kilograms to Pounds is valid.",
        convert: function(value) {
            return value / 0.453592;
        }
    }
}

function isValidConversion(originUnit, destinationUnit) {
    if (validation[originUnit] && validation[originUnit][destinationUnit]) {
        return [true, null, validation[originUnit].convert];
    }
    let message = "Please select a destination unit that is compatible with the origin unit.";
    if(validation[originUnit]) {
        message = validation[originUnit].message;
    }
    return [false, message, null];
}

function createAlert() {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {})
    const messageElement = document.getElementById('message');
    return {
        show: function(msg) {
            messageElement.textContent = msg;
            myModal.show();
        },
        hide: function() {
            myModal.hide();
        }
    }
}