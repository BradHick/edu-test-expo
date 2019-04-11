import { init } from "@rematch/core";
import models from '../model';

describe('The auth process', () => {
  test('Should authenticate and return a token', async () => {
    const store = init({
      models
    });

    //valid user
    const user = {
      email: 'student@ae.com',
      password: '123456'
    };

    await store.dispatch.auth.login(user);

    const authData = store.getState().auth;
    expect(authData).toBeTruthy();
    expect(authData.token).toBeTruthy();
  });

  test('Should return an error when email was invalid', async () => {
    const store = init({
      models
    });

    //invalid user email
    const user = {
      email: 'student@aei.com',
      password: '123456'
    };

    await store.dispatch.auth.login(user);

    const authData = store.getState().auth;
    expect(authData.token).toBeFalsy();
    expect(authData.errors).toBeTruthy();
    expect(authData.errors.response.data.message).toBe('Invalid email or password');
  });

  test('Should return an error when password was invalid', async () => {
    const store = init({
      models
    });

    //invalid user password
    const user = {
      email: 'student@ae.com',
      password: '1234567'
    };

    await store.dispatch.auth.login(user);

    const authData = store.getState().auth;
    expect(authData.token).toBeFalsy();
    expect(authData.errors).toBeTruthy();
    expect(authData.errors.response.data.message).toBe('Invalid email or password');
  });
});