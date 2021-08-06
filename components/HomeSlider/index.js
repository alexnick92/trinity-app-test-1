import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/images/newcarousel17.png'),
        require('../../assets/images/newcarousel12.png'),
        require('../../assets/images/newcarousel13.png'),
        require('../../assets/images/newcarousel14.png'),
        require('../../assets/images/newcarousel15.png'),
        require('../../assets/images/newcarousel16.png'),
        require('../../assets/images/newcarousel1.png'),
        
      ]
    };
  }
 
  render() {
    return (

        <SliderBox 
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
            paginationBoxVerticalPadding={20}
        />

    );
  }
}