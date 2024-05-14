import { FormControl } from '@angular/forms';

/**
 * Validates if the input is in lower case and sets it to lower case if not.
 * @param control - The FormControl to validate.
 * @returns Null if validation is successful, otherwise an error object.
 */
export function lowerCaseValidator(control: FormControl) {
  // Get value from FormControl
  const value = control.value.toLowerCase();
  // Check if value is not already lowerCase
  if (value !== control.value) {
    // Set value back to FormControl
    control.setValue(value);
  }
  // Return null to indicate validation success
  return null;
}
