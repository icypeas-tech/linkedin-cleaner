
![logo linkedln cleaner](https://github.com/icypeas-tech/linkedin-cleaner/assets/128605482/8db8625c-f7e3-4675-a576-3be51e8e374c)



<h1 align="center">
The solution that is both free and open-source, designed to streamline the process of automatically deleting pending invitation requests on LinkedIn.

</h1>

LinkedIn Cleaner is an open-source Chrome extension developed by the Icypeas team, to streamline the process of automatically deleting pending invitation requests on LinkedIn.
<p align="center">
  <img width="400"  src="https://github.com/icypeas-tech/linkedin-cleaner/assets/128605482/9f938ab8-fc7c-496e-8ece-464577e7c2e2">
</p>


## 💻 Install the project in developer mode

- [ ] Download the entire project
- [ ] Go to Chrome > Settings > Extensions > Developer mode > Load unpacked extension
- [ ] Select the project directory
- [ ] Enable the extension

## 🚦 Test

- [ ]  Select the icon located in the upper right-hand corner, followed by clicking the "Clean" button once you've reached the relevant page.
(Warning: This action cannot be undone!)

## 📋 Files

- [ ] manifest.json: This file contains essential information about the Chrome extension, such as its name, version, description, permissions, and scripts. It also includes declarations of entry points, namely the popup page and content scripts.
- [ ] popup.html: Responsible for defining the popup page of the extension, visible when the user interacts with the extension icon.
- [ ] popup.js: The JavaScript script linked to the popup page. It manages user events and interactions that occur on the popup page, like buttons and links.
- [ ] background.js: This script monitors clicks on the extension icon and triggers the execution of the content script, which handles the removal of invitations.
- [ ] content.js: An injected content script operating within the web page, handling actions like button clicks.
- [ ] jsconfig.js (includes the chrome package to enable auto-completion in VSCode).


##  👨‍💻 Support

If you have any questions or need assistance, feel free to get in touch with us. We're here to help and support you: support@icypeas.com



