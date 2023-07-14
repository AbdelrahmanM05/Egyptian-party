let sideBarPostion = $(".side-bar").innerWidth();
$(".side-menu").css({ left: -sideBarPostion });

$("#openBtn").click(() => {
  if ($(".side-menu").css("left") == "0px") {
    $(".side-menu").animate({ left: -sideBarPostion }, 500);
  } else {
    $(".side-menu").animate({ left: 0 }, 500);
  }
});
$("#closeBtn").click(() => {
  if ($(".side-menu").css("left") == "0px") {
    $(".side-menu").animate({ left: -sideBarPostion }, 500);
  }
});

$("#slideTwo").hide();
$("#slideThree").hide();
$("#slideFour").hide();

$("#singerOne").click(() => {
  $("#slideOne").slideToggle(1000);
  $("#slideTwo").slideUp(1000);
  $("#slideThree").slideUp(1000);
  $("#slideFour").slideUp(1000);
});
$("#singerTwo").click(() => {
  $("#slideTwo").slideToggle(1000);
  $("#slideOne").slideUp(1000);
  $("#slideThree").slideUp(1000);
  $("#slideFour").slideUp(1000);
});
$("#singerThree").click(() => {
  $("#slideThree").slideToggle(1000);
  $("#slideOne").slideUp(1000);
  $("#slideTwo").slideUp(1000);
  $("#slideFour").slideUp(1000);
});
$("#singerFour").click(() => {
  $("#slideFour").slideToggle(1000);
  $("#slideOne").slideUp(1000);
  $("#slideThree").slideUp(1000);
  $("#slideTwo").slideUp(1000);
});

$(function () {
  function getCounterData() {
    var days = parseInt($("#days").text());
    var hours = parseInt($("#hours").text());
    var minutes = parseInt($("#mins").text());
    var seconds = parseInt($("#secs").text());
    return seconds + minutes * 60 + hours * 3600 + days * 3600 * 24;
  }

  function setCounterData(s) {
    var days = Math.floor(s / (3600 * 24));
    var hours = Math.floor((s % (60 * 60 * 24)) / 3600);
    var minutes = Math.floor((s % (60 * 60)) / 60);
    var seconds = Math.floor(s % 60);

    $("#days").html((days < 10 ? "0" : "") + days + "D");
    $("#hours").html((hours < 10 ? "0" : "") + hours + "h");
    $("#mins").html((minutes < 10 ? "0" : "") + minutes + "m");
    $("#secs").html((seconds < 10 ? "0" : "") + seconds + "s");
  }

  var count = getCounterData($(".date"));

  var timer = setInterval(function () {
    count--;
    if (count == 0) {
      clearInterval(timer);
      return;
    }
    setCounterData(count, $(".date"));
  }, 1000);
});

$("#message").keyup((e) => {
  $("#wordCount").html(100 - e.target.value.length);
});
