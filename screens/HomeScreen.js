import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, ScrollView, StatusBar,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const QUICK_ACTIONS = [
  { icon: 'location',        lib: 'Ionicons',   label: 'Book Ride',    color: '#1A1A1A', bg: '#F0F0F0', screen: 'SetPickup'  },
  { icon: 'people',          lib: 'Ionicons',   label: 'My Drivers',   color: '#1565C0', bg: '#E3F2FD', screen: 'MyDrivers'  },
  { icon: 'shield-checkmark',lib: 'Ionicons',   label: 'Safety',       color: '#2E7D32', bg: '#E8F5E9', screen: 'SafetyPreferences' },
  { icon: 'car',             lib: 'FontAwesome5',label: 'Your Driver', color: '#E53935', bg: '#FFEBEE', screen: 'YourDriver'  },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Hero Header */}
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View>
            <Text style={styles.greeting}>Good morning 👋</Text>
            <Text style={styles.heroTitle}>Where to?</Text>
          </View>
          <TouchableOpacity style={styles.profileBtn}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileInitial}>Y</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => navigation.navigate('SetPickup')}
        >
          <Ionicons name="search" size={18} color="#888" />
          <Text style={styles.searchPlaceholder}>Search destination…</Text>
          <Ionicons name="mic" size={18} color="#888" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickGrid}>
          {QUICK_ACTIONS.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.quickCard}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={[styles.quickIcon, { backgroundColor: item.bg }]}>
                {item.lib === 'FontAwesome5'
                  ? <FontAwesome5 name={item.icon} size={22} color={item.color} />
                  : <Ionicons name={item.icon} size={22} color={item.color} />
                }
              </View>
              <Text style={styles.quickLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Trip */}
        <Text style={styles.sectionTitle}>Recent Trip</Text>
        <View style={styles.tripCard}>
          <View style={styles.tripRoute}>
            <View style={styles.routeDot} />
            <View style={styles.routeLine} />
            <View style={[styles.routeDot, { backgroundColor: '#E53935' }]} />
          </View>
          <View style={styles.tripInfo}>
            <Text style={styles.tripFrom}>Home – Pine Street</Text>
            <Text style={styles.tripTo}>City Mall – Oak Avenue</Text>
            <View style={styles.tripMeta}>
              <Ionicons name="time-outline" size={13} color="#AAA" />
              <Text style={styles.tripMetaText}>  Yesterday · 12 min</Text>
              <MaterialCommunityIcons name="cash" size={13} color="#AAA" style={{ marginLeft: 12 }} />
              <Text style={styles.tripMetaText}>  R48.50</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.reBookBtn} onPress={() => navigation.navigate('SetPickup')}>
            <Ionicons name="refresh" size={16} color="#1A1A1A" />
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>🎉 First ride free!</Text>
            <Text style={styles.promoSub}>Use code WELCOME at checkout</Text>
          </View>
          <Ionicons name="arrow-forward-circle" size={30} color="#FFF" />
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          {[
            { icon: 'car',     lib: 'FontAwesome5', value: '12',    label: 'Total Rides' },
            { icon: 'heart',   lib: 'Ionicons',     value: '3',     label: 'Favorites'   },
            { icon: 'star',    lib: 'Ionicons',     value: '4.9',   label: 'Your Rating' },
          ].map((s) => (
            <View key={s.label} style={styles.statCard}>
              {s.lib === 'FontAwesome5'
                ? <FontAwesome5 name={s.icon} size={18} color="#1A1A1A" />
                : <Ionicons name={s.icon} size={18} color={s.icon === 'heart' ? '#E53935' : s.icon === 'star' ? '#F5A623' : '#1A1A1A'} />
              }
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        {[
          { icon: 'home',     label: 'Home',    screen: 'Home',    active: true  },
          { icon: 'location', label: 'Rides',   screen: 'SetPickup' },
          { icon: 'people',   label: 'Drivers', screen: 'MyDrivers' },
          { icon: 'shield-checkmark', label: 'Safety', screen: 'SafetyPreferences' },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.label}
            style={styles.navTab}
            onPress={() => navigation.navigate(tab.screen)}
          >
            <Ionicons
              name={tab.active ? tab.icon : `${tab.icon}-outline`}
              size={22}
              color={tab.active ? '#1A1A1A' : '#AAA'}
            />
            <Text style={[styles.navLabel, tab.active && styles.navLabelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },

  // Hero
  hero: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  heroTop: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: 18,
  },
  greeting: { fontSize: 14, color: '#AAA', marginBottom: 4 },
  heroTitle: { fontSize: 32, fontWeight: '900', color: '#FFF' },
  profileBtn: {},
  profileAvatar: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#2E7D32',
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: '#444',
  },
  profileInitial: { fontSize: 18, fontWeight: '800', color: '#FFF' },
  searchBar: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: '#FFF', borderRadius: 14,
    paddingHorizontal: 16, paddingVertical: 13,
  },
  searchPlaceholder: { flex: 1, fontSize: 15, color: '#BBB', fontWeight: '500' },

  scroll: { flex: 1, paddingHorizontal: 16 },
  sectionTitle: {
    fontSize: 17, fontWeight: '800', color: '#1A1A1A',
    marginTop: 22, marginBottom: 12,
  },

  // Quick Actions
  quickGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  quickCard: {
    width: '47%', backgroundColor: '#FFF', borderRadius: 16,
    padding: 18, alignItems: 'flex-start',
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  quickIcon: {
    width: 48, height: 48, borderRadius: 14,
    justifyContent: 'center', alignItems: 'center', marginBottom: 12,
  },
  quickLabel: { fontSize: 14, fontWeight: '700', color: '#1A1A1A' },

  // Recent Trip
  tripCard: {
    backgroundColor: '#FFF', borderRadius: 16, padding: 16,
    flexDirection: 'row', alignItems: 'center', gap: 14,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  tripRoute: { alignItems: 'center', gap: 2 },
  routeDot: {
    width: 10, height: 10, borderRadius: 5, backgroundColor: '#1A1A1A',
  },
  routeLine: { width: 2, height: 24, backgroundColor: '#E0E0E0' },
  tripInfo: { flex: 1 },
  tripFrom: { fontSize: 14, fontWeight: '700', color: '#1A1A1A' },
  tripTo: { fontSize: 14, fontWeight: '700', color: '#1A1A1A', marginTop: 6 },
  tripMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  tripMetaText: { fontSize: 12, color: '#AAA' },
  reBookBtn: {
    width: 38, height: 38, borderRadius: 10,
    backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center',
  },

  // Promo
  promoBanner: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#2E7D32', borderRadius: 16,
    padding: 18, marginTop: 20,
  },
  promoTitle: { fontSize: 16, fontWeight: '800', color: '#FFF', marginBottom: 4 },
  promoSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)' },

  // Stats
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 16 },
  statCard: {
    flex: 1, backgroundColor: '#FFF', borderRadius: 14,
    padding: 14, alignItems: 'center', gap: 4,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  statValue: { fontSize: 20, fontWeight: '900', color: '#1A1A1A', marginTop: 4 },
  statLabel: { fontSize: 11, color: '#AAA', fontWeight: '600', textAlign: 'center' },

  // Bottom Nav
  bottomNav: {
    flexDirection: 'row', backgroundColor: '#FFF',
    paddingVertical: 10, paddingHorizontal: 8,
    borderTopWidth: 1, borderTopColor: '#F0F0F0',
  },
  navTab: { flex: 1, alignItems: 'center', gap: 3 },
  navLabel: { fontSize: 11, color: '#AAA', fontWeight: '600' },
  navLabelActive: { color: '#1A1A1A' },
});