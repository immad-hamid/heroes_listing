import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

// routes
const routes = [
    {path: 'heros', component: TabsComponent, children: [
        {path: '', redirectTo: 'all', pathMatch: 'full'},
        {path: ':side', component: ListComponent}
    ]},
    {path: 'add-heros', component: CreateCharacterComponent},
    {path: '**', redirectTo: '/heros/all'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
