import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
//import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([]),
    importProvidersFrom(FormsModule), // ✅ ici au lieu de provideForms()
  ]
};
//provideAnimations(),
