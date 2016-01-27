$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
    $('.navbar-header a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
  });
});

var skillType = [ { pic: "images/html5_logo.png" }, 
{ pic: "images/css3_logo.png" },
{ pic: "images/js_logo.png" },
{ pic: "images/ruby_logo.png" },
{ pic: "images/ror_logo.png" },
{ pic: "images/sinatra_logo.png" }
];

for (var i = 0; i < skillType.length; i++) {
  $("#" + i).css("background", "url(" + skillType[i].pic + ")");
};

// $(".skill_item").mouseenter(function () {
//   $(this).html("<p class='experience_info'><img src=" + skillType[this.id].experience + " width='90' height='70'></p>");
// }).mouseleave(function () {
//   $(".experience_info").html("");
// });


