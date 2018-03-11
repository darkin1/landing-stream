var d = new Date();
var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();

var $form = $('form#newsletter-form'),
    url = 'https://script.google.com/macros/s/AKfycbxoB2SK6tKI95a1GwhFjl7_io7HqKI-qXpZg7-ux0TQ6a4IDjVF/exec'

$('.newsletter-button').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize() + '&date=' + strDate,
    success: function() {
        $('body').find('.modal').addClass('is-active');
    }
  });
})

$('.button.is-custom').on('click', function(e) {
    $('body').find('.modal').removeClass('is-active');
});