// screens/AddTaskScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddTaskScreen({ navigation, route }) {
  const [title, setTitle] = useState('');

  // Recuperamos la función addTask que pasamos desde TaskListScreen
  const { addTask } = route.params;

  // Validación: título no vacío y ≥ 3 caracteres
  const isValid = title.trim().length >= 3;

  const handleAdd = () => {
    if (!isValid) {
      Alert.alert('Error', 'El título debe tener al menos 3 caracteres.');
      return;
    }
    // Construimos la nueva tarea con un ID único
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    // Llamamos al callback para añadirla al estado
    addTask(newTask);

    // Volvemos a la lista
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crear Nueva Tarea</Text>

      <TextInput
        style={styles.input}
        placeholder="Título de la tarea (mín. 3 caracteres)"
        value={title}
        onChangeText={setTitle}
      />

      {/* Mensaje de validación */}
      { !isValid && title.length > 0 && (
        <Text style={styles.errorText}>
          El título debe tener al menos 3 caracteres.
        </Text>
      )}

      <View style={styles.buttons}>
        {/* Botón “Agregar” deshabilitado si no es válido */}
        <Button
          title="Agregar tarea"
          onPress={handleAdd}
          disabled={!isValid}
        />

        {/* Botón “Limpiar” solo si hay texto */}
        { title.length > 0 && (
          <Button
            title="Limpiar"
            onPress={() => setTitle('')}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, padding: 16, backgroundColor: '#fff' },
  header:     { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  input:      {
    borderWidth: 1, borderColor: '#ccc', padding: 8,
    borderRadius: 4, marginBottom: 8,
  },
  errorText:  { color: 'red', marginBottom: 8 },
  buttons:    { flexDirection: 'row', justifyContent: 'space-between' },
});
