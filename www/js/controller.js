
var app = new function(app) {
	var changeMade = false;
	//var tapHeadMade = false;

	app.makeHotSpots = function(stage, assets, pages) {
		zog("tool-hotspots");
		
		//call functions when active different hotspots
		var hs = new zim.HotSpots([
			{page:assets.main, rect:assets.related1, call:makeChange},
			{page:assets.main, rect:assets.related2, call:goToInfo},
			{page:assets.main, rect:assets.topButton1, call:refreash},
			{page:assets.info, rect:assets.related3, call:goToMain},
			{page:assets.info, rect:assets.topButton2, call:refreash}
			]);

		function goToInfo(){
			pages.go(assets.info, "right");
		}

		function goToMain(){
			pages.go(assets.main, "left");
		}

		function makeChange() {
			
			if (!changeMade) {
				assets.mainAvatar.visible = false;
				assets.mainAvatarNext.visible = true;
				changeMade = true;
				zog("change");
				stage.update();
				return;
			}
			else {
				assets.mainAvatar.visible = true;
				assets.mainAvatarNext.visible = false;
				changeMade = false;
				zog("original");
				stage.update();
				return;
			}
		}
		// function tapHeadChange() {
			
		// 	if (!tapHeadMade) {
		// 		assets.mainAvatar.visible = false;
		// 		assets.mainAvatarNext.visible = false;
		// 		assets.mainAvatarThird.visible = true;

		// 		tapHeadMade = true;
		// 		//zog("change");
		// 		stage.update();
		// 		return;
		// 	}
		// 	else {
		// 		assets.mainAvatar.visible = true;
		// 		assets.mainAvatarNext.visible = false;
		// 		assets.mainAvatarThird.visible = false;

		// 		tapHeadMade = false;
		// 		//zog("original");
		// 		stage.update();
		// 		return;
		// 	}
		// }

		function refreash() {
			window.location.reload(true);			
		}
	}
	return app;
}(app || {});