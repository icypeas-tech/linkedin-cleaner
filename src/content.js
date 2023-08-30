const scriptTag = document.createElement("script");
scriptTag.src = chrome.runtime.getURL("elementsMap.js");
document.head.appendChild(scriptTag);

function removeInvitations() {
	const deleteButtons = document.getElementsByClassName(elementsMap.deleteButton);
	const confirmDeleteButtons = document.getElementsByClassName(elementsMap.confirmDeleteButton);

	let index = 0;
	var intervalId = setInterval(function() {
		if (index >= deleteButtons.length || (deleteButtons.length === 0 && confirmDeleteButtons.length === 0) ) {
			clearInterval(intervalId);
			return;
		}
		deleteButtons[index].click();
		if (confirmDeleteButtons.length > 0) {
			confirmDeleteButtons[0].click();
		}
		index++;
	}, 50); // 50 ms between each suppression
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.action === "removeInvitations") {
		removeInvitations();
	}
});


  