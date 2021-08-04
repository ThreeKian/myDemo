import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CanDeactivatePage } from '../tab1/can-deactivate/can-deactivate.page';

@Injectable()

export class ScanPageGuard implements CanDeactivate<CanDeactivatePage> {
  canDeactivate(component: CanDeactivatePage) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}