  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyDLcb2lS9YVFcrUrjJERQb5R8N87l6a7vY",
      authDomain: "employeeproject-bb97a.firebaseapp.com",
      databaseURL: "https://employeeproject-bb97a.firebaseio.com",
      projectId: "employeeproject-bb97a",
      storageBucket: "employeeproject-bb97a.appspot.com",
      messagingSenderId: "124738813898"
  };
  firebase.initializeApp(config);

  // variables
  let db = firebase.database();
  var employeeArr = [];
  var employee = {
      id: 0,
      name: "",
      role: "",
      startDate: "",
      monthsWorked: "",
      monthlyRate: "",
      totalBilled: ""
  };

  function employeeToTable() {

  }

  function getEmployee() {

  }

  $(document).on('click', '#submit', function () {
      // Extract name role, date, and rate into object form
      // Push employee into array
      // call function to place employees onto list
      // set firebase changes
  });