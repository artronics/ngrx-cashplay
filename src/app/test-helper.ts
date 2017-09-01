import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DebugElement } from '@angular/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';

export interface TestResource {
  id: number;
  name: string;
}

/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export const ButtonClickEvents = {
  left: {button: 0},
  right: {button: 2}
};

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}

export class TestDataSource implements DataSource<TestResource> {

  connect(collectionViewer: CollectionViewer): Observable<TestResource[]> {
    // return Observable.of<TestResource[]>([{id: 0, name: 'jalal'}]);
    return Observable.of<TestResource[]>([]);
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }
}
