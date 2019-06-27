import ow from "ow";

export interface Advice {
    patientName: string;
    medicalproffesionalName: string;
    parentPhoneNumber: string;
    uid?: string;
    advice: string;
    dateISO: string;
}

export namespace Advice {
    export const ADVICES_COLLECTION_KEY = "ahpaa_advices";

    export function validate(o: Advice) {
        ow(o, "Advice", ow.object);
        ow(o.medicalproffesionalName, "Advice.patientName", ow.string.nonEmpty);
        ow(o.patientName, "Advice.medicalproffesionalName", ow.string.nonEmpty);
        ow(o.parentPhoneNumber, "Advice.parentPhoneNumber", ow.string.numeric.length(9));
        ow(o.uid, "Advice.uid", ow.any(ow.undefined, ow.string.nonEmpty));
        ow(o.advice, "Advice.advice", ow.string.nonEmpty);
        ow(o.dateISO, "Advice.dateISO", ow.string);
    }
}
