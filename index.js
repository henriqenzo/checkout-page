function selecionarDiv(element) {
    var containerShipping = document.querySelectorAll('.container-shipping')
    containerShipping.forEach(function(div) {
        div.classList.remove('selected');
    });

    element.classList.add('selected');
}
