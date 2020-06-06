import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = () => {
  //state = {photoset: null};
  const [photoset, setPhotoset] = useState(null);
  useEffect(() => {
    const flickrPhotosetsGetList = async () => {
      try {
        const {data} = await axios.get(
          //'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
          'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=14aa73bca6ffcaa355ea39218a432eda&user_id=125197959%40N04&format=json&nojsoncallback=1',
        );
        setPhotoset(data.photosets.photoset);
      } catch (error) {
        console.log(error);
      }
    };
    flickrPhotosetsGetList();
  }, []);

  // const renderAlbums = () => {
  //   //return this.state.photoset.map(album => (
  //     return photoset.map(album => (
  //     <AlbumDetail
  //       navigation={props.navigation}
  //       key={album.id}
  //       title={album.title._content}
  //       albumId={album.id}
  //     />
  //   ));
  // }

  console.log(this.state);

  if (!photoset) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={photoset}
        renderItem={({item}) => (
          <AlbumDetail
            key={item.id}
            title={item.title._content}
            albumId={item.id}
          />
        )}
      />
    </View>
  );
};

export default AlbumList;
