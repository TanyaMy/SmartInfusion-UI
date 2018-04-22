export let AppEnums = {

  routes: {
    pages: 'pages',
    login: 'login',
    home: 'home',
    medicines: 'medicines',
    manage: 'manage',
    list: 'list',
    details: 'details',
    create: 'create',
    requestSent: 'requestSent',
    diseaseHistory: 'diseaseHistory',
    metrics: 'metrics',
    treatments: 'treatments'
  },

  storageTypes: {
    sessionStorage: 'sessionStorage',
    localStorage: 'localStorage'
  },

  roles: {
    admin: 'Administrator',
    patient: 'Patient',
    medicalEmployee: 'MedicalEmployee',
    doctor: 'Doctor',
    nurse: 'Nurse'
  },

  alertType: {
    error: 'alert-error',
    success: 'alert-success',
    info: 'alert-info',
    fault: 'alert-fault',
    warning: 'alert-warning'
  }
};
