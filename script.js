$(document).ready(function() {
    $('#carousel-images').slick({ 
        autoplay: true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Digite o número do seu celular'
    }); 

   $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false 
            }
        },
        messages: {
            nome: 'Esse campo é obrigatório'
        },
        submitHandler: function(form) {
            console.log('formulário enviado corretamente')
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos nesse formulário`)
            }
        }
   })

   $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000) 
   })
}) 


