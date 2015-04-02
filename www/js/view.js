// view layouts set up
var app = function(app) {
	
	//horizontal pages
	app.makeHorizontalPages = function(layoutManager, gridManager, guideManager, stage, stageW, stageH) {
		p = {};

		//main page layout
		p.main = new createjs.Container();
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		
		//intro area layout
		var intro = p.main.intro = new createjs.Container();
		intro.setBounds(0,0,100,10);
		p.main.addChild(intro);

		//intro item layout
		var refreash1 = p.refreash1 = new zim.Rectangle(10, 9, "#9494B8");
		refreash1.x = 75;
		refreash1.y = 3;
		intro.addChild(refreash1);

		//contents area layout
		var contents = p.main.contents = new createjs.Container();
		contents.setBounds(0,0,600,900);
		p.main.addChild(contents);

		//avatar layout
		var avatar = p.mainAvatar = new zim.Rectangle(500,700, "#FFFFFF");
		avatar.x = 50;
		avatar.y = 100;
		avatar.visible = true;
		contents.addChild(avatar);
		
		var avatar2 = p.mainAvatarNext = new zim.Rectangle(500, 700, "#FFFFFF");
		avatar2.x = 50;
		avatar2.y = 100;
		avatar2.visible = false;
		contents.addChild(avatar2);
		
		// var avatar3 = p.mainAvatarThird = new zim.Rectangle(500, 700, "#FFFFFF");
		// avatar3.x = 50;
		// avatar3.y = 100;
		// avatar3.visible = false;
		// contents.addChild(avatar3);

		//footer area layout
		var footer = p.main.footer = new createjs.Container();
		footer.setBounds(0,0,100,150);
		p.main.addChild(footer);

		//footer item 1 layout
		var related1 = p.related1 = new zim.Rectangle(300, 100, "#9494B8");
		related1.x = -300;
		related1.y = 20;
		footer.addChild(related1);

		//footer item 2 layout
		var related2 = p.related2 = new zim.Rectangle(300, 100, "#9494B8");
		related2.x = 100;
		related2.y = 20;
		footer.addChild(related2);
		
		
		var mainParts = [ 
		{object:intro, marginTop:0, maxWidth:100, height:10, align:"middle", valign:"top", backgroundColor:"#9494B8"},
		{object:contents, marginTop:5, maxWidth:100, valign:"middle"},
		{object:footer, marginTop:5, maxWidth:100, height:0, valign:"bottom", backgroundColor:"#9494B8"}
		];

		var mainLayout = new zim.Layout(p.main, mainParts, 0, "#9494B8", true, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout);	
		
		//info page layout
		p.info = new createjs.Container();		
		p.info.name = "info";
		p.info.setBounds(0,0,stageW,stageH);

		//info intro area layout
		var intro2 = p.info.intro = new createjs.Container();
		intro2.setBounds(0,0,100,10);
		p.info.addChild(intro2);

		//info intro item layout
		var refreash2 = p.refreash2 = new zim.Rectangle(10, 9, "#9494B8");
		refreash2.x = 75;
		refreash2.y = 3;
		intro2.addChild(refreash2);

		//info contents area layout
		var contents2 = p.info.contents = new createjs.Container();
		contents2.setBounds(0,0,600,900);
		p.info.addChild(contents2);

		//info footer area layout
		var footer2 = p.info.footer = new createjs.Container();
		footer2.setBounds(0,0,100,150);
		p.info.addChild(footer2);

		//info footer item layout
		var related3 = p.related3 = new zim.Rectangle(600, 100, "#9494B8");
		related3.x = -250;
		related3.y = 20;
		footer2.addChild(related3);
		p.info.addChild(footer2);

		var infoParts = [ 
		{object:intro2, marginTop:0, maxWidth:100, height:10, align:"middle", valign:"top", backgroundColor:"#9494B8"},
		{object:contents2, marginTop:5, maxWidth:100, valign:"middle"},
		{object:footer2, marginTop:5, maxWidth:100, height:0, valign:"bottom", backgroundColor:"#9494B8"}
		];

		var infoLayout = new zim.Layout(p.info, infoParts, 0, "#9494B8", false, new createjs.Shape(), stage);
		
		layoutManager.add(infoLayout);

		//guideManager.dispose();
		//gridManager.dispose();
				
		return p;
		
		
	}//end make horizontal pages
	
	//vartical pages
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager, stage, stageW, stageH) {
		
		p = {};
		
		//main page layout
		p.main = new createjs.Container();
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		
		//intro area layout
		var intro = p.main.intro = new createjs.Container();
		intro.setBounds(0,0,100,10);
		p.main.addChild(intro);

		//intro item layout
		var topButton1 = p.topButton1 = new zim.Rectangle(10, 10, "#9494B8");
		topButton1.x = 80;
		topButton1.y = 3;
		intro.addChild(topButton1);

		//contents area layout
		var contents = p.main.contents = new createjs.Container();
		contents.setBounds(0,0,600,900);
		p.main.addChild(contents);

		//avatar layout
		var avatar = p.mainAvatar = new zim.Rectangle(500,700, "#FFFFFF");
		avatar.x = 50;
		avatar.y = 100;
		avatar.visible = true;
		contents.addChild(avatar);
		
		var avatar2 = p.mainAvatarNext = new zim.Rectangle(500, 700, "#FFFFFF");
		avatar2.x = 50;
		avatar2.y = 100;
		avatar2.visible = false;
		contents.addChild(avatar2);

		// var avatar3 = p.mainAvatarThird = new zim.Rectangle(500, 700, "#FFFFFF");
		// avatar3.x = 50;
		// avatar3.y = 100;
		// avatar3.visible = false;
		// contents.addChild(avatar3);

		//footer area layout
		var footer = p.main.footer = new createjs.Container();
		footer.setBounds(0,0,100,150);
		p.main.addChild(footer);

		//footer item 1 layout
		var related1 = p.related1 = new zim.Rectangle(300, 100, "#9494B8");
		related1.x = -300;
		related1.y = 20;
		footer.addChild(related1);

		//footer item 2 layout
		var related2 = p.related2 = new zim.Rectangle(300, 100, "#9494B8");
		related2.x = 100;
		related2.y = 20;
		footer.addChild(related2);
		
		//draw grid
		gridManager.add( new zim.Grid(contents) );
		guideManager.add( new zim.Guide(contents) );
		guideManager.add( new zim.Guide(contents, false) );
		
		var mainParts = [ 
		{object:intro, marginTop:0, maxWidth:100, height:10, align:"middle", valign:"top", backgroundColor:"#9494B8"},
		{object:contents, marginTop:5, maxWidth:100, valign:"middle"},
		{object:footer, marginTop:5, maxWidth:100, height:0, valign:"bottom", backgroundColor:"#9494B8"}
		];

		var mainLayout = new zim.Layout(p.main, mainParts, 0, "#FFFFFF", true, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout);	
		
		//info page layout
		p.info = new createjs.Container();		
		p.info.name = "info";
		p.info.setBounds(0,0,stageW,stageH);

		//info intro area layout
		var intro2 = p.info.intro = new createjs.Container();
		intro2.setBounds(0,0,100,10);
		p.info.addChild(intro2);

		//info intro item layout
		var topButton2 = p.topButton2 = new zim.Rectangle(10, 10, "#9494B8");
		topButton2.x = 80;
		topButton2.y = 3;
		intro2.addChild(topButton2);

		//info contents area layout
		var contents2 = p.info.contents = new createjs.Container();
		contents2.setBounds(0,0,600,900);
		p.info.addChild(contents2);

		//info footer area layout
		var footer2 = p.info.footer = new createjs.Container();
		footer2.setBounds(0,0,100,150);
		p.info.addChild(footer2);

		//info footer item layout
		var related3 = p.related3 = new zim.Rectangle(600, 100, "#9494B8");
		related3.x = -250;
		related3.y = 20;
		footer2.addChild(related3);
		p.info.addChild(footer2);

		var infoParts = [ 
		{object:intro2, marginTop:0, maxWidth:100, height:10, align:"middle", valign:"top", backgroundColor:"#9494B8"},
		{object:contents2, marginTop:5, maxWidth:100, valign:"middle"},
		{object:footer2, marginTop:5, maxWidth:100, height:0, valign:"bottom", backgroundColor:"#9494B8"}
		];

		var infoLayout = new zim.Layout(p.info, infoParts, 0, "#9494B8", true, new createjs.Shape(), stage);
		
		layoutManager.add(infoLayout);

		//guideManager.dispose();
		//gridManager.dispose();
				
		return p;
	}
	return app;
}(app || {});