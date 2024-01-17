import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  container: {
    display: 'flex',
    gap: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  catImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default globalStyles;
