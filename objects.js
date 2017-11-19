

var tanniesRecipe = {
    sugar:"2 cups", 
    butter:"1/4 oz", 
    eggs: 3, 
    walnuts: 12, 
    secretIngredient1:"love", 
    secretIngredient2:"hate", 
    secretIngredient3:"tests",
    bakingInstructions :{
        step1: "mixed",
        step2: "cry",
        step3: "smile",
        step4: "bake",
        step5: "decorate",
        step6: "eat"
    }
};

var playlist = {
    artistName:"Someone",
    songTitle:"Rock"
}

function updatePlaylist(playlist, artistName, songTitle){
    playlist[artistName] = songTitle;
    return playlist;
}

function removeFromPlaylist(playlist, artistName){

delete playlist[artistName];

return playlist;    
}
