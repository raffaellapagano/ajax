document.getElementById('button').addEventListener('click', loadUsers);


        function loadUsers() { 
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://api.icndb.com/jokes/random', true);

            xhr.onload = function() { 
                if(this.status == 200){
                    var joke = JSON.parse(this.responseText);

                    document.getElementById('msg').innerHTML = joke.value.joke;
                }
             }

             xhr.send();
         }

fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data.type))
  .catch(error => {
      let errorImprimir= error.message;
      alert('error: '+ errorImprimir)
  });