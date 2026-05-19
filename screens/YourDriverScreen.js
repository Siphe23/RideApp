import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function YourDriverScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={26} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.title}>Your Driver</Text>
        <View style={{ width: 34 }} />
      </View>

      <View style={styles.content}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>M</Text>
          </View>
          <Text style={styles.driverName}>Mark</Text>
          <View style={styles.detailsRow}>
            <MaterialCommunityIcons name="car-side" size={15} color="#AAA" />
            <Text style={styles.driverDetails}>  Toyota Yaris  </Text>
            <Ionicons name="star" size={14} color="#F5A623" />
            <Text style={styles.driverDetails}> 4.6</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.favBtn}>
              <Ionicons name="heart-outline" size={17} color="#E53935" />
              <Text style={styles.favBtnText}> Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.avoidBtn}>
              <Ionicons name="ban" size={17} color="#FFF" />
              <Text style={styles.avoidBtnText}> Avoid</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Arrival Card */}
        <View style={styles.arrivalCard}>
          <View style={styles.arrivalHeader}>
            <Ionicons name="time-outline" size={20} color="#2E7D32" />
            <Text style={styles.arrivalTitle}>  Arriving in 4 mins</Text>
          </View>
          <View style={styles.carScene}>
            {/* Road */}
            <View style={styles.road} />
            {/* Dashes */}
            {[0,1,2].map(i => (
              <View key={i} style={[styles.dash, { left: `${20 + i * 30}%` }]} />
            ))}
            {/* Car icon */}
            <FontAwesome5 name="car" size={44} color="#2E7D32" style={styles.carIcon} />
            {/* Destination pin */}
            <View style={styles.destPin}>
              <Ionicons name="location" size={30} color="#E53935" />
            </View>
          </View>
          {/* Progress bar */}
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Contact & Safety */}
        <View style={styles.actionsCard}>
          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="call" size={20} color="#2E7D32" />
            </View>
            <Text style={styles.actionItemText}>Call Driver</Text>
            <Ionicons name="chevron-forward" size={18} color="#CCC" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('SafetyPreferences')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#FFF3E0' }]}>
              <Ionicons name="shield-checkmark" size={20} color="#F57C00" />
            </View>
            <Text style={styles.actionItemText}>Safety Preferences</Text>
            <Ionicons name="chevron-forward" size={18} color="#CCC" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('MyDrivers')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#E3F2FD' }]}>
              <Ionicons name="people" size={20} color="#1565C0" />
            </View>
            <Text style={styles.actionItemText}>My Drivers</Text>
            <Ionicons name="chevron-forward" size={18} color="#CCC" />
          </TouchableOpacity>
        </View>
      </View>
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
  content: { flex: 1, padding: 16, gap: 12 },
  profileCard: {
    backgroundColor: '#FFF', borderRadius: 20, padding: 24, alignItems: 'center',
    shadowColor: '#000', shadowOpacity: 0.07, shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 }, elevation: 3,
  },
  avatarCircle: {
    width: 84, height: 84, borderRadius: 42, backgroundColor: '#1A1A1A',
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 3, borderColor: '#E8E8E8', marginBottom: 12,
  },
  avatarText: { fontSize: 34, fontWeight: '800', color: '#FFF' },
  driverName: { fontSize: 26, fontWeight: '800', color: '#1A1A1A', marginBottom: 6 },
  detailsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  driverDetails: { fontSize: 14, color: '#888' },
  actionRow: { flexDirection: 'row', gap: 10, width: '100%' },
  favBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#FFF', borderWidth: 1.5, borderColor: '#FFCDD2',
    borderRadius: 12, paddingVertical: 12,
  },
  favBtnText: { fontSize: 14, fontWeight: '700', color: '#E53935' },
  avoidBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#E53935', borderRadius: 12, paddingVertical: 12,
  },
  avoidBtnText: { fontSize: 14, fontWeight: '700', color: '#FFF' },
  arrivalCard: {
    backgroundColor: '#FFF', borderRadius: 20, padding: 18,
    shadowColor: '#000', shadowOpacity: 0.07, shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 }, elevation: 3,
  },
  arrivalHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  arrivalTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A1A' },
  carScene: {
    height: 60, position: 'relative', justifyContent: 'center', marginBottom: 12,
  },
  road: {
    position: 'absolute', bottom: 10, width: '100%', height: 6,
    backgroundColor: '#E0E0E0', borderRadius: 3,
  },
  dash: {
    position: 'absolute', bottom: 12, width: 18, height: 2,
    backgroundColor: '#BDBDBD', borderRadius: 1,
  },
  carIcon: { position: 'absolute', left: '15%', bottom: 14 },
  destPin: { position: 'absolute', right: '10%', bottom: 8 },
  progressBar: {
    height: 4, backgroundColor: '#E8E8E8', borderRadius: 2,
  },
  progressFill: {
    width: '30%', height: '100%', backgroundColor: '#2E7D32', borderRadius: 2,
  },
  actionsCard: {
    backgroundColor: '#FFF', borderRadius: 20, paddingHorizontal: 16,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  actionItem: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 14, gap: 14,
  },
  actionIcon: {
    width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center',
  },
  actionItemText: { flex: 1, fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  divider: { height: 1, backgroundColor: '#F3F3F3' },
});