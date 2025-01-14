import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = !!localStorage.getItem('user');
  if(isLoggedIn) {
    return true;
  }
  else {
    window.alert('You are not allowed to nav to this page');
    return false;
  }
  // return true;
};
