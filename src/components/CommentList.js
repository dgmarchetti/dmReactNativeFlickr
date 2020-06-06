import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import axios from 'axios';
import CommentDetail from './CommentDetail';
import Card from './Card';
import CardSection from './CardSection';

const CommentList = ({imageTitle, imageUrl, imageId}) => {
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
  } = styles;
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const flickrPhotosCommentsGetList = async () => {
      try {
        const {data} = await axios.get(
          // eslint-disable-next-line prettier/prettier
          `https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=14aa73bca6ffcaa355ea39218a432eda&photo_id=${
            imageId
          }&format=json&nojsoncallback=1`,
        );
        setComments(data.comments.comment);
      } catch (error) {
        console.log(error);
      }
    };
    flickrPhotosCommentsGetList();
  }, []);

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: imageUrl}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{imageTitle}</Text>
        </View>
      </CardSection>

      <FlatList
        data={comments}
        renderItem={({item}) => (
          <CommentDetail
            key={item.id}
            author={item.realname}
            content={item._content}
          />
        )}
        ListEmptyComponent={() => (
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>This image has no comments!</Text>
          </View>
        )}
      />
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    alignSelf: 'center',
    color: '#11233E',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
};

export default CommentList;
