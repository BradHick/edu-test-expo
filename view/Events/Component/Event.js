import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventItem from './EventItem'
import moment from 'moment';
import brLocale from 'moment/locale/pt-br';


moment.locale('pt-br', brLocale);

class Event extends Component {

  static navigationOptions = ({navigation}) =>({
    title: 'Detalhes do evento'
  });

  render = () => {
    const { navigation } = this.props;
    const event = navigation.getParam('event');
    return (
      <EventItem 
        poster={event.image}
        title={event.title}
        time={moment(event.startAt).format('HH:mm')}
        day={moment(event.startAt).format('DD')}
        month={moment(event.startAt).format('MMMM')}
        text={event.description}
      />
    );
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  text: {
    fontSize: 60,
  }
});


export default Event;