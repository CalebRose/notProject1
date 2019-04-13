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



  function getEmployee() {


  }

  $(document).on('click', '#submit', function () {
      // Prevent the page from refreshing
      event.preventDefault();
      // Extract name role, date, and rate into object form
      let name = $("#name-input").val(); //.trim();
      let role = $("#role-input").val(); //.trim();
      let date = $("#date-input").val(); //.trim();
      let rate = $("#rate-input").val(); //.trim();
      $("#name-input").val("");
      $("#role-input").val("");
      $("#date-input").val("");
      $("#rate-input").val("");
      // Push employee into array
      let obj = {
          employeeName: name,
          employeeRole: role,
          employeeData: date,
          employeeRate: rate

      }
      employeeArr.push(obj);
      // call function to place employees onto list
      employeeToTable();

      // set firebase changes
      //   database.ref().set({
      //       name: name,
      //       role: role,
      //       startDate: startDate,
      //       monthsWorked:

      //   });

  });

  function employeeToTable() {
      //   $("#tableBody").empty();
      for (let i = 0; i < employeeArr.length; i++) {
          let empData = $(`<tr><td>${employeeArr[i].employeeName}</td>
        <td>${employeeArr[i].employeeRole}</td>
        <td>${employeeArr[i].employeeDate}</td>
        <td>${employeeArr[i].employeeRate}</td></tr>`);
          $("#tableBody").append(empData);
      }
  }