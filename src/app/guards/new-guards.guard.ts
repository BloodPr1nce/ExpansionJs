import { CanDeactivateFn } from '@angular/router';

export interface deactivateGuardInterface {
  canDeactivate: () => boolean | Promise<boolean>;
}

export const newGuardsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
