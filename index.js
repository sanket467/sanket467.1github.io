function clickOnExp(){
$('html,body').animate({
    scrollTop: $("#exptab").offset().top},
    'slow');
}

function clickOnEdu(){
    alert("Education");
}

function clickOnContact(){
    alert("Contact");
}

$("#experience").click(function() {
    $('html,body').animate({
        scrollTop: $("#exptab").offset().top},
        'slow');
});

function downloadCV(){
    alert("Donwloaded");
}