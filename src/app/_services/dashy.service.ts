import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";

import { Dashboard } from '../_classes/dashboard';

@Injectable()
export class DashyService {

  private basePath: string = '/dashboards';
  dashboards: AngularFireList<Dashboard>;

  constructor(private af: AngularFireDatabase) { }

  getPostsList(): AngularFireList<Dashboard> {
    this.dashboards = this.af.list<Dashboard>(this.basePath);

    return this.dashboards
  }

  createDashboard(dashboard: Dashboard): void {
    this.dashboards.push(dashboard)
  }

  deletePost(key: string): void {
    this.dashboards.remove(key)
  }

}
