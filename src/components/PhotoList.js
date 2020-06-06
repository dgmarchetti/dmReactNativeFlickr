import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

const PhotoList = ({albumId}) => {
  const [photos, setPhotos] = useState(null);

  // componentWillMount() {
  //   axios
  //     .get(
  //       `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${
  //         this.props.route.params.albumId
  //       }&user_id=137290658%40N08&format=json&nojsoncallback=1`,
  //     )
  //     .then(response => this.setState({photos: response.data.photoset.photo}));
  // }
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

  // renderAlbums() {
  //   return this.state.photos.map(photo => (
  //     <PhotoDetail
  //       key={photo.title}
  //       title={photo.title}
  //       imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${
  //         photo.id
  //       }_${photo.secret}.jpg`}
  //     />
  //   ));
  // }

  console.log(this.state);

  if (!photos) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <PhotoDetail
            key={item.title}
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

export default PhotoList;
