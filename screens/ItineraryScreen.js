import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
// <Text style={styles.h1}></Text>
export default function ItineraryScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      <Text style={styles.h2}>Saturday, February 15th</Text>
      <Text style={styles.h3}>Arrival</Text>
      <Text style={styles.p}>
        ❖ Welcome to Tokyo! Andrew, Greg, or Erik will be reaching out to coordinate your transfer from the airport to your
        room at The Peninsula Tokyo (Chiyoda City)
        ❖ We have a 7:00PM reservation at one of Tokyo’s most celebrated Wagyu restaurants. Please meet us in the Lobby
        at 6:30PM sharp so that we can travel there as a group
        ➢ Following Dinner, we’ll be arranging transport back to the hotel. A few of us may want to get some rest,
        and for those looking to get a taste of Tokyo by night, we’d recommend checking out the bars nearby the
        hotel in Ginza. One of our favorite spots on the calmer side is the Ginza Music Bar, which has great drinks,
        arguably the best coffee in Japan, and vinyl records spinning all night. For those looking to explore a bit
        further, the neighborhoods of Roppongi or Shibuya won’t disappoint
      </Text>

      <Text style={styles.h2}>Sunday, February 16th</Text>
      <Text style={styles.h3}>Explore Tokyo/Head out for our Flight to Sapporo **(Drivers Leave at 3:20PM)**</Text>
      <Text style={styles.p}>
      ❖ Breakfast - 6:30AM to 11:00AM in The Peninsula Lobby Restaurant - Just give your room number, breakfast included
      ❖ Our time in Tokyo is the only unstructured part of the trip, as we want you to get the most out of your time in the
      City, however that may look for you. As a starting point, you can check out some of the cool landmarks nearby like
      the Imperial Palace & Gardens, or the Hie Shrine. Asakusa is another place to consider, as it’s one of the last
      traditional Japanese areas of Tokyo. We’ll send a more comprehensive guide to Tokyo following this email.
      ❖ PLEASE NOTE: We’ll be meeting in the Lobby at 3:15PM sharp to ensure we get to the airport on-time. If you miss
      the departure from the hotel, you’ll be responsible for getting yourself to the airport, as well as to Sapporo &
      Niseko if the flight is missed. One checked bag up to 20kg or 44lbs is already included (skis are free so long as
      they’re within the weight limit)
      ❖ Flight departs lands in Sapporo at 7:30PM. We’ll grab our bags, and head to Niseko as a group. Private transfer will
      be waiting for us on arrival
      Monday, February 17th
      Resort Day - Grand Hirafu
      ❖ Breakfast at Mowia Lodge (main building, upper level) - this will be our breakfast spot the entire time in Niseko
      ❖ Moiwa Lodge runs two buses to Grand Hirafu, which leave at 8:00AM and 9:00AM. It’s about a 15 minute drive
      from where we’re staying. Feel free to choose either bus time, as we will have groups going on both
      ➢ **NOTE: if you miss the 2nd bus, please be aware that you are responsible for getting yourself to the
      mountain through separate means of transportation

      ❖ Dinner will be at 6:00PM at the Moiwa Lodge Restaurant (same location as breakfast)
      ❖ Following Dinner, we’ll head over to a nearby Onsen (Japanese for Hot Springs)
      </Text>
      <Text style={styles.h2}>Tuesday, February 18th</Text>
      <Text style={styles.h3}>Guided Ski/Ride Day</Text>
      <Text style={styles.p}>
        ❖ Breakfast - 6:00AM
        ❖ Please be dressed and booted up by 7:00AM to ensure we’re on time for the guide pickup which will be between
        7-7:30AM. We will inform you of the exact time as we get closer to the day
        ➢ We’ll make sandwiches / bring food with us as we’ll be out skiing the entire day. Food will be available at
        the lodge to take with us (make your own sandwiches at breakfast)

        ❖ We’ve yet to choose a mountain location for guiding as it will be fully dependent on where conditions are best.
        Ideally we will be headed to a resort, then touring from the top to access untouched terrain. The guides will be
        shooting photo and video, so wear your Tuesday’s best! **You will need touring & avalanche gear for today, as
        well as Thursday, let us know if you want help arranging rentals**
        ❖ Dinner is at 7PM, nearby. We’ll plan to leave the house at 6:45PM
        Wednesday, February 19th
        Private Snowmobile Accessed Skiing/Riding
        ❖ Breakfast - 7:30AM
        ❖ Pickup from the House is at 8:40AM. Please be ready to leave by 8:30AM sharp so we can get as much powder as
        possible! Today will be a special one. Avalanche gear, for those who need it will be available from our guide.
        ➢ Same lunch plan as Tuesday. Options for sandwiches will be available
        ➢ Dinner will be at a secret location, about 30-45 minutes by car. Please be ready for the driver at 6:15PM
        sharp
      </Text>
      <Text style={styles.h2}>Thursday, February 20th</Text>
      <Text style={styles.h3}>Guided Ski/Ride Day</Text>
      <Text style={styles.p}>
        ❖ Breakfast - 6:00AM
        ❖ *Same schedule/lunch plan/pickup time as Tuesday, NOTE: Touring & Avy Gear required today*
        ➢ We’ll be skiing with the same guides at a different location, photos and video will be shot all day
        ❖ Dinner will be at Moiwa Lodge at 6:00PM
        ❖ Following Dinner, we’ll head over to the Onsen for some much needed relaxation/recovery
        Friday, February 21st -**All Bags Packed & ready to leave by 2:30PM**
        Resort Day - Moiwa / Night in Sapporo
        ❖ Breakfast at Mowia Lodge
        ❖ Ski Mowia **Note that we need to be off the mountain at about 1:30PM to ensure we have enough time to pack
        and depart on time**
        ❖ Leave from Mowia Lodge at 2:30PM sharp
        ➢ We’re on the last bus of the day. Please Note: If you miss the bus pickup, you will be responsible for your
        own transportation back to Sapporo
        ❖ Check-in to JR Tower Hotel Sapporo
        ❖ Dinner is at 8:00PM. Please be in the lobby ready to leave the hotel at 7:45PM
        Saturday, February 22nd
        Departure
        ❖ Breakfast will be available at the SKY J Restaurant, located on the 35th floor from 6:30AM to 9:30AM. When
        paying, make sure to charge it to your room, which will be paid for as part of your trip
        ❖ *Please send us your outbound flight details so we can arrange your trip to Chitose Airport*
      </Text>
      <Text style={styles.h2}>Powder Convoy Contacts</Text>
        <Text style={styles.h4}>Erik Worden: (518) 528-6455</Text>
        <Text style={styles.h4}>Greg Marchese: (914) 275-1345</Text>
        <Text style={styles.h4}>Andrew Bezjian: (518) 935-0218</Text>
        <Text style={styles.h2}>Flight Details - Haneda (Tokyo) to New Chitose Airport (Sapporo)</Text>
        <Text style={styles.h4}>ANA Flight #NH075 departing from Haneda Terminal D2 (Domestic Terminal 2) at 6:00PM. ETA in Sapporo is</Text>
        <Text style={styles.h4}>7:35PM. Tickets are already booked and will be ready for you in Tokyo.</Text>
        <Text style={styles.h2}>Accommodation Details</Text>
        <Text style={styles.h4}>The Peninsula / Tokyo: +81 3 6270 2888 / 1-8-1 Yurakucho, Chiyoda-ku, Tokyo, 100-0006, Japan</Text>
        <Text style={styles.h4}>Moiwa Lodge / Niseko: +81 136 583 003 / 451-6 Aza Niseko, Niseko-Cho, Abuta-Gun, Hokkaido</Text>
        <Text style={styles.h4}>JR Tower Hotel / Sapporo: +81 11-251-2222 / 2 Chome-5 Kita 5 Jonishi, Chuo Ward, Sapporo, Hokkaido</Text>
        <Text style={styles.h4}>060-0005, Japan</Text>
        <Text style={styles.h2}>Helpful Tips & Recommended Services</Text>
        <Text style={styles.h4}>Avalanche gear is required for all backcountry days (Tuesday, Wednesday, Thursday), and if you plan
        to exit any gates at the resorts Monday or Friday. Please let us know if you do not have a beacon,shovel, and probe. They are available for rent through our guides at around $30 USD per day, and for
        non-guided days (Monday and Friday), you can rent them at Rhythm Niseko’s Main Street Location (details below).</Text>
        <Text style={styles.h2}>Backcountry Ski Touring/Splitboard Rentals (required for Tuesday and Thursday):</Text>
        <Text style={styles.h4}>Rhythm Niseko Main Street - Located in the town center 50m from Hirafu-zaka traffic lights</Text>
        <Text style={styles.h4}>190-1 Aza-yamada Kutchan-cho</Text>
        <Text style={styles.h4}>Abuta-gun, Hokkaido Japan 044-0081</Text>
        <Text style={styles.h4}>https://www.rhythmjapan.com/rentals/backcountry-hire-gear/</Text>
        <Text style={styles.h2}>Urgent Care:</Text>
        <Text style={styles.h4}>Niseko International Clinic</Text>
        <Text style={styles.h4}>76-100, Yamada, Kutchan-cho</Text>
        <Text style={styles.h4}>Abuta-gun, Hokkaido Japan, 044-0081</Text>
        <Text style={styles.h4}>https://www.niseko-nic.com/</Text>
        <Text style={styles.h2}>Emergency Services:</Text>
        <Text style={styles.h4}>Ambulance: Dial #119</Text>
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    textAlign: 'center',
    padding: 0,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  h3: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    // padding: 15,
  },
  h4: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 5,
    textAlign: 'justify',
    // alignSelf: 'flex-start',
    marginTop: 1,
  },
  p: {
    fontSize: 16,
    padding: 20,
    textAlign: 'justify',
    // alignSelf: 'flex-start',
    marginTop: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
