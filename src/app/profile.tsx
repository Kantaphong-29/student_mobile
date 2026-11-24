
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView
} from 'react-native'

export default function Profile() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <View style={styles.card}>

        <Text style={styles.name}>
          Kantaphong Thongchai
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>รหัสนักศึกษา :</Text>
          <Text style={styles.info}>68319010002</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>สาขาวิชา :</Text>
          <Text style={styles.info}>
            เทคโนโลยีสารสนเทศ
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>ความสามารถ :</Text>

          <View style={styles.skillList}>
            <Text style={styles.info}>• React Native</Text>
            <Text style={styles.info}>• JavaScript</Text>
            <Text style={styles.info}>• Database Management</Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>ติดต่อ</Text>
        </Pressable>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 30,
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 25,
    elevation: 5,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2563eb',
    textAlign: 'center',
    marginBottom: 40,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 25,
  },

  label: {
    width: 125,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#555',
  },

  info: {
    fontSize: 17,
    color: '#222',
  },

  skillList: {
    flex: 1,
    gap: 12,
  },

  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginTop: 25,
    alignSelf: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
