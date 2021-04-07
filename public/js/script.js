
var menuBtn = document.querySelector('.menu-btn');
var sidebar = document.querySelector('#sidebar');
var content = document.querySelector('#content');
var showTabs = false;
menuBtn.addEventListener('click', function () {
	if (!showTabs) {
		menuBtn.classList.toggle('show');
		sidebar.classList.toggle('active');
		content.classList.toggle('active');
		showTabs = true;
	} else {
		menuBtn.classList.toggle('show');
		sidebar.classList.toggle('active');
		content.classList.toggle('active');
		showTabs = false;
	}
});
