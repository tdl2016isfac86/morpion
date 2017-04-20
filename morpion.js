// morpion.js
var plateau = [["","",""],["","",""],["","",""]];

var tour = 0;
document.onreadystatechange = function() {
    for(var i= 0; i<3;i+=1){
        for(var j=0; j<3;j+=1) {
            document.getElementById('P'+i+j).onclick = jouer;
        }
    }
    document.getElementsByTagName('button')[0].onclick = reset;
};
var jouer = function(){
    var coords = this.id.split("");
    var symbole = '';
    if(tour%2) {
        symbole = 'O';
    }
    else {
        symbole = 'X';
    }
    tour += 1;
    var x = coords[1];
    var y = coords[2];
    plateau[x][y] = symbole;
    document.getElementById('P'+x+y).innerHTML = symbole;
    document.getElementById('P'+x+y).onclick = null;
    
    var gagnant = is_winning();
    if(gagnant) {
        document.getElementById("message").innerHTML = "Bravo "+gagnant;
        for(var i= 0; i<3;i+=1){
            for(var j=0; j<3;j+=1) {
                document.getElementById('P'+i+j).onclick = null;
            }
        }
    }
    else {
        if(tour > 8) {
             document.getElementById("message").innerHTML = "Partie nulle";
        }
    }

};
var reset  = function(){
    plateau = [["","",""],["","",""],["","",""]];
    tour = 0;
    for(var i= 0; i<3;i+=1){
        for(var j=0; j<3;j+=1) {
            document.getElementById('P'+i+j).innerHTML = '';
            document.getElementById('P'+i+j).onclick = jouer;
        }
    }
    document.getElementById("message").innerHTML = "";
};

var is_winning = function () {
	var w = plateau;

	var a = w[0][0],b = w[0][1],c = w[0][2];
	var d = w[1][0],e = w[1][1],f = w[1][2];
	var g = w[2][0],h = w[2][1],i = w[2][2];

	if ((a === b) && (b === c) && a !== '') {
		return a;

	} else if ((d === e) && (e === f) && d !== '') {
		return d;

	} else if ((g === h) && (h === i) && g !== '') {
		return g;

	} else if ((a === d) && (d === g) && a !== '') {
		return a;

	} else if ((b === e) && (e === h) && b !== '') {
		return b;

	} else if ((c === f) && (f === i) && c !== '') {
		return c;

	} else if ((a === e) && (e === i) && a !== '') {
		return a;

	} else if ((g === e) && (e === c) && g !== '') {
		return g;

	} else {

		return false;
		
	}

}	