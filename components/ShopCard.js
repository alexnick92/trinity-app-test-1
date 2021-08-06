import React from 'react';
import {StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native';
import {
  Card,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const heartIcon = <AntDesign name="hearto" size={25} color="black" />;

const width = Dimensions.get('window').width / 2 - 25;

function ShopCard(props) {
  return (
    <Card
      onPress={() => props.navigation.navigate('Product')}
      style={styles.container}>
      <View row spread centerV>
        <Text grey40>NEW</Text>
        <TouchableOpacity>{heartIcon}</TouchableOpacity>
      </View>

      <View
        style={{
          height: 100,
          alignItems: 'center',
          overflow:'hidden'
        }}>
          <Image
            source={props.item.img}
            style={{flex: 1, resizeMode: 'contain'}}
          />
      </View>
      <View
        center
        paddingT-5
        style={{borderTopWidth: 1, borderTopColor: '#EAEAEA'}}>
        <Text style={{padding: 5}}>{props.item.name}</Text>
        <Text text90T grey10>
          MYR {props.item.price}
        </Text>
        <View row spread>
          {props.item.colors.map((color, key) => (
            <FontAwesome
              key={key}
              style={{padding: 5}}
              name="circle"
              size={10}
              color={color}
            />
          ))}
        </View>
      </View>
      <Button
        label="BUY"
        backgroundColor="#F2F2F2"
        color="#029BDB"
        size="xSmall"
        labelStyle={{fontWeight: '600'}}
        style={{marginTop: 10, paddingHorizontal: 30, alignSelf: 'center'}}
      />
    </Card>
  );
}

export default ShopCard;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width,
    marginHorizontal: 2,
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
  },
});
