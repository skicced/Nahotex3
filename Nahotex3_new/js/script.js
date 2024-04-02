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

$(".szechenyi").on("click"), "#szech", function(){
    $(this).addClass(".szechenyi-off");
}



let prevIndex = null;

function toggleAccordion(index) {
  const items = document.querySelectorAll('.accordion-item');
  const itemslist = document.querySelectorAll('.palyazat-items');

  if (prevIndex !== null) {
    items[prevIndex].querySelector('.accordion-content').style.display = 'none';
    itemslist[prevIndex].classList.remove('active');
  }

  if (prevIndex !== index) {
    items[index].querySelector('.accordion-content').style.display = 'flex';
    itemslist[index].classList.add('active');
    prevIndex = index;
  } else {
    prevIndex = null;
  }
}
toggleAccordion(0);

// 9.1. magnificPopup works gallery
$(".popup-photo").magnificPopup({
    type: "image",
    gallery: {
        enabled: true,
        tPrev: "",
        tNext: "",
        tCounter: "%curr% / %total%"
    },
    removalDelay: 100,
    mainClass: "mfp-fade",
    fixedContentPos: false
})

