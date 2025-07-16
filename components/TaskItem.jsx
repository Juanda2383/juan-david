import React from 'react';
import { View, Text } from 'react-native';

export default function TaskItem({ task }) {
  return (
    <View>
      <Text>{task.title}</Text>
    </View>
  );
}
