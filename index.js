/**
 * @format
 */
import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const styles = {};

const RNContainer = ({ scores }) => {
    const contents =
      scores && scores.map
        ? scores.map((score) => (
            <Text key={score.name}>
              {score.name}:{score.value}
              {'\n'}
            </Text>
          ))
        : 'scores not available';
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
        <Text style={styles.scores}>{contents}</Text>
      </View>
    );
  };
  

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent('RNContainer', () => RNContainer);
