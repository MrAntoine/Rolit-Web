/** VARIABLES GLOBALES **/

// Les valeurs selon les joueurs
var RIEN = 0;
var ROUGE = 1;
var BLEU = 2;
var VERT = 3;
var JAUNE = 4;

// La couleur du joueur jouant
var recupJoueur;

// Le nombre de case remplie
var caseRemplie = 0;
       
// Le tableau où on va garder les valeurs du plateau
var plateau = [
       [,],
       [1.1,RIEN],
       [1.2,RIEN],
       [1.3,RIEN],
       [1.4,RIEN],
       [1.5,RIEN],
       [1.6,RIEN],
       [1.7,RIEN],
       [1.8,RIEN],
       [2.1,RIEN],
       [2.2,RIEN],
       [2.3,RIEN],
       [2.4,RIEN],
       [2.5,RIEN],
       [2.6,RIEN],
       [2.7,RIEN],
       [2.8,RIEN],
       [3.1,RIEN],
       [3.2,RIEN],
       [3.3,RIEN],
       [3.4,RIEN],
       [3.5,RIEN],
       [3.6,RIEN],
       [3.7,RIEN],
       [3.8,RIEN],
       [4.1,RIEN],
       [4.2,RIEN],
       [4.3,RIEN],
       [4.4,BLEU],
       [4.5,JAUNE], // la case intiale bleue
       [4.6,RIEN], // la case intiale jaune
       [4.7,RIEN],
       [4.8,RIEN],
       [5.1,RIEN],
       [5.2,RIEN],
       [5.3,RIEN],
       [5.4,VERT],
       [5.5,ROUGE], // la case intiale verte
       [5.6,RIEN], // la case intiale rouge
       [5.7,RIEN],
       [5.8,RIEN],
       [6.1,RIEN],
       [6.2,RIEN],
       [6.3,RIEN],
       [6.4,RIEN],
       [6.5,RIEN],
       [6.6,RIEN],
       [6.7,RIEN],
       [6.8,RIEN],
       [7.1,RIEN],
       [7.2,RIEN],
       [7.3,RIEN],
       [7.4,RIEN],
       [7.5,RIEN],
       [7.6,RIEN],
       [7.7,RIEN],
       [7.8,RIEN],
       [8.1,RIEN],
       [8.2,RIEN],
       [8.3,RIEN],
       [8.4,RIEN],
       [8.5,RIEN],
       [8.6,RIEN],
       [8.7,RIEN],
       [8.8,RIEN]
];

// Fonction d'initialisation du plateau

debuter();



////////////////// Fonctions /////////////////////


/** Début de partie : Initialisation des joueurs **/
function debuter() {
    recupJoueur = Math.floor(Math.random() * 4)+1;
    var couleur;

    if(recupJoueur == ROUGE){
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_rouge.png")';
        couleur = "red";	
        
    }else if (recupJoueur == BLEU){
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_bleu.png")';
        couleur = "blue";	
        
    }else if (recupJoueur == JAUNE){
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_jaune.png")';	
        couleur = "yellow";
        
    } else {
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_vert.png")';	
        couleur = "green";
        
    }
    
    mettreAJour();
  //  alert("initialisation");
}


/** Gestion du clique sur une case **/
function Clique(nb) {
    
 alert(plateau[nb] + "+" +nb);

    // si la case est vide
    if(plateau[nb][1] == RIEN) {
           
      
    var peutjouer = "OUI";  

    // Verification qu'on joue a coter d'un autre pion.

//ligne gauche

if((nb == 1)||(nb == 9)||(nb == 17)||(nb == 25)||(nb == 33)||(nb == 41)||(nb == 49)||(nb == 57)){

    if(plateau[nb+1][1] == RIEN){
      peutjouer = "NON";
      alert("peux pas jouer");
    }

}

//ligne gauche 2 
if((nb == 42)||(nb == 34)||(nb == 26)||(nb == 18)){

    if(plateau[nb+1][1] == RIEN){
      peutjouer = "NON";
      alert("peux pas jouer");
    }else if(plateau[nb-1][1] == RIEN){
      peutjouer = "NON";
      alert("peux pas jouer");
    }

}

// ligne droite

if((nb == 8)||(nb == 16)||(nb == 24)||(nb == 32)||(nb == 40)||(nb == 48)||(nb == 56)||(nb == 64)){

     if(plateau[nb-1][1] == RIEN){
      var peutjouer = "NON";
      alert("peux pas jouer");
    }

}

// ligne droite 2

if((nb == 23)||(nb == 31)||(nb == 39)||(nb == 47)){

     if(plateau[nb-1][1] == RIEN){
      var peutjouer = "NON";
      alert("peux pas jouer");
    }else if(plateau[nb+1][1] == RIEN){
      var peutjouer = "NON";
      alert("peux pas jouer");
    }

}

// ligne haut

if((nb == 2)||(nb == 3)||(nb == 4)||(nb == 5)||(nb == 6)||(nb == 7)){

 if(plateau[nb+8][1] == RIEN){
      var peutjouer = "NON";
      alert("peux pas jouer");
    }
}

// ligne haut 2

if((nb == 10)||(nb == 11)||(nb == 12)||(nb == 13)||(nb == 14)||(nb == 15)){

 if((plateau[nb+8][1] == RIEN) && (plateau[nb-8][1] == RIEN)){
      var peutjouer = "NON";
      alert("peux pas jouer");
    }
}

// ligne bas

 if((nb == 58)||(nb == 59)||(nb == 60)||(nb == 61)||(nb == 62)||(nb == 63)){

 if(plateau[nb-8][1] == RIEN){
      var peutjouer = "NON";
      alert("peux pas jouer");
    }
}

// ligne bas 2

 if((nb == 50)||(nb == 51)||(nb == 52)||(nb == 53)||(nb == 54)||(nb == 55)){

 if(plateau[nb+8][1] == RIEN){
      var peutjouer = "NON";
      alert("peux pas jouer");
    }else  if(plateau[nb-8][1] == RIEN){
      var peutjouer = "NON";
      alert("peux pas jouer");
    }
}


    if(peutjouer == "OUI"){

      plateau[nb][1] = recupJoueur;
      caseRemplie++;
      document.getElementById("case"+nb).style.pointerEvents = "none";


    // Vérifications 

         // Droite Gauhce
                for(var i=1 ; i <9; i++){
                    if(plateau[nb+2][1] == recupJoueur){ 
                      plateau[nb+1][1] = recupJoueur;
                      caseRemplie++;
                    }
                    if(plateau[nb-2][1] == recupJoueur){
                      plateau[nb-1][1] = recupJoueur;
                      caseRemplie++;
                    }
              }

              // Haut - Bas
              for(var i=1 ; i <9; i++){
                    if(plateau[nb+16][1] == recupJoueur){ 
                      plateau[nb+8][1] = recupJoueur;
                      caseRemplie++;
                    }
                    if(plateau[nb-16][1] == recupJoueur){
                      plateau[nb-8][1] = recupJoueur;
                      caseRemplie++;
                    }
              }


              //Diagonale vers le bas
              for(var i=1 ; i <9; i++){
                    if(plateau[nb+18][1] == recupJoueur){ 
                      plateau[nb+9][1] = recupJoueur;
                      caseRemplie++;
                    }
                    if(plateau[nb-18][1] == recupJoueur){
                      plateau[nb-9][1] = recupJoueur;
                      caseRemplie++;
                    }
              }


              // Diagonale vers le haut
              for(var i=1 ; i <9; i++){
                    if(plateau[nb+14][1] == recupJoueur){ 
                      plateau[nb+7][1] = recupJoueur;
                      caseRemplie++;
                    }
                    if(plateau[nb-14][1] == recupJoueur){
                      plateau[nb-7][1] = recupJoueur;
                      caseRemplie++;
                    }
              }


        // On change de joueur
        changerJoueur(recupJoueur);

        }else {
          alert("joue autre part");
        }


    }

        // On change la couleur des cases
        mettreAJour();



  // fin du jeu quand toutes les cases sont remplies

    if(caseRemplie >= 64){
      alert("jeu terminé");
        for (var z=1; z<65; z++){
          document.getElementById("case"+z).style.pointerEvents = "none";

          //Definir le gagnant :

          // Compter le nombre de cases remplies pour chaques couleurs
          for (var v=1; v<65; v++){
            couleur = "red";
            if(document.getElementById('case'+z).style.backgroundColor == couleur){
            

            }
          }

          // Recupereration de la caloueur ayant le nombre de cases remplies le plus elevée 




          // On définit le gagnant


        
    }else {
      console.log("jeu incomplet");
    }


        
        
        
    
}


/** Mis à jour des cases du plateau **/
function mettreAJour() {
    console.log(recupJoueur);
    var nb,couleur;
    
    for(nb=1;nb<64;nb++){
        
        // Si la case est vide
        if(plateau[nb][1] == RIEN){
            
            couleur = "black";
            
        // Si la case est remplie
        } else {
            
            if(plateau[nb][1] == ROUGE){
        
                couleur = "red";	

            } else if (plateau[nb][1] == BLEU){

                couleur = "blue";	

            } else if (plateau[nb][1] == JAUNE){

                couleur = "yellow";

            } else {
	
                couleur = "green";

            }
            
            // Changer la couleur du fond
            document.getElementById('case'+nb).style.backgroundColor = couleur;
        
        }
        
    }
    
}


/** Change le joueur devant jouer **/
function changerJoueur(ancien){
    
    if(recupJoueur == ROUGE){
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_bleu.png")';
        var couleur = "blue";	
        recupJoueur = ancien+1;
        
    }else if (recupJoueur == BLEU){
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_vert.png")';
        couleur = "green";	
        recupJoueur = ancien+1;
        
    }else if (recupJoueur == JAUNE){
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_rouge.png")';	
        couleur = "red";
        recupJoueur = 1;
        
    } else {
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_jaune.png")';	
        couleur = "yellow";
        recupJoueur = ancien+1;
        
    }
    
}




