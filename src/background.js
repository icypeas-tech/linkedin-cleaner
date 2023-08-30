chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, { action: "removeInvitations" });
});

//Listens for the click on the extension icon and execute the content script to remove the invitations.

  
  