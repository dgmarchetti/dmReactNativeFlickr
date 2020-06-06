import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

const PhotoList = ({albumId, albumTitle}) => {
  const {headerContentStyle, headerTextStyle} = styles;
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const flickrPhotosetsGetPhotos = async () => {
      try {
        const {data} = await axios.get(
          // eslint-disable-next-line prettier/prettier
          `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=14aa73bca6ffcaa355ea39218a432eda&photoset_id=${
            albumId
          }&user_id=125197959%40N04&format=json&nojsoncallback=1`,
        );
        setPhotos(data.photoset.photo);
      } catch (error) {
        console.log(error);
      }
    };
    flickrPhotosetsGetPhotos();
  }, []);

  if (!photos) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{albumTitle}</Text>
      </View>
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <PhotoDetail
            key={item.title}
            id={item.id}
            title={item.title}
            imageUrl={`https://farm${item.farm}.staticflickr.com/${
              item.server
            }/${item.id}_${item.secret}.jpg`}
          />
        )}
      />
    </View>
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
};

export default PhotoList;
