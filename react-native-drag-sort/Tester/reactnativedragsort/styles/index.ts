import {StyleSheet} from 'react-native';

export const dragSortableViewStyle = StyleSheet.create({
  wrapper: {
    height: 450,
  },
  childView: {
    width: 80,
    height: 80,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export const autoDragSortableViewStyle = StyleSheet.create({
  wrapper: {
    height: 450,
  },
  childView: {
    width: 80,
    height: 80,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f39c12',
    borderRadius: 4,
  },
  childText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export const anySizeDragSortableVIewStyle = StyleSheet.create({
  child: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f39c12',
    borderRadius: 4,
  },
  childChange: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#21c93f',
    borderRadius: 6,
  },
  childWrap: {
    marginRight: 5,
    marginTop: 5,
  },
  childWrapChange: {
    marginRight: 6,
    marginTop: 6,
  },
  childClearWrap: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 20,
    height: 20,
    zIndex: 999,
  },
  childClear: {
    width: 20,
    height: 20,
  },
  childMoved: {
    opacity: 0.95,
    borderRadius: 4,
    backgroundColor: '#00cccc',
  },
  childMovedChange: {
    opacity: 0.85,
    borderRadius: 6,
    backgroundColor: '#00cc00',
  },
  childIconSwipe: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50 * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childIconSwipeChange: {
    width: 40,
    height: 40,
    backgroundColor: '#00aa00',
    borderRadius: 40 * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  childIconChange: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  childTextSwipe: {
    backgroundColor: '#fff',
    width: 72,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childTextSwipeChange: {
    backgroundColor: '#0a0',
    width: 68,
    height: 34,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childText: {
    color: '#444',
    fontSize: 16,
    fontWeight: 'bold',
  },
  childTextChange: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bolder',
  },
  header: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#2ecc71',
    borderBottomWidth: 2,
  },
  headerTitle: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
  aheaderTitle: {
    color: '#333',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  abottomDesc: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
