$(document).ready(function()
{
  var paraScene = document.getElementById('scene');
  var parallaxInstance = new Parallax(paraScene);

  var controller = new ScrollMagic.Controller();
  var scrollScene = new ScrollMagic.Scene({duration: 680})
	scrollScene.setPin(".cryptMain", {pushFollowers: false});
  scrollScene.addTo(controller);
});
