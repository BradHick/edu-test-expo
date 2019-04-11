import { init } from "@rematch/core";
import models from '../model';

describe('The Events process', () => {
  test('Should return a list of events when have a user logged', async () => {
    const store = init({
      models
    });

    //valid user
    const user = {
      email: 'student@ae.com',
      password: '123456'
    };

    await store.dispatch.auth.login(user);

    await store.dispatch.event.fetchEvents();


    const eventData = store.getState().event;

    expect(eventData.events).toBeTruthy();
    expect(eventData.events.length).toBe(10);

  });

  test('Should return an error when user is not logged', async () =>{
    const store = init({
      models
    });

    //invalid user
    const user = {
      email: 'student@aei.com',
      password: '123456'
    };

    await store.dispatch.auth.login(user);

    await store.dispatch.event.fetchEvents();


    const eventData = store.getState().event;

    expect(eventData.errors).toBeTruthy();
    expect(eventData.events.length).toBe(0);
    expect(eventData.errors.response.data.message).toBe('Invalid access token');
  });

  test('Should reset events list', async () => {
    const store = init({
      models
    });

    //valid user
    const user = {
      email: 'student@ae.com',
      password: '123456'
    };

    await store.dispatch.auth.login(user);
    

    await store.dispatch.event.fetchEvents();


    const eventData = store.getState().event;

    expect(eventData.events).toBeTruthy();
    expect(eventData.events.length).toBe(10);

    store.dispatch.event.resetEvents();

    const eventDataModified = store.getState().event;

    expect(eventDataModified.events.length).toBe(0);

  });

  test('Should get a second page of events list', async () => {
    const store = init({
      models
    });

    //valid user
    const user = {
      email: 'student@ae.com',
      password: '123456'
    };

    await store.dispatch.auth.login(user);
    

    await store.dispatch.event.fetchEvents();


    const eventData = store.getState().event;

    expect(eventData.events).toBeTruthy();
    expect(eventData.events.length).toBe(10);

    await store.dispatch.event.fetchEvents();

    const eventDataModified = store.getState().event;

    expect(eventDataModified.events).toBeTruthy();
    expect(eventDataModified.events.length).toBe(20);

  });

});