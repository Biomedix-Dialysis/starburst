
function addOneTimeMessagesCallbacks() {
	var closeButton = document.getElementById('starburst-close');

	if (closeButton !== null) {
		closeButton.addEventListener('click', function() {
			document.getElementById('starburst-announcement').style.display = 'none';
		});
	}
};

$(document).on( "turbolinks:load", addOneTimeMessagesCallbacks);
