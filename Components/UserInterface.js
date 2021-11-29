
import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
// import fetchApi from './Redux/Action';
import { connect } from 'react-redux';
import mapDispatchToProps from './Redux/Dispatch';

function mapStateToProps(state){  
    console.log(state)  
    
    // console.log(state.Reducer.users)
    return{
        Data:state.Reducer.Data,
        Data2:state.Reducer.Data2,
    }
}

class UserInterface extends Component {
    constructor(){
        super();
        this.state={
            count=false
        }
    }
    onRefresh=()=>{
        setTimeout(()=>{
            this.props.fetchApi();
        },1000)
    }

    componentDidMount() {
        this.props.fetchApi()
    }

    inputHandler = (text) => {
         
        this.props.inputHandler(text)
     
    }
    
    renderitems = ({ item }) => {
        return (
            // onPress={()=>navigation.navigate('User Detail', {item})}
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("User Detail",{item})}>
                <View style={styles.component}>
                    {/* {console.log(item.name)} */}

                    <View style={styles.view1}>
                        <Text style={styles.lebel1}>Name  </Text>
                        <Text style={styles.list1} >{item.name}</Text>
                    </View>



                    <View style={styles.view1}>
                        <Text style={styles.lebel1}>Contact No. </Text>
                        <Text style={styles.list1}>{item.phone}</Text>
                    </View>


                    <View style={styles.view1}>
                        <Text style={styles.lebel1}>User-ID </Text>
                        <Text style={styles.list1}>{item.username}</Text>
                    </View>


                    <View style={styles.view1}>
                        <Text style={styles.lebel1}>Email</Text>
                        <Text style={styles.list1}>{item.phone}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {console.log("render")}
                {/* {console.log(this.props.Data2)} */}
                <View style={styles.button}>
                   <View>
                    <TouchableOpacity onPress={()=>this.props.assendinghandler(this.props.Data)} style={styles.button1} >
                        <Text style={styles.text}>search a-z</Text>
                    </TouchableOpacity>
                    </View>

                     <View style={styles.button2}>
                    <TouchableOpacity onPress={()=>this.props.desendingHandler(this.props.Data)} style={styles.button1} >
                        <Text style={styles.text}>search z-a</Text>
                    </TouchableOpacity>
                    </View>
                </View >


                <TextInput placeholder="Type name"
                    onChangeText={this.inputHandler} style={styles.input} />

                <View>
                    <FlatList
                        data={this.props.Data}
                        renderItem={this.renderitems}
                         refreshControl={
                            <RefreshControl refreshing={this.state.count} onRefresh={this.onRefresh} />
                          }
                    />
                </View>
            </View>


        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInterface)
const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    },
    input: {
        backgroundColor: "#86af49",
        fontSize: 25,
        fontWeight: "bold",
        color: "#c94c4c",
    },
    button: {
        display: "flex",
        flexDirection: "row",
    },
    button1: {
        backgroundColor: "#86af49",
        marginBottom:10,
        // marginRight:40,
    //     marginRight: 60,
    //     marginBottom: 10,
    },
    button2:{
        marginLeft:105,
    },
    text: {
        fontWeight: "bold",
        color: "red",
        fontStyle: "italic",
        fontSize: 25,
        padding: 10,

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
    view1: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 25,
        paddingBottom: 10,
        flexWrap: "wrap"

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
})
