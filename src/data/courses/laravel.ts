import { Course } from "@/types";

export const laravelCourse: Course = {
  id: "laravel",
  title: "Laravel Framework",
  description: "Laravel PHP framework ko seekhein. MVC, Eloquent ORM, Blade, Artisan CLI, API development ke saath.",
  longDescription: "Laravel PHP ka popular MVC framework hai. Is course mein aap Laravel basics, Eloquent ORM, middleware, authentication, API development, queues, notifications, aur testing seekhenge.",
  lessonsCount: 6,
  duration: "5 hours",
  category: "backend",
  difficulty: "intermediate",
  icon: "code-2",
  color: "red",
  modules: [
    {
      id: "laravel-basics",
      title: "Laravel Basics aur Advanced Topics",
      description: "Laravel framework ka complete guide.",
      order: 1,
      lessons: [
        {
          id: "laravel-intro",
          title: "Laravel Introduction",
          description: "MVC architecture, Blade templating, Artisan CLI aur routing seekhenge",
          order: 1,
          duration: "45 min",
          content: {
            introduction: "Laravel PHP ka popular MVC framework hai. Artisan CLI, Eloquent ORM, Blade templating, routing, middleware seekhenge.",
            sections: [
              {
                title: "MVC Architecture",
                explanation: "Pattern: Model (data), View (UI), Controller (logic). routes/web.php web routes. app/ directory code. resources/views templates. database/migrations schema.",
                example: "// routes/web.php\nRoute::get('/', fn() => view('welcome'));\nRoute::resource('students', StudentController::class);\nRoute::get('/user/{id}', fn($id) => \"User: $id\")->where('id', '[0-9]+');"
              },
              {
                title: "Blade Templating",
                explanation: "Blade template engine. @yield, @section, @extends, @include. {{ }} echo with escaping. @if, @foreach, @php directives.",
                example: "@extends('layouts.app')\n@section('title', 'Students')\n@section('content')\n    @foreach($students as $s)\n        <p>{{ $s->name }} - {{ $s->marks }}</p>\n    @endforeach\n    @if(empty($students))<p>No students</p>@endif\n@endsection"
              },
              {
                title: "Artisan CLI",
                explanation: "php artisan serve, make:model, make:controller, migrate, tinker. Resource controller 7 actions: index, create, store, show, edit, update, destroy.",
                example: "php artisan serve\nphp artisan make:controller StudentController --resource\nphp artisan make:model Student -m\nphp artisan migrate\nphp artisan tinker"
              }
            ],
            codeExamples: [
              {
                title: "Route-Controller-View Flow",
                language: "php",
                code: "// routes/web.php\nuse App\\Models\\Student;\nuse App\\Http\\Controllers\\StudentController;\nRoute::resource('students', StudentController::class);\n\n// Controller\nclass StudentController extends Controller {\n    public function index() {\n        $students = Student::latest()->paginate(10);\n        return view('students.index', compact('students'));\n    }\n    public function store(Request $r) {\n        $validated = $r->validate(['name'=>'required|string|max:255','marks'=>'required|numeric|min:0|max:100']);\n        Student::create($validated);\n        return redirect()->route('students.index')->with('success', 'Created!');\n    }\n}"
              }
            ],
            notes: [
              "Artisan: serve, make:model, make:controller, migrate.",
              "Blade {{ }} auto XSS prevention.",
              "Resource controller 7 actions.",
              "Validation rules: required, numeric, email, unique."
            ],
            commonMistakes: [
              {
                mistake: "Blade mein {!! !!} unsafe use",
                correction: "{{ }} escape karta hai, {!! !!} sirf trusted HTML ke liye."
              },
              {
                mistake: "Route order galat",
                correction: "Specific routes pehle, wildcard routes baad."
              }
            ],
            interviewQuestions: [
              "Laravel MVC kaise kaam karta hai? - Request -> Route -> Controller -> Model (data) -> View (response).",
              "Blade vs PHP templates? - Blade cleaner syntax, inheritance, components, auto-escaping, compiled to cached PHP."
            ],
            practiceExercises: [
              {
                question: "Product resource controller banao saare actions ke saath.",
                hint: "php artisan make:controller ProductController --resource, Route::resource.",
                difficulty: "medium"
              },
              {
                question: "Blade layout banao with navbar and footer sections.",
                hint: "@section, @yield, @include directives use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "laravel-intro-quiz",
              title: "Laravel Introduction Quiz",
              questions: [
                {
                  id: "laravel-intro-q1",
                  question: "Laravel routes file for web?",
                  options: ["routes/web.php", "routes/api.php", "app/routes.php"],
                  correctAnswer: 0,
                  explanation: "Laravel mein web routes routes/web.php file mein define hote hain."
                },
                {
                  id: "laravel-intro-q2",
                  question: "Blade XSS prevention?",
                  options: ["{{ }}", "{!! !!}", "Both", "None"],
                  correctAnswer: 0,
                  explanation: "Blade mein {{ }} double curly braces auto XSS prevention karte hain."
                },
                {
                  id: "laravel-intro-q3",
                  question: "Artisan server command?",
                  options: ["php artisan start", "php artisan serve", "php artisan run"],
                  correctAnswer: 1,
                  explanation: "php artisan serve development server start karta hai Laravel mein."
                }
              ]
            }
          }
        },
        {
          id: "laravel-eloquent",
          title: "Eloquent ORM",
          description: "Models, migrations, relationships, eager loading aur query builder seekhenge",
          order: 2,
          duration: "45 min",
          content: {
            introduction: "Eloquent Laravel ka ActiveRecord ORM hai. Models, relationships, queries, migrations, factories seekhenge.",
            sections: [
              {
                title: "Models aur Migrations",
                explanation: "php artisan make:model -m se model+migration. fillable/guarded mass assignment protection. Schema builder: id(), string(), integer(), timestamps().",
                example: "Schema::create('students', function(Blueprint $table) {\n    $table->id();\n    $table->string('name');\n    $table->integer('marks');\n    $table->timestamps();\n});\n// Model\nclass Student extends Model {\n    use HasFactory;\n    protected $fillable = ['name', 'marks'];\n}"
              },
              {
                title: "CRUD aur Queries",
                explanation: "all(), find(), create(), update(), delete(). Query Builder: where(), orderBy(), limit(). Collections methods.",
                example: "$students = Student::all();\n$student = Student::find(1);\n$student = Student::where('marks', '>', 80)->orderBy('name')->get();\nStudent::create(['name'=>'Rahul','marks'=>85]);\n$student->update(['marks'=>90]);\n$student->delete();"
              },
              {
                title: "Relationships",
                explanation: "hasOne, hasMany, belongsTo, belongsToMany. Eager loading with() N+1 prevent karta hai.",
                example: "class User extends Model { public function posts(): HasMany { return $this->hasMany(Post::class); } }\nclass Post extends Model { public function user(): BelongsTo { return $this->belongsTo(User::class); } }\n$users = User::with('posts')->get();"
              }
            ],
            codeExamples: [
              {
                title: "Database Seeder",
                language: "php",
                code: "class StudentSeeder extends Seeder { public function run(): void { Student::factory(20)->create(); } }\nclass StudentFactory extends Factory {\n    protected $model = Student::class;\n    public function definition(): array {\n        return ['name'=>fake()->name(),'marks'=>fake()->numberBetween(40,100),];\n    }\n}"
              }
            ],
            notes: [
              "fillable/guarded mass assignment protection.",
              "Eager loading N+1 solve karta hai.",
              "Accessors/mutators attribute formatting.",
              "Global scopes query reusability."
            ],
            commonMistakes: [
              {
                mistake: "N+1 query problem",
                correction: "with() eager loading use karein."
              },
              {
                mistake: "Mass assignment protection ignore",
                correction: "$fillable ya $guarded define karein."
              }
            ],
            interviewQuestions: [
              "Eloquent vs Query Builder? - Eloquent ORM (ActiveRecord), relationships, events. Query Builder raw SQL-like, faster.",
              "N+1 problem kya hai? - Loop mein lazy loading par har iteration mein query. with() eager loading se solve."
            ],
            practiceExercises: [
              {
                question: "Post aur Comment models with One-to-Many relationship.",
                hint: "hasMany/BelongsTo, with() eager loading.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "laravel-eloquent-quiz",
              title: "Eloquent ORM Quiz",
              questions: [
                {
                  id: "laravel-eloquent-q1",
                  question: "Mass assignment protection property?",
                  options: ["$guarded", "$fillable", "Dono", "$protected"],
                  correctAnswer: 2,
                  explanation: "$guarded aur $fillable dono mass assignment protection ke liye use hote hain."
                },
                {
                  id: "laravel-eloquent-q2",
                  question: "N+1 solution?",
                  options: ["Lazy loading", "Eager loading with()", "Raw queries"],
                  correctAnswer: 1,
                  explanation: "Eager loading with() N+1 query problem solve karta hai Eloquent mein."
                }
              ]
            }
          }
        },
        {
          id: "laravel-middleware",
          title: "Middleware, Auth aur Policies",
          description: "Middleware, authentication, authorization gates aur policies seekhenge",
          order: 3,
          duration: "40 min",
          content: {
            introduction: "Middleware HTTP filter. Authentication, authorization (gates/policies), CSRF protection seekhenge.",
            sections: [
              {
                title: "Middleware",
                explanation: "php artisan make:middleware. handle() method. Kernel mein register. Route groups mein apply.",
                example: "class CheckAge { public function handle(Request $r, Closure $next) { if ($r->age < 18) return redirect('/'); return $next($r); } }\n// Kernel\nprotected $middlewareAliases = ['check.age' => CheckAge::class];\n// Route\nRoute::get('/dashboard', fn() => ...)->middleware(['auth', 'check.age']);"
              },
              {
                title: "Authentication",
                explanation: "Laravel Breeze/Jetstream auth. middleware('auth'). Auth::check(), Auth::user(). @auth, @guest Blade directives.",
                example: "Route::middleware(['auth'])->group(function () {\n    Route::resource('students', StudentController::class);\n});\nif (Auth::check()) { $user = Auth::user(); }\n@auth <p>Welcome {{ auth()->user()->name }}</p> @endauth"
              },
              {
                title: "Authorization (Policies)",
                explanation: "php artisan make:policy PostPolicy. Gate::authorize(). @can directive. Policy methods: view, create, update, delete.",
                example: "Gate::define('edit-post', fn(User $u, Post $p) => $u->id === $p->user_id);\nclass PostPolicy { public function update(User $u, Post $p): bool { return $u->id === $p->user_id; } }\n$this->authorize('update', $post);\n@can('update', $post) <a href=''>Edit</a> @endcan"
              }
            ],
            codeExamples: [
              {
                title: "Admin Middleware",
                language: "php",
                code: "class AdminMiddleware {\n    public function handle(Request $r, Closure $next) {\n        if (!auth()->check() || !auth()->user()->isAdmin()) abort(403);\n        return $next($r);\n    }\n}\n// User model\npublic function isAdmin(): bool { return $this->role === 'admin'; }\n// Route\nRoute::middleware(['auth', 'admin'])->prefix('admin')->group(function () {\n    Route::resource('users', UserController::class);\n});"
              }
            ],
            notes: [
              "Middleware order important - global pehle, route baad.",
              "Policy auto-discovery convention-based.",
              "Gate::before() super-admin permissions."
            ],
            commonMistakes: [
              {
                mistake: "Middleware Kernel register na karna",
                correction: "$middlewareAliases array mein register karna na bhoolen."
              }
            ],
            interviewQuestions: [
              "Middleware use? - HTTP request filter/auth/logging/CORS pre/post processing.",
              "Gate vs Policy? - Gate closures simple. Policies organized, model-specific methods."
            ],
            practiceExercises: [
              {
                question: "LogMiddleware banao jo requests log kare.",
                hint: "handle mein DB insert, path/method/user_id log.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "laravel-middleware-quiz",
              title: "Middleware, Auth aur Policies Quiz",
              questions: [
                {
                  id: "laravel-middleware-q1",
                  question: "Middleware register ki jagah?",
                  options: ["routes/web.php", "app/Http/Kernel.php", "config/auth.php"],
                  correctAnswer: 1,
                  explanation: "Middleware Kernel.php mein $middlewareAliases array mein register hota hai."
                },
                {
                  id: "laravel-middleware-q2",
                  question: "Auth check Blade directive?",
                  options: ["@auth", "@loggedin", "@user"],
                  correctAnswer: 0,
                  explanation: "@auth Blade directive check karta hai ke user logged in hai ya nahi."
                }
              ]
            }
          }
        },
        {
          id: "laravel-api",
          title: "API Development (Sanctum)",
          description: "API routes, Sanctum authentication, API resources aur rate limiting seekhenge",
          order: 4,
          duration: "45 min",
          content: {
            introduction: "Laravel API development, Sanctum auth, API resources, rate limiting seekhenge.",
            sections: [
              {
                title: "API Routes",
                explanation: "routes/api.php. api prefix. apiResource(). AuthController token generation.",
                example: "Route::post('/login', [AuthController::class, 'login']);\nRoute::middleware('auth:sanctum')->group(function () {\n    Route::get('/user', [UserController::class, 'profile']);\n    Route::apiResource('products', ProductController::class);\n});"
              },
              {
                title: "Sanctum Auth",
                explanation: "HasApiTokens trait. createToken() se token. Token abilities. plainTextToken response.",
                example: "use Laravel\\Sanctum\\HasApiTokens;\nclass User extends Authenticatable { use HasApiTokens; }\n// AuthController\npublic function login(Request $r) {\n    if (Auth::attempt($r->only('email','password'))) {\n        $token = Auth::user()->createToken('api')->plainTextToken;\n        return response()->json(['token'=>$token]);\n    }\n    return response()->json(['message'=>'Invalid'], 401);\n}"
              },
              {
                title: "API Resources",
                explanation: "php artisan make:resource. JsonResource formatting. Conditional attributes. Pagination meta.",
                example: "class ProductResource extends JsonResource {\n    public function toArray(Request $r): array {\n        return [\n            'id' => $this->id,\n            'name' => $this->name,\n            'price' => $this->price,\n            'created_at' => $this->created_at->format('Y-m-d'),\n        ];\n    }\n}\n// Controller\npublic function index() { return ProductResource::collection(Product::paginate()); }"
              }
            ],
            codeExamples: [
              {
                title: "API Controller Example",
                language: "php",
                code: "class ProductController extends Controller {\n    public function index() {\n        return ProductResource::collection(Product::paginate());\n    }\n    public function store(Request $r) {\n        $product = Product::create($r->validated());\n        return new ProductResource($product);\n    }\n}"
              }
            ],
            notes: [
              "Sanctum tokens database mein store, revoke possible.",
              "API Resources JSON response structure control.",
              "throttle middleware rate limiting.",
              "API versioning backward compatibility."
            ],
            commonMistakes: [
              {
                mistake: "API mein web auth guard use",
                correction: "auth:sanctum guard use karein."
              }
            ],
            interviewQuestions: [
              "Sanctum vs Passport? - Sanctum lightweight API tokens/SPA auth. Passport full OAuth2 heavier.",
              "Rate limiting importance? - Server overload prevention, DDoS protection, fair usage."
            ],
            practiceExercises: [
              {
                question: "Products API with Sanctum auth.",
                hint: "apiResource, Sanctum middleware, ProductResource.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "laravel-api-quiz",
              title: "API Development (Sanctum) Quiz",
              questions: [
                {
                  id: "laravel-api-q1",
                  question: "API routes file?",
                  options: ["routes/web.php", "routes/api.php", "config/api.php"],
                  correctAnswer: 1,
                  explanation: "Laravel mein API routes routes/api.php file mein define hote hain."
                },
                {
                  id: "laravel-api-q2",
                  question: "Sanctum guard?",
                  options: ["auth:web", "auth:sanctum", "auth:api"],
                  correctAnswer: 1,
                  explanation: "Laravel Sanctum API authentication ke liye auth:sanctum guard use karta hai."
                }
              ]
            }
          }
        },
        {
          id: "laravel-queue",
          title: "Queues, Mail aur Notifications",
          description: "Queues, jobs, mail notifications aur event listeners seekhenge",
          order: 5,
          duration: "40 min",
          content: {
            introduction: "Laravel queues background tasks. Jobs, mail, notifications, events seekhenge.",
            sections: [
              {
                title: "Queues aur Jobs",
                explanation: "php artisan make:job. ShouldQueue interface. dispatch() queue mein bhejta hai. queue:work worker.",
                example: "class ProcessVideo implements ShouldQueue {\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n    public function __construct(public Video $video) {}\n    public function handle(): void {\n        $this->video->update(['status'=>'processed']);\n    }\n}\nProcessVideo::dispatch($video)->delay(now()->addMinutes(5));"
              },
              {
                title: "Mail Notifications",
                explanation: "php artisan make:mail. Mailable build(). Via channels: mail, database, broadcast.",
                example: "class WelcomeMail extends Mailable {\n    use Queueable, SerializesModels;\n    public function __construct(public User $user) {}\n    public function content(): Content {\n        return new Content(view:'emails.welcome', with:['name'=>$this->user->name]);\n    }\n}\nMail::to($user)->send(new WelcomeMail($user));\n// Notification\nphp artisan make:notification OrderConfirmed\nclass OrderConfirmed extends Notification {\n    public function via($notifiable): array { return ['mail','database']; }\n    public function toMail($notifiable): MailMessage {\n        return (new MailMessage)->line('Order confirmed!')->action('View', url('/orders'));\n    }\n}"
              },
              {
                title: "Events aur Listeners",
                explanation: "Event data container. Listener handle. EventServiceProvider mapping. Queued listeners ShouldQueue.",
                example: "class OrderShipped { use Dispatchable; public function __construct(public Order $order) {} }\nclass SendNotification implements ShouldQueue {\n    public function handle(OrderShipped $event): void { /* notify */ }\n}\n// EventServiceProvider\nprotected $listen = [OrderShipped::class => [SendNotification::class]];\n// Dispatch\nevent(new OrderShipped($order));"
              }
            ],
            codeExamples: [
              {
                title: "Queue Job Example",
                language: "php",
                code: "class SendWelcomeEmail implements ShouldQueue {\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n    public function __construct(public User $user) {}\n    public function handle(): void {\n        Mail::to($this->user)->send(new WelcomeMail($this->user));\n    }\n}"
              }
            ],
            notes: [
              "queue:work command worker start karta hai.",
              "Job chaining, delays, batching possible.",
              "Notifications multiple channels support."
            ],
            commonMistakes: [
              {
                mistake: "Queue worker na chalana",
                correction: "php artisan queue:work run karna na bhoolen."
              }
            ],
            interviewQuestions: [
              "Queue use case? - Time-consuming tasks (email, video processing) background mein process, user response fast.",
              "Event vs Job? - Event broadcasting aur multiple listeners ke liye. Job single task queue mein."
            ],
            practiceExercises: [
              {
                question: "SendWelcomeEmail job banao jo new user registration par email bheje.",
                hint: "ShouldQueue, Mail facade, dispatch after registration.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "laravel-queue-quiz",
              title: "Queues, Mail aur Notifications Quiz",
              questions: [
                {
                  id: "laravel-queue-q1",
                  question: "Queue worker command?",
                  options: ["php artisan queue:work", "php artisan queue:run", "php artisan queue:start"],
                  correctAnswer: 0,
                  explanation: "php artisan queue:work command background queue worker start karta hai."
                },
                {
                  id: "laravel-queue-q2",
                  question: "Notification kaunsa channel support karta hai?",
                  options: ["Mail", "Database", "Slack", "All of above"],
                  correctAnswer: 3,
                  explanation: "Laravel notifications mail, database, Slack aur multiple channels support karte hain."
                }
              ]
            }
          }
        },
        {
          id: "laravel-testing",
          title: "Testing aur Deployment",
          description: "PHPUnit testing, Pest framework aur deployment best practices seekhenge",
          order: 6,
          duration: "45 min",
          content: {
            introduction: "Laravel testing (PHPUnit, Pest) aur deployment basics seekhenge.",
            sections: [
              {
                title: "PHPUnit Testing",
                explanation: "Feature tests aur Unit tests. php artisan make:test. HTTP tests, database tests. Assertions: assertStatus, assertSee, assertDatabaseHas.",
                example: "class StudentTest extends TestCase {\n    use RefreshDatabase;\n    public function test_can_create_student(): void {\n        $response = $this->post('/students', ['name'=>'Rahul','marks'=>85]);\n        $response->assertRedirect('/students');\n        $this->assertDatabaseHas('students', ['name'=>'Rahul']);\n    }\n    public function test_list_page_shows_students(): void {\n        Student::factory()->create(['name'=>'Priya']);\n        $response = $this->get('/students');\n        $response->assertStatus(200);\n        $response->assertSee('Priya');\n    }\n}"
              },
              {
                title: "Pest Testing",
                explanation: "Pest simpler syntax. uses()->beforeEach()->test(). Expectations.",
                example: "uses(RefreshDatabase::class);\n\ntest('can create student', function () {\n    $response = $this->post('/students', ['name'=>'Rahul','marks'=>85]);\n    $response->assertRedirect('/students');\n})->with([['name'=>'Rahul','marks'=>85]]);\n\ntest('list shows students', function () {\n    Student::factory()->create(['name'=>'Priya']);\n    $this->get('/students')->assertSee('Priya');\n});"
              },
              {
                title: "Deployment Basics",
                explanation: "Environment config (.env). php artisan optimize. Supervisor queue worker. Vapor/Forge deployment. Envoyer zero-downtime.",
                example: "# Deployment steps\ncomposer install --no-dev --optimize-autoloader\nphp artisan optimize\nphp artisan config:cache\nphp artisan route:cache\nphp artisan view:cache\nphp artisan migrate --force\n# Supervisor queue\n[program:laravel-worker]\nprocess_name=%(program_name)s_%(process_num)02d\ncommand=php /path/to/artisan queue:work --sleep=3 --tries=3\nautostart=true\nautorestart=true\nnumprocs=2"
              }
            ],
            codeExamples: [
              {
                title: "PHPUnit Test Example",
                language: "php",
                code: "class ProductTest extends TestCase {\n    use RefreshDatabase;\n    public function test_product_can_be_created(): void {\n        $response = $this->post('/products', ['name' => 'Test', 'price' => 99.99]);\n        $response->assertStatus(201);\n        $this->assertDatabaseHas('products', ['name' => 'Test']);\n    }\n}"
              }
            ],
            notes: [
              "RefreshDatabase trait tests ke beech DB reset.",
              "Pest PHPUnit ka wrapper, simpler syntax.",
              "Optimize commands production deploy pe run karein.",
              "Supervisor queue worker keep alive rakhta hai."
            ],
            commonMistakes: [
              {
                mistake: "Production mein APP_DEBUG=true rakhna",
                correction: ".env mein APP_DEBUG=false set karein."
              },
              {
                mistake: "Deploy ke baad cache clear na karna",
                correction: "php artisan optimize run karein deploy ke baad."
              }
            ],
            interviewQuestions: [
              "Feature vs Unit test? - Feature test full request/response cycle. Unit test isolated class/method.",
              "Laravel deploy steps? - composer install --no-dev, optimize, config/route/view cache, migrate --force."
            ],
            practiceExercises: [
              {
                question: "Product CRUD ke liye feature test likho.",
                hint: "assertDatabaseHas, assertRedirect, assertStatus use karo.",
                difficulty: "medium"
              }
            ],
            quiz: {
              id: "laravel-testing-quiz",
              title: "Testing aur Deployment Quiz",
              questions: [
                {
                  id: "laravel-testing-q1",
                  question: "Database refresh trait?",
                  options: ["RefreshDatabase", "DatabaseMigrations", "ResetDatabase", "ClearDatabase"],
                  correctAnswer: 0,
                  explanation: "RefreshDatabase trait tests ke beech database reset karta hai."
                },
                {
                  id: "laravel-testing-q2",
                  question: "Production optimize command?",
                  options: ["php artisan optimize", "php artisan production", "php artisan build", "php artisan compile"],
                  correctAnswer: 0,
                  explanation: "php artisan optimize production deploy ke baad cache aur performance improve karta hai."
                }
              ]
            }
          }
        }
      ]
    }
  ],
};
