$(document).ready(function()
{
  var paraScene = document.getElementById('scene');
  var parallaxInstance = new Parallax(paraScene);

  var controller = new ScrollMagic.Controller();
  var scrollScene = new ScrollMagic.Scene({triggerElement: "#moonTrigger", duration: 550})
	scrollScene.setPin("#moonPin", {pushFollowers: false});
	scrollScene.addTo(controller);

  //TODO: shift up FAQ and make title disappear
  var titleScene = new ScrollMagic.Scene({
    triggerElement: '.info1',
    offset: 50,
    triggerHook: 0.9,
  })
  titleScene.setClassToggle('.mainText', "visible")
  titleScene.addTo(controller);

	var info1Scene = new ScrollMagic.Scene({
		triggerElement: '.info1',
		offset: 50,
		triggerHook: 0.9,
	})
	info1Scene.setClassToggle('.info1', "visible")
	info1Scene.addTo(controller);

  var info2Scene = new ScrollMagic.Scene({
		triggerElement: '.info2',
		offset: 50,
		triggerHook: 0.9,
	})
	info2Scene.setClassToggle('.info2', "visible")
	info2Scene.addTo(controller);

  var info3Scene = new ScrollMagic.Scene({
    triggerElement: '.info3',
    offset: 50,
    triggerHook: 0.9,
  })
  info3Scene.setClassToggle('.info3', "visible")
  info3Scene.addTo(controller);

  var info4Scene = new ScrollMagic.Scene({
		triggerElement: '.info4',
		offset: 50,
		triggerHook: 0.9,
	})
	info4Scene.setClassToggle('.info4', "visible")
	info4Scene.addTo(controller);
});
