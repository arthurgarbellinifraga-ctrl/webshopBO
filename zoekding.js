function zoekProduct() {

let invoer = document.getElementById("search").value.toLowerCase();

let producten = {
    "babyolie 1": "producten/babyolie1.webp",
    "babyolie 2": "producten/babyolie2.webp",
    "babyolie 3": "producten/babyolie3.webp",
    "babyolie 4": "producten/babyolie4.webp",
    "babyolie 5": "producten/babyolie5.webp",
    "babyolie 6": "producten/babyolie6.webp",
    "babyolie 7": "producten/babyolie7.webp",
    "babyolie 8": "producten/babyolie8.webp",
    "babyolie 9": "producten/babyolie9.webp",
    "babyolie 10": "producten/babyolie10.webp",
    "diddy": "pictures/diddy.gif",
    "albania": "pictures/albania.png",
    "raygun": "pictures/raygun.png"
};

if(producten[invoer]){
    document.getElementById("productImage").src = producten[invoer];
} else {
    document.getElementById("productImage").src = "";
}

}