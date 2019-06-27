import firebase from "firebase/app";

import { Advice } from "../model/Advice";

export class AdvicesManager {
    public static async addAdvice(advice: Advice) {
        await firebase
            .firestore()
            .collection(Advice.ADVICES_COLLECTION_KEY)
            .add(advice);
    }
}
