import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Server} from '../Server.model';
import {CanComponentDeactivate} from './Can-deactivate-guard.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) {
    this.canDeactivate = () => {
      if ( !this.allowEdit ) {
        return true;
      }
      if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && this.changesSaved ) {
        return confirm( 'do you really want to leave' );
      } else {
        return true;
      }
    };
  }
  server: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  canDeactivate: () => (Observable<boolean> | Promise<boolean> | boolean);

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      ( params: Params ) => {
        this.allowEdit = params['allowEdit'] === '1';
      }
    );
    this.activatedRoute.fragment.subscribe(
      () => {
      }
    );
    this.server = this.serversService.getServer( (this.activatedRoute.params['id'] === undefined) ? 1 : this.activatedRoute.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate( ['../'], { relativeTo: this.activatedRoute } );
  }

}
