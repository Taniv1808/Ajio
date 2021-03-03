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
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              onPress={() => navigation.goBack()}
              style={{
                marginTop: 50,
                marginLeft: 30,
                fontSize: 20,
                color: "blue",
              }}
            >
              <Image
                source={imagePath.arrow}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />{" "}
              Back to Login
            </Text>
            <Text style={{ fontSize: 25, marginTop: 40, marginLeft: 23 }}>
              Welcome to AJIO
            </Text>
            <Text style={{ fontSize: 16, marginLeft: 23, marginTop: 20 }}>
              Join/Sign-in using
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 20,
                    padding: 16,
                    borderWidth: 1,
                    borderRadius: 13,
                    marginLeft: 23,
                    width: 150,
                  }}
                >
                  <Image
                    source={imagePath.facebook}
                    style={{ width: 20, height: 20, marginRight: 100 }}
                  />
                  <Text style={{ marginTop: -20 }}>Facebook</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    padding: 16,
                    borderWidth: 1,
                    borderRadius: 13,
                    width: 150,
                    marginTop: 20,
                    marginLeft: 10,
                  }}
                >
                  <Image
                    source={imagePath.google}
                    style={{ width: 20, height: 20, marginRight: 100 }}
                  />
                  <Text style={{ marginTop: -20 }}>Google</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 20, marginTop: 30 }}>
              <Text style={{ fontSize: 16 }}>Your E-mail Address*</Text>
              <TextInput
                onBlur={() => this.emailValidator()}
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
                placeholder="Enter Email"
                style={{ width: 320, height: 38, marginTop: 5, padding: 5 }}
                backgroundColor="pink"
                placeholderTextColor="black"
              ></TextInput>
              <Text>{emailError}</Text>
            </View>

            <View style={{ marginTop: 10, marginLeft: 20 }}>
              <Text style={{ fontSize: 16 }}>Name*</Text>
              <TextInput
                onBlur={() => this.nameValidator()}
                onChangeText={(text) => {
                  this.setState({ name: text });
                }}
                placeholder="Enter your Name"
                style={{ width: 320, height: 38, marginTop: 5, padding: 5 }}
                backgroundColor="pink"
                placeholderTextColor="black"
              ></TextInput>
              <Text>{nameError}</Text>
            </View>

            <View style={{ marginTop: 10, marginLeft: 20 }}>
              <Text style={{ fontSize: 16 }}>Mobile*</Text>
              <TextInput
                placeholder="Enter your Mobile Number"
                style={{ width: 320, height: 38, marginTop: 5, padding: 5 }}
                backgroundColor="pink"
                placeholderTextColor="black"
                maxLength={10}
                keyboardType={"phone-pad"}
              ></TextInput>
              <Text style={{ fontSize: 10 }}>
                OTP will be send to this number for verification
              </Text>
            </View>

            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <Text style={{ fontSize: 16 }}>Password*</Text>
              <TextInput
                onBlur={() => this.passwordValidator()}
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
                placeholder="Enter Password"
                style={{ width: 320, height: 38, marginTop: 5, padding: 5 }}
                backgroundColor="pink"
                placeholderTextColor="black"
                minLength={8}
              ></TextInput>
              <Text>{passwordError}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  placeholder="8+ characters"
                  style={{
                    width: 90,
                    height: 30,
                    marginTop: 5,
                    borderWidth: 1,
                    borderRadius: 8,
                    padding: 2,
                  }}
                  backgroundColor="grey"
                  placeholderTextColor="black"
                ></TextInput>
                <TextInput
                  placeholder="# special"
                  style={{
                    width: 70,
                    height: 30,
                    marginTop: 5,
                    borderWidth: 1,
                    borderRadius: 8,
                    padding: 2,
                    marginLeft: 7,
                  }}
                  backgroundColor="grey"
                  placeholderTextColor="black"
                ></TextInput>
                <TextInput
                  placeholder="A Alphabet"
                  style={{
                    width: 70,
                    height: 30,
                    marginTop: 5,
                    borderWidth: 1,
                    borderRadius: 8,
                    padding: 1,
                    marginLeft: 8,
                  }}
                  backgroundColor="grey"
                  placeholderTextColor="black"
                ></TextInput>
                <TextInput
                  placeholder="1 Number"
                  style={{
                    width: 70,
                    height: 30,
                    marginTop: 5,
                    borderWidth: 1,
                    borderRadius: 8,
                    padding: 2,
                    marginLeft: 6,
                  }}
                  backgroundColor="grey"
                  placeholderTextColor="black"
                ></TextInput>
              </View>
            </View>

            <View style={{ marginTop: 20, marginLeft: 20, marginBottom: 10 }}>
              <TextInput
                placeholder="Invite Code (Optional)"
                style={{ width: 320, height: 38, marginTop: 5, padding: 5 }}
                backgroundColor="pink"
                placeholderTextColor="black"
              ></TextInput>
            </View>
            <Text style={{ marginTop: 7, marginLeft: 43 }}>
              By Signing In, I agreee to{" "}
              <Text style={{ color: "blue" }}>Terms & Conditions.</Text>
            </Text>

            <View
              style={{
                marginTop: 10,
                width: 200,
                marginLeft: 70,
                marginBottom: 10,
              }}
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
