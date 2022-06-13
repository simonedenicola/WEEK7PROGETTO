
    /* (async () => {
        const response = await fetch("users.json");
        const datiJson = await response.json();
        console.log(datiJson);
     }) ();
     let jsonPath = '../json/users.json';
     let allUsers = fetch(jsonPath).then(response => response.json()); */
     
      fetch('users.json').then (function(result) {
        return result.json()
        }
      ).then(
          function(j) {
              var $div = document.getElementById("card")
            console.log  (j)
            for ( i =0; i< j.lenght; i++) {
                let el = document.createElement("body")
                el.innerHTML = j[i].title + " - " + j[i].body
                 $div.appendChild(el)
                
            }
          }
        );
     