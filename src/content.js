// Création d'un élément de script
const scriptTag = document.createElement("script");
scriptTag.src = chrome.runtime.getURL("elementsMap.js");
document.head.appendChild(scriptTag);

// Fonction responsable de la suppression des invitations dans une interface utilisateur.
function removeInvitations() {
	// Obtention des éléments HTML avec les classes définies dans elementsMap.js
	const deleteButtons = document.getElementsByClassName(elementsMap.deleteButton);
	const confirmDeleteButtons = document.getElementsByClassName(elementsMap.confirmDeleteButton);

	let index = 0;

	// Effectuer une action de manière répetée
	var intervalId = setInterval(function() {
		// Vérification des conditions pour arrêter l'interval
		if (index >= deleteButtons.length || (deleteButtons.length === 0 && confirmDeleteButtons.length === 0)) {
			clearInterval(intervalId);
			return;
		}
		// Simule un Clic sur le bouton de suppression
		deleteButtons[index].click();
		// Si des boutons de confirmation existent, cliquez sur le premier
		if (confirmDeleteButtons.length > 0) {
			confirmDeleteButtons[0].click();
		}
		// Incrémentation de l'index
		index++;

		// Réinitialise le processus après avoir supprimé un profil
        removeInvitations();
	// 50 ms entre chaque suppresion	
	}, 50); 
}

// Ecoute les messages provenant du runtime de l'extension Chrome
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	// Si il reçoit un message avec l'action "removeInvitations", il appelle la fonction
	if (message.action === "removeInvitations") {
		removeInvitations();
	}
});
