$(document).ready(function(){
    responsive();
})

$( window ).resize(function() {
    responsive()
});

$(document).on("mousedown", ".tecla.on",function() {
    let key = $(this).attr('data-value');

    if(key == "="){
        calcularResult()
    }else{
        if( $('.tela .value').html() == '0'){
            if(!isNaN(key)){
                $('.tela .value').html(key)
            }
        }else{
            $('.tela .value').append(key)
        }
    }
});

$(document).mouseup(function() {
    $(".tecla").removeClass('press')
})

$(document).on('mousedown','.btn-clear.on',function(){
    $('.tela .value').html('0')
});

$( ".tecla" ).mousedown(function() {
    $(this).addClass('press')

    if($(this).hasClass('btn-power')){
        if($(this).hasClass('on')){
            $('.tecla, .calculadora').removeClass('on')
            $('.tela .value').html('')
        }else{
            $('.tecla, .calculadora').addClass('on')
            $('.tela .value').html('0')
        }
    }
});

function calcularResult(){
    let result = eval($('.tela .value').html())
    result && $('.tela .value').html(result) 
}

function responsive(){
    let calculadora = $('.calculadora').position();
    let pilhas = $('.pilhas');
    
    pilhas.attr('style', 'top:'+(calculadora.top+260)+'px; right:'+(calculadora.left+60)+'px')
}