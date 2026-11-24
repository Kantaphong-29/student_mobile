import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ตัวอย่างวันนี้</Text>

      <Link href="/hello" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>1. Hello World</Text>
        </Pressable>
      </Link>

      <Link href="/counter" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>2. Counter (useState)</Text>
        </Pressable>
      </Link>

      <Link href="/greet" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>3. Greet (TextInput)</Text>
        </Pressable>
      </Link>

      <Link href="/studentList" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>4. Student List (FlatList)</Text>
        </Pressable>
      </Link>

      <Link href="/studentAPI" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>5. Students จาก API</Text>
        </Pressable>
      </Link>
      <Link href="/profile" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>6. Profile</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 20,
    paddingTop: 50,
    gap: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111",
  },

  link: {
    backgroundColor: "#2563eb",
    padding: 22,
    borderRadius: 20,
    width: "100%",
  },

  linkText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
