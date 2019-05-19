var disp = $("#point-p");
circle(parseInt(disp.html()));

function ticker(newer, older) {
  var iterator = Math.abs(newer - older);
  var timing = 2500 / iterator;
  if (timing < 10) {
    timing = 10;
  } else if (timing > 100) {
    timing = 100;
  }

  var iv = setInterval(count, timing);

  function count() {
    if (older < newer) {
      older++;
    } else {
      older--;
    }
    disp.html(older);
    circle(older);
    if (older == newer) {
      clearInterval(iv);
    }
  }
}

function circle(points) {
  var p1 = $('.pointer1');
  var p2 = $('.pointer2');
  var p3 = $('.pointer3');
  var p4 = $('.pointer4');
  var sea = "#0A6E78";
  var blue = "#3CD2DC";
  var red = "#F00";
  var grey = "#444";
  var shade = "inset 0 0 0 5px ";
  var clr = blue;
  var max = 100;

  if (points >= max) { // >= 100
    shade += sea;
    clr = blue;
  } else if (points < max) { // < 100
    points += max;
    clr = sea;
    shade += grey;
  } else { // 0
    shade += grey;
    p1.css({
      "opacity": "0",
      "transform": "rotate(90deg) skew(0deg)"
    });
    p2.css({
      "opacity": "0",
      "transform": "rotate(180deg) skew(0deg)"
    });
    p3.css({
      "opacity": "0",
      "transform": "rotate(270deg) skew(0deg)"
    });
    p4.css({
      "opacity": "0",
      "transform": "skew(0deg)"
    });
  }
  $("#pointdisplay").css({
    "box-shadow": shade
  });
  if (points >= max && points <= (max * 5 / 4)) {
    var skew = 90 - (3.6 * (points - max));
    p1.css({
      "transform": "rotate(90deg) skew(" + skew + "deg)",
      "background-color": clr,
      "opacity": "1"
    });
    p2.css({
      "opacity": "0",
      "transform": "rotate(180deg) skew(0deg)"
    });
    p3.css({
      "opacity": "0",
      "transform": "rotate(270deg) skew(0deg)"
    });
    p4.css({
      "opacity": "0",
      "transform": "skew(0deg)"
    });
  } else if (points > (max * 5 / 4) && points <= (max * 3 / 2)) {
    var skew = 180 - (3.6 * (points - max));
    p1.css({
      "transform": "rotate(90deg)",
      "background-color": clr,
      "opacity": "1"
    });
    p2.css({
      "transform": "rotate(180deg) skew(" + skew + "deg)",
      "background-color": clr,
      "opacity": "1"
    });
    p3.css({
      "opacity": "0",
      "transform": "rotate(270deg) skew(0deg)"
    });
    p4.css({
      "opacity": "0",
      "transform": "skew(0deg)"
    });
  } else if (points > (max * 3 / 2) && points <= (max * 7 / 4)) {
    var skew = 270 - (3.6 * (points - max));
    p1.css({
      "transform": "rotate(90deg)",
      "background-color": clr,
      "opacity": "1"
    });
    p2.css({
      "transform": "rotate(180deg)",
      "background-color": clr,
      "opacity": "1"
    });
    p3.css({
      "transform": "rotate(270deg) skew(" + skew + "deg)",
      "background-color": clr,
      "opacity": "1"
    });
    p4.css({
      "opacity": "0",
      "transform": "skew(0deg)"
    });
  } else if (points > (max * 7 / 4) && points <= (max * 2)) {
    var skew = 360 - Math.round(3.6 * (points - max));
    p1.css({
      "transform": "rotate(90deg)",
      "background-color": clr,
      "opacity": "1"
    });
    p2.css({
      "transform": "rotate(180deg)",
      "background-color": clr,
      "opacity": "1"
    });
    p3.css({
      "transform": "rotate(270deg)",
      "background-color": clr,
      "opacity": "1",
      "box-shadow": "none"
    });
    p4.css({
      "transform": "skew(" + skew + "deg)",
      "background-color": clr,
      "opacity": "1"
    });
  }
}
