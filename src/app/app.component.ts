import { Component, ViewChild } from '@angular/core';
import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RutasPage } from '../pages/rutas/rutas';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  private app;
	private platform;
  private menu: MenuController;
  @ViewChild(Nav) nav: Nav;

  constructor(app: App, platform: Platform,
    menu: MenuController,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private auth: AuthService) {
      this.menu = menu;
      this.app = app;
      this.platform = platform;
      this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
    );
  }
  rutas() { 
    this.menu.close();
    console.log('click Rutas');
    this.nav.setRoot(RutasPage);
  }
  login() {
    this.menu.close();
      this.auth.signOut();
      this.nav.setRoot(LoginPage);
  }
  logout() {
      this.menu.close();
      this.auth.signOut();
      this.nav.setRoot(LoginPage);
  }
  home() {
    this.menu.close();
    this.nav.setRoot(HomePage);
  }
  
}

