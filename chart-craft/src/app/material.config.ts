import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

export const materialProviders = [
  importProvidersFrom(MatCardModule, MatToolbarModule, MatButtonModule),
  provideAnimations(), // add this for Material animations
];
