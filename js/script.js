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
    alert("initialisation");
}


/** Gestion du clique sur une case **/
function Clique(nb) {
    
  alert(plateau[nb] + "+" +nb);

    // si la case est vide
    if(plateau[nb][1] == RIEN) {
        
        // La case devient de la couleur du joueur
        plateau[nb][1] = recupJoueur;
        
        // On ajoute une case remplie
        caseRemplie++;

        // On desactive la case
        document.getElementById("case"+nb).style.pointerEvents = "none";
        
        /* 
            On vérifie s'il y a d'autres cases à changer : 
                
                Si (nb.substring(2)<7 && nb.substring(2)>2)  (vérifie pour pas dépasser les 8 lignes)
                
                    Si nb+0.2 == recupJoueur
                        Alors nb+0.1 = recupJoueur;
                        caseRemplie++;
                        
                    Si nb-0.2 == recupJoueur
                        Alors nb-0.1 = recupJoueur;
                        caseRemplie++;
                        
                        
                // On gère les diagonales (vérifie pour pas dépasser les 8 lignes et les 8 colonnes)
                    
                Si (nb<7 && nb.substring(2)>2)  
                    Si nb+2-0.2 == recupJoueur
                        Alors nb-1+0.1 = recupJoueur;
                        caseRemplie++;
                    
                [...]
                
        */

         // On gère à droite et à gauche
                if (nb>2 && nb<7){ //(vérifie pour pas dépasser les 8 colonnes)

                    if(plateau[nb+2][1] == recupJoueur){ 
                      plateau[nb+1][1] = recupJoueur;
                      caseRemplie++;
                    }

                    if(plateau[nb-2][1] == recupJoueur){
                      plateau[nb-1][1] = recupJoueur;
                      caseRemplie++;
                    }
                }



/*
        // On gère en haut et en bas
               //if (plateau[nb][0].substring(2) <7 && plateau[nb][0].substring(2) >2){ //(vérifie pour pas dépasser les 8 lignes)
                if (nb>2&& nb<7){  
                  alert("ok");
                    if(plateau[nb+0.2][1] == recupJoueur){ 
                      plateau[nb+0.1][1] = recupJoueur;
                      caseRemplie++;
                   }

                    if(plateau[nb-0.2][1] == recupJoueur){
                      plateau[nb-0.1][1] = recupJoueur;
                      caseRemplie++;
                    }
                }

*/

        
        // On change la couleur des cases
        mettreAJour();
        
        // On change de joueur
        changerJoueur(recupJoueur);
        
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
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_rouge.png")';
        var couleur = "red";	
        recupJoueur = ancien+1;
        
    }else if (recupJoueur == BLEU){
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_bleu.png")';
        couleur = "blue";	
        recupJoueur = ancien+1;
        
    }else if (recupJoueur == JAUNE){
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_jaune.png")';	
        couleur = "yellow";
        recupJoueur = 1;
        
    } else {
        
        document.getElementById("playjoueur2").style.backgroundImage = 'url("images/pion_vert.png")';	
        couleur = "green";
        recupJoueur = ancien+1;
        
    }
    
}




