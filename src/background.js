// Fonction pour supprimer les invitations
function removeInvitations(tabId) {
    chrome.tabs.sendMessage(tabId, { action: "removeInvitations" });
}

// Écoute le clic sur l'icône de l'extension
chrome.browserAction.onClicked.addListener(function(tab) {
    removeInvitations(tab.id);
});

// Écoute les mises à jour des onglets
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    // Vérifie si la page a fini de charger
    if (changeInfo.status === "complete") {
		// Exécute la fonction pour supprimer les invitations
        removeInvitations(tabId);  
    }
});
