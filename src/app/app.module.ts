import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
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
  MatStepperModule,
  MatRippleModule
} from '@angular/material';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgPipesModule } from 'ngx-pipes';
import { MomentModule } from 'angular2-moment';
import { DndModule } from 'ng2-dnd';
import { GridsterModule } from 'angular-gridster2';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import 'hammerjs';
import { environment } from '../environments/environment';
import { MarkdownModule } from 'angular2-markdown';

// services
import { MessagingService } from "./_services/messaging.service";
import { AuthService } from './_services/auth.service';
import { UploadService } from './_services/upload.service';
import { UtilsService } from './_services/utils.service';
import { SnackBarService } from './_services/snack-bar-service.service';
import { DashyService } from './_services/dashy.service';
import { DialogService } from './_services/dialog.service';
import { EcommerceService } from './_services/ecommerce.service';
import { WindowRefService } from './_services/window-ref.service';

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
import { ItemDetailsComponent } from './_components/shopping/item-details/item-details.component';
import { LoginPageComponent } from './_components/login-page/login-page.component';

//pipes
import { FileSizePipe } from './_pipes/file-size.pipe';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import * as highchartsMore from 'highcharts/js/highcharts-more';
import * as brokenAxis from 'highcharts/js/modules/broken-axis';
import * as highmaps from 'highcharts/js/modules/map';
import { ChartModule } from 'angular2-highcharts';
import { SwingModule } from 'angular2-swing';
import { UploadMyPhotoComponent } from './_components/profile/upload-my-photo/upload-my-photo.component';


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

// this is where you create all the Routes
// at the moments we only have 1 layout
// and each route can have its own title
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
  },
  {
    path: 'shopping/:key', component: ItemDetailsComponent, data: {
      title: 'Product info'
    }
  },
  {
    path: 'change-my-display-photo',
    component: UploadMyPhotoComponent,
    data:{
      title: 'Create,Edit or Delete Your Display Photo'
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
    SellComponent,
    ItemDetailsComponent,
    LoginPageComponent,
    UploadMyPhotoComponent
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
    MatGridListModule,
    MatRippleModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    GridsterModule,
    NgPipesModule,
    ChartModule,
    SwingModule,
    DndModule.forRoot(),
    MarkdownModule.forRoot(),
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
    WindowRefService,
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
