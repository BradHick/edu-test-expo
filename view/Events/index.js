import React, { Component } from 'react';
import moment from 'moment';
import brLocale from 'moment/locale/pt-br';
import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';
import { View, Button, Text, StyleSheet, ActivityIndicator, RefreshControl, SectionList } from 'react-native';
import container from './container';
import { Container, Day, EventListItem } from './Component';

moment.locale('pt-br', brLocale);

class Events extends Component {

  static navigationOptions = ({navigation}) =>({
    title: 'Eventos'
  });

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Eventos',
      headerRight: (
        <Button
          onPress={navigation.getParam('logout')}
          title="Sair"
          color='#733DBE'
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ logout: this.logout });
  }

  logout = () => {
    this.props.logout();
    this.props.navigation.navigate('Login');
  }

  goToEvent = (event) => {
    this.props.navigation.navigate('Event', { event });
  };

  renderEvent = (event) => (
    <View>
      <EventListItem
        title={event.title} 
        date={moment(event.startAt).format('LLLL')}
        time={moment(event.startAt).format('HH:mm')}
        poster={event.image}
        onPress={() => this.goToEvent(event)}
      />
    </View>
  );

  componentWillMount(){
    const { fetchEvents, token, navigation } = this.props;
    if (token == ''){
      navigation.navigate('Login');
    }else{
      fetchEvents();
    }
  }

  render = () => {
    const { events, loading, hasMoreEvents, fetchEvents } = this.props;
    const groupedEvents = groupBy(events, (event) => moment(event.startAt).format('dddd, DD MMMM'));
    const groupEvents = mapValues(groupedEvents, (value, key) => {
      return {
        title: key,
        data: value
      }
     });
     const treatedGroupEvents = values(groupEvents)
    return (
      <Container>
        <SectionList
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={fetchEvents}
            />
          }
          renderSectionHeader={({ section: { title } }) => (
            <Day>{title}</Day>
          )}
          sections={treatedGroupEvents}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderEvent(item)}
          onEndReached={hasMoreEvents ? fetchEvents : false}
          onEndReachedThreshold={50}
          ListEmptyComponent={!loading && <Text style={styles.text}>No Events</Text>}
          ListFooterComponent={loading && <ActivityIndicator size='large' color='#733DBE'/>}
        />
      </Container>
    );
  }
};


const styles = StyleSheet.create({
  text: {
    fontSize: 60,
  }
});


export default container(Events);