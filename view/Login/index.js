import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import {Container, Title, Label, TextInput, FormGroup, Button, Content} from './Components';
import container from './container';
import Key from '../../assets/key.png';




class Login extends Component {

  state = {
    user: {
      email: '',
      password: ''
    }
  };

  static navigationOptions = ({navigation}) =>({
    header: null
  });

  handleChangeEmail = (email) => {
    this.setState({...this.state, user: {...this.state.user, email}})
  };

  handleChangePassword = (password) => {
    this.setState({...this.state, user: {...this.state.user, password}})
  };

  goToEvents = () => {
    this.props.navigation.navigate('Auth');
  };

  componentWillMount(){
    const { token } = this.props;
    if (token != ''){
      this.goToEvents();
    }
  }

  shouldComponentUpdate(nextProps){
    if ((this.props.token !== nextProps.token) && nextProps.token !== ''){
      this.goToEvents();
    }
    return true;
  }

  render = () => {
    const { login, loading } = this.props;
    return (   
      <Container>
        <Content>
          <KeyboardAvoidingView behavior='position' enabled>
            <View>
              <Title>Faça seu login <Image source={Key} style={styles.image}/></Title> 
              <FormGroup>
                <Label>E-mail ou usuário:</Label>
                <TextInput
                  placeholder='Email'
                  onChangeText={this.handleChangeEmail}
                />
              </FormGroup>
              <FormGroup>
                <Label>Senha:</Label>
                <TextInput
                  secureTextEntry={true}
                  placeholder='Password'
                  onChangeText={this.handleChangePassword}
                />
              </FormGroup>
              { loading && <ActivityIndicator size='large' color='#733DBE'/> }
            </View>
          </KeyboardAvoidingView>
        </Content>
        <FormGroup>
          <Button onPress={() => login(this.state.user)}>
            <Text style={styles.textButton}>Entrar</Text>
          </Button>
        </FormGroup>
      </Container>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  image: { 
    height:25,
    width:25
  }
});


export default container(Login);