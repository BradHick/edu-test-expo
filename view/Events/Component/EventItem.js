import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const EventItemText = styled.Text`
	font-size: 16px;
	color: #666666;
	line-height: 28px;
	padding-top: 5px;
	text-align: left;
`

const EventItemTime = styled.Text`
	color: #666666;
	align-items: center;
	font-size: 18px;
`;

const EventItemDate = styled.View`
	width: 80px;
	height: 80px;
	padding: 10px 15px;
	/* flex: 1; */
	justify-content: center;
	align-items: center;
	background-color: rgba(115, 61, 190, 0.10);
	border-radius: 5px;
	margin-right: 16px;
`;

const EventItemTitle = styled.Text`
	font-size: 22px;
	color: #333333;
	font-weight: bold;
	line-height: 30px;
	margin-bottom: 10px;
`;

const EventItemContent = styled.View`
	padding: 15px;
	flex: 1;
	width: 100%;
	background: #FFFFFF;
	z-index: 1;
	margin-top: -25px;
	border-top-left-radius: 30;
	border-top-right-radius: 30;
`

const EventItemHeader = styled.Image`
	width: 100%;
	height: 270px;
`;


const EventItem = (props) => (
	<View style={{ flex: 1 }}>
		<EventItemHeader source={{ uri: props.poster }} />
		<EventItemContent>
			<View style={{ flexDirection: 'row' }}>
				<EventItemDate>
					<Text style={{ fontSize: 24, fontWeight: 'bold', color: '#733DBE' }}>{props.day}</Text>
					<Text style={{ color: '#733DBE' }}>{props.month}</Text>
				</EventItemDate>
				<View style={{ flex: 1 }}>
					<EventItemTitle>{props.title}</EventItemTitle>
					<EventItemTime>
						{props.time}
					</EventItemTime>
				</View>
      </View>
			
			<EventItemText>
				{props.text}
			</EventItemText>
		</EventItemContent> 
	</View>
);

export default EventItem;