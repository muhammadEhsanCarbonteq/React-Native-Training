import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import styles from '../../styles/sharedStylesheet';

function HomeScreen({onSelectMenu}) {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 28,
                color: 'black',
              }}>
              Good Morning
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '700',
                color: 'black',
              }}>
              Olivia
            </Text>
          </View>
          <Image source={require('../../images/Face.png')} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
          }}>
          <View
            style={{
              height: 205,
              width: '48%',
              backgroundColor: '#140F28',
              borderRadius: 30,
              paddingHorizontal: 10,
              paddingVertical: 18,
            }}>
            <View
              style={{
                //   marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                }}>
                Results
              </Text>
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 20,
                  backgroundColor: 'gray',
                }}
              />
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 12,
                height: '40%',
                width: '85%',
                borderTopEndRadius: 100,
                borderTopStartRadius: 100,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  backgroundColor: '#140F28',
                  width: '85%',
                  height: '85%',
                  marginTop: '9%',
                  marginHorizontal: '8%',

                  borderTopEndRadius: 100,
                  borderTopStartRadius: 100,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: '#ffffff',
                    marginTop: 26,
                    alignSelf: 'center',
                  }}>
                  24%
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 23,
                marginHorizontal: 6,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                  }}>
                  24
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 7,
                      width: 7,
                      borderRadius: 7,
                      backgroundColor: '#ffffff',
                      marginRight: 3,
                    }}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 12,
                    }}>
                    Positive
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                  }}>
                  76
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 7,
                      width: 7,
                      borderRadius: 7,
                      backgroundColor: 'rgba(255, 255, 255, 0.31)',
                      marginRight: 3,
                    }}
                  />
                  <Text
                    style={{
                      color: 'rgba(255, 255, 255, 0.31)',

                      fontSize: 12,
                    }}>
                    Negative
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 205,
              width: '48%',
              backgroundColor: '#ffffff',
              borderRadius: 30,
              paddingHorizontal: 14,
              paddingVertical: 18,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
              }}>
              Entrance Rate
            </Text>
            <View
              style={{
                marginTop: 38,
                marginBottom: 22,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={styles.blueVerticalLine} />
              <View style={styles.blueVerticalLine} />
              <View style={styles.blueVerticalLine} />
              <View style={styles.blueVerticalLine} />
              <View style={styles.blueVerticalLine} />
              <View style={styles.grayVerticalLine} />
              <View style={styles.grayVerticalLine} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '700',
                }}>
                76%
              </Text>
              <Text
                style={{
                  color: '#B3BBD4',
                  fontSize: 12,
                }}>
                From public to dirty zone
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <View
            style={{
              width: '48%',
            }}>
            <View
              style={{
                height: 156,
                width: '100%',
                backgroundColor: '#ffffff',
                borderRadius: 30,
                paddingHorizontal: 14,
                paddingVertical: 18,
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                }}>
                In Queue
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      fontWeight: '600',
                    }}>
                    105
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                    }}>
                    Dirty zone
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      fontWeight: '600',
                    }}>
                    22
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                    }}>
                    Clean zone
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 156,
                width: '100%',
                backgroundColor: '#ffffff',
                borderRadius: 30,
                paddingHorizontal: 14,
                paddingVertical: 18,
                justifyContent: 'space-between',
                //   marginBottom: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                }}>
                In Clean zoe
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      fontWeight: '600',
                    }}>
                    126
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                    }}>
                    Dirty zone
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              // height: '100%',
              width: '48%',
              backgroundColor: '#ffffff',
              borderRadius: 30,
              // paddingHorizontal: 14,
              paddingVertical: 18,
              justifyContent: 'space-between',
              // marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 14,
                color: 'black',
              }}>
              Waiting Time
            </Text>
            <Image
              style={{
                width: '100%',
              }}
              source={require('../../images/graph.png')}
            />
            <View
              style={{
                paddingHorizontal: 14,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: 'black',
                }}>
                08:02
              </Text>
              <Text
                style={{
                  fontSize: 12,
                }}>
                Minutes
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{
          position: 'absolute',
          height: '10%',
          width: '100%',
          borderTopEndRadius: 30,
          //   borderBottomEndRadius: 30,
          borderTopStartRadius: 30,
          backgroundColor: 'white',
          paddingHorizontal: 54,
          flexDirection: 'row',
          justifyContent: 'space-between',
          bottom: 0,
          marginBottom: 0,
          alignItems: 'center',
        }}>
        <Pressable>
          <Image source={require('../../images/Home.png')} />
        </Pressable>
        <Pressable onPress={() => onSelectMenu('scan')}>
          <Image
            style={{
              marginTop: 10,
            }}
            source={require('../../images/tap.png')}
          />
        </Pressable>
        <Pressable>
          <Image source={require('../../images/person.png')} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
