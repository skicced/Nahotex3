$(document).ready(function(){
    var $listing = $(".box-listing").isotope({
        itemSelector: '.box-item',
        layoutMode: 'fitRows',
    });
    $("#filters").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $listing.isotope({ filter: filterValue});
    })
});