import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers;

  onAddServer() {
    if ( this.servers === undefined ) {
      this.servers = [];
    }

    this.servers.push('Another Server ' + this.servers.length);
  }

  onRemoveServer(id: number) {
    const position = id ;
    this.servers.splice(position, 1);
  }
}
