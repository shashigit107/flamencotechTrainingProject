import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function UserDescription({ navigation, route }) {
 
  return (
    <View style={styles.container}>
      {console.log(route.params)}

      <View style={styles.component}>

        <View style={styles.view1}>
          <Text style={styles.lebel1}>Name </Text>
          <Text style={styles.list1} >{route.params.item.name}</Text>
        </View>

        <View style={styles.view1}>
          <Text style={styles.lebel1}>username </Text>
          <Text style={styles.list1} >{route.params.item.username}</Text>
        </View>

        <View style={styles.view1}>
          <Text style={styles.lebel1}>Email </Text>
          <Text style={styles.list1} >{route.params.item.email}</Text>
        </View>

        <View style={styles.view1}>
          <Text style={styles.lebel1}>Contact No. </Text>
          <Text style={styles.list1} >{route.params.item.phone}</Text>
        </View>

        <View style={styles.view1}>
          <Text style={styles.lebel1}>website </Text>
          <Text style={styles.list1} >{route.params.item.website}</Text>
        </View>
{/* ------------------------------------------------------------------------- */}
        <View style={styles.view6}>
          <Text style={styles.lebel6}>Address </Text>


          <View style={styles.addresView1}>
            <Text style={styles.addressLebel1}>Street </Text>
            <Text style={styles.addresList1} >{route.params.item.address.street}</Text>
          </View>


          <View style={styles.addresView1}>
            <Text style={styles.addressLebel1}>Suite </Text>
            <Text style={styles.addresList1} >{route.params.item.address.suite}</Text>
          </View>


          <View style={styles.addresView1}>
            <Text style={styles.addressLebel1}>City </Text>
            <Text style={styles.addresList1} >{route.params.item.address.city}</Text>
          </View>


          <View style={styles.addresView1}>
            <Text style={styles.addressLebel1}>Zip-Code </Text>
            <Text style={styles.addresList1} >{route.params.item.address.zipcode}</Text>
          </View>
        <View>
         </View>
      </View>
{/* --------------------------------------------------------------------------- */}

            <View style={styles.view6}>
              <Text style={styles.lebel6}>Geo. Location</Text>

              <View style={styles.addresView1}>
                <Text style={styles.addressLebel1}>Lat. </Text>
                <Text style={styles.addresList1} >{route.params.item.address.geo.lat}</Text>
              </View>

              <View style={styles.addresView1}>
                <Text style={styles.addressLebel1}>lng. </Text>
                <Text style={styles.addresList1} >{route.params.item.address.geo.lng}</Text>
              </View>
            </View>
   {/* ----------------------------------------------------------------- */}


      </View>
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,

  },
  component: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowRadius: 10,
    shadowOpacity: 3,
    elevation: 20,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    marginBottom: 30,

  },
  // ------------------------------for name
  view1: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 25,
    paddingBottom: 10,
    flexWrap:"wrap",
  },
  lebel1: {
    fontWeight: "bold",
    color: "#588c7e",
    fontSize: 25,
  },
  list1: {
    color: "#f18973",
    fontSize: 21,
    right: -15,
    fontWeight: "bold",
  },
 
  view6: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "37%",
    paddingBottom: 10,
  },
  lebel6: {
    fontWeight: "bold",
    color: "#588c7e",
    fontSize: 25,
  },
 

  addresView1: {
    display: "flex",
    flexDirection: "row",
    position: "relative",

  },
  addressLebel1: {
    fontWeight: "bold",
    color: "#588c7e",
    fontSize: 18,
    marginLeft: -35,


  },
  addresList1: {
    color: "#f18973",
    fontSize: 17,
    right: -12,
    fontWeight: "bold",
  },

});
