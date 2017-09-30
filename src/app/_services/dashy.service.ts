import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";

import { Dashboard } from '../classes/dashboard';

@Injectable()
export class DashyService {

  private basePath: string = '/dashboards';
  dashboards: FirebaseListObservable<Dashboard[]> = null;

  constructor(private af: AngularFireDatabase) { }

  getPostsList(query = {}): FirebaseListObservable<Dashboard[]> {
    this.dashboards = this.af.list(this.basePath, {
      query: query
    });

    return this.dashboards
  }

  createDashboard(dashboard: Dashboard): void {
    this.dashboards.push(dashboard)
  }

  deletePost(key: string): void {
    this.dashboards.remove(key)
  }

}
