import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const taxilogo = require("@/assets/images/taxiIMG.png");

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/calculator");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.cardResult}>
          <Image source={taxilogo} style={styles.taxilogo} />
          <Text style={styles.taxiheader}>TAXI METER</Text>
          <Text style={styles.appnameen}>THAI FARE CALCULATOR</Text>
          <ActivityIndicator
            size="large"
            color="#346324"
            style={{ marginTop: 40 }}
          />
        </View>
      <View>
      <Text style={[styles.name, { marginTop: 20 }]}>ID: 6652410011</Text>
      <Text style={styles.name}>Name: ลัทธพล กายพันธ์</Text>
    </View>
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
    name: {
    fontFamily: "Kanit_700Regular",
    fontSize: 25,
    color: "#808080",
    textAlign: "center",
  },
  cardResult: {
    flex: 0.8,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    padding: 20,

  },
  background: {
    flex: 1,
    backgroundColor: "#e0dec3",
  },
  appnameen: {
    fontFamily: "Kanit_700Bold",
    fontSize: 15,
    color: "#346324",
  },
  taxiheader: {
    fontFamily: "Kanit_700Bold",
    fontSize: 32,
    fontWeight: "bold",
    color: "#2e2d2d",
  },
  taxilogo: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#FED700",
    alignItems: "center",
    justifyContent: "center",
  },
});
