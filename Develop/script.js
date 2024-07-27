// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employees = [];
  console.log('initial employees array: ', employees)


// Collect employee data
const collectEmployees = function() {
  console.log('collectEmployees function called');
  // TODO: Get user input to create and return an array of employee objects
  
  while (true) {
    let firstName = prompt("Enter employee's first name:");
    let lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");
    if (isNaN(salary)) {
      salary = 0;
   }
   
    let employee = {
      firstName: String(firstName),
      lastName: String(lastName),
      salary: Number(salary)
    };

    console.log('new employee: ', employee);

    employees.push(employee);

    console.log('employee pushed');
    
    const addMore = confirm("Would you like to add another employee? Click OK for yes or Cancel for no.");
  
    if (addMore) {
      console.log('yes add more', addMore)
      collectEmployees();
    } else {
      console.log('no add more', addMore);
      console.log('final employees array: ', employees);
    }

    break;
  }

  console.log('new employees list: ', employees);
  console.log('array length: ', employees.length);

  return employees;
  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
