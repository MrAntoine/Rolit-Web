// Liste des 4 joueurs différents 
var joueurscouleur = ['Bleu','Rouge','Vert','Jaune'];

//
var genjoueur = Math.floor(Math.random() * joueurscouleur.length);
var recupjoueur = joueurscouleur[genjoueur];


/*
switch (true) {
    case recupjoueur == "Rouge":
    	var doc = document.write("<div id='playjoueur1' style='position:absolute;background:red;border-radius:50%;width:30px;height:30px'></div>");
        break;
    case recupjoueur == "Bleu":
    	var doc = document.write("<div id='playjoueur1' style='position:absolute;background:blue;border-radius:50%;width:30px;height:30px'></div>");
        break;
    case recupjoueur == "Vert":
    	var doc = document.write("<div id='playjoueur1' style='position:absolute;background:green;border-radius:50%;width:30px;height:30px'></div>");
        break;
    case recupjoueur == "Jaune":
    	var doc = document.write("<div id='playjoueur1' style='position:absolute;background:#bfd70e;border-radius:50%;width:30px;height:30px'></div>");
        break;                  

}
*/

//document.getElementById("playjoueur").innerHTML = "C'est au tour de " + recupjoueur ;


if(recupjoueur == "Rouge"){
	document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_rouge.png")';	
}else if (recupjoueur == "Bleu"){
	document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_bleu.png")';	
}else if (recupjoueur == "Jaune"){
	document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_jaune.png")';	
}else {
	document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_vert.png")';	
}



function Clique() {
	alert ("test");
}