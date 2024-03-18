import { StyleSheet } from "react-native"

export const bootstrapBadge = StyleSheet.create({
  badge: {
    padding: 4,
    borderRadius: 4,
    marginRight: 6,
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    alignItems: 'baseline',
    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  },
  badgePill: {
    paddingRight: 6,
    paddingLeft: 6,
    borderRadius: 10
  },
  primary: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  secondary: {
    backgroundColor: '#6c757d',
    color: '#fff',
  },
  success: {
    backgroundColor: '#28a745',
    color: '#fff',
  },
  danger: {
    backgroundColor: '#dc3545',
    color: '#fff',
  },
  warning: {
    backgroundColor: '#ffc107',
    color: '#212529',
  },
  info: {
    backgroundColor: '#17a2b8',
    color: '#fff',
  },
  light: {
    backgroundColor: '#f8f9fa',
    color: '#212529',
  },
  dark: {
    backgroundColor: '#343a40',
    color: '#fff',
  },
});