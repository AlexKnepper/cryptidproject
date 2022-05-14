$(document).ready(function()
{
  var clickFlag = 0;

  function fadeOut()
  {
      $(".part1").animate({opacity: 0}, 3000);
      setTimeout(function ()
      {
        $(".page").css('background-color', 'black')
      }, 4000);
  }

  function fadeIn()
  {
    setTimeout(function ()
    {
      $(".altTitle").animate({opacity: 1}, 3000).delay(5000).animate({opacity: 0}, 3000)
    }, 4000);
    setTimeout(function ()
    {
      $(".altText").animate({opacity: 1}, 3000).delay(3000).animate({opacity: 0}, 3000)
    }, 6000);
  }

  function blackout()
  {
    setTimeout(function ()
    {
      $(".page").css('background-color', 'black')
    }, 500);
    setTimeout(function ()
    {
      $(".title").css('color', 'black');
    }, 1000);
    setTimeout(function ()
    {
      $(".flipYes").css('color', 'black');
    }, 1500);
    setTimeout(function ()
    {
      $(".flipNo").css('color', 'black');
    }, 2000);
    setTimeout(function ()
    {
      $(".board").css('background-color', 'black');
      $(".indicator").css('background-color', 'black');
    }, 2500);
  }

  $(".indicator").click(function()
  {
    clickFlag = 1;
    $(".indicator").css("top", "38px").delay(2000);
    blackout();
  });

  //Automatically flips the switch and continues to main page
  setTimeout(function()
  {
    if (clickFlag == 0)
    {
      fadeOut();
    }
    fadeIn();
    setTimeout(function()
    {
      window.location.href="mainpage.html"
    }, 16000);
  }, 10000);
});
