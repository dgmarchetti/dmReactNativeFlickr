import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

const CommentDetail = ({author, content}) => {
  const {headerContentStyle, headerTextStyle} = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{author}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{content}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
};

export default CommentDetail;
