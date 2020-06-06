import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

const CommentDetail = ({author, content}) => {
  const {headerContentStyle, authorStyle, commentStyle} = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={authorStyle}>{author}:</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={commentStyle}>{content}</Text>
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
  authorStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentStyle: {
    paddingTop: 5,
    fontSize: 14,
    maxWidth: 300,
  },
};

export default CommentDetail;
