// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyAjPUukml_L9yHGN_qvniewJqij3TcF9is",
  authDomain: "train-schedule-11bcd.firebaseapp.com",
  databaseURL: "https://train-schedule-11bcd.firebaseio.com",
  projectId: "train-schedule-11bcd",
  storageBucket: "train-schedule-11bcd.appspot.com",
  messagingSenderId: "1082911325078",
  appId: "1:1082911325078:web:033b1ed460a772dc603bb7",
  measurementId: "G-S814V1QVWD"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
const database = firebase.database();
const dataRef = database.ref("schedules/");
const trainNameElem = document.querySelector("#trainName");
const destinationElem = document.querySelector("#destination");
const firstTrainElem = document.querySelector("#firstTrain");
const frequencyElem = document.querySelector("#frequency");
const handleSubmit = () => {
  // funciton(){}
  schedules.formData = {
    trainName: trainNameElem.value,
    destination: destinationElem.value,
    firstTime: firstTrainElem.value,
    frequency: frequencyElem.value
  };

  const firstTime = moment(schedules.formData.firstTime);
  firstTime.add(schedules.formData.frequency, "m");
};
const schedules = {
  data: [],
  formData: {
    trainName: "",
    destination: "",
    firstTime: "",
    frequency: ""
  }
};
const addNewSchedule = () => {
  schedules.data.push(schedules.formData);
};

// dataRef.set()
