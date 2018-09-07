import { Component } from '@angular/core'
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: 'nav',
    template: `
    <mat-toolbar color="primary">
    <button mat-button routerLink="/">Home</button>
    <button mat-button routerLink="/messages">Messages</button>
    </mat-toolbar>
    `
})
export class NavComponent {
    constructor() {}
}