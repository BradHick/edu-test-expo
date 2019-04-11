import styled from 'styled-components/native';

const Day = styled.Text`
	width: 100%;
	padding: 24px 9px;
	font-size: 18px;
	font-weight: bold;
	color: #999999;
	&::after{
		content: '';
    margin-left: 5px;
    width: calc(100% - 150px);
    border: .5px solid rgba(115, 61, 190, 0.15);
	}
`;

export default Day;