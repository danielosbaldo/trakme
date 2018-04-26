import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    private user: firebase.User;
    userId: string;
    perfil: Observable<any>;
	constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
		afAuth.authState.subscribe(user => {
            this.user = user;
            this.userId = user.uid;
            this.getUserProfile(this.userId);
		});
    }
    getUserProfile(uid) {
        this.perfil = this.db.object('/perfiles/' + uid).valueChanges();
    }
    
	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
    }
    
    get authenticated(): boolean {
        return this.user !== null;
    }
    usersingIn(){
        return this.authenticated;
    }
    getUserData() {
        return this.perfil;
    }
    getEmail() {
        return this.user && this.user.email;
    }
    getUid() {
        return this.user && this.user.uid;
    }
    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
    }
}
