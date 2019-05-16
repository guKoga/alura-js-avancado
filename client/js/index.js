var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector("table tbody");

document.querySelector('.form').addEventListener('submit', function() {

    // Orienta ao JS não submeter o form, evitando o refresh
    event.preventDefault();

    // Cria um tr manualmente
    var tr = document.createElement('tr');

    // Varrendo todos os campos do array
    campos.forEach(function(campo) {
        // Cria um td manualmente
        var td = document.createElement('td');
        // Texto da td recebe o valor do campo
        td.textContent = campo.value;
        // Inclui o td no tr
        tr.appendChild(td);

    });

    // Coluna de volume
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});