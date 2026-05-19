import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Switch, SafeAreaView, ScrollView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function SettingRow({ icon, iconBg, iconColor, label, description, value, onValueChange }) {
  return (
    <View style={styles.settingRow}>
      <View style={[styles.settingIcon, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>
      <View style={styles.settingText}>
        <Text style={styles.settingLabel}>{label}</Text>
        {description ? <Text style={styles.settingDesc}>{description}</Text> : null}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#E0E0E0', true: '#1A1A1A' }}
        thumbColor="#FFF"
        ios_backgroundColor="#E0E0E0"
      />
    </View>
  );
}

export default function SafetyPreferencesScreen({ navigation }) {
  const [avoidDriver, setAvoidDriver]   = useState(true);
  const [markRisky,   setMarkRisky]     = useState(true);
  const [warnUnsafe,  setWarnUnsafe]    = useState(true);
  const [shareTrip,   setShareTrip]     = useState(false);
  const [nightAlert,  setNightAlert]    = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={26} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.title}>Safety Preferences</Text>
        <View style={{ width: 34 }} />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>

        {/* Shield Banner */}
        <View style={styles.banner}>
          <Ionicons name="shield-checkmark" size={32} color="#2E7D32" />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.bannerTitle}>Your safety is our priority</Text>
            <Text style={styles.bannerSub}>These settings are private and never shared with drivers.</Text>
          </View>
        </View>

        {/* Driver Safety */}
        <View style={styles.sectionHeader}>
          <MaterialCommunityIcons name="account-cancel" size={15} color="#888" />
          <Text style={styles.sectionLabel}>  Driver Settings</Text>
        </View>
        <View style={styles.card}>
          <SettingRow
            icon="ban"
            iconBg="#FFEBEE"
            iconColor="#E53935"
            label="Avoid This Driver Quietly"
            description="This driver won't be matched with you again."
            value={avoidDriver}
            onValueChange={setAvoidDriver}
          />
        </View>

        {/* Area Safety */}
        <View style={styles.sectionHeader}>
          <Ionicons name="map" size={15} color="#888" />
          <Text style={styles.sectionLabel}>  Area Safety</Text>
        </View>
        <View style={styles.card}>
          <SettingRow
            icon="warning"
            iconBg="#FFF8E1"
            iconColor="#F9A825"
            label="Mark This Area as Risky"
            value={markRisky}
            onValueChange={setMarkRisky}
          />
          <View style={styles.divider} />
          <SettingRow
            icon="alert-circle"
            iconBg="#FFF3E0"
            iconColor="#F57C00"
            label="Warn Me About Unsafe Zones"
            value={warnUnsafe}
            onValueChange={setWarnUnsafe}
          />
          <View style={styles.divider} />
          <SettingRow
            icon="moon"
            iconBg="#EDE7F6"
            iconColor="#6A1B9A"
            label="Night Ride Alerts"
            description="Extra precautions for late-night trips."
            value={nightAlert}
            onValueChange={setNightAlert}
          />
        </View>

        {/* Trip Sharing */}
        <View style={styles.sectionHeader}>
          <Ionicons name="share-social" size={15} color="#888" />
          <Text style={styles.sectionLabel}>  Trip Sharing</Text>
        </View>
        <View style={styles.card}>
          <SettingRow
            icon="people"
            iconBg="#E3F2FD"
            iconColor="#1565C0"
            label="Share Trip with Trusted Contact"
            description="Sends live location to your emergency contact."
            value={shareTrip}
            onValueChange={setShareTrip}
          />
        </View>

        {/* Emergency Button */}
        <TouchableOpacity style={styles.emergencyBtn}>
          <Ionicons name="call" size={20} color="#FFF" />
          <Text style={styles.emergencyBtnText}>  Emergency Contact</Text>
          <Ionicons name="chevron-forward" size={18} color="rgba(255,255,255,0.6)" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>

        <Text style={styles.footerNote}>
          <Ionicons name="lock-closed" size={11} color="#BBB" /> Settings are encrypted and never visible to drivers.
        </Text>
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
  banner: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#E8F5E9', borderRadius: 16,
    padding: 16, marginTop: 16,
  },
  bannerTitle: { fontSize: 14, fontWeight: '700', color: '#1B5E20' },
  bannerSub: { fontSize: 12, color: '#388E3C', marginTop: 3, lineHeight: 16 },
  sectionHeader: {
    flexDirection: 'row', alignItems: 'center',
    marginTop: 20, marginBottom: 8,
  },
  sectionLabel: {
    fontSize: 12, fontWeight: '700', color: '#888',
    textTransform: 'uppercase', letterSpacing: 0.8,
  },
  card: {
    backgroundColor: '#FFF', borderRadius: 16, paddingHorizontal: 14,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 }, elevation: 3,
  },
  settingRow: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 14, gap: 12,
  },
  settingIcon: {
    width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center',
  },
  settingText: { flex: 1 },
  settingLabel: { fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  settingDesc: { fontSize: 12, color: '#999', marginTop: 3, lineHeight: 17 },
  divider: { height: 1, backgroundColor: '#F3F3F3' },
  emergencyBtn: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#E53935', borderRadius: 16,
    paddingHorizontal: 20, paddingVertical: 16, marginTop: 20,
  },
  emergencyBtnText: { fontSize: 15, fontWeight: '700', color: '#FFF' },
  footerNote: {
    fontSize: 12, color: '#BBB', textAlign: 'center', marginTop: 20, fontStyle: 'italic',
  },
});