// Liste des 4 joueurs différents 
var joueurscouleur = ['Bleu','Rouge','Vert','Jaune'];

//
var genjoueur = Math.floor(Math.random() * joueurscouleur.length);
var recupjoueur = joueurscouleur[genjoueur];







if(recupjoueur == "Rouge"){
	document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_rouge.png")';
	var couleur = "red";	
}else if (recupjoueur == "Bleu"){
	document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_bleu.png")';
	couleur = "blue";	
}else if (recupjoueur == "Jaune"){
	document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_jaune.png")';	
	couleur = "yellow";
}else {
	document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_vert.png")';	
	couleur = "green";
}

var caseremplie = 0;


function Clique(test) {
	alert (test.id);
	test.style.backgroundColor = couleur;
	test.style.pointerEvents = "none";
	caseremplie = caseremplie + 1;



var y = document.getElementById("colonne"+ o);
var x = document.getElementById("case"+ p);

if ((test && test+2 == "Rouge") && test +1 != "Rouge"){
	alert("validé");
}




// controle de la position  vas pas 
if("case"+x < "test.id" && test.id+1 > test.id){
	alert("pos ok");
}

//document.getElementById("case3").style.backgroundColor = couleur; // fonctionne 


// fin du jeu quand toutes les cases sont remplies

if(caseremplie >= 64){
		alert("jeu terminé");
		for (var z=1; z<65; z++){
		document.getElementById("case"+z).style.pointerEvents = "none";
		}
	}else {
		console.log("jeu incomplet");
	}





}


	








