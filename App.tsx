import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from './styles/global';
import Cat from './components/Cat';
import {catsList} from './helpers/mock';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globalStyles.wrapper}>
          <Text style={globalStyles.title}>Cat Directory</Text>
          <View style={globalStyles.container}>
            {catsList.map((item, index) => {
              return <Cat key={index} name={item.name} image={item.image} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
