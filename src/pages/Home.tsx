import { StyleSheet, Text, TextInput, FlatList, View } from "react-native";
import { useState } from "react";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState<{ id: string; name: string }[]>([]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setSkills([...skills, data]);
  }

  function handleRemoveSkill(id: string) {
    setSkills(skills.filter((skill) => skill.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Felipe</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 25 }]}>My Skills</Text>

      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item} onPress={() => handleRemoveSkill(item.id)} />
        )}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
});
