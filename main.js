$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nomeNovaTarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);

        $(novaTarefa).appendTo(novoItem);
        $(novoItem).appendTo('ul'); 
        $('##nomeNovaTarefa').val('');
    })

    $('#novo').click(function() {
        $('#novo').hide();
        $('.nova-tarefa').fadeIn();
    })

    $('#cancelar').click(function() {
        $('#novo').fadeIn();
        $('.nova-tarefa').hide();
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('remover-tarefa');
    })
});