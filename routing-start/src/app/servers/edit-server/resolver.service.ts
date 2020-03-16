import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Server} from '../Server.model';
import {Injectable} from '@angular/core';
import {ServersService} from '../servers.service';

@Injectable()
export class Resolver implements Resolve<Server> {

  constructor( private serverService: ServersService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer( +route.params['id'] );
  }

}
