function selectRiskTopic(selection) {

    $('.risk-content').addClass('hidden');
    document.getElementById(selection).classList.remove('hidden');
}

$('.risk-btn').click(function () {
    $('html, body').animate({
        scrollTop: $('.risks-container').offset().top 
    }, 500);
    console.log('papaia');
});

