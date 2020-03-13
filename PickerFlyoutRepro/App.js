/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
          <View style={{flex: 1, flexDirection: "row"}}>
            <View style={{flex: 0.5}}>
            <Picker style={{height: 50, width: 100, margin: 100, alignSelf: "flex-start"}}>
                <Picker.Item label="Item one" value="item one" />
                <Picker.Item label="Item two" value="item two" />
                <Picker.Item label="Item three" value="item three" />
              </Picker>
              </View>
              <View style={{flex: 0.5}}>
              <Picker style={{height: 50, width: 100, margin: 100, alignSelf: "flex-end"}}>
                <Picker.Item label="Item one" value="item one" />
                <Picker.Item label="Item two" value="item two" />
                <Picker.Item label="Item three" value="item three" />
              </Picker>
              </View>
          </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
            <View style={{flex: 1, flexDirection: "row"}}>
            <View style={{flex: 0.5}}>
              <Picker style={{height: 50, width: 100, margin: 100, alignSelf: "flex-start"}}>
                <Picker.Item label="Item one" value="item one" />
                <Picker.Item label="Item two" value="item two" />
                <Picker.Item label="Item three" value="item three" />
              </Picker>
              </View>
              <View style={{flex: 0.5}}>
              <Picker style={{height: 50, width: 100, margin: 100, alignSelf: "flex-end"}}>
                <Picker.Item label="Item one" value="item one" />
                <Picker.Item label="Item two" value="item two" />
                <Picker.Item label="Item three" value="item three" />
              </Picker>
              </View>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
