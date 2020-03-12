import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Server} from './Server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: Server[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private actRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload() {
    this.router.navigate(['/servers'], { relativeTo: this.actRoute } );
  }
}
