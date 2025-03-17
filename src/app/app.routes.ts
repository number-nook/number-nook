import { Routes } from '@angular/router';
import { TestCardComponent } from './component/test-card/test-card.component';
import { NumberNookComponent } from './component/number-nook/number-nook.component';

export const routes: Routes = [
    { path: '', component: NumberNookComponent },
    { path: 'test', component: TestCardComponent }
];
