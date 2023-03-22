const employee = {
  name: 'John Doe',
  age: 30,
  title: 'Software Engineer'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a clone of the employee object
  const newEmployee = { ...employee };
  // Update the clone with the new key-value pair
  newEmployee[key] = value;
  // Return the updated clone
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Update the original employee with the new key-value pair
  employee[key] = value;
  // Return the updated employee
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Create a clone of the employee object
  const newEmployee = { ...employee };
  // Delete the key from the clone
  delete newEmployee[key];
  // Return the updated clone
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Delete the key from the original employee
  delete employee[key];
  // Return the updated employee
  return employee;
}
