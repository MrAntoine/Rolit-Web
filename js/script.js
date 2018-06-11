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




function Clique(test) {
	alert (test.id);
	test.style.backgroundColor = couleur;
	test.style.pointerEvents = "none";






if (test.value == ""){
	alert ("la case est pleine");

}


for(i=1; i<9; i++){

}
var cc = test.value;
cc = cc +1*1;
alert(cc);
test = test+ 1;
alert (test.id);



}


