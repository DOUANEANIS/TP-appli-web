

function validation(){
    var nom=document.getElementById("nom").value.length;
    var prenom=document.getElementById("prenom").value.length;

    if( validateItem("nom") && validateItem("prenom"))
    {
        var d= document.querySelector("#resultat");
        d.style.backgroundColor='green';
        d.style.padding='5px';
        d.style.color="#e9ebee";
        d.innerHTML="Bienvenue"+" "+document.getElementById("prenom").value; 
    }
  
    function validateItem(_id){
        var el = document.getElementById(_id);
        var label = document.querySelector('[for="'+_id+'"]');
        var error= document.querySelector("#"+"erreur");
        var d1= document.querySelector("#resultat");

        if (el.value.length<5) { 
        
            d1.innerHTML="";
            d1.style.backgroundColor="#e9ebee"
            error.style.backgroundColor="#ea05056e";
            error.style.padding='5px';
            error.style.border='1px black';

            error.innerHTML="Le "+ label.textContent +" doit contenir au moins 5 caractees ";
            return false;
        } 
        else { 
            
           error.style.backgroundColor="white";
           error.innerHTML="";
           return true;
        }
    
    }
}
