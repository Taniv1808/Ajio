import { ThemeProvider } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet
} from "react-native";
import { Value } from "react-native-reanimated";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../Navigation/navigationStrings";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: "",
      email: "",
      password: "",
      passwordError: "",
      emailError: "",
    };
  }

  // email validation
  emailValidator = () => {
    let { email } = this.state;
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let isValidMail = regex.test(email);
    if (!isValidMail) {
      this.setState({
        emailError: "Please enter valid Email*",
      });
    }
    if (email == "") {
      this.setState({
        emailError: "Email can't be empty",
      });
    } else if (isValidMail) {
      this.setState({
        emailError: "",
      });
    }
  };

  // name validation
  nameValidator() {
    let { name } = this.state;
    let regex = /^[a-z A-Z ,.'-]+$/;
    let isValid = regex.test(name);

    if (!isValid) {
      this.setState({
        nameError: "Please enter valid Name*",
      });
    }
    if (name == "") {
      this.setState({
        nameError: "Name  can't be empty",
      });
    } else if (isValid) {
      this.setState({
        nameError: "",
      });
    }
  }

  // password validation
  passwordValidator = () => {
    let { password } = this.state;
    let regex = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let isValidPassword = regex.test(password);
    if (!isValidPassword) {
      this.setState({
        passwordError: "Please enter valid Password*",
      });
    }
    if (password == "") {
      this.setState({
        passwordError: "Password field can't be empty*",
      });
    } else if (isValidPassword) {
      this.setState({
        passwordError: "",
      });
    }
  };
  render() {
    const { emailError, nameError, passwordError } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mainSignup}>
            <Text
              onPress={() => navigation.goBack()}
              style={styles.signupBack}
            >
              <Image
                source={imagePath.arrow}
                style={styles.signupArrow}
              />{"  "}
              Back to Login
            </Text>
            <Text style={styles.signupText}>
              Welcome to AJIO
            </Text>
            <Text style={styles.signupText1}>
              Join/Sign-in using
            </Text>

            <View style={styles.signMainImages}>
              <TouchableOpacity>
                <View
                  style={styles.signImages}
                >
                  <Image
                    source={imagePath.facebook}
                    style={styles.signCenterImage}
                  />
                  <Text style={styles.signCenterText}>Facebook</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={styles.signImages}
                >
                  <Image
                    source={imagePath.google}
                    style={styles.signCenterImage}
                  />
                  <Text style={styles.signCenterText}>Google</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionText}>Your E-mail Address*</Text>
              <TextInput
                onBlur={() => this.emailValidator()}
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
                placeholder="Enter Email"
                style={styles.centerText}
                backgroundColor="pink"
                placeholderTextColor="black"
              ></TextInput>
              <Text>{emailError}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionText}>Name*</Text>
              <TextInput
                onBlur={() => this.nameValidator()}
                onChangeText={(text) => {
                  this.setState({ name: text });
                }}
                placeholder="Enter your Name"
                style={styles.centerText}
                backgroundColor="pink"
                placeholderTextColor="black"
              ></TextInput>
              <Text>{nameError}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionText}>Mobile*</Text>
              <TextInput
                placeholder="Enter your Mobile Number"
                style={styles.centerText}
                backgroundColor="pink"
                placeholderTextColor="black"
                maxLength={10}
                keyboardType={"phone-pad"}
              ></TextInput>
              <Text style={{ fontSize: 10 }}>
                OTP will be send to this number for verification
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionText}>Password*</Text>
              <TextInput
                onBlur={() => this.passwordValidator()}
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
                placeholder="Enter Password"
                style={styles.centerText}
                backgroundColor="pink"
                placeholderTextColor="black"
                minLength={8}
              ></TextInput>
              <Text>{passwordError}</Text>
              <View style={styles.bottomText}>
                <TextInput
                  placeholder="8+ characters"
                  style={styles.bottomText1}
                  backgroundColor="grey"
                  placeholderTextColor="black"
                ></TextInput>
                <TextInput
                  placeholder="# special"
                  style={styles.bottomText2}
                  backgroundColor="grey"
                  placeholderTextColor="black"
                ></TextInput>
                <TextInput
                  placeholder="A Alphabet"
                  style={styles.bottomText2}
                  backgroundColor="grey"
                  placeholderTextColor="black"
                ></TextInput>
                <TextInput
                  placeholder="1 Number"
                  style={styles.bottomText2}
                  backgroundColor="grey"
                  placeholderTextColor="black"
                ></TextInput>
              </View>
            </View>

            <View style={styles.invite}>
              <TextInput
                placeholder="Invite Code (Optional)"
                style={styles.centerText}
                backgroundColor="pink"
                placeholderTextColor="black"
              ></TextInput>
            </View>
            <Text style={styles.signupText2}>
              By Signing In, I agreee to{" "}
              <Text style={styles.signColor}>Terms & Conditions.</Text>
            </Text>

            <View
              style={styles.signupButton}
            >
              {/* <TouchableOpacity style={{marginLeft:40,borderWidth:3,alignItems:'center'}}><Text  color='black'>Sign Up</Text></TouchableOpacity> */}
              <Button
                title="Sign Up"
                color="black"
                onPress={() =>
                  this.props.navigation.navigate(navigationStrings.HOMEPAGE)
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Signup;

// Signup Stylesheet
const styles=StyleSheet.create({
  mainSignup:{ 
    flex: 1, 
    justifyContent: "center" 
  },
  signupBack:{
    marginTop: 50,
    marginLeft: 30,
    fontSize: 20,
    color: "blue",
  },
  signupArrow:{ 
    width: 20, 
    height: 20, 
    marginRight: 5 
  },
  signupText:{ 
    fontSize: 25, 
    marginTop: 40, 
    marginLeft: 23 
  },
  signupText1:{ 
    fontSize: 16, 
    marginLeft: 23, 
    marginTop: 20 
  },
  signMainImages:{ 
    flexDirection: "row" 
  },
  signImages:{
    alignItems: "center",
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderRadius: 13,
    marginLeft: 18,
    width: 150,
  },
  signCenterImage:{
     width: 20, 
     height: 20, 
     marginRight: 
     100 
    },
  signCenterText:{
     marginTop: -20
     },
  section:{ 
    marginLeft: 20, 
    marginTop: 15
   },
  sectionText:{ 
    fontSize: 16 
  },
  centerText:{ 
    width: 320, 
    height: 38, 
    marginTop: 5, 
    padding: 5 
  },
  bottomText:{ 
    flexDirection: "row",
     alignItems: "center" 
    },
  bottomText1:{
    width: 90,
    height: 30,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 8,
    padding: 2,
  },
  bottomText2:{
    width: 70,
    height: 30,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 8,
    padding: 1,
    marginLeft: 6,
  },
  invite:{ 
    marginTop: 20, 
    marginLeft: 20, 
    marginBottom: 10 
  },
  signupText2:{ 
    marginTop: 7, 
    marginLeft: 43 
  },
  signColor:{ 
    color: "blue" 
  },
  signupButton:{
    marginTop: 10,
    width: 200,
    marginLeft: 70,
    marginBottom: 10,
  }
})