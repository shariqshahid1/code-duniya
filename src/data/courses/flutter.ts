import { Course } from "@/types";

export const flutterCourse: Course = {
  id: "flutter",
  title: "Flutter Framework",
  description: "Flutter framework ko seekhein. Dart language, widgets, state management, navigation, API integration ke saath.",
  longDescription: "Flutter Google ka UI toolkit hai jo single codebase se Android, iOS, Web, Desktop apps banata hai. Is course mein aap Flutter setup, widgets, navigation, state management, API integration, aur Firebase integration seekhenge.",
  lessonsCount: 5,
  duration: "4 hours",
  category: "mobile",
  difficulty: "intermediate",
  icon: "smartphone",
  color: "blue",
  modules: [
    {
      id: "flutter-basics",
      title: "Flutter Basics aur Advanced Topics",
      description: "Flutter framework ka complete guide.",
      order: 1,
      lessons: [
        {
          id: "flutter-intro",
          title: "Flutter Introduction",
          description: "Flutter framework introduction, architecture, widgets, aur setup",
          order: 1,
          duration: "45 min",
          content: {
            introduction: "Flutter Google ka UI toolkit hai jo single codebase se Android, iOS, Web, Desktop apps banata hai. Dart language use karta hai. Is lesson mein Flutter setup, widgets, hot reload seekhenge.",
            sections: [
              {
                title: "Flutter Architecture",
                explanation: "Widget tree Flutter ka core hai. Har cheez widget hai. StatelessWidget vs StatefulWidget. Scaffold, AppBar, MaterialApp basic widgets. pubspec.yaml dependencies. main.dart entry point.",
                example: "import 'package:flutter/material.dart';\nvoid main() => runApp(const MyApp());\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'CodeDuniya',\n      home: Scaffold(\n        appBar: AppBar(title: Text('Namaste Flutter')),\n        body: Center(child: Text('Hello World!')),\n      ),\n    );\n  }\n}"
              },
              {
                title: "Stateless vs Stateful Widget",
                explanation: "StatelessWidget immutable, build() ek baar call. StatefulWidget mutable, setState() UI update karta hai. State object lifetime manage karta hai.",
                example: "class CounterWidget extends StatefulWidget {\n  const CounterWidget({super.key});\n  State<CounterWidget> createState() => _CounterWidgetState();\n}\nclass _CounterWidgetState extends State<CounterWidget> {\n  int _count = 0;\n  Widget build(BuildContext context) {\n    return Column(\n      children: [\n        Text('Count: $_count'),\n        ElevatedButton(\n          onPressed: () => setState(() => _count++),\n          child: Text('Increment'),\n        ),\n      ],\n    );\n  }\n}"
              },
              {
                title: "Layout Widgets",
                explanation: "Row, Column, Stack, Container, Padding, Expanded, SizedBox. MainAxisAlignment, CrossAxisAlignment alignment. Flexible vs Expanded. MediaQuery for responsive.",
                example: "Scaffold(\n  body: Center(\n    child: Column(\n      mainAxisAlignment: MainAxisAlignment.center,\n      children: [\n        Container(\n          padding: EdgeInsets.all(16),\n          decoration: BoxDecoration(color: Colors.blue, borderRadius: BorderRadius.circular(10)),\n          child: Text('Hello', style: TextStyle(color: Colors.white, fontSize: 24)),\n        ),\n        SizedBox(height: 20),\n        Row(\n          mainAxisAlignment: MainAxisAlignment.spaceEvenly,\n          children: [\n            Icon(Icons.star, size: 40, color: Colors.yellow),\n            Icon(Icons.favorite, size: 40, color: Colors.red),\n            Icon(Icons.thumb_up, size: 40, color: Colors.blue),\n          ],\n        ),\n      ],\n    ),\n  ),\n)"
              }
            ],
            codeExamples: [
              {
                title: "Complete App",
                language: "dart",
                code: "import 'package:flutter/material.dart';\nvoid main() => runApp(const CodeDuniyaApp());\nclass CodeDuniyaApp extends StatelessWidget {\n  const CodeDuniyaApp({super.key});\n  Widget build(BuildContext context) => MaterialApp(\n    title: 'CodeDuniya',\n    theme: ThemeData(primarySwatch: Colors.teal),\n    home: const HomePage(),\n  );\n}\nclass HomePage extends StatefulWidget {\n  const HomePage({super.key});\n  State<HomePage> createState() => _HomePageState();\n}\nclass _HomePageState extends State<HomePage> {\n  final _items = <String>['Learn Flutter', 'Build Apps', 'Publish'];\n  Widget build(BuildContext context) => Scaffold(\n    appBar: AppBar(title: const Text('CodeDuniya')),\n    body: ListView.builder(\n      itemCount: _items.length,\n      itemBuilder: (ctx, i) => ListTile(\n        leading: const Icon(Icons.check_circle),\n        title: Text(_items[i]),\n      ),\n    ),\n    floatingActionButton: FloatingActionButton(\n      onPressed: () => setState(() => _items.add('New Item')),\n      child: const Icon(Icons.add),\n    ),\n  );\n}"
              }
            ],
            notes: [
              "Flutter widgets immutable hote hain.",
              "setState() call karna UI update ke liye mandatory.",
              "Hot reload instant changes dikhata hai bina app restart ke.",
              "pubspec.yaml dependencies manage karta hai."
            ],
            commonMistakes: [
              {
                mistake: "StatefulWidget mein setState() bhoolna",
                correction: "Data change par hamesha setState() call karein."
              },
              {
                mistake: "context buildup use karna without checking mounted",
                correction: "Async operations ke baad mounted check karein."
              }
            ],
            interviewQuestions: [
              "Stateless vs StatefulWidget?",
              "Hot reload vs hot restart?"
            ],
            practiceExercises: [
              {
                question: "Profile card banao with name, email, avatar using Column and Container.",
                hint: "CircleAvatar, Text, Column, padding use karo.",
                difficulty: "medium"
              },
              {
                question: "Simple todo app banao with add/remove functionality.",
                hint: "ListView, TextField, setState, AlertDialog.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "flutter-intro-quiz",
              title: "Flutter Introduction Quiz",
              questions: [
                {
                  id: "flutter-intro-q1",
                  question: "Flutter UI components?",
                  options: ["Components", "Widgets", "Views", "Elements"],
                  correctAnswer: 1,
                  explanation: "Flutter mein UI components ko widgets kehte hain."
                },
                {
                  id: "flutter-intro-q2",
                  question: "Mutable state widget?",
                  options: ["StatelessWidget", "StatefulWidget", "Both", "None"],
                  correctAnswer: 1,
                  explanation: "StatefulWidget mutable state ke liye use hota hai, setState se UI update hota hai."
                },
                {
                  id: "flutter-intro-q3",
                  question: "UI update trigger?",
                  options: ["refresh()", "setState()", "update()", "rebuild()"],
                  correctAnswer: 1,
                  explanation: "Flutter mein setState() call karne se UI re-build hota hai."
                }
              ]
            }
          }
        },
        {
          id: "flutter-navigation",
          title: "Navigation aur Routing",
          description: "Navigation, named routes, GoRouter, aur screen management",
          order: 2,
          duration: "40 min",
          content: {
            introduction: "Flutter navigation, named routes, passing data between screens, Navigator 2.0 (GoRouter) seekhenge.",
            sections: [
              {
                title: "Basic Navigation",
                explanation: "Navigator.push() new screen. Navigator.pop() wapas. MaterialPageRoute transition. Named routes onGenerateRoute se.",
                example: "// Push\nElevatedButton(\n  onPressed: () => Navigator.push(\n    context,\n    MaterialPageRoute(builder: (ctx) => const DetailScreen()),\n  ),\n  child: Text('Go to Detail'),\n);\n// Pop\nNavigator.pop(context);\n// With data\nNavigator.pushNamed(context, '/detail', arguments: {'id': 123});"
              },
              {
                title: "Named Routes",
                explanation: "MaterialApp.routes ya onGenerateRoute. route(name) method. arguments parameter data pass karta hai.",
                example: "MaterialApp(\n  initialRoute: '/',\n  routes: {\n    '/': (ctx) => const HomeScreen(),\n    '/detail': (ctx) => const DetailScreen(),\n    '/settings': (ctx) => const SettingsScreen(),\n  },\n  // OR dynamic routes\n  onGenerateRoute: (settings) {\n    if (settings.name == '/profile') {\n      final id = settings.arguments as int;\n      return MaterialPageRoute(builder: (ctx) => ProfileScreen(id: id));\n    }\n    return MaterialPageRoute(builder: (ctx) => const NotFoundScreen());\n  },\n);\n// Navigate\nNavigator.pushNamed(context, '/profile', arguments: 42);"
              },
              {
                title: "GoRouter",
                explanation: "GoRouter declarative routing, deep linking, nested navigation, redirects. go_router package. Router configuration with StatefulShellRoute.",
                example: "final router = GoRouter(\n  initialLocation: '/',\n  redirect: (ctx, state) {\n    final loggedIn = /* check auth */;\n    if (!loggedIn && state.location != '/login') return '/login';\n    return null;\n  },\n  routes: [\n    GoRoute(path: '/', builder: (ctx, state) => const HomeScreen()),\n    GoRoute(\n      path: '/products',\n      builder: (ctx, state) => const ProductListScreen(),\n      routes: [\n        GoRoute(path: ':id', builder: (ctx, state) => ProductDetailScreen(id: state.pathParameters['id']!)),\n      ],\n    ),\n    GoRoute(path: '/login', builder: (ctx, state) => const LoginScreen()),\n  ],\n);\nMaterialApp.router(routerConfig: router);"
              }
            ],
            codeExamples: [
              {
                title: "Bottom Navigation with GoRouter",
                language: "dart",
                code: "final router = GoRouter(\n  initialLocation: '/home',\n  routes: [\n    StatefulShellRoute.indexedStack(\n      builder: (ctx, state, navigationShell) => ScaffoldWithNavBar(navigationShell: navigationShell),\n      branches: [\n        StatefulShellBranch(routes: [GoRoute(path: '/home', builder: (ctx, state) => const HomeScreen())]),\n        StatefulShellBranch(routes: [GoRoute(path: '/search', builder: (ctx, state) => const SearchScreen())]),\n        StatefulShellBranch(routes: [GoRoute(path: '/profile', builder: (ctx, state) => const ProfileScreen())]),\n      ],\n    ),\n  ],\n);\n// ScaffoldWithNavBar\nclass ScaffoldWithNavBar extends StatelessWidget {\n  final StatefulNavigationShell navigationShell;\n  Widget build(BuildContext context) => Scaffold(\n    body: navigationShell,\n    bottomNavigationBar: NavigationBar(\n      selectedIndex: navigationShell.currentIndex,\n      onDestinationSelected: (i) => navigationShell.goBranch(i),\n      destinations: const [\n        NavigationDestination(icon: Icon(Icons.home), label: 'Home'),\n        NavigationDestination(icon: Icon(Icons.search), label: 'Search'),\n        NavigationDestination(icon: Icon(Icons.person), label: 'Profile'),\n      ],\n    ),\n  );\n}"
              }
            ],
            notes: [
              "Navigator stack-based hai - push adds, pop removes.",
              "Named routes centralized route management.",
              "GoRouter web deep linking support karta hai.",
              "StatefulShellRoute bottom nav state preserve karta hai."
            ],
            commonMistakes: [
              {
                mistake: "BuildContext use after dispose",
                correction: "Async operation ke baad context.mounted check karein."
              },
              {
                mistake: "GoRouter not found routes handle na karna",
                correction: "errorPage ya wildcard route add karein."
              }
            ],
            interviewQuestions: [
              "Navigator.push vs pushNamed?",
              "GoRouter benefits?"
            ],
            practiceExercises: [
              {
                question: "2-screen app banao with data passing (name -> welcome screen).",
                hint: "Navigator.push with arguments, MaterialPageRoute.",
                difficulty: "medium"
              },
              {
                question: "GoRouter se product detail page with id parameter.",
                hint: "path: ':id', pathParameters use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "flutter-navigation-quiz",
              title: "Flutter Navigation Quiz",
              questions: [
                {
                  id: "flutter-nav-q1",
                  question: "Previous screen return?",
                  options: ["Navigator.pop()", "Navigator.back()", "Navigator.remove()", "Navigator.exit()"],
                  correctAnswer: 0,
                  explanation: "Navigator.pop() current screen ko stack se hata kar previous screen par wapas jaata hai."
                },
                {
                  id: "flutter-nav-q2",
                  question: "GoRouter package use?",
                  options: ["Declarative routing", "State management", "HTTP client", "Database"],
                  correctAnswer: 0,
                  explanation: "GoRouter Flutter ka declarative routing package hai."
                }
              ]
            }
          }
        },
        {
          id: "flutter-state",
          title: "State Management",
          description: "Provider, Riverpod, Bloc aur state management solutions",
          order: 3,
          duration: "50 min",
          content: {
            introduction: "Flutter state management solutions: Provider, Riverpod, Bloc. setState, InheritedWidget, ChangeNotifier seekhenge.",
            sections: [
              {
                title: "Provider Package",
                explanation: "Provider simple state management. ChangeNotifier class, notifyListeners(). MultiProvider multiple providers. context.watch() listen, context.read() without listen.",
                example: "class CounterModel extends ChangeNotifier {\n  int _count = 0;\n  int get count => _count;\n  void increment() { _count++; notifyListeners(); }\n}\n// Provide\nMultiProvider(\n  providers: [ChangeNotifierProvider(create: (ctx) => CounterModel())],\n  child: const MyApp(),\n);\n// Consume\nWidget build(BuildContext context) {\n  final counter = context.watch<CounterModel>();\n  return Text('Count: ${counter.count}');\n}\n// Action\ncontext.read<CounterModel>().increment();"
              },
              {
                title: "Riverpod",
                explanation: "Riverpod Provider ka safer alternative. Compile-time safe, no BuildContext needed for providers. ref.watch(), ref.read(). Provider, StateProvider, FutureProvider, StreamProvider.",
                example: "final counterProvider = StateProvider<int>((ref) => 0);\nfinal greetingProvider = Provider<String>((ref) => 'Namaste!');\n// Read\nref.watch(counterProvider);\nref.read(counterProvider.notifier).state++;\n// Widget\nclass CounterWidget extends ConsumerWidget {\n  Widget build(BuildContext context, WidgetRef ref) {\n    final count = ref.watch(counterProvider);\n    return Text('Count: $count');\n  }\n}"
              },
              {
                title: "Bloc Pattern",
                explanation: "Bloc separates business logic from UI. Events in, States out. BlocProvider, BlocBuilder, BlocListener. flutter_bloc package. Cubit simpler Bloc alternative.",
                example: "// Event\nabstract class CounterEvent {}\nclass IncrementEvent extends CounterEvent {}\n// Bloc\nclass CounterBloc extends Bloc<CounterEvent, int> {\n  CounterBloc() : super(0) {\n    on<IncrementEvent>((event, emit) => emit(state + 1));\n  }\n}\n// UI\nBlocProvider(\n  create: (ctx) => CounterBloc(),\n  child: BlocBuilder<CounterBloc, int>(\n    builder: (ctx, count) => Column(children: [\n      Text('Count: $count'),\n      ElevatedButton(onPressed: () => context.read<CounterBloc>().add(IncrementEvent()), child: Text('Add')),\n    ]),\n  ),\n);"
              }
            ],
            codeExamples: [
              {
                title: "State Management Comparison",
                language: "dart",
                code: "// Provider\nclass CounterModel extends ChangeNotifier {\n  int _count = 0;\n  int get count => _count;\n  void increment() { _count++; notifyListeners(); }\n}\n// Riverpod\nfinal counterProvider = StateProvider<int>((ref) => 0);\n// Bloc\nclass CounterBloc extends Bloc<CounterEvent, int> {\n  CounterBloc() : super(0) {\n    on<IncrementEvent>((event, emit) => emit(state + 1));\n  }\n}"
              }
            ],
            notes: [
              "Provider simple apps ke liye suitable.",
              "Riverpod compile-time safe, no context needed.",
              "Bloc complex apps ke liye, testable.",
              "setState small widgets mein sufficient."
            ],
            commonMistakes: [
              {
                mistake: "context.watch in event handlers (buttons)",
                correction: "context.watch in build method, context.read in callbacks."
              },
              {
                mistake: "Bloc event handler mein async context use",
                correction: "Handle async in event handler, emit state when done."
              }
            ],
            interviewQuestions: [
              "Provider vs Riverpod?",
              "Bloc vs Cubit?"
            ],
            practiceExercises: [
              {
                question: "Provider/Todo app with add/remove/toggle complete.",
                hint: "ChangeNotifier, List<Todo>, notifyListeners().",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "flutter-state-quiz",
              title: "Flutter State Management Quiz",
              questions: [
                {
                  id: "flutter-state-q1",
                  question: "Provider notify method?",
                  options: ["updateListeners()", "notifyListeners()", "refresh()", "rebuild()"],
                  correctAnswer: 1,
                  explanation: "ChangeNotifier mein notifyListeners() call karna UI update ke liye zaroori hai."
                },
                {
                  id: "flutter-state-q2",
                  question: "Riverpod watch vs read?",
                  options: ["Watch rebuilds, read doesn't", "Read rebuilds, watch doesn't", "Both rebuild", "None"],
                  correctAnswer: 0,
                  explanation: "Riverpod mein watch() se widget rebuild hota hai, read() se nahi."
                }
              ]
            }
          }
        },
        {
          id: "flutter-api",
          title: "API Integration aur HTTP",
          description: "HTTP requests, Dio package, JSON serialization aur API integration",
          order: 4,
          duration: "45 min",
          content: {
            introduction: "Flutter API integration. http/dio packages, JSON serialization, error handling, caching seekhenge.",
            sections: [
              {
                title: "HTTP Requests (http package)",
                explanation: "http package GET/POST/PUT/DELETE. http.get() returns Response. response.statusCode, response.body. jsonDecode() JSON parse. async/await network calls.",
                example: "import 'package:http/http.dart' as http;\nimport 'dart:convert';\n\nclass ApiService {\n  final baseUrl = 'https://api.example.com';\n  \n  Future<List<dynamic>> getStudents() async {\n    final response = await http.get(Uri.parse('$baseUrl/students'));\n    if (response.statusCode == 200) return jsonDecode(response.body);\n    throw Exception('Failed to load: ${response.statusCode}');\n  }\n  \n  Future<Map<String, dynamic>> createStudent(Map<String, dynamic> data) async {\n    final response = await http.post(\n      Uri.parse('$baseUrl/students'),\n      headers: {'Content-Type': 'application/json'},\n      body: jsonEncode(data),\n    );\n    if (response.statusCode == 201) return jsonDecode(response.body) as Map<String, dynamic>;\n    throw Exception('Failed to create');\n  }\n}"
              },
              {
                title: "DIO Package",
                explanation: "Dio more features: interceptors, retry, timeout, multipart, cancel. Dio instance with BaseOptions. Interceptor for logging/auth.",
                example: "final dio = Dio(BaseOptions(\n  baseUrl: 'https://api.example.com',\n  connectTimeout: const Duration(seconds: 5),\n  receiveTimeout: const Duration(seconds: 3),\n  headers: {'Authorization': 'Bearer token123'},\n));\ndio.interceptors.add(InterceptorsWrapper(\n  onRequest: (options, handler) {\n    print('Request: \${options.method} \${options.path}');\n    handler.next(options);\n  },\n  onError: (error, handler) {\n    if (error.type == DioExceptionType.connectionTimeout) {\n      // retry logic\n    }\n    handler.next(error);\n  },\n));\n// Usage\nfinal response = await dio.get('/students');\nfinal data = response.data['data'] as List;"
              },
              {
                title: "JSON Serialization",
                explanation: "fromJson() factory constructor. toJson() method. json_serializable package code generation. Manual serialization for simple models.",
                example: "class Student {\n  final int id;\n  final String name;\n  final int marks;\n  \n  Student({required this.id, required this.name, required this.marks});\n  \n  factory Student.fromJson(Map<String, dynamic> json) => Student(\n    id: json['id'] as int,\n    name: json['name'] as String,\n    marks: json['marks'] as int,\n  );\n  \n  Map<String, dynamic> toJson() => {'id': id, 'name': name, 'marks': marks};\n}\n\n// Using json_serializable\n@JsonSerializable()\nclass Product extends Equatable {\n  final int id;\n  final String name;\n  final double price;\n  const Product({required this.id, required this.name, required this.price});\n  factory Product.fromJson(Map<String, dynamic> json) => _$ProductFromJson(json);\n  Map<String, dynamic> toJson() => _$ProductToJson(this);\n  List<Object?> get props => [id, name, price];\n}"
              }
            ],
            codeExamples: [
              {
                title: "Complete API Integration",
                language: "dart",
                code: "class StudentRepository {\n  final Dio dio;\n  StudentRepository(this.dio);\n  \n  Future<List<Student>> fetchStudents() async {\n    final response = await dio.get('/students');\n    final list = response.data['data'] as List;\n    return list.map((j) => Student.fromJson(j)).toList();\n  }\n  Future<Student> createStudent(Student s) async {\n    final response = await dio.post('/students', data: s.toJson());\n    return Student.fromJson(response.data['data']);\n  }\n}\n// Usage in Riverpod\nfinal studentRepoProvider = Provider<StudentRepository>((ref) => StudentRepository(dio));\nfinal studentsProvider = FutureProvider<List<Student>>((ref) async {\n  return ref.watch(studentRepoProvider).fetchStudents();\n});"
              }
            ],
            notes: [
              "Hamesha network calls try-catch mein wrap karein.",
              "Dio interceptors logging, auth, caching ke liye.",
              "json_serializable vs manual: code gen recommended for large models.",
              "Equatable for value-based equality."
            ],
            commonMistakes: [
              {
                mistake: "Network call UI thread par karna",
                correction: "Async/await use karein ya compute() isolate mein."
              },
              {
                mistake: "Response null check na karna",
                correction: "Hamesha response.data null check karein."
              }
            ],
            interviewQuestions: [
              "http vs dio?",
              "JSON serialization approaches?"
            ],
            practiceExercises: [
              {
                question: "GitHub API se users fetch karo aur ListView mein show karo.",
                hint: "http.get('https://api.github.com/users'), jsonDecode, ListView.builder.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "flutter-api-quiz",
              title: "Flutter API Integration Quiz",
              questions: [
                {
                  id: "flutter-api-q1",
                  question: "http package JSON parse function?",
                  options: ["jsonDecode()", "JSON.parse()", "fromJson()", "decode()"],
                  correctAnswer: 0,
                  explanation: "dart:convert library ka jsonDecode() function JSON string parse karta hai."
                },
                {
                  id: "flutter-api-q2",
                  question: "Dio interceptor use?",
                  options: ["Logging", "Auth token refresh", "Error handling", "All of above"],
                  correctAnswer: 3,
                  explanation: "Dio interceptors logging, auth token refresh, aur error handling sab ke liye use hote hain."
                }
              ]
            }
          }
        },
        {
          id: "flutter-firebase",
          title: "Firebase Integration",
          description: "Firestore, Firebase Auth, aur Firebase services integration",
          order: 5,
          duration: "50 min",
          content: {
            introduction: "Flutter Firebase integration. Firestore, Authentication, Storage, Cloud Messaging, Analytics seekhenge.",
            sections: [
              {
                title: "Firebase Setup",
                explanation: "Firebase project banao. google-services.json (Android), GoogleService-Info.plist (iOS). firebase_core, firebase_auth, cloud_firestore packages pubspec.yaml mein.",
                example: "// pubspec.yaml\ndependencies:\n  firebase_core: ^2.24.0\n  firebase_auth: ^4.16.0\n  cloud_firestore: ^4.14.0\n\n// main.dart\nimport 'package:firebase_core/firebase_core.dart';\nimport 'firebase_options.dart';\n\nvoid main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);\n  runApp(const MyApp());\n}"
              },
              {
                title: "Firestore CRUD",
                explanation: "Firestore NoSQL database. Collection -> Document -> Fields. FirebaseFirestore.instance. add(), get(), update(), delete(). Snapshot listener real-time. withConverter type-safe.",
                example: "class StudentService {\n  final CollectionReference _students = FirebaseFirestore.instance.collection('students');\n  \n  Future<void> addStudent(String name, int marks) => _students.add({'name': name, 'marks': marks});\n  \n  Stream<List<Map<String, dynamic>>> getStudents() => _students.snapshots().map((snap) => snap.docs.map((d) => {'id': d.id, ...d.data() as Map<String, dynamic>}).toList());\n  \n  Future<void> updateStudent(String id, Map<String, dynamic> data) => _students.doc(id).update(data);\n  \n  Future<void> deleteStudent(String id) => _students.doc(id).delete();\n  \n  Future<List<Student>> getTopStudents() async {\n    final snapshot = await _students.where('marks', isGreaterThanOrEqualTo: 80).orderBy('marks', descending: true).get();\n    return snapshot.docs.map((d) => Student.fromFirestore(d.data(), d.id)).toList();\n  }\n}"
              },
              {
                title: "Firebase Auth",
                explanation: "createUserWithEmailAndPassword(), signInWithEmailAndPassword(), signOut(). authStateChanges() stream auth state. Google/Apple sign-in. currentUser property.",
                example: "class AuthService {\n  final FirebaseAuth _auth = FirebaseAuth.instance;\n  \n  Stream<User?> get user => _auth.authStateChanges();\n  \n  Future<UserCredential> signUp(String email, String password) => _auth.createUserWithEmailAndPassword(email: email, password: password);\n  \n  Future<UserCredential> signIn(String email, String password) => _auth.signInWithEmailAndPassword(email: email, password: password);\n  \n  Future<void> signOut() => _auth.signOut();\n  \n  Future<UserCredential> signInWithGoogle() async {\n    final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();\n    final GoogleSignInAuthentication googleAuth = await googleUser!.authentication;\n    final credential = GoogleAuthProvider.credential(accessToken: googleAuth.accessToken, idToken: googleAuth.idToken);\n    return await _auth.signInWithCredential(credential);\n  }\n}\n\n// UI - Auth state\nWidget build(BuildContext context) {\n  return StreamBuilder<User?>(\n    stream: FirebaseAuth.instance.authStateChanges(),\n    builder: (ctx, snapshot) {\n      if (snapshot.connectionState == ConnectionState.waiting) return CircularProgressIndicator();\n      if (snapshot.hasData) return const HomeScreen();\n      return const LoginScreen();\n    },\n  );\n}"
              }
            ],
            codeExamples: [
              {
                title: "Complete Firebase Setup",
                language: "dart",
                code: "class FirestoreService {\n  final FirebaseFirestore _db = FirebaseFirestore.instance;\n  \n  Future<void> addUser(String name, String email) async {\n    await _db.collection('users').add({'name': name, 'email': email});\n  }\n  \n  Stream<List<Map<String, dynamic>>> getUsers() {\n    return _db.collection('users').snapshots().map(\n      (snap) => snap.docs.map((d) => {'id': d.id, ...d.data()}).toList()\n    );\n  }\n  \n  Future<void> signIn(String email, String password) async {\n    await FirebaseAuth.instance.signInWithEmailAndPassword(email: email, password: password);\n  }\n}"
              }
            ],
            notes: [
              "Firestore real-time listeners auto-update UI.",
              "Security rules mein validation important.",
              "Firebase Auth email/password, OAuth, phone support.",
              "Firestore queries need composite indexes for complex filters."
            ],
            commonMistakes: [
              {
                mistake: "Firestore listener dispose na karna",
                correction: "StreamBuilder automatically handles or cancel() in dispose."
              },
              {
                mistake: "Firebase config files repo mein commit karna",
                correction: ".gitignore mein add karein, CI/CD mein generate karein."
              }
            ],
            interviewQuestions: [
              "Firestore vs Realtime Database?",
              "Security rules kyun important?"
            ],
            practiceExercises: [
              {
                question: "Chat app banao using Firestore and Firebase Auth.",
                hint: "messages collection, StreamBuilder, real-time updates.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "flutter-firebase-quiz",
              title: "Flutter Firebase Quiz",
              questions: [
                {
                  id: "flutter-firebase-q1",
                  question: "Firebase initialize package?",
                  options: ["firebase_core", "firebase_auth", "cloud_firestore", "firebase_init"],
                  correctAnswer: 0,
                  explanation: "firebase_core package Firebase.initializeApp() ke liye zaroori hai."
                },
                {
                  id: "flutter-firebase-q2",
                  question: "Firestore real-time listener stream?",
                  options: ["snapshots()", "stream()", "listen()", "watch()"],
                  correctAnswer: 0,
                  explanation: "snapshots() method real-time data stream provide karta hai Firestore mein."
                }
              ]
            }
          }
        }
      ]
    }
  ],
};
