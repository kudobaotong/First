// view layouts set up
var app = function(app) {
	
	app.avatarActions = function(stage, avatarPose1, avatarPose2, avatarPose3, avatarPose4, assets, pages) {

		//avatar 1
		//add avatar to the screen
		assets.mainAvatar.addChild(avatarPose1);

		//add interaction to the avatar
		avatarPose1.cursor = "pointer";
		avatarPose1.on("click", handleclickpose1);
		
		//update the stage
		stage.update();

		//avatar 2
		//add avatar to the screen
		assets.mainAvatarNext.addChild(avatarPose2);

		//add interaction to the avatar
		avatarPose2.cursor = "pointer";
		avatarPose2.on("click", handleclickpose2);

		//update the stage
		stage.update();

		//handle click actions
		function handleclickpose1() {
			//hide the original avatar from screen
			avatarPose1.visible = false;
			//add new avatar to the screen
			assets.mainAvatar.addChild(avatarPose3);
			avatarPose3.visible = true;
			//add interaction to the avatar
			avatarPose3.cursor = "pointer";
			avatarPose3.on("click", function(){
				avatarPose1.visible = true;
				avatarPose3.visible = false;
				return;
			});
			//update the stage
			stage.update();
		};
		function handleclickpose2() {
			//hide the original avatar from screen
			avatarPose2.visible = false;
			//add new avatar to the screen
			assets.mainAvatarNext.addChild(avatarPose4);
			avatarPose4.visible = true;
			//add interaction to the avatar
			avatarPose4.cursor = "pointer";
			avatarPose4.on("click", function(){
				avatarPose2.visible = true;
				avatarPose4.visible = false;
				return;
			});
			//update the stage
			stage.update();
		};

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