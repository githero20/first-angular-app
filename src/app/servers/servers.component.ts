import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selecting by element attribute -->
  selector: '.app-servers',
  // selecting by class name
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 1'];

  constructor() {
    setTimeout(() => {
      // 'this' works differently in arrow functions and normal ones.
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created successfully! Name is: ' + this.serverName;
  }

  onUpdateServerName = (event: Event) => {
    // explicit casting of the type of event.target so TS doesn't throw an error
    this.serverName = (<HTMLInputElement>event.target).value;
  };
}
