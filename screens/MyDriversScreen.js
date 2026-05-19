import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';

const FAVORITE_DRIVERS = [
  { id: 1, name: 'John', car: 'Toyota Corolla', rating: 4.8, initials: 'J', color: '#4A90D9' },
  { id: 2, name: 'Lisa', car: 'VW Polo', rating: 4.7, initials: 'L', color: '#E8A0BF' },
  { id: 3, name: 'Ahmed', car: 'Hyundai i20', rating: 4.9, initials: 'A', color: '#7BC67E' },
];

const AVOID_DRIVERS = [
  { id: 4, name: 'Mike', car: 'Nissan Almera', initials: 'M', color: '#B0B0B0' },
  { id: 5, name: 'Sam', car: 'BMW 3 Series', initials: 'S', color: '#C0A0B0' },
];

function Avatar({ initials, color, size = 48 }) {
  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2, backgroundColor: color }]}>
      <Text style={[styles.avatarText, { fontSize: size * 0.4 }]}>{initials}</Text>
    </View>
  );
}

export default function MyDriversScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Drivers</Text>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Favorite Drivers */}
        <Text style={styles.sectionLabel}>Favorite Drivers</Text>
        <View style={styles.card}>
          {FAVORITE_DRIVERS.map((driver, index) => (
            <View key={driver.id}>
              <View style={styles.driverRow}>
                <Avatar initials={driver.initials} color={driver.color} />
                <View style={styles.driverInfo}>
                  <Text style={styles.driverName}>{driver.name}</Text>
                  <Text style={styles.driverCar}>
                    {driver.car} · <Text style={styles.star}>★</Text> {driver.rating}
                  </Text>
                </View>
                <TouchableOpacity style={styles.removeBtn}>
                  <Text style={styles.removeBtnText}>Remove</Text>
                </TouchableOpacity>
              </View>
              {index < FAVORITE_DRIVERS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* Avoid List */}
        <Text style={styles.sectionLabel}>Avoid List</Text>
        <View style={styles.card}>
          {AVOID_DRIVERS.map((driver, index) => (
            <View key={driver.id}>
              <View style={styles.driverRow}>
                <Avatar initials={driver.initials} color={driver.color} />
                <View style={styles.driverInfo}>
                  <Text style={styles.driverName}>{driver.name}</Text>
                  <Text style={styles.driverCar}>{driver.car} · Won't Match Again</Text>
                </View>
              </View>
              {index < AVOID_DRIVERS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* Bottom Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.favBtn}>
            <Text style={styles.favBtnText}>♥  Add to Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avoidBtn}>
            <Text style={styles.avoidBtnText}>●  Add to Avoid</Text>
          </TouchableOpacity>
        </View>

        {/* Nav demo buttons */}
        <View style={styles.navDemo}>
          <Text style={styles.navDemoLabel}>— Demo Navigation —</Text>
          <TouchableOpacity style={styles.demoBtn} onPress={() => navigation.navigate('SetPickup')}>
            <Text style={styles.demoBtnText}>Go to Set Pickup →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  backBtn: { padding: 4, marginRight: 8 },
  backArrow: { fontSize: 28, color: '#333', lineHeight: 32 },
  title: { fontSize: 20, fontWeight: '700', color: '#1A1A1A' },
  scroll: { flex: 1, paddingHorizontal: 16 },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    marginTop: 20,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: { color: '#FFF', fontWeight: '700' },
  driverInfo: { flex: 1 },
  driverName: { fontSize: 16, fontWeight: '600', color: '#1A1A1A' },
  driverCar: { fontSize: 13, color: '#888', marginTop: 2 },
  star: { color: '#F5A623' },
  removeBtn: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  removeBtnText: { fontSize: 13, color: '#444', fontWeight: '500' },
  divider: { height: 1, backgroundColor: '#F0F0F0' },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  favBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 13,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  favBtnText: { fontSize: 14, fontWeight: '600', color: '#1A1A1A' },
  avoidBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 13,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  avoidBtnText: { fontSize: 14, fontWeight: '600', color: '#1A1A1A' },
  navDemo: { alignItems: 'center', marginTop: 32, marginBottom: 24 },
  navDemoLabel: { fontSize: 12, color: '#BBB', marginBottom: 10 },
  demoBtn: {
    backgroundColor: '#2E7D32',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  demoBtnText: { color: '#FFF', fontWeight: '600', fontSize: 14 },
});