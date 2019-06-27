// tslint:disable:ordered-imports

import firebase from "firebase/app";
import firebaseui from "firebaseui";

import { FIREBASE_CONFIG } from "./firebase.config";

export class FirebaseAuthHelper {
    public static initialize(opts: FirebaseAuthHelper.InitializeOptions) {
        firebase.initializeApp(FIREBASE_CONFIG);
        firebase.auth().onAuthStateChanged((user: FirebaseAuthHelper.User | null) => {
            if (user) {
                opts.authenticatedCb(user);
            } else {
                opts.notAuthenticatedCb();
            }
        });
    }

    public static async signOut() {
        await firebase.auth().signOut();
    }

    public static getSignInProviders(): string[] {
        return [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID];
    }

    public static doAuth(): firebase.auth.Auth {
        return firebase.auth();
    }

    public static startFirebaseAuthUI(id: string, signInSuccessfulUrl: string) {
        const uiConfig = {
            signInSuccessUrl: signInSuccessfulUrl,
            signInOptions: FirebaseAuthHelper.getSignInProviders(),
        };
        const ui = new firebaseui.auth.AuthUI(FirebaseAuthHelper.doAuth());
        ui.start(id, uiConfig);
    }
}

export namespace FirebaseAuthHelper {
    export interface InitializeOptions {
        authenticatedCb: (user: FirebaseAuthHelper.User) => void;
        notAuthenticatedCb: () => void;
    }

    export type User = firebase.User;
}
