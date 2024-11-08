import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'MeetingsManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44340/',
    redirectUri: baseUrl,
    clientId: 'MeetingsManagement_App',
    responseType: 'code',
    scope: 'offline_access MeetingsManagement',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44340',
      rootNamespace: 'MeetingsManagement',
    },
  },
} as Environment;
