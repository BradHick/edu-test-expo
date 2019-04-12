import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Poster = styled.Image`
	width: 80px;
	height: 100px;
	border-radius: 5px;
	margin-right: 10px;
`;

const EventDate = styled.Text`
	color: #999999;
	font-weight: 600;
`;

const EventTime = styled.Text`
	color: #666666;
	align-items: center;
	margin-bottom: 12px;
`;

const EventTitle = styled.Text`
	color: #333333;
	font-weight: 600;
	margin-bottom: 8px;
`;

const EventLabel = styled.Text`
	color: #999999;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: 5px;
`;

const EventWrapper = styled.TouchableOpacity`
	margin: 8px;
	padding-left: 5px;
	border-radius: 5px;
	background-color: #733DBE;
	shadow-color: #000;
  shadow-offset: {
		width: 0,
		height: 2
	};
  shadow-opacity: 0.6;
  shadow-radius: 25;
  elevation: 2;
`;

const EventContent = styled.View`
	background-color: #FFFFFF;
	padding: 15px;
	flex-direction: row;
`;

const Event = (props) => (

	<EventWrapper onPress={props.onPress}>
		<EventContent>
			{props.poster ? <Poster source={{ uri: props.poster }}/> : null}
			<View style={{flex:1}}>
				<EventLabel>Eventos</EventLabel>
				<EventTitle>{props.title}</EventTitle>
				<EventTime>
					{props.time}
				</EventTime>
					<EventDate>{props.date}</EventDate>
			</View>
		</EventContent>
	</EventWrapper>
);

export default Event; 