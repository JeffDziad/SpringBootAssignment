function getData() {
    return JSON.parse(localStorage.getItem("PhoneChargingTutorial"));
}

function setData(data) {
    localStorage.setItem("PhoneChargingTutorial", JSON.stringify(data));
}

function resetData() {
    let model = {
        step1: {
            hasDevice: false,
            hasCharger: false
        },
        step2: {
            chargerIsPlugged: false,
            deviceIsPlugged: false,
        },
        step3: {
            visited: false
        }
    }
    setData(model);
}

if(!getData()) {
   resetData();
}



console.log(getData());
