// ignore_for_file: prefer_typing_uninitialized_variables

import 'package:flutter/material.dart';
import 'package:frontend/auth_screen/login.dart';
import 'package:frontend/dashboard/dashboard.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  SharedPreferences prefs = await SharedPreferences.getInstance();
  String? token = prefs.getString('token'); // Handle possible null value
  runApp(MyApp(token: token));
}

class MyApp extends StatelessWidget {
  final String? token; // Declare token as nullable

  const MyApp({this.token, super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'TODO',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        // Check if the token is non-null and not expired
        home: (token != null && !JwtDecoder.isExpired(token!))
            ? Dashboard(token: token!)
            : const LoginScreen());
  }
}
