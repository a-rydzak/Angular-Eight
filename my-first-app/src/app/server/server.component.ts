import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
    // styles: [`h4{color:red}`]
})

export class ServerComponent{
    greeting = 'Well Howdy There';
    name = 'Partner';
}