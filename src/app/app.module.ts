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
import { NgPipesModule } from 'ngx-pipes';
import { MomentModule } from 'angular2-moment';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { DndModule } from 'ng2-dnd';


// services
import { MessagingService } from "./_services/messaging.service";
import { AuthService } from './_services/auth.service';
import { UploadService } from './_services/upload.service';
import { UtilsService } from './_services/utils.service';
import { SnackBarService } from './_services/snack-bar-service.service';
import { DashyService } from './_services/dashy.service';
import { DialogService } from './_services/dialog.service';
import { EcommerceService } from './_services/ecommerce.service';

import { GridsterModule } from 'angular-gridster2';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'hammerjs';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';


// compoenents
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { UserStatusComponent } from './_components/_shared/user-status/user-status.component';
import { DashyComponent } from './_components/dashy/dashy.component';
import { FilesUploadComponent } from './_components/files-upload/files-upload.component';
import { LoginComponent } from './_components/_shared/login/login.component';
import { ForgotPasswordComponent } from './_components/_shared/login/forgot-password/forgot-password.component';
import { SignUpComponent } from './_components/_shared/sign-up/sign-up.component';
import { NewDashboardDialogComponent } from './_components/dashy/new-dashboard-dialog/new-dashboard-dialog.component';
import { SnackbarProgressComponent } from './_components/_shared/snackbar-progress/snackbar-progress.component';
import { WidgetComponent } from './_components/dashy/widget/widget.component';
import { WidgetSettingComponent } from './_components/dashy/widget/widget-setting/widget-setting.component';
import { TinderComponent } from './_components/tinder/tinder.component';
import { ConfirmComponent } from './_components/_shared/_dialogs/confirm/confirm.component';
import { PromptComponent } from './_components/_shared/_dialogs/prompt/prompt.component';
import { DndDirective } from './_directives/dnd.directive';
import { ShoppingComponent } from './_components/shopping/shopping.component';
import { UploadComponent } from './_components/shopping/upload/upload.component';
import { ListItemComponent } from './_components/shopping/list-item/list-item.component';
import { SellComponent } from './_components/shopping/sell/sell.component';

//pipes
import { FileSizePipe } from './_pipes/file-size.pipe';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import * as highchartsMore from 'highcharts/js/highcharts-more';
import * as brokenAxis from 'highcharts/js/modules/broken-axis';
import * as highmaps from 'highcharts/js/modules/map';
import { ChartModule } from 'angular2-highcharts';
import { SwingModule } from 'angular2-swing';


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
