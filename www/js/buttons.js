// view layouts set up
var app = function(app) {
	
	app.addButtons = function(topButton1, topButton2, bottomButton1, bottomButton2, bottomButton3, assets, stage) {
		topButton1.scaleX = 0.1;
		topButton1.scaleY = 0.1;
		topButton2.scaleX = 0.1;
		topButton2.scaleY = 0.1;

		assets.topButton1.addChild(topButton1);

		assets.topButton2.addChild(topButton2);
		
		assets.related1.addChild(bottomButton1);

		assets.related2.addChild(bottomButton2);

		assets.related3.addChild(bottomButton3);

		stage.update();
	}
	return app;
}(app || {});