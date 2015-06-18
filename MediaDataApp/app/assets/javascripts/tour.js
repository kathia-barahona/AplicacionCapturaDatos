//= require introjs
$(function(){
	var introguide = introJs();
	introguide.setOptions({
		steps: [
			{
				element: '.menu_bar',
				intro: 'This guided tour will explain how to use the MediaData app page interface.<br>
				<br> Use the arrow keys for navigation or hit ESC to exit the tour.'
				position: 'bottom'
			},{
				element: '.icon-menu',
				intro: 'Touch the icon to see the menu bar'
				position: 'bottom'
			},{
				element: '.icon-home',
				intro: 'By touching the home tab you can see all your entries',
				position: 'bottom'
			},{
				element: '.icon-newentry',
				intro: 'If you want to create a new entry, touch the New Entry tab'
				position: 'bottom'
			}
		]

	});

});
