import {AppEnums} from "./app.constants";

const r = AppEnums.routes;
export const MENU = [
  {
    path: r.pages,
    children: [
      {
        path: r.manage,
        data: {
          menu: {
            title: 'Manage',
            icon: null,
            selected: true,
            expanded: false,
            order: 0,
            roles: [AppEnums.roles.admin, AppEnums.roles.medicalEmployee]
          }
        },
        children: [
          {
            path: [r.medicines],
            data: {
              menu: {
                title: 'Medicines',
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.admin,  AppEnums.roles.medicalEmployee]
              }
            }
          }
        ]
      },
      {
        path: r.patientRequest,
        data: {
          menu: {
            title: 'Patients',
            icon: null,
            selected: false,
            expanded: false,
            order: 0,
            roles: []
          }
        },
        children: [
          {
            path: r.list,
            data: {
              menu: {
                title: 'Disease Histories List',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.patient, AppEnums.roles.medicalEmployee]
              }
            },
          }
        ]
      }
    ]
  }
];
