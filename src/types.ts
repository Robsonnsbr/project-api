export type ApiInfo = {
  welcomeMessage: string;
  description: string;
  documentationUrl: string;
  currentApiVersion: string;
  gratitudeMessage: string;
  routes: {
    getUsers: {
      description: string;
      method: string;
      path: string;
    };
    getUsersById: {
      description: string;
      method: string;
      path: string;
    };
  };
};
