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


  $(document).on('click', '#submit', function () {
      // Prevent the page from refreshing
      event.preventDefault();
      // Extract name role, date, and rate into object form
      let name = $("#name-input").val();
      let role = $("#role-input").val();
      let date = $("#date-input").val();
      let rate = $("#rate-input").val();
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

      db.ref().push(obj)

  });

  db.ref().on('child_added', employeeToTable); // for each child in the DB, do this function

  function employeeToTable(data) {
      const d = data.val()
      //   $("#tableBody").empty();
      let empData = $(`<tr><td>${d.employeeName}</td>
        <td>${d.employeeRole}</td>
        <td>${d.employeeDate}</td>
        <td>${d.employeeRate}</td></tr>`);
      $("#tableBody").append(empData);
  }