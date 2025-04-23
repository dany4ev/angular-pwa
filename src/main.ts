import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient()],
// })
//   .then(() => {

//     // Registering a service worker
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.register('worker-basic.min.js').then(function (registration) {
//         console.log('Service Worker registered with scope:', registration.scope);
//       }).catch(function (error) {
//         console.error('Service Worker registration failed:', error);
//       });
//     }
//   })
//   .catch((err) => console.error(err));