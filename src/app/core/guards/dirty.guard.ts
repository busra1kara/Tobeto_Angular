import type { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}

export const dirtyGuard: CanDeactivateFn<CanComponentDeactivate> = (component, currentRoute, currentState, nextState) => {
  console.log('Guard is called');
  return component.canDeactivate ? component.canDeactivate() : true;
};
