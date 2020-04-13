function changeColour() {
    var arrayOfColours = 
    [
        'AliceBlue',	
        'AntiqueWhite',		 
        'Aqua',	 
        'Aquamarine',	
        'Azure',		 
        'Beige',	
        'Bisque'
    ];
    document.body.style.background = arrayOfColours[Math.floor(Math.random() * 6)];
}

console.log('Hello World');