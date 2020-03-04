import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    const server = this.serversService.getServer( this.activatedRoute.snapshot.params['id'] );
    if ( server !== undefined ) {
      this.server = server;
    }
    this.activatedRoute.params.subscribe(
      ( params: Params ) => {
        this.server = this.serversService.getServer( params['id'] );
      }
    );
  }

}
