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
    $("<tbody>").empty();
    for (let i = 0; i < employeeArr.length; i++) {
        let empRow = $(`<tr>`);
        let empData = $(`<td>${employeeArr[i].employeeName}</td>
        <td>${employeeArr[i].employeeRole}</td>
        <td>${employeeArr[i].employeeDate}</td>
        <td>${employeeArr[i].employeeRate}</td>`);
        empRow.append(empData);
        $("<tbody>").append(empRow);
    }
}

  function getEmployee() {


  }

  $(document).on('click', '#submit', function () {
      // Prevent the page from refreshing
    event.preventDefault();
      // Extract name role, date, and rate into object form
      name = $("#name-input").val().trim();
      role = $("#role-input").val().trim();
      date = $("#data-input").val().trim();
      rate = $("#rate-input").val().trim();
      // Push employee into array
      let obj = {
          employee.name: name,
          employee.role: role,
          employee.data: date,
          employee.rate: rate

      }
      employeeArr.push(obj);


      // call function to place employees onto list
      employeeToTable();
      
      // set firebase changes
      database.ref().set({
        name: name,
        role: role,
        startDate: startDate,
        monthsWorked: 

      })
    
  });