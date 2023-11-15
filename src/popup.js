//script associated with the popup: Handles user events on the popup page (button, link, etc.)
const scriptTag = document.createElement("script");
scriptTag.src = chrome.runtime.getURL("src/elementsMap.js");
document.head.appendChild(scriptTag);

document.addEventListener("DOMContentLoaded", function() {
	const cleanButton = document.getElementById("cleanButton");
	const lienLinkledIn = document.getElementById("lienLinkledIn");
	const lienIcypeas = document.getElementById("lienIcypeas");

	cleanButton.addEventListener("click", function() {
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      		chrome.tabs.sendMessage(tabs[0].id, { action: "removeInvitations" });
    	});
  	});

	lienLinkledIn.addEventListener("click", function() {
		chrome.tabs.create({ url: elementsMap.linkedInURL });
	});

	lienIcypeas.addEventListener("click", function() {
		chrome.tabs.create({ url: elementsMap.icypeasURL });
	});
});
