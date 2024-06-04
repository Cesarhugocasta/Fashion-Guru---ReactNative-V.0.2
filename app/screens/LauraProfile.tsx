import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Button, TextInput, TouchableOpacity } from 'react-native';

const LauraProfile: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('no');
  const [date, setDate] = useState('');

  const handleRequestAppointment = () => {
    alert(`Cita solicitada con Laura García\nTítulo: ${title}\nDescripción: ${description}\nPrioridad: ${priority}\nFecha: ${date}`);
  };

  return (
    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../img/advisor3.jpg')} style={styles.profileImage} />
        <View style={styles.textBox}>
          <Text style={styles.name}>Laura García</Text>
          <Text style={styles.info}>Experta en moda casual</Text>
          <Text style={styles.info}>6 años de experiencia</Text>
          <Text style={styles.info}>Email: laura.garcia@example.com</Text>
          <Text style={styles.info}>Teléfono: +52 123 456 7890</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.sectionTitle}>Biografía</Text>
          <Text style={styles.description}>
            Laura García es una asesora de moda casual con un enfoque relajado y práctico. Su creatividad y habilidad para crear looks cómodos y a la moda la convierten en la elección perfecta para el día a día.
          </Text>
          <Text style={styles.description}>
            Laura ha ayudado a muchos clientes a encontrar su estilo personal y a sentirse seguros con su apariencia. Su experiencia incluye trabajar en varias campañas de moda y colaborar con marcas de ropa casual.
          </Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.sectionTitle}>Generar una Cita</Text>
          <TextInput
            style={styles.input}
            placeholder="Título de la cita"
            placeholderTextColor="#ddd"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Descripción"
            placeholderTextColor="#ddd"
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Pagar para ser prioridad:</Text>
            <View style={styles.picker}>
              <TouchableOpacity onPress={() => setPriority('no')} style={priority === 'no' ? styles.selectedOption : styles.option}>
                <Text style={styles.pickerText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPriority('yes')} style={priority === 'yes' ? styles.selectedOption : styles.option}>
                <Text style={styles.pickerText}>Sí</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Fecha (DD/MM/AAAA)"
            placeholderTextColor="#ddd"
            value={date}
            onChangeText={setDate}
          />
          <Button title="Solicitar Cita" onPress={handleRequestAppointment} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    margin: 20,
    borderRadius: 10,
  },
  profileImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f0a500',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f0a500',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  textBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 10,
  },
  pickerLabel: {
    color: '#ddd',
    marginBottom: 5,
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  option: {
    padding: 10,
  },
  selectedOption: {
    padding: 10,
    backgroundColor: '#f0a500',
    borderRadius: 5,
  },
  pickerText: {
    color: '#ffffff',
  },
});

export default LauraProfile;
