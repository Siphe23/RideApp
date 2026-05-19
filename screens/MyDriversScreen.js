import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const FAVORITE_DRIVERS = [
  { id: 1, name: 'John',  car: 'Toyota Corolla', rating: 4.8, initials: 'J', color: '#4A90D9' },
  { id: 2, name: 'Lisa',  car: 'VW Polo',        rating: 4.7, initials: 'L', color: '#E8A0BF' },
  { id: 3, name: 'Ahmed', car: 'Hyundai i20',    rating: 4.9, initials: 'A', color: '#7BC67E' },
];

const AVOID_DRIVERS = [
  { id: 4, name: 'Mike', car: 'Nissan Almera',  initials: 'M', color: '#B0B0B0' },
  { id: 5, name: 'Sam',  car: 'BMW 3 Series',   initials: 'S', color: '#C0A0B0' },
];

function Avatar({ initials, color, size = 48 }) {
  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2, backgroundColor: color }]}>
      <Text style={[styles.avatarText, { fontSize: size * 0.38 }]}>{initials}</Text>
    </View>
  );
}

export default function MyDriversScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={26} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.title}>My Drivers</Text>
        <View style={{ width: 34 }} />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>

        {/* Favorite Drivers */}
        <View style={styles.sectionHeader}>
          <Ionicons name="heart" size={15} color="#E53935" />
          <Text style={styles.sectionLabel}>Favorite Drivers</Text>
        </View>
        <View style={styles.card}>
          {FAVORITE_DRIVERS.map((driver, index) => (
            <View key={driver.id}>
              <View style={styles.driverRow}>
                <Avatar initials={driver.initials} color={driver.color} />
                <View style={styles.driverInfo}>
                  <Text style={styles.driverName}>{driver.name}</Text>
                  <View style={styles.ratingRow}>
                    <MaterialCommunityIcons name="car-side" size={13} color="#AAA" />
                    <Text style={styles.driverCar}> {driver.car}</Text>
                    <Ionicons name="star" size={12} color="#F5A623" style={{ marginLeft: 8 }} />
                    <Text style={styles.ratingText}> {driver.rating}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.removeBtn}>
                  <Ionicons name="close-circle-outline" size={18} color="#999" />
                  <Text style={styles.removeBtnText}>Remove</Text>
                </TouchableOpacity>
              </View>
              {index < FAVORITE_DRIVERS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* Avoid List */}
        <View style={styles.sectionHeader}>
          <Ionicons name="ban" size={15} color="#999" />
          <Text style={styles.sectionLabel}>Avoid List</Text>
        </View>
        <View style={styles.card}>
          {AVOID_DRIVERS.map((driver, index) => (
            <View key={driver.id}>
              <View style={styles.driverRow}>
                <Avatar initials={driver.initials} color={driver.color} />
                <View style={styles.driverInfo}>
                  <Text style={styles.driverName}>{driver.name}</Text>
                  <View style={styles.ratingRow}>
                    <MaterialCommunityIcons name="car-side" size={13} color="#AAA" />
                    <Text style={styles.driverCar}> {driver.car}</Text>
                  </View>
                  <View style={styles.avoidBadge}>
                    <Ionicons name="ban" size={10} color="#E53935" />
                    <Text style={styles.avoidBadgeText}> Won't Match Again</Text>
                  </View>
                </View>
              </View>
              {index < AVOID_DRIVERS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* Bottom Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.favBtn}>
            <Ionicons name="heart-outline" size={18} color="#E53935" />
            <Text style={styles.favBtnText}> Add to Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avoidAddBtn}>
            <Ionicons name="ban" size={18} color="#444" />
            <Text style={styles.avoidAddBtnText}> Add to Avoid</Text>
          </TouchableOpacity>
        </View>

        {/* Go to Set Pickup */}
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation.navigate('SetPickup')}
        >
          <Ionicons name="location" size={20} color="#FFF" />
          <Text style={styles.primaryBtnText}>  Set Pickup Location</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFF" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14,
    backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#E8E8E8',
  },
  backBtn: { padding: 4 },
  title: { fontSize: 19, fontWeight: '800', color: '#1A1A1A' },
  scroll: { flex: 1, paddingHorizontal: 16 },
  sectionHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    marginTop: 22, marginBottom: 8,
  },
  sectionLabel: {
    fontSize: 12, fontWeight: '700', color: '#888',
    textTransform: 'uppercase', letterSpacing: 0.8,
  },
  card: {
    backgroundColor: '#FFF', borderRadius: 16, paddingHorizontal: 16,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 }, elevation: 3,
  },
  driverRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  avatar: { justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { color: '#FFF', fontWeight: '800' },
  driverInfo: { flex: 1 },
  driverName: { fontSize: 16, fontWeight: '700', color: '#1A1A1A' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 3 },
  driverCar: { fontSize: 12, color: '#AAA' },
  ratingText: { fontSize: 12, color: '#AAA', fontWeight: '600' },
  avoidBadge: {
    flexDirection: 'row', alignItems: 'center',
    marginTop: 4,
  },
  avoidBadgeText: { fontSize: 11, color: '#E53935', fontWeight: '600' },
  removeBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    borderWidth: 1, borderColor: '#EEE', borderRadius: 10,
    paddingHorizontal: 10, paddingVertical: 7,
  },
  removeBtnText: { fontSize: 12, color: '#777', fontWeight: '600' },
  divider: { height: 1, backgroundColor: '#F3F3F3' },
  actionRow: { flexDirection: 'row', gap: 12, marginTop: 16 },
  favBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#FFF', borderRadius: 14, paddingVertical: 14,
    borderWidth: 1.5, borderColor: '#FFCDD2',
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
  },
  favBtnText: { fontSize: 13, fontWeight: '700', color: '#E53935' },
  avoidAddBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#FFF', borderRadius: 14, paddingVertical: 14,
    borderWidth: 1.5, borderColor: '#E0E0E0',
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
  },
  avoidAddBtnText: { fontSize: 13, fontWeight: '700', color: '#444' },
  primaryBtn: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#1A1A1A', borderRadius: 16,
    paddingHorizontal: 20, paddingVertical: 16, marginTop: 16,
  },
  primaryBtnText: { fontSize: 15, fontWeight: '700', color: '#FFF' },
});