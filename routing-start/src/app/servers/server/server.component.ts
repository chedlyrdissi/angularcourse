import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Server} from '../Server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: Server;

  constructor(private serversService: ServersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ( params: Params ) => {
        this.server = params['server'];
      }
    );
    // this.server = this.serversService.getServer( +this.activatedRoute.snapshot.params['id'] );
    // this.activatedRoute.params.subscribe(
    //   ( params: Params ) => {
    //     this.server = this.serversService.getServer( +params['id'] );
    //   }
    // );
  }

  onEdit() {
    this.router.navigate( ['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' } );
  }

}
