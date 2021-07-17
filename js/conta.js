//Este codigo se refere a pagina que lista todas as contas 
var url = "http://localhost:8080/contas";
var xhttp = new XMLHttpRequest(); 

let tipoCt = ["Conta Poupança", "Conta Corrente"];

xhttp.open("GET", url, true); 
xhttp.onreadystatechange = function(){
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
        var respota = JSON.parse(xhttp.responseText)
        for(var i = 0; i < respota.length; i++){
        	let conta = document.createElement("tr");

            let titularConta = document.createElement("td");
        	let emailConta = document.createElement("td");
        	let telefoneConta = document.createElement("td");
        	let cpfConta = document.createElement("td");
        	let Conta = document.createElement("td");
        	
            Conta.classList.add("conta");

            let strongName = document.createElement("strong");
            strongName.classList.add('nome');

            titularConta.appendChild(strongName);

            conta.appendChild(titularConta);
        	conta.appendChild(emailConta);
        	conta.appendChild(telefoneConta);
        	conta.appendChild(cpfConta);
        	conta.appendChild(Conta);
        	

            strongName.textContent = respota[i].titular.nome;
        	emailConta.textContent = respota[i].titular.email;
        	telefoneConta.textContent = respota[i].titular.telefone;
        	cpfConta.textContent = respota[i].titular.cpf;
        	Conta.textContent = "codigo " + respota[i].numero;

            

        	//titularConta.textContent = respota[i].titular.nome;

        	document.getElementById('tablecad').appendChild(conta);
        }
    }
}

xhttp.send();