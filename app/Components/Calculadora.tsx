import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const Calculadora: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [customTip, setCustomTip] = useState<string>("");
  const [history, setHistory] = useState<
    { key: string; amount: string; tipPercent: number; tipAmount: string; totalAmount: string }[]
  >([]);

  const tipOptions: number[] = [10, 15, 20];

  const calculateTip = (percentage: number | null) => {
    const billAmount = parseFloat(amount);
    if (isNaN(billAmount) || billAmount <= 0) return;

    const tipPercent = percentage !== null ? percentage : parseFloat(customTip);
    if (isNaN(tipPercent) || tipPercent <= 0) return;

    const tipAmount = (billAmount * tipPercent) / 100;
    const totalAmount = billAmount + tipAmount;

    const newEntry = {
      key: Math.random().toString(),
      amount: billAmount.toFixed(2),
      tipPercent,
      tipAmount: tipAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };

    setHistory([newEntry, ...history]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Propina</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Monto de consumo"
        placeholderTextColor="#aaa"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.subtitle}>Selecciona un porcentaje:</Text>
      <View style={styles.buttonContainer}>
        {tipOptions.map((tip) => (
          <TouchableOpacity key={tip} style={styles.button} onPress={() => calculateTip(tip)}>
            <Text style={styles.buttonText}>{tip}%</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Propina personalizada %"
        placeholderTextColor="#aaa"
        value={customTip}
        onChangeText={setCustomTip}
      />

      <TouchableOpacity style={styles.calculateButton} onPress={() => calculateTip(null)}>
        <Text style={styles.calculateButtonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Historial:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>
              <Text style={styles.bold}>Consumo:</Text> ${item.amount} | 
              <Text style={styles.bold}> Propina:</Text> {item.tipPercent}% (${item.tipAmount}) | 
              <Text style={styles.bold}> Total:</Text> ${item.totalAmount}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C", // Gris oscuro formal
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4A90E2", // Azul oscuro elegante
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#B0BEC5", // Gris claro sutil
    marginVertical: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#4A90E2", // Azul oscuro
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#2C2C2C", // Gris oscuro mate
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#0D47A1", // Azul marino serio
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  calculateButton: {
    backgroundColor: "#1565C0", // Azul más claro pero formal
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  calculateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  historyItem: {
    backgroundColor: "#2A2A2A", // Gris más oscuro para el historial
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A90E2", // Azul oscuro
  },
  historyText: {
    fontSize: 16,
    color: "#E3F2FD", // Azul muy claro
  },
  bold: {
    fontWeight: "bold",
    color: "#90CAF9", // Azul medio, elegante
  },
});

export default Calculadora;
