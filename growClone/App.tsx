import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const currencyData = [
  {
    fundNameObj: 'Quant small cap fudn direct plan growth 1',
    fundTypeObj: 'Equity small cap',
    fundImageObj: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
    fundReturnObj: '45.55%',
    fundKey: 1,
  },
  {
    fundNameObj: 'Quant small cap fudn direct plan growth 2',
    fundTypeObj: 'Equity small cap',
    fundImageObj: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
    fundReturnObj: '45.55%',
    fundKey: 2,
  },
  {
    fundNameObj: 'Quant small cap fudn direct plan growth 3',
    fundTypeObj: 'Equity small cap',
    fundImageObj: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
    fundReturnObj: '45.55%',
    fundKey: 3,
  },
  {
    fundNameObj: 'Quant small cap fudn direct plan growth 4',
    fundTypeObj: 'Equity small cap',
    fundImageObj: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
    fundReturnObj: '45.55%',
    fundKey: 4,
  },
  {
    fundNameObj: 'Quant small cap fudn direct plan growth 5',
    fundTypeObj: 'Equity small cap',
    fundImageObj: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
    fundReturnObj: '45.55%',
  },
  {
    fundNameObj: 'Quant small cap fudn direct plan growth 6',
    fundTypeObj: 'Equity small cap',
    fundImageObj: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
    fundReturnObj: '45.55%',
    fundKey: 5,
  },
  {
    fundNameObj: 'Quant small cap fudn direct plan growth 7',
    fundTypeObj: 'Equity small cap',
    fundImageObj: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
    fundReturnObj: '45.55%',
    fundKey: 6,
  },
  {
    fundNameObj: 'Quant small cap fudn direct plan growth 8',
    fundTypeObj: 'Equity small cap',
    fundImageObj: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
    fundReturnObj: '45.55%',
    fundKey: 7,
  },

  // ... other currency data
];
export default function App() {
  const renderItemList = ({item}) => (
    <View style={styles.nfoCardParent}>
      <View style={styles.nfoChilds}>
        <View style={styles.nfoTop}>
          <View>
            <Image
              source={{
                uri: `${item.fundImageObj}`,
              }}
              style={{height: hp(4), width: wp(10)}}
            />
          </View>
          <View style={{width: wp(55)}}>
            <Text style={{fontWeight: '600', color: 'white'}}>
              {item.fundNameObj}
            </Text>
          </View>
          <View>
            <Text style={{color: 'white'}}>{item.fundReturnObj}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    // This is app body
    <View style={styles.appBody}>
      <ScrollView style={styles.scrollArea}>
        {/* // Top bar with logo and icons */}
        <View style={styles.topBar}>
          <Image
            source={{
              uri: 'https://e7.pngegg.com/pngimages/493/331/png-clipart-akatsuki-logo-akatsuki-others-miscellaneous-cloud-thumbnail.png',
            }}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Anime Funds</Text>
          <View style={styles.topBarIconContainer}>
            <Icon name="search" size={hp(4)} color={'white'}></Icon>
            <Icon name="qrcode" size={hp(4)} color={'white'}></Icon>
            <Icon name="user-circle-o" size={hp(4)} color={'white'}></Icon>
          </View>
        </View>
        {/* Pill buttons  */}
        <View style={styles.pillButtonContainer}>
          <TouchableOpacity>
            <Text style={styles.button1}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button1}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button1}>SIPs</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button1}>Watchlist</Text>
          </TouchableOpacity>
        </View>
        {/* Reminder card */}
        <View style={styles.notificationCard}>
          <View style={styles.notificationInner}>
            <View style={styles.reminderTopPart}>
              <Text
                style={{
                  marginLeft: hp(1.4),
                  fontSize: hp(2.2),
                  fontWeight: '600',
                  color: 'white',
                }}>
                {' '}
                Market holiday on 22 Jan
              </Text>
              <Icon
                name="trash-o"
                size={hp(3)}
                style={{marginRight: hp(1.4)}}></Icon>
            </View>
            <View style={styles.reminderBottomPart}>
              <Text
                style={{
                  borderWidth: 2,
                  // borderColor: 'red',
                  width: hp(30),
                  fontSize: hp(1.9),
                  marginLeft: hp(1.4),
                  lineHeight: hp(2.7),
                  color: 'white',
                }}>
                Markets will remain closed on 22 jan (Monday). Orders will be
                processed on 23 Jan.
              </Text>
              <Icon
                name="bell-o"
                size={hp(6)}
                style={{marginRight: hp(1.4)}}></Icon>
            </View>
          </View>
        </View>
        <View style={styles.popularFunds}>
          <View style={styles.headingPart}>
            <Text style={{fontSize: hp(2), fontWeight: '600', color: 'white'}}>
              Popular Cards
            </Text>
            <TouchableOpacity>
              <Text style={styles.button2}>ALL ANIME FUNDS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.popularFundsCardParent}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.fundCardParent}>
              <View style={styles.fundImageSection}>
                <Image
                  source={{
                    uri: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
                  }}
                  style={{height: hp(4), width: wp(10)}}
                />
              </View>
              <View style={styles.fundDescSection}>
                <View style={styles.fundName}>
                  <Text style={{color: 'white'}}>
                    Berserk 1901 Death PSU Equity in Hell Bank Direct ...
                  </Text>
                </View>
                <View style={styles.fundReturn}>
                  <Text style={{color: 'white'}}>45.43%</Text>
                  <Text style={{color: 'white'}}>-5 year Returns</Text>
                </View>
              </View>
              <View style={styles.fundType}>
                <Text style={{color: 'white'}}>Equity . Sectoral/Deadly</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fundCardParent}>
              <View style={styles.fundImageSection}>
                <Image
                  source={{
                    uri: 'https://m.media-amazon.com/images/I/612OYR+1GGL._AC_UF1000,1000_QL80_.jpg',
                  }}
                  style={{height: hp(4), width: wp(10)}}
                />
              </View>
              <View style={styles.fundDescSection}>
                <View style={styles.fundName}>
                  <Text style={{color: 'white'}}>
                    Berserk 1901 Death PSU Equity in Hell Bank Direct ...
                  </Text>
                </View>
                <View style={styles.fundReturn}>
                  <Text style={{color: 'white'}}>45.43%</Text>
                  <Text style={{color: 'white'}}>-5 year Returns</Text>
                </View>
              </View>
              <View style={styles.fundType}>
                <Text style={{color: 'white'}}>Equity . Sectoral/Deadly</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fundCardParent}>
              <View style={styles.fundImageSection}>
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/originals/29/8a/74/298a7424d3e4f25f6f8a4052a8746a77.png',
                  }}
                  style={{height: hp(4), width: wp(10)}}
                />
              </View>
              <View style={styles.fundDescSection}>
                <View style={styles.fundName}>
                  <Text style={{color: 'white'}}>
                    Berserk 1901 Death PSU Equity in Hell Bank Direct ...
                  </Text>
                </View>
                <View style={styles.fundReturn}>
                  <Text style={{color: 'white'}}>45.43%</Text>
                  <Text style={{color: 'white'}}>-5 year Returns</Text>
                </View>
              </View>
              <View style={styles.fundType}>
                <Text style={{color: 'white'}}>Equity . Sectoral/Deadly</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fundCardParent}>
              <View style={styles.fundImageSection}>
                <Image
                  source={{
                    uri: 'https://www.shutterstock.com/shutterstock/photos/2121621818/display_1500/stock-vector-demon-slayer-tanjiro-head-anime-from-japan-2121621818.jpg',
                  }}
                  style={{height: hp(4), width: wp(10)}}
                />
              </View>
              <View style={styles.fundDescSection}>
                <View style={styles.fundName}>
                  <Text style={{color: 'white'}}>
                    Berserk 1901 Death PSU Equity in Hell Bank Direct ...
                  </Text>
                </View>
                <View style={styles.fundReturn}>
                  <Text style={{color: 'white'}}>45.43%</Text>
                  <Text style={{color: 'white'}}>-5 year Returns</Text>
                </View>
              </View>
              <View style={styles.fundType}>
                <Text style={{color: 'white'}}>Equity . Sectoral/Deadly</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.collections}>
          <View style={styles.headingPart}>
            <Text style={{fontSize: hp(2), fontWeight: '600', color: 'white'}}>
              Anime Badges
            </Text>
          </View>
          <View style={styles.collectionItem}>
            <View style={styles.topCollection}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  // borderColor: 'green',
                  alignItems: 'center',
                }}>
                <View style={styles.collectionIcon}>
                  <Icon name="fire" size={hp(6)} color={'#304D30'}></Icon>
                </View>
                <View style={styles.collectionName}>
                  <Text style={{marginTop: hp(2), color: 'white'}}>
                    Fire Value
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  // borderColor: '#96E9C6',
                  alignItems: 'center',
                }}>
                <View style={styles.collectionIcon}>
                  <Icon name="leaf" size={hp(6)} color={'#304D30'}></Icon>
                </View>
                <View style={styles.collectionName}>
                  <Text style={{marginTop: hp(2), color: 'white'}}>
                    Leaf Value
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  // borderColor: 'green',
                  alignItems: 'center',
                }}>
                <View style={styles.collectionIcon}>
                  <Icon name="modx" size={hp(6)} color={'#304D30'}></Icon>
                </View>
                <View style={styles.collectionName}>
                  <Text style={{marginTop: hp(2), color: 'white'}}>
                    Modx Value
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomCollection}>
              <TouchableOpacity
                style={{
                  // borderWidth: 2,
                  // borderColor: 'green',
                  alignItems: 'center',
                }}>
                <View style={styles.collectionIcon}>
                  <Icon name="gg-circle" size={hp(6)} color={'#304D30'}></Icon>
                </View>
                <View style={styles.collectionName}>
                  <Text style={{marginTop: hp(2), color: 'white'}}>
                    GG Value
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  // borderWidth: 2,
                  // borderColor: '#96E9C6',
                  alignItems: 'center',
                }}>
                <View style={styles.collectionIcon}>
                  <Icon name="steam" size={hp(6)} color={'#304D30'}></Icon>
                </View>
                <View style={styles.collectionName}>
                  <Text style={{marginTop: hp(2), color: 'white'}}>
                    Game Value
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  // borderWidth: 2,
                  // borderColor: 'green',
                  alignItems: 'center',
                }}>
                <View style={styles.collectionIcon}>
                  <Icon name="github-alt" size={hp(6)} color={'#304D30'}></Icon>
                </View>
                <View style={styles.collectionName}>
                  <Text style={{marginTop: hp(2), color: 'white'}}>
                    Foxy Value
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.headingPart}>
          <Text
            style={{
              fontSize: hp(2),
              fontWeight: '600',
              color: 'white',
            }}>
            NFOs(7)
          </Text>
        </View>
        <View style={styles.nfoCardParent}>
          <View style={styles.nfoChild}>
            <View style={styles.nfoTop}>
              <View>
                <Image
                  source={{
                    uri: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
                  }}
                  style={{height: hp(4), width: wp(10)}}
                />
              </View>
              <View style={{width: wp(55)}}>
                <Text style={{fontWeight: '600', color: 'white'}}>
                  Berserk Fund In Top 50 Value With Direct Growth And Maximum
                  risk
                </Text>
              </View>
              <View>
                <Text>2 days left</Text>
              </View>
            </View>
            <View style={styles.nfoBottom}>
              <View>
                <Image
                  source={{
                    uri: 'https://i.ebayimg.com/images/g/bYwAAOSwpwJizdGk/s-l1600.jpg',
                  }}
                  style={{height: hp(4), width: wp(10)}}
                />
              </View>
              <View
                style={{
                  width: wp(55),
                }}>
                <Text style={{fontWeight: '600', color: 'white'}}>
                  Berserk Fund In Top 50 Value With Direct Growth And Maximum
                  risk
                </Text>
              </View>
              <View>
                <Text>2 days left</Text>
              </View>
            </View>
            <View style={styles.nfoViewMore}>
              <Text style={{color: 'white'}}>View More</Text>
            </View>
          </View>
        </View>
        <View style={styles.headingPart}>
          <Text
            style={{
              fontSize: hp(2),
              fontWeight: '600',
              color: 'white',
            }}>
            All Mutual Funds
          </Text>
        </View>
        <FlatList
          data={currencyData}
          renderItem={renderItemList}
          keyExtractor={item => item.fundKey}
        />
      </ScrollView>
      <View style={{height: hp(7), borderWidth: 1, borderTopColor: 'white'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: hp(8),
            paddingRight: hp(8),
            alignItems: 'center',
          }}>
          <Icon name="user-md" size={wp(8)} color={'white'}></Icon>
          <Icon name="github-alt" size={wp(8)} color={'white'}></Icon>
          <Icon name="rocket" size={wp(8)} color={'white'}></Icon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBody: {
    backgroundColor: 'black',
    height: hp(100),
  },
  logoText: {
    fontSize: hp('2.3'),
    fontWeight: '600',
    marginLeft: hp(1.5),
  },
  scrollArea: {
    height: hp(90),
    flex: 1,
  },
  bottomBar: {
    // borderColor: 'red',
    // borderWidth: 2,
    // flex: 1,
    // flexDirection: 'row',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: hp(2),
    paddingRight: hp(2),
    justifyContent: 'space-between',
  },
  logo: {
    height: 40,
    width: 40,
  },
  topBarIconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: hp(12),
    // borderColor: 'yellow',
    borderWidth: 2,
    gap: hp(2),
    marginLeft: 'auto',
    justifyContent: 'flex-end',
  },
  pillButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    // borderColor: 'red',
    borderWidth: 2,
    alignItems: 'center',
    paddingLeft: hp(2),
    paddingRight: hp(2),
    gap: hp(2),
    marginTop: hp(4),
  },
  buttonTop: {
    borderWidth: 2,
    borderColor: 'white',
  },
  button1: {
    color: 'white',
    backgroundColor: 'black',
    borderRadius: hp(5),
    fontSize: hp(1.5),
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: hp(2),
    paddingTop: hp(0.5),
    paddingBottom: hp(0.5),
    paddingRight: hp(2),
  },
  button2: {
    color: '#96E9C6',
    backgroundColor: '#294B29',
    borderRadius: hp(5),
    fontSize: hp(1.5),
    fontWeight: '700',
    borderColor: 'white',
    // borderWidth: 1,
    paddingLeft: hp(2),
    paddingTop: hp(0.5),
    paddingBottom: hp(0.5),
    paddingRight: hp(2),
  },
  reminderTopPart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: hp(1),
  },
  reminderBottomPart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(3),
    paddingBottom: hp(2),
  },
  notificationCard: {
    // borderColor: 'white',
    borderWidth: 2,
    paddingLeft: hp(1),
    paddingRight: hp(1),
    marginTop: hp(3),
  },
  notificationInner: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: wp(5),
  },
  headingPart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    // borderColor: 'crimson',
    paddingLeft: hp(2),
    paddingRight: hp(2),
    marginTop: hp(4),
  },
  popularFundsCardParent: {
    borderWidth: 2,
    // borderColor: 'red',
    paddingLeft: hp(2),
    marginTop: hp(3),
  },
  fundCardParent: {
    height: hp(20),
    width: wp(80),
    color: 'white',
    paddingLeft: hp(2),
    marginRight: wp(6),
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: wp(5),
  },
  fundImageSection: {
    borderWidth: 2,
    // borderColor: 'green',
    marginTop: hp(2),
  },
  fundDescSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderColor: 'red',
    borderWidth: 2,
  },
  fundName: {
    width: wp(40),
  },
  fundReturn: {
    // borderColor: 'red',
    borderWidth: 2,
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: wp(3),
  },
  fundType: {
    paddingBottom: wp(4),
  },
  topCollection: {
    flex: 1,
    // borderColor: 'red',
    borderWidth: 2,
    flexDirection: 'row',
    paddingLeft: hp(2),
    paddingRight: hp(2),
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  bottomCollection: {
    flex: 1,
    // borderColor: 'red',
    borderWidth: 2,
    flexDirection: 'row',
    paddingLeft: hp(2),
    paddingRight: hp(2),
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  nfoCardParent: {
    borderWidth: 2,
    // borderColor: 'white',
    paddingLeft: hp(2),
    paddingRight: hp(2),
  },
  nfoTop: {
    // borderWidth: 1,
    // borderColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: hp(2),
    paddingTop: hp(2),
    paddingBottom: hp(2),
    paddingLeft: hp(1),
    paddingRight: hp(1),
  },
  nfoBottom: {
    borderTopWidth: 1,
    borderColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: hp(2),
    paddingBottom: hp(2),
    paddingLeft: hp(1),
    paddingRight: hp(1),
  },
  nfoViewMore: {
    alignItems: 'center',
    paddingTop: hp(1.5),
    paddingBottom: hp(1.5),
    borderTopColor: 'white',
    borderWidth: 2,
  },
  nfoChild: {
    borderColor: 'white',
    borderWidth: 2,
    marginTop: hp(3),
    borderRadius: wp(3),
  },
  nfoChilds: {
    borderColor: 'white',
    borderBottomWidth: 0.5,
    marginTop: hp(3),
    borderRadius: wp(3),
  },
});
