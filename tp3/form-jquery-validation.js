$(document).ready(function () {
    $("#submit").on("click", function (event) {
      var $nom = $("#nom"),
          $prenom = $("#prenom"),
          $date_de_naissance = $("#date_de_naissance"),
          $adresse = $("#adresse"),
          $email = $("#email");
  

      if (verifier($nom) && verifier($prenom) && verifier($date_de_naissance) &&
        verifier($adresse) && verifier($email)) {
        $(".modal-title").text("Bienvenue " + $prenom.val());
        var $lien = "http://maps.google.com/maps?q="+ $adresse.val();
        var $apiKey="AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";
        var $map = "https://maps.googleapis.com/maps/api/staticmap?markers="+ $adresse.val() +"&zoom=10&size=400x300&key=" + $apiKey;
        $(".modal-body").html('<p>vous êtes né le ' + $date_de_naissance.val() + ' et vous habitez à <a href="'+$lien+'"><img src="'+ $map +'"></a></p> <a href='+$lien+'>'+$adresse.val()+'</a>');  
        $('#myModal').modal('show');
      }


      else {
        $(".modal-title").text("Message d'erreur ");
        $(".modal-body").html("<p>Veuillez remplir tous les champs svp.</p>");
        $('#myModal').modal('show');
      }
      
      
    });
  });