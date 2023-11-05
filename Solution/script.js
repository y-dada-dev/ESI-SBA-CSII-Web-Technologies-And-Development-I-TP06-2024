var current, next, previous;
var left, opacity, scale; 
var animating; 










$(".next").click(function () {
  if (animating) return false;
  animating = true;
  current = $(this).parent();
  next = $(this).parent().next();





  var password = current.find('input[name="pass"]').val();
  var cpassword = current.find('input[name="cpass"]').val();
  if (password === "" || cpassword === "") {
    current.find('input[name="pass"]').css('border-color', 'red');
    current.find('input[name="cpass"]').css('border-color', 'red');
    return;
  }
  if (password !== cpassword) {
    current.find('input[name="pass"]').css('border-color', 'red');
    current.find('input[name="cpass"]').css('border-color', 'red');
    return;
  }
  current.find('input[name="pass"]').css('border-color', '');
  current.find('input[name="cpass"]').css('border-color', '');





  $("#progressbar li").eq($("fieldset").index(next)).addClass("active");
  next.show();
  current.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        scale = 1 - (1 - now) * 0.2;
        left = now * 50 + "%";
        opacity = 1 - now;
        current.css({
          transform: "scale(" + scale + ")",
          position: "absolute",
        });
        next.css({ left: left, opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current.hide();
        animating = false;
      },
      easing: "easeInOutBack",
    }
  );
});









$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current = $(this).parent();
  previous = $(this).parent().prev();


  $("#progressbar li").eq($("fieldset").index(current)).removeClass("active");
  previous.show();
  current.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        scale = 0.8 + (1 - now) * 0.2;
        left = (1 - now) * 50 + "%";
        opacity = 1 - now;
        current.css({ left: left });
        previous.css({ transform: "scale(" + scale + ")", opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current.hide();
        animating = false;
      },
      easing: "easeInOutBack",
    }
  );
});
