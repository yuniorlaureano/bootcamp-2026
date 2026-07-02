document.addEventListener("DOMContentLoaded", function() {
    const areaCharacter = document.getElementById("area-character");
    const charCountInput = document.getElementById("charCount"); 
    areaCharacter.oninput  = function() {
        console.log(areaCharacter.value);
        charCountInput.textContent = areaCharacter.value.length;
        alertOnLimit(areaCharacter.value.length);
    }
});

function alertOnLimit(characterLength) {
    const limit = parseInt(document.getElementById("limit").value);
    const alertElement = document.getElementById("limit-alert");
    if (characterLength > limit) {
        alertElement.style.display = "block";
    } else {
        alertElement.style.display = "none";
    }
}