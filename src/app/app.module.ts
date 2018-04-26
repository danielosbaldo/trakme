import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation'
import { Device } from '@ionic-native/device';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuth } from 'angularfire2/auth';
//prividers
import { AuthService } from '../services/auth.service';
//providersend
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RutasPage } from '../pages/rutas/rutas';
import { environment } from '../environments/environment';
//ngxErrors URL: https://github.com/UltimateAngular/ngx-errors
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { RutasServiceProvider } from '../providers/rutas-service/rutas-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RutasPage
  ],
  imports: [
    BrowserModule,
    NgxErrorsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RutasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    AuthService,
    AngularFireDatabaseModule,
    AngularFireAuth,
    Device,
    RutasServiceProvider
  ]
})
export class AppModule {}
