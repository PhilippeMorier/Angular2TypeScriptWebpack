import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module.ts';

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(): void {
    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch((error: Error) => console.error(error));
}
