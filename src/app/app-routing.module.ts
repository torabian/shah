import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumberSelectorComponent } from './number-selector/number-selector.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeScreenComponent,
  },
  {
    path: 'number-selector',
    component: NumberSelectorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
