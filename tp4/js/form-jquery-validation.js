$(document).ready(function(e) {
 
    $(document).keyup(function(){
  
      var nombreCaractere = $("#name").val().length;
      var msg = nombreCaractere + ' car';
  
      $('#nameCounter1').text(msg);
  
  
      var nombreCaractere2 = $("#firstname").val().length;
      var msg2 = nombreCaractere2 + ' car';
  
      $('#nameCounter2').text(msg2);
      
    });
  
   
      
    
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      contactStore.add(
        document.querySelector("#name").value,
        document.querySelector("#firstname").value,
        document.querySelector("#birth").value,
        document.querySelector("#adresse").value,
        document.querySelector("#mail").value
      );
  
      const contactList = contactStore.getList();
  
      document.querySelector("table tbody").innerHTML = "";
  
      for (var contact of contactList) {
        document.querySelector("table tbody").innerHTML += `
          <tr>
              <td> ${contact.name}</td>
              <td> ${contact.firstname}</td>
              <td> ${contact.date}</td>
              <td> <a href="https://maps.google.com/?q=${contact.adress}">${contact.adress}</a></td>
              <td> <a href="mailto:${contact.mail}">${contact.mail}</a></td>
          <tr>`;
      }
    });
  });

  