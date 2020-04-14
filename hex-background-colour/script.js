// Creates a random HEX
function hexColour() {
    const hexValues = '0123456789ABCDEF';
    let hex = "#";
    for (let i=0; i<6; i++) {
        hex += hexValues[Math.floor(Math.random() * hexValues.length)]
    }
    document.body.style.background = hex;
}
