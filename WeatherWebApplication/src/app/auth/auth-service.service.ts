import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User, UserProfileData} from '../models/user.model';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth,
              private router: Router,
              private _firestore: AngularFirestore) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.CreateUserProfileData();
          this.AssignLocalStorageUserDataJSON();
          localStorage.setItem('user', JSON.stringify(this.userDetails));
          JSON.parse(localStorage.getItem('user'));
        } else {
          this.userDetails = null;
          localStorage.setItem('user', null);
          this.DeassignLocalStorageUserDataJSON();
          JSON.parse(localStorage.getItem('user'));
        }
      },
    );
  }

  register(email, password, fullName, company) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SetUserData(result.user);
        this.SendVerificationMail();
      });
  }

  /* Setting up user data when sign in with username/password,
 sign up with username/password and sign in with social auth
 provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this._firestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  CreateUserProfileData() {
    const followDoc =
      this._firestore.collection(`usersdata`).doc(this.userDetails.uid).ref;

    return followDoc.get().then((doc) => {
      if (!doc.exists) {
        this._firestore.collection('usersdata').doc(this.userDetails.uid).set({
          name: this.userDetails.displayName,
          picture: this.userDetails.photoURL,
          uid: this.userDetails.uid,
          favstations: new Array(String),
          theme: 'cosmic',
        });
      }
    });
  }

  AssignLocalStorageUserDataJSON() {
    this.GetUserProfileData(this.userDetails.uid)
      .subscribe(
        responseData => {
          localStorage.setItem('userdata', JSON.stringify(responseData as UserProfileData));
          JSON.parse(localStorage.getItem('userdata'));
        });
  }

  DeassignLocalStorageUserDataJSON() {
    localStorage.setItem('userdata', JSON.stringify({theme: 'default'}));
    JSON.parse(localStorage.getItem('userdata'));
  }

  GetUserProfileData(userid) {
    return this._firestore.doc<UserProfileData>('usersdata/' + userid).valueChanges();
  }

  UpdateUserProfileDataTheme(newTheme: string) {
    const userjson = JSON.parse(localStorage.getItem('userdata')) as UserProfileData;
      this._firestore.doc('usersdata/' + userjson.uid).update({
        theme: newTheme,
      });
  }

  // Send email verification when new user sign up
  SendVerificationMail() {
    return this._firebaseAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        // this.router.navigate(['verify-email-address']);
        // this.router.navigate(['verify-email-address']);
      });
  }

  requestPass(email) {
    return this._firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  confirmPasswordReset(code, newPassword) { // param: oobCode=<code>
    return this._firebaseAuth.auth.confirmPasswordReset(code, newPassword);
  }

  /*verifyPasswordResetCode(code){
    return this.__firebaseAuth.auth.verifyPasswordResetCode(code);
  }*/

  signInWithEmail(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }
  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }
  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/auth/login']));
  }
}
