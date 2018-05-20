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
            title: 'manage',
            icon: null,
            selected: true,
            expanded: false,
            order: 0,
            roles: [AppEnums.roles.admin, AppEnums.roles.doctor, AppEnums.roles.nurse]
          }
        },
        children: [
          {
            path: [r.medicines],
            data: {
              menu: {
                title: 'medicines',
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.admin,  AppEnums.roles.doctor, AppEnums.roles.nurse]
              }
            }
          }
        ]
      },
      {
        path: r.diseaseHistory,
        data: {
          menu: {
            title: 'patients',
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
                title: 'diseaseHistoriesList',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.patient, AppEnums.roles.doctor, AppEnums.roles.nurse]
              }
            },
          },
          {
            path: r.create,
            data: {
              menu: {
                title: 'createHistory',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.nurse]
              }
            },
          }
        ]
      }
    ]
  }
];
