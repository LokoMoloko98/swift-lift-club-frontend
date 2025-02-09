export interface CognitoUser {
    username: string;
    email: string;
    attributes: {
      email: string;
      username: string;
      nickname: string;
      password: string;
    };
  }