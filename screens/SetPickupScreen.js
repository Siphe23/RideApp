import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, ActivityIndicator,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

function MapPlaceholder() {
  return (
    <View style={styles.mapContainer}>
      {/* Grid */}
      {[0,1,2,3,4].map(i => (
        <View key={`h${i}`} style={[styles.gridLine, styles.horizontalLine, { top: `${20*i+10}%` }]} />
      ))}
      {[0,1,2,3,4].map(i => (
        <View key={`v${i}`} style={[styles.gridLine, styles.verticalLine, { left: `${20*i+10}%` }]} />
      ))}
      {/* Roads */}
      <View style={[styles.road, { top: '35%', width: '100%', height: 7 }]} />
      <View style={[styles.road, { top: '60%', width: '100%', height: 7 }]} />
      <View style={[styles.road, { left: '30%', top: 0, width: 7, height: '100%' }]} />
      <View style={[styles.road, { left: '65%', top: 0, width: 7, height: '100%' }]} />

      {/* Pickup Pin */}
      <View style={styles.pinWrapper}>
        <View style={styles.pinLabel}>
          <Ionicons name="location" size={13} color="#E53935" />
          <Text style={styles.pinLabelText}> Pine St</Text>
        </View>
        <Ionicons name="location" size={40} color="#1A1A1A" />
      </View>

      {/* Destination dot */}
      <View style={styles.destWrapper}>
        <Ionicons name="flag" size={22} color="#2E7D32" />
      </View>

      {/* Compass */}
      <View style={styles.compass}>
        <MaterialCommunityIcons name="compass" size={28} color="#555" />
      </View>
    </View>
  );
}

export default function SetPickupScreen({ navigation }) {
  const [mode, setMode] = useState('relaxed');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={26} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.title}>Set Pickup</Text>
        <View style={{ width: 34 }} />
      </View>

      {/* Mode Toggle */}
      <View style={styles.toggleWrapper}>
        <View style={styles.toggleContainer}>
          {['fast', 'relaxed'].map(m => (
            <TouchableOpacity
              key={m}
              style={[styles.toggleBtn, mode === m && styles.toggleBtnActive]}
              onPress={() => setMode(m)}
            >
              <Ionicons
                name={m === 'fast' ? 'flash' : 'cafe'}
                size={14}
                color={mode === m ? '#FFF' : '#888'}
              />
              <Text style={[styles.toggleText, mode === m && styles.toggleTextActive]}>
                {m === 'fast' ? 'Fast Mode' : 'Relaxed Mode'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Map */}
      <MapPlaceholder />

      {/* Status Card */}
      <View style={styles.statusCard}>
        <View style={styles.statusRow}>
          <Ionicons name="search" size={20} color="#666" />
          <Text style={styles.statusTitle}>  Checking preferred drivers…</Text>
        </View>
        <Text style={styles.statusSub}>No preferred drivers nearby. Finding best match…</Text>
        <ActivityIndicator size="large" color="#1A1A1A" style={{ marginTop: 14 }} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={18} color="#FFF" />
          <Text style={styles.cancelBtnText}>  Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmBtn} onPress={() => navigation.navigate('YourDriver')}>
          <FontAwesome5 name="car" size={15} color="#FFF" />
          <Text style={styles.confirmBtnText}>  Driver Found →</Text>
        </TouchableOpacity>
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
  toggleWrapper: { backgroundColor: '#FFF', paddingHorizontal: 16, paddingVertical: 10 },
  toggleContainer: {
    flexDirection: 'row', backgroundColor: '#F0F0F0', borderRadius: 12, padding: 3,
  },
  toggleBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    paddingVertical: 9, borderRadius: 10, gap: 5,
  },
  toggleBtnActive: { backgroundColor: '#1A1A1A' },
  toggleText: { fontSize: 13, fontWeight: '700', color: '#888' },
  toggleTextActive: { color: '#FFF' },
  mapContainer: {
    flex: 1, backgroundColor: '#E4EBF0', position: 'relative', overflow: 'hidden',
  },
  gridLine: { position: 'absolute', backgroundColor: '#D5DCE0' },
  horizontalLine: { width: '100%', height: 1 },
  verticalLine: { height: '100%', width: 1 },
  road: { position: 'absolute', backgroundColor: '#FFF', opacity: 0.8 },
  pinWrapper: {
    position: 'absolute', top: '22%', left: '38%', alignItems: 'center',
  },
  pinLabel: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#FFF', borderRadius: 8,
    paddingHorizontal: 10, paddingVertical: 5,
    shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }, elevation: 4, marginBottom: 2,
  },
  pinLabelText: { fontSize: 12, fontWeight: '700', color: '#1A1A1A' },
  destWrapper: {
    position: 'absolute', top: '50%', left: '58%',
  },
  compass: {
    position: 'absolute', top: 10, right: 12,
    backgroundColor: '#FFF', borderRadius: 20, padding: 4,
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2,
  },
  statusCard: {
    backgroundColor: '#FFF', padding: 20,
    borderTopWidth: 1, borderTopColor: '#EEE',
  },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  statusTitle: { fontSize: 15, fontWeight: '700', color: '#1A1A1A' },
  statusSub: { fontSize: 13, color: '#888', marginTop: 6, lineHeight: 18 },
  footer: {
    flexDirection: 'row', gap: 10,
    backgroundColor: '#FFF', paddingHorizontal: 16, paddingBottom: 14, paddingTop: 10,
  },
  cancelBtn: {
    flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#555', borderRadius: 14, paddingVertical: 15,
  },
  cancelBtnText: { color: '#FFF', fontSize: 15, fontWeight: '700' },
  confirmBtn: {
    flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#1A1A1A', borderRadius: 14, paddingVertical: 15,
  },
  confirmBtnText: { color: '#FFF', fontSize: 15, fontWeight: '700' },
});