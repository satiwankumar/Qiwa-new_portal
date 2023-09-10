export const statuses = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "closed", label: "Closed" },
  // Add more status options as needed
];

export const companyNames = [
  { value: "apple", label: "Apple Inc." },
  { value: "google", label: "Google LLC" },
  { value: "microsoft", label: "Microsoft Corporation" },
  { value: "amazon", label: "Amazon.com, Inc." },
  // Add more company names as needed
];
export const dummyEmployeeNames = [
  { value: "john_doe", label: "John Doe" },
  { value: "jane_smith", label: "Jane Smith" },
  { value: "michael_jackson", label: "Michael Jackson" },
  { value: "susan_davis", label: "Susan Davis" },
  // Add more dummy employee names as needed
];

export const dummyPositions = [
  { value: "manager", label: "Manager" },
  { value: "developer", label: "Developer" },
  { value: "designer", label: "Designer" },
  // Add more positions as needed
];

export const departments = [
  { value: "Department X", label: "Department X" },
  { value: "Department Y", label: "Department Y" },
  { value: "Department Z", label: "Department Z" },
];

export const managers = [
  { value: "Manager A", label: "Manager A" },
  { value: "Manager B", label: "Manager B" },
  { value: "Manager C", label: "Manager C" },
];
export const coaches = [
  { value: "Coach 1", label: "Coach 1" },
  { value: "Coach 2", label: "Coach 2" },
  { value: "Coach 3", label: "Coach 3" },
];
export const dummyLeaveTypes = [
  { value: "vacation", label: "Vacation" },
  { value: "sick_leave", label: "Sick Leave" },
  { value: "personal_leave", label: "Personal Leave" },
  { value: "maternity_leave", label: "Maternity Leave" },
  // Add more dummy leave types as needed
];

export const Languages = [
  { value: "", label: "Select Language" },

  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  // Add more languages with short forms as needed
];

export const Currencies = [
  { value: "", label: "Select Currency" },
  { value: "usd", label: "United States Dollar (USD)" },
  { value: "eur", label: "Euro (EUR)" },
  { value: "gbp", label: "British Pound Sterling (GBP)" },
  { value: "jpy", label: "Japanese Yen (JPY)" },
  { value: "cad", label: "Canadian Dollar (CAD)" },
  { value: "aud", label: "Australian Dollar (AUD)" },
  { value: "chf", label: "Swiss Franc (CHF)" },
  { value: "cny", label: "Chinese Yuan (CNY)" },
  { value: "inr", label: "Indian Rupee (INR)" },
  { value: "brl", label: "Brazilian Real (BRL)" },
  // Add more currencies with their respective codes as needed
];
export const dummyProjectTask = [
  { value: "task1", label: "Task 1" },
  { value: "Task2", label: "Task 2" },
  { value: "task3", label: "Task 3" },
  { value: "task4", label: "Task 4" },
  // Add more dummy employee names as needed
];
export const dummyTimeUnit = [
  { value: "halfDay", label: "Half Day" },
  { value: "fullDay", label: "Full Day" },
];
export const phoneNumbers = [
  { value: "+92", label: "+92" },
  { value: "+95", label: "+95" },
  { value: "+72", label: "+72" },
  { value: "+10", label: "+10" },
];

export const dummyRoles = [
  { value: "devops", label: "Devops" },
  { value: "ui_designer", label: "UI Designer" },
  { value: "ux_designer", label: "UX Designer" },
];

export const E2A = (s, lang) => {
  if (lang == "ar") {
    return s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  }
  if (lang == "en") {
    return s.replace(/\d/g, (d) => "0123456789"[d]);
  }
};
