package pl.jblew.szpitalamerykaporady.model;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class AdvicesViewModel extends ViewModel {
    private MutableLiveData<List<Advice>> advices;

    public LiveData<List<Advice>> getUsers() {
        if (advices == null) {
            advices = new MutableLiveData<List<Advice>>();
            loadAdvices();
        }
        return advices;
    }

    private void loadAdvices() {
        List<Advice> loadedAdvices = new ArrayList<Advice>();
        Advice a1 = new Advice();
        a1.id = "id1";
        a1.uid = "";
        a1.patientName = "Patient 1";
        a1.parentPhoneNumber = "123123123";
        a1.medicalprofessionalName = "Dr D1";
        a1.dateISO = "";
        loadedAdvices.add(a1);

        Advice a2 = new Advice();
        a2.id = "id2";
        a2.uid = "";
        a2.patientName = "Patient 2";
        a2.parentPhoneNumber = "223123123";
        a2.medicalprofessionalName = "Dr D2";
        a2.dateISO = "";
        loadedAdvices.add(a2);

        Advice a3 = new Advice();
        a3.id = "id3";
        a3.uid = "";
        a3.patientName = "Patient 3";
        a3.parentPhoneNumber = "323123123";
        a3.medicalprofessionalName = "Dr D3";
        a3.dateISO = "";
        loadedAdvices.add(a3);
        advices.setValue(loadedAdvices);
    }
}
