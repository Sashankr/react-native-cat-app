import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import globalStyles from './styles/global';
import Cat from './components/Cat';
import {catsList} from './helpers/mock';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCatsList = catsList.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globalStyles.wrapper}>
          <Text style={globalStyles.title}>Cat Directory</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Search Cats..."
            onChangeText={text => setSearchTerm(text)}
            value={searchTerm}
          />
          {/* <View>
          <FlatList
            data={filteredCatsList}
            renderItem={({item}) => <Cat name={item.name} image={item.image} />}
          />
        </View> */}

          <View style={globalStyles.container}>
            {filteredCatsList.map((item, index) => {
              return <Cat key={index} name={item.name} image={item.image} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
