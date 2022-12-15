import React from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import CustomSearchbar from '../common/CustomSearchbar';
import TitleDescriptionComponent from '../common/TitleDescriptionComponent';
import styles from './common/sharedStylesheet';
import CustomEventTab from './common/CustomEventTab';
import eventList from '../../constants/eventList';
import BackArrow from '../../images/BackArrow.svg'


function EventComponent({
  onPressBack,
  onNext,
  search,
  setSearch,
  onSelect,
  select,
}) {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={onPressBack}
          style={{
            width: 22,
          }}>
          <BackArrow
            style={styles.backArrowImage}
          />
        </Pressable>
        <TitleDescriptionComponent
          title={'Select Event!'}
          description={'Select the event you are working.'}
        />
        <View
          style={{
            marginVertical: 30,
          }}>
          <CustomSearchbar text={search} onChangeText={setSearch} />
        </View>
        <ScrollView>
          {eventList.map((event, index) => {
            return search ? (
              event?.name?.toLowerCase().includes(search.toLowerCase()) ? (
                <CustomEventTab
                  id={index}
                  Eimage={event.image}
                  onSelect={onSelect}
                  heading={event.heading}
                  By={event.By}
                  description={event.description}
                  bgColor={select == event.name ? '#140F28' : '#ffffff'}
                  name={event.name}
                />
              ) : (
                <View />
              )
            ) : (
              <CustomEventTab
                id={index}
                Eimage={event.image}
                onSelect={onSelect}
                heading={event.heading}
                By={event.By}
                description={event.description}
                bgColor={select == event.name ? '#140F28' : '#ffffff'}
                name={event.name}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 15,
            width: '100%',
          }}>
          <CustomButton title={'Next'} onPress={onNext} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EventComponent;
