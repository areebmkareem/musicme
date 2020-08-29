import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView, Image, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
// import CustomTextFiled from '../../Common/CustomTextFiled';
// import CustomButton from '../../Common/CustomButton';
import MusicFiles, {Constants, CoverImage} from 'react-native-get-music-files-v3dev-test';
import CustomButton from '../Common/CustomButton';
import {bulkInsertTracks} from '../../Store/Actions/Tracks';

const Activity = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    MusicFiles.getAll({
      cover: true,
      batchSize: 0,
      batchNumber: 0,
      sortBy: Constants.SortBy.Title,
      sortOrder: Constants.SortOrder.Ascending,
    })
      .then((f) => {
        setData(f);
        setIsLoading(false);
      })
      .catch((er) => {});
  }, []);

  const styles = getGeneratedStyles(props);

  const handleOnBulkInsert = () => {
    dispatch(bulkInsertTracks(data.results));
  };
  return (
    <View style={styles.contianer}>
      <SafeAreaView></SafeAreaView>
      <View style={{flex: 1, padding: 10}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            contentContainerStyle={{paddingBottom: 100}}
            showsVerticalScrollIndicator={false}
            data={data.results}
            renderItem={({item, index}) => (
              <View style={{flex: 1}}>
                <Animatable.View
                  useNativeDriver={true}
                  delay={index}
                  animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                  style={{
                    flex: 1,
                    //   justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      padding: 10,
                      alignItems: 'center',
                      position: 'relative',
                    }}>
                    <CoverImage style={{borderRadius: 25}} source={item.path} placeHolder={'https://cdn2.iconfinder.com/data/icons/Qetto___icons_by_ampeross-d4njobq/256/library-music.png'} width={50} height={50} />

                    <View style={{marginLeft: 20, borderBottomWidth: 1, borderBottomColor: '#eee'}}>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
                      <Text>
                        <Text style={{fontSize: 16}}>{`${item.album}, `}</Text>
                        <Text style={{fontSize: 12}}>{item.artist}</Text>
                      </Text>
                      <Text style={{fontSize: 16}}>{item.artist}</Text>
                    </View>
                  </View>
                </Animatable.View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 10, padding: 10}}>
        <CustomButton title="CONTRIBUTE" onPress={() => handleOnBulkInsert()} />
      </View>
    </View>
  );
};

const getGeneratedStyles = () =>
  StyleSheet.create({
    contianer: {
      flex: 1,
      //   margin: 10,
      position: 'relative',
      backgroundColor: '#fff',
    },
  });

export default Activity;
