import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {CanComponentDeactivate} from './CanComponentDeactivate.interface';
import {EditServerComponent} from './edit-server.component';

export class CanDeactivateGuard implements CanDeactivate<EditServerComponent> {

  canDeactivate(component: EditServerComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }

}
