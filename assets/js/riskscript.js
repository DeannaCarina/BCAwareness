// Change content based on topic selection from the dropdown menu 
function selectRiskTopic(selection) {
    $('.risk-content').addClass('hidden');
    document.getElementById(selection).classList.remove('hidden');
}

// Vertically center the view on content box after topic selection from the dropdown menu
$('.risk-btn').click(function () {
    $('html, body').animate({
        scrollTop: $('.risks-container').offset().top 
    }, 500);
    console.log('papaia');
});

