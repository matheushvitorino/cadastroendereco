document.getElementById("cep").addEventListener("input", function() {
    let cep = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cep.length === 8) {
        fetch('https://viacep.com.br/ws/' + cep + '/json/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                // Atualiza os elementos HTML com os dados recebidos
                const logradouroElem = document.getElementById('rua').value = data.logradouro;
                const bairroElem = document.getElementById('bairro').value = data.bairro;
                const cidadeElem = document.getElementById('cidade').value = data.localidade;
                const estadoElem = document.getElementById('estado').value = data.estado;
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }
});
