import { Routes } from '@angular/router';
import { TestCardComponent } from './component/test-card/test-card.component';
import { ShowcaseComponent } from './component/showcase/showcase.component';

export const routes: Routes = [
    { path: '', component: ShowcaseComponent },
    { path: 'test', component: TestCardComponent }
];
