function luckButton() {
	document.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}

function searchButton() {
	var irlGoogle = 'https://www.google.com/search?q=';
	var query = document.getElementById('search-bar-textarea').value;
	if (query != "") {
		document.location = irlGoogle + query;
	} else {
		return false;
	}
}

function fixCountryPos() {
	setTimeout(function() {
	document.getElementById('country-text').style['top'] = "100%";
}, 50);}

fixCountryPos()