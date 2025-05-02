document.getElementById('adicionarButton').addEventListener('click', function() {
    const input =document.getElementById('interesse-input');
    const valorInput = input.value.trim();

    if (valorInput) {
        const itemLista = document.createElement('li');
        itemLista.textContent = valorInput;
        document.getElementById('lista-interesses').appendChild(itemLista);
        input.value = ''; // Limpa o campo de entrada 
    }

});

document.getElementById('limparButton').addEventListener('click', function() {
    document.getElementById('lista-interesses').innerHTML = ''; // Limpa a lista de interesses

    // const listainteresses = document.getelementbyid('lista-interesses');
    // const itenslista = listainteresses.getelementsbytagname('li');
    
    // if (itenslista.length > 0) {
    //     listainteresses.removechild(itenslista[itenslista.length - 1]); // remove o último item da lista
    // }
});