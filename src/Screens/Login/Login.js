import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../Navigation/navigationStrings";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
    };
  }

  // email validation
  validEmail = () => {
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
        emailError: "Email field can't be empty*",
      });
    } else if (isValidMail) {
      this.setState({
        emailError: "",
      });
    }
  };

  // password validation
  validPassword = () => {
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
    let { emailError, passwordError } = this.state;
    return (
      <View style={{ alignItems: "center" }}>
        <Image
          source={imagePath.logo}
          style={styles.logo1}
        />

        <Text style={styles.Ajio}>
          Welcome to AJIO
        </Text>

        <View>
          <TextInput
            onBlur={() => this.validEmail()}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
            placeholder="Enter Mobile Number/Email"
            style={styles.mainText}
            backgroundColor="pink"
            placeholderTextColor="black"
          ></TextInput>
          <Text>{emailError}</Text>
          <TextInput
            onBlur={() => this.validPassword()}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
            placeholder="Enter Password"
            style={styles.mainText}
            backgroundColor="pink"
            placeholderTextColor="black"
            minLength={8}
          ></TextInput>
          <Text>{passwordError}</Text>
        </View>

        <View style={styles.loginButton}>
          <Button
            title="LogIn"
            color="black"
            onPress={() =>
              this.props.navigation.navigate(navigationStrings.HOMEPAGE)
            }
          ></Button>
        </View>

        <Text style={styles.loginText}>
          By Signing In, I agreee to{" "}
          <Text style={styles.colorText}>Terms & Conditions.</Text>
        </Text>
        <Text style={styles.loginAccount}>Don't have an account?</Text>

        <TouchableOpacity>
          <Text
            onPress={() =>
              this.props.navigation.navigate(navigationStrings.SIGNUP)
            }
            style={styles.mainSignup}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={styles.fb}
          >
            <Image
              source={imagePath.facebook}
              style={styles.loginImages}
            />
            <Text style={styles.texts}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={styles.google1}
          >
            <Image
              source={imagePath.google}
              style={styles.loginImages}
            />
            <Text style={styles.texts}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

// LogIn Stylesheet
const styles=StyleSheet.create({
  logo1:{ 
    width: 80, 
    height: 80, 
    marginTop: 60 
  },
  Ajio:{ 
    fontWeight: "bold", 
    marginTop: 10, 
    fontSize: 25 
  },
  mainText:{ 
    width: 250, 
    marginTop: 20, 
    height: 38, 
    padding: 5 
  },
  loginButton:{ 
    marginTop: 25, 
    width: 250 
  },
  loginText:{ 
    marginTop: 30, 
    marginLeft: 9 
  },
  colorText:{
     color: "blue"
     },
  loginAccount:{
     marginTop: 15
     },
  mainSignup:{ 
    color: "blue", 
    marginTop: 13
   },
   fb:{
    marginRight: 30,
    alignItems: "center",
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 25,
    width: 250,
  },
  loginImages:{ 
    width: 30, 
    height: 30, 
    marginRight: 150
   },
  texts:{ 
    marginTop: -28, 
    marginLeft: 50 
  },
  google1:{
    alignItems: "center",
    marginTop: 30,
    marginRight: 30,
    padding: 16,
    borderWidth: 1,
    borderRadius: 20,
    width: 250,
    marginLeft: 25,
  },
})