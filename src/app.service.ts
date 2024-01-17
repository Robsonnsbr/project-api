import { Injectable } from '@nestjs/common';
import { ApiInfo } from './types';

const apiInfo: ApiInfo = {
  welcomeMessage: 'Bem-vindo à API do Project-API!',
  description: 'Esta API fornece acesso aos usuários cadastrados nela.',
  documentationUrl: '[URL da Documentação]',
  currentApiVersion: '[Versão Atual "0.0.0 Dev"]',
  gratitudeMessage: 'Agradecemos por utilizar nossos serviços!',
  routes: {
    getUsers: {
      description: 'Obtém a lista de usuários',
      method: 'GET',
      path: '/users',
    },
    getUsersById: {
      description: 'Obtém um usuário específico pelo ID',
      method: 'GET',
      path: '/users/:id',
    },
  },
};

@Injectable()
export class AppService {
  getApi(): ApiInfo {
    return apiInfo;
  }
}
