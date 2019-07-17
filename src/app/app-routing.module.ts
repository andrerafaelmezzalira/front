import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposalComponent } from './proposal/proposal.component';

const routes: Routes = [
  {
    path: 'proposal',
    component: ProposalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
