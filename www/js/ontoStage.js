// view layouts set up
var app = function(app) {
	
	app.avatarActions = function(stage, avatarPose1, avatarPose2, assets, pages) {

		//adjust avatar 1

		//add avatar to the screen
		assets.mainAvatar.addChild(avatarPose1);

		//add interaction to the avatar
		//avatarPose1.cursor = "pointer";
		//avatarPose1.on("click", handleclick);
		stage.update();

		//adjust avatar 2

		//add avatar to the screen
		//assets.mainAvatarNext.addChild(avatarPose2);

		assets.mainAvatarNext.addChild(avatarPose2);

		//add interaction to the avatar
		//avatarPose2.cursor = "pointer";
		//avatarPose2.on("click", handleclick);
		stage.update();

		// assets.mainAvatarThird.addChild(avatarPose3);
		// stage.update();

	}
	app.infoPage = function(stage, title, information, assets, pages) {
		var infoTextTitle = new createjs.Text(title, "78px 'Walter Turncoat' cursive", "#fff");
		infoTextTitle.lineHeight = 50;
		assets.info.contents.addChild(infoTextTitle);
		var infoTextContent = new createjs.Text(information, "58px 'Walter Turncoat' cursive", "#fff");
		infoTextContent.lineHeight = 30;
		infoTextContent.y=270;
		assets.info.contents.addChild(infoTextContent);
		
		stage.update();
	}
	return app;
}(app || {});