import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface SkillCardProps {
  skill: string;
  onPress: () => void;
}

export function SkillCard({ skill, onPress }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} onPress={onPress}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 7,
    marginVertical: 10,
    alignItems: "center",
  },
  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
