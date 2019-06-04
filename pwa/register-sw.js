if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
	navigator.serviceWorker.register("https://cdn.jsdelivr.net/gh/KushalAzza/dbin-blog/pwa/superpwa-sw.js")
	.then(function(registration) { console.log('SuperPWA service worker ready'); registration.update(); })
	.catch(function(error) { console.log('Registration failed with ' + error); });
  });
}