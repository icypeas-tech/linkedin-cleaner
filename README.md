
![logo linkedln cleaner](https://github.com/icypeas-tech/linkedin-cleaner/assets/128605482/8db8625c-f7e3-4675-a576-3be51e8e374c)


<h1 align="center">
Introducing a free and open-source solution designed to seamlessly automate the removal of pending invitation requests on LinkedIn, tailored specifically to your needs.

</h1>

Icypeas team proudly presents LinkedIn Cleaner, an open-source Chrome extension meticulously designed to effortlessly automate the deletion of pending invitation requests on LinkedIn. Simplify your networking experience with this innovative solution.
<p align="center">
  <img width="400"  src="https://github.com/icypeas-tech/linkedin-cleaner/assets/128605482/2d422c1b-f8c0-4f3c-99d2-bb95385269d2">
</p>


## 💻 Install the project in developer mode

- [ ] Download the entire project
- [ ] Go to Chrome > Settings > Extensions > Developer mode > Load unpacked extension
- [ ] Select the project directory
- [ ] Enable the extension

## 🚦 Usage

Optimize your LinkedIn experience with LinkedIn Cleaner:

- [ ] Activate LinkedIn Cleaner by simply pressing the extension.
- [ ] Navigate to https://www.linkedin.com/mynetwork/invitation-manager/sent/.
- [ ] Ensure smooth operation by pressing the LinkedIn Cleaner extension again.
- [ ] Effortlessly eliminate pending requests by pressing the 'Remove Pending Request' button.
- [ ] Stay on the page until all pending requests are successfully removed.

Seamlessly manage your LinkedIn connections—just another way our startup approach enhances your workflow.
This video demonstrates how to use it :

<p dir="auto" align="center"><animated-image data-catalyst="">


https://github.com/icypeas/linkedin-cleaner/assets/137278677/5acca794-90df-4fdb-b241-d2ea43ff9617


</p>

## 📋 Files

- [ ] manifest.json: This file contains essential information about the Chrome extension, such as its name, version, description, permissions, and scripts. It also includes declarations of entry points, namely the popup page and content scripts.
- [ ] popup.html: Responsible for defining the popup page of the extension, visible when the user interacts with the extension icon.
- [ ] popup.js: The JavaScript script linked to the popup page. It manages user events and interactions that occur on the popup page, like buttons and links.
- [ ] background.js: This script monitors clicks on the extension icon and triggers the execution of the content script, which handles the removal of invitations.
- [ ] content.js: An injected content script operating within the web page, handling actions like button clicks.
- [ ] jsconfig.js (includes the chrome package to enable auto-completion in VSCode).


##  👨‍💻 Support

If you have any questions or require assistance, don't hesitate to reach out. Our dedicated support team is here to help you every step of the way. Contact us at support@icypeas.com for prompt and reliable assistance.

##  🙋 Credits

This extension has been developed and open sourced by the team behind Icypeas https://www.icypeas.com/

