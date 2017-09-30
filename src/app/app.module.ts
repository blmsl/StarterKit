import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatTooltipModule,
  MatSelectModule,
  MatProgressBarModule,
  MatDialogModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatStepperModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { NgPipesModule } from 'ngx-pipes';
import { MomentModule } from 'angular2-moment';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { DndModule } from 'ng2-dnd';


import { MessagingService } from "./services/messaging.service";
import { AuthService } from './services/auth.service';
import { UploadService } from './services/upload.service';
import { UtilsService } from './services/utils.service';
import { SnackBarService } from './services/snack-bar-service.service';
import { DashyService } from './services/dashy.service';
import { DialogService } from './services/dialog.service';
import { EcommerceService } from './services/ecommerce.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'hammerjs';
import { environment } from '../environments/environment';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UserStatusComponent } from './user-status/user-status.component';
import { DashyComponent } from './dashy/dashy.component';
import { GridsterModule } from 'angular-gridster2';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { FileSizePipe } from './pipes/file-size.pipe';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewDashboardDialogComponent } from './dashy/new-dashboard-dialog/new-dashboard-dialog.component';
import { SnackbarProgressComponent } from './snackbar-progress/snackbar-progress.component';
import { WidgetComponent } from './dashy/widget/widget.component';
import { WidgetSettingComponent } from './dashy/widget/widget-setting/widget-setting.component';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import * as highchartsMore from 'highcharts/js/highcharts-more';
import * as brokenAxis from 'highcharts/js/modules/broken-axis';
import * as highmaps from 'highcharts/js/modules/map';
import { ChartModule } from 'angular2-highcharts';
import { SwingModule } from 'angular2-swing';
import { TinderComponent } from './tinder/tinder.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { PromptComponent } from './dialogs/prompt/prompt.component';
import { DndDirective } from './directives/dnd.directive';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { UploadComponent } from './components/-shared/upload/upload.component';
import { ListItemComponent } from './components/-shared/list-item/list-item.component';
import { SellComponent } from './components/-shared/sell/sell.component';

export function highchartsFactory() {
  // Initialize addons.
  highchartsMore(highcharts);
  brokenAxis(highcharts);
  highmaps(highcharts);

  // default highcharts options
  highcharts.setOptions({
    "colors": ["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
    chart: {
      backgroundColor: 'transparent',
      animation: false
    },
    plotOptions: {
      series: {
        animation: false
      },
      line: {
        marker: {
          enabled: false
        }
      },
      pie: {
        dataLabels: {
          enabled: true,
          format: '{y}',
          connectorColor: '#b4b4b4',
          connectorWidth: 0.5,
          distance: 12
        },
        showInLegend: true,
        borderWidth: 1,
        borderColor: null

      }
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      borderColor: '#9E9E9E',
      borderWidth: .5
    },
    yAxis: {
      title: {
        text: null
      }
    }
  });

  return highcharts;
}

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: 'App Demo - Home'
    }
  },
  {
    path: 'profile', component: ProfileComponent, data: {
      title: 'My profile'
    }
  },
  {
    path: 'dashy', component: DashyComponent, data: {
      title: 'Dashy BI Dashboard'
    }
  },
  {
    path: 'uploads', component: FilesUploadComponent, data: {
      title: 'My uploads'
    }
  },
  {
    path: 'tinder', component: TinderComponent, data: {
      title: 'Tinder yo'
    }
  },
  {
    path: 'shopping', component: ShoppingComponent, data: {
      title: 'Buy and sell yo'
    }
  }

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ForgotPasswordComponent,
    UserStatusComponent,
    DashyComponent,
    FilesUploadComponent,
    FileSizePipe,
    LoginComponent,
    SignUpComponent,
    NewDashboardDialogComponent,
    SnackbarProgressComponent,
    WidgetComponent,
    WidgetSettingComponent,
    TinderComponent,
    ConfirmComponent,
    PromptComponent,
    DndDirective,
    ShoppingComponent,
    UploadComponent,
    ListItemComponent,
    SellComponent
  ],
  imports: [
    MomentModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatStepperModule,
    FlexLayoutModule,
    MatGridListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    GridsterModule,
    NgPipesModule,
    ChartModule,
    SwingModule,
    DndModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [
    MessagingService,
    AuthService,
    UploadService,
    UtilsService,
    SnackBarService,
    DashyService,
    DialogService,
    EcommerceService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ForgotPasswordComponent,
    NewDashboardDialogComponent,
    ConfirmComponent,
    PromptComponent,
    SnackbarProgressComponent,
    WidgetSettingComponent,
    SellComponent
  ]
})
export class AppModule { }
