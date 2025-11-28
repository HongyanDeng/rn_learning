import React from "react";
import {
  Text, TextInput, View,
  Image, ImageSourcePropType,
  ScrollView, StyleSheet,
  Button, Alert,
  ColorValue
} from 'react-native';

//写一个页面跳转按钮
interface ButtonProps {
  onPress: Function;
  title: string;
  color: ColorValue;
}

