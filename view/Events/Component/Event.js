import React, { Component } from 'react';
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

export default Event;