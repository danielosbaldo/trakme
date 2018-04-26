import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
	loginError: string;
	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		fb: FormBuilder
	) {
      this.loginForm = fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
    }
    login() {
      let data = this.loginForm.value;
  
      if (!data.email) {
        return;
      }
  
      let credentials = {
        email: data.email,
        password: data.password
      };
      this.auth.signInWithEmail(credentials)
        .then(
          () => this.navCtrl.setRoot(HomePage),
          error => this.loginError = error.message
        );
  }
}
