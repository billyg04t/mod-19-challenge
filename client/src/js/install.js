const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // This will hold the beforeinstallprompt event


window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  deferredPrompt = event;

  butInstall.style.display = 'block';

  butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the PWA installation');
      } else {
        console.log('User declined the PWA installation');
      }

      // Reset the deferredPrompt variable
      deferredPrompt = null;

      // Hide the install button
      butInstall.style.display = 'none';
    }
  });
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully');
});
