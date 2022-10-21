import React from 'react';
import { Text } from 'react-native'


const Emoji = props => (
    <Text
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        style={{margin: 4}}
    >
        {props.symbol}
    </Text>
);
export default Emoji;