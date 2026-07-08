import { Course } from "@/types"

export const htmlCourse: Course = {
  id: "html",
  title: "HTML",
  description: "HTML seekhein - Website ka structure banana sikhe asaan Roman English mein",
  longDescription: "HTML (HyperText Markup Language) web development ki buniyad hai. Is course mein aap HTML ki basic se lekar advanced concepts tak seekhenge, jisme semantic HTML, forms, tables, multimedia, aur SEO basics shamil hain.",
  category: "frontend",
  icon: "FileCode",
  color: "from-orange-500 to-red-500",
  difficulty: "beginner",
  lessonsCount: 22,
  duration: "4 hours",
  prerequisites: ["Koi programming experience zaroori nahi"],
  modules: [
    {
      id: "html-basics",
      title: "HTML Basics",
      description: "HTML ki basic concepts aur fundamentals samjhein",
      order: 1,
      lessons: [
        {
          id: "html-what-is",
          title: "HTML Kya Hai?",
          description: "HTML ka matlab aur iska use samjhein",
          order: 1,
          content: {
            introduction: "HTML ka matlab HyperText Markup Language hai. Ye web pages banane ki standard language hai. Iska use website ka structure define karne ke liye hota hai. HTML ke through hum text, images, links, aur bahut kuch web page mein add kar sakte hain.",
            sections: [
              {
                title: "HTML Kya Hai?",
                explanation: "HTML ek markup language hai jo web browser ko batata hai ki content ko kaise display karna hai. Ye kisi bhi website ki backbone hoti hai. HTML ka full form HyperText Markup Language hai. 'HyperText' ka matlab hota hai text jo links ke through connect ho, aur 'Markup' ka matlab hai text ko structure dena.",
                example: "HTML ek tarah ki building blocks ki tarah hai jo ek website banata hai. Jaise ek ghar banane ke liye bricks ki zaroorat hoti hai, waise hi website banane ke liye HTML ki zaroorat hoti hai."
              },
              {
                title: "HTML Kaise Kaam Karta Hai?",
                explanation: "HTML tags ke through kaam karta hai. Har tag ka apna specific purpose hota hai. Browser in tags ko read karta hai aur uske according content display karta hai. HTML file ki extension .html hoti hai.",
                example: "Jab aap koi website kholte hain, to browser server se HTML file fetch karta hai, aur us file ko render karke aapko ek beautiful website dikhai deti hai."
              },
              {
                title: "HTML Ka History",
                explanation: "HTML ko Tim Berners-Lee ne 1991 mein banaya tha. Tab se lekar ab tak HTML ke kai versions aaye hain. HTML5 jo ke latest version hai, 2014 mein aaya tha. HTML5 mein bahut si new features add hue hain jaise audio, video aur canvas.",
                example: "HTML 1.0 (1991) -> HTML 2.0 (1995) -> HTML 3.2 (1997) -> HTML 4.01 (1999) -> HTML5 (2014)"
              },
              {
                title: "HTML Editors",
                explanation: "HTML likhne ke liye aap kisi bhi text editor ka use kar sakte hain. Kuch popular editors hain: VS Code, Sublime Text, Notepad++, aur Atom. VS Code sabse zyada popular hai kyunki ye free hai aur isme bahut si useful extensions hain.",
                example: "Aap Notepad (Windows) mein bhi HTML likh sakte hain aur file ko .html extension se save kar sakte hain."
              },
            ],
            codeExamples: [
              {
                title: "Pehla HTML Program",
                language: "html",
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Mera Pehla Page</title>\n</head>\n<body>\n    <h1>Namaste Duniya!</h1>\n    <p>Yeh mera pehla HTML page hai.</p>\n</body>\n</html>",
                output: "Ye page browser mein 'Namaste Duniya!' heading aur ek paragraph dikhayega."
              },
              {
                title: "Basic HTML Structure",
                language: "html",
                code: "<!DOCTYPE html>\n<html lang=\"hi\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Page Title</title>\n</head>\n<body>\n    Content yahan aayega\n</body>\n</html>",
                output: "Ye basic HTML structure hai jo har HTML file mein hona chahiye."
              }
            ],
            notes: [
              "HTML ek markup language hai, programming language nahi",
              "Har HTML file .html extension se save hoti hai",
              "DOCTYPE declaration sabse pehle aata hai",
              "HTML tags usually opening aur closing tags ke pair mein hote hain",
              "Browser HTML file ko top se bottom read karta hai"
            ],
            commonMistakes: [
              { mistake: "Closing tag bhoolna - jaise <p> likh kar </p> bhoolna", correction: "Har opening tag ke saath closing tag likhna yaad rakhein" },
              { mistake: "Case sensitivity galati - HTML tags case-sensitive nahi hain <P> aur <p> dono kaam karega", correction: "Lowercase mein likhna best practice hai" },
              { mistake: "DOCTYPE declaration bhoolna", correction: "Har HTML file mein <!DOCTYPE html> likhna na bhoolen" },
            ],
            interviewQuestions: [
              "HTML ka full form kya hai?",
              "HTML aur HTML5 mein kya farak hai?",
              "HTTP aur HTTPS mein kya antar hai?",
              "HTML tags kitne types ke hote hain?",
              "Meta tags kya hote hain aur kyun use kiye jate hain?",
            ],
            practiceExercises: [
              { question: "Ek basic HTML page banaye jisme aapka naam, class aur school ka naam ho.", difficulty: "easy" },
              { question: "HTML ki history par ek page banaye jisme saare versions ke baare mein likha ho.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-what-is",
              title: "HTML Introduction Quiz",
              questions: [
                {
                  id: "q1",
                  question: "HTML ka full form kya hai?",
                  options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "None of these"],
                  correctAnswer: 0,
                  explanation: "HTML ka full form HyperText Markup Language hai."
                },
                {
                  id: "q2",
                  question: "HTML ko kisne banaya tha?",
                  options: ["Bill Gates", "Tim Berners-Lee", "Guido van Rossum", "Brendan Eich"],
                  correctAnswer: 1,
                  explanation: "HTML ko Tim Berners-Lee ne 1991 mein banaya tha."
                },
                {
                  id: "q3",
                  question: "HTML file ki extension kya hoti hai?",
                  options: [".txt", ".html", ".js", ".css"],
                  correctAnswer: 1,
                  explanation: "HTML file ki extension .html hoti hai."
                },
                {
                  id: "q4",
                  question: "<!DOCTYPE html> declaration kahan likha jaata hai?",
                  options: ["Last line", "Middle", "First line", "Kahi bhi"],
                  correctAnswer: 2,
                  explanation: "DOCTYPE declaration sabse pehli line mein likha jaata hai."
                },
                {
                  id: "q5",
                  question: "HTML5 kab release hua tha?",
                  options: ["2010", "2012", "2014", "2016"],
                  correctAnswer: 2,
                  explanation: "HTML5 2014 mein officially release hua tha."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-document-structure",
          title: "HTML Document Structure",
          description: "HTML document ka structure samjhein",
          order: 2,
          content: {
            introduction: "Har HTML document ka ek specific structure hota hai. Is structure ko samajhna bahut important hai kyunki ye aapko organized aur clean code likhne mein madad karta hai.",
            sections: [
              {
                title: "DOCTYPE Declaration",
                explanation: "DOCTYPE declaration browser ko batata hai ki ye HTML5 document hai. Ye sabse pehli line mein likha jaata hai.",
                example: "<!DOCTYPE html> - Ye HTML5 ke liye standard declaration hai."
              },
              {
                title: "HTML Element",
                explanation: "<html> element sabse bada container hai jo pure HTML document ko wrap karta hai.",
                example: "<html lang=\"en\"> - English language ke liye"
              },
              {
                title: "Head Section",
                explanation: "<head> element mein page ke baare mein meta information hoti hai jo browser ko chahiye hoti hai. Ye content directly display nahi hota.",
                example: "<head> mein <title>, <meta>, <link> tags aate hain."
              },
              {
                title: "Body Section",
                explanation: "<body> element mein woh sab kuch aata hai jo browser mein display hota hai. Jaise headings, paragraphs, images, links, tables, forms etc.",
                example: "Jo bhi aapko website par dikhta hai, woh sab <body> ke andar aata hai."
              },
            ],
            codeExamples: [
              {
                title: "Complete HTML Document Structure",
                language: "html",
                code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document Structure</title>\n</head>\n<body>\n    <header>\n        <h1>Website Ka Naam</h1>\n    </header>\n    <main>\n        <p>Content yahan aayega.</p>\n    </main>\n</body>\n</html>",
                output: "Ye ek complete HTML page dikhayega jisme header aur main content hoga."
              },
            ],
            notes: [
              "DOCTYPE declaration mandatory hai",
              "<html> element root element hai",
              "<head> mein meta information hoti hai",
              "<body> mein visible content hota hai",
              "Proper indentation se code readable rehta hai"
            ],
            commonMistakes: [
              { mistake: "DOCTYPE declaration ko bhoolna ya galat jagah likhna", correction: "Hamesha sabse pehle line mein <!DOCTYPE html> likhein" },
              { mistake: "HTML structure mein nesting sahi se na karna", correction: "Elements ko properly nest karein - pehle kholo, baad mein band karo" },
            ],
            interviewQuestions: [
              "HTML document ka basic structure kya hota hai?",
              "Head aur body section mein kya antar hai?",
              "DOCTYPE declaration kyun zaroori hai?",
            ],
            practiceExercises: [
              { question: "Ek complete HTML document banaye jisme proper structure ho.", difficulty: "easy" },
            ],
            quiz: {
              id: "quiz-html-structure",
              title: "HTML Structure Quiz",
              questions: [
                {
                  id: "q1",
                  question: "HTML mein sabse important element kaunsa hai jo pure document ko wrap karta hai?",
                  options: ["<head>", "<body>", "<html>", "<title>"],
                  correctAnswer: 2,
                  explanation: "<html> element pure document ko wrap karta hai."
                },
                {
                  id: "q2",
                  question: "Meta information kahan rakhi jaati hai?",
                  options: ["<body>", "<head>", "<footer>", "<main>"],
                  correctAnswer: 1,
                  explanation: "Meta information <head> section mein rakhi jaati hai."
                },
                {
                  id: "q3",
                  question: "Visible content kahan likha jaata hai?",
                  options: ["<head>", "<title>", "<body>", "<meta>"],
                  correctAnswer: 2,
                  explanation: "Jo browser mein dikhta hai woh <body> mein hota hai."
                },
              ],
            },
          },
          duration: "20 min",
        },
        {
          id: "html-headings",
          title: "Headings aur Text Formatting",
          description: "HTML headings aur text formatting tags seekhein",
          order: 3,
          content: {
            introduction: "HTML mein headings aur text formatting tags content ko structure aur style dene ke liye use hote hain. Headings se aap topic headings bana sakte hain aur formatting se text ko bold, italic, underline kar sakte hain.",
            sections: [
              {
                title: "HTML Headings",
                explanation: "HTML mein 6 levels ke headings hote hain - h1 se lekar h6 tak. h1 sabse important aur bada hota hai, h6 sabse chhota. Headings se aap apne content ko hierarchically organize kar sakte hain.",
                example: "<h1>Main Heading</h1>, <h2>Sub Heading</h2>, <h3>Sub Sub Heading</h3>"
              },
              {
                title: "Text Formatting Tags",
                explanation: "HTML mein bahut se text formatting tags hain. <b> aur <strong> bold text ke liye, <i> aur <em> italic text ke liye, <u> underline ke liye, <mark> highlight ke liye use hota hai.",
                example: "<b>Bold Text</b>, <i>Italic Text</i>, <u>Underline Text</u>"
              },
              {
                title: "Paragraphs aur Line Breaks",
                explanation: "<p> tag paragraph banane ke liye use hota hai. Iske aage-piche automatic margin aata hai. <br> tag se line break hota hai - ye ek self-closing tag hai jiska closing tag nahi hota.",
                example: "<p>Ye ek paragraph hai.</p> <p>Ye doosra paragraph hai.</p> Text ke beech <br> line break dene ke liye."
              },
            ],
            codeExamples: [
              {
                title: "Headings Example",
                language: "html",
                code: "<h1>Main Heading (H1)</h1>\n<h2>Sub Heading (H2)</h2>\n<h3>Sub Sub Heading (H3)</h3>\n<h4>Heading Level 4 (H4)</h4>\n<h5>Heading Level 5 (H5)</h5>\n<h6>Heading Level 6 (H6)</h6>",
                output: "Ye 6 different sizes ke headings dikhayega."
              },
              {
                title: "Text Formatting Example",
                language: "html",
                code: "<p><b>Bold Text</b> - <strong>Strong Text</strong></p>\n<p><i>Italic Text</i> - <em>Emphasized Text</em></p>\n<p><u>Underlined Text</u> - <mark>Highlighted Text</mark></p>\n<p><small>Small Text</small> - <del>Deleted Text</del></p>",
                output: "Har formatting tag ka different style ka text dikhayega."
              },
            ],
            notes: [
              "H1 se lekar H6 tak headings hote hain",
              "H1 page mein ek baar use karna best practice hai",
              "Headings SEO ke liye important hain",
              "Paragraph automatically margin add karte hain",
              "<br> tag self-closing tag hai"
            ],
            commonMistakes: [
              { mistake: "Sirf styling ke liye headings ka use karna", correction: "Headings ka use structure ke liye karein, styling ke liye CSS use karein" },
              { mistake: "H1 multiple baar use karna", correction: "H1 sirf ek baar use karein page mein" },
            ],
            interviewQuestions: [
              "HTML mein kitne levels ke headings hote hain?",
              "H1 aur H2 mein kya difference hai?",
              "Self-closing tags kaunsa hain?",
            ],
            practiceExercises: [
              { question: "Ek page banaye jisme aapne 6 levels ke headings use kiye hon.", difficulty: "easy" },
              { question: "Ek paragraph likhein jisme bold, italic, underline aur highlighted text ho.", difficulty: "easy" },
            ],
            quiz: {
              id: "quiz-html-headings",
              title: "Headings Quiz",
              questions: [
                {
                  id: "q1",
                  question: "HTML mein sabse bada heading kaunsa hota hai?",
                  options: ["<h1>", "<h6>", "<h3>", "<h4>"],
                  correctAnswer: 0,
                  explanation: "H1 sabse bada aur important heading hota hai."
                },
                {
                  id: "q2",
                  question: "Line break ke liye kaunsa tag use hota hai?",
                  options: ["<br>", "<lb>", "<line>", "<break>"],
                  correctAnswer: 0,
                  explanation: "<br> tag line break ke liye use hota hai."
                },
                {
                  id: "q3",
                  question: "Text ko bold karne ke liye kaunsa tag use hota hai?",
                  options: ["<i>", "<b>", "<u>", "<small>"],
                  correctAnswer: 1,
                  explanation: "<b> ya <strong> tag bold text ke liye use hota hai."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-links",
          title: "Links aur Anchors",
          description: "HTML hyperlinks banana seekhein",
          order: 4,
          content: {
            introduction: "Hyperlinks internet ki soul hain. Ye ek page se doosre page, ya ek website se doosri website par jaane ka raasta provide karte hain. HTML mein <a> tag (anchor tag) se links banaye jate hain.",
            sections: [
              {
                title: "Anchor Tag Kya Hai?",
                explanation: "<a> tag ko anchor tag kehte hain. Ye hyperlink banane ke liye use hota hai. Iska href attribute batata hai ki link kahan le jayega. Link text ke beech jo content hota hai woh user ko dikhta hai.",
                example: "<a href=\"https://example.com\">Yahan Click Karein</a>"
              },
              {
                title: "Target Attribute",
                explanation: "Target attribute decide karta hai ki link kaise khulega. _self se same tab mein khulta hai (default), _blank se naye tab mein, _parent se parent frame mein, _top se full window mein.",
                example: "<a href=\"https://example.com\" target=\"_blank\">Naye Tab Mein Khulega</a>"
              },
              {
                title: "Relative vs Absolute URLs",
                explanation: "Absolute URL puri web address hoti hai jaise https://example.com/page. Relative URL sirf file ka path hoti hai jaise /about ya contact.html. Relative URLs same website ke pages link karne ke liye use hote hain.",
                example: "Absolute: <a href=\"https://google.com\">Google</a>, Relative: <a href=\"/about\">About</a>"
              },
            ],
            codeExamples: [
              {
                title: "Different Types of Links",
                language: "html",
                code: "<!-- External Link -->\n<a href=\"https://www.google.com\" target=\"_blank\">Google Par Jaayein</a>\n\n<!-- Internal Link -->\n<a href=\"/about.html\">About Page</a>\n\n<!-- Email Link -->\n<a href=\"mailto:test@example.com\">Email Karein</a>\n\n<!-- Phone Link -->\n<a href=\"tel:+911234567890\">Phone Karein</a>",
                output: "Ye alag-alag types ke links dikhayega."
              },
              {
                title: "Image as Link",
                language: "html",
                code: "<a href=\"https://example.com\">\n    <img src=\"image.jpg\" alt=\"Clickable Image\">\n</a>",
                output: "Image click karne par link open hogi."
              },
            ],
            notes: [
              "<a> tag href attribute ke saath use hota hai",
              "target=\"_blank\" se link naye tab mein khulta hai",
              "mailto: email links ke liye use hota hai",
              "tel: phone links ke liye use hota hai",
              "Relative URLs same website mein use hote hain"
            ],
            commonMistakes: [
              { mistake: "Href attribute bhoolna", correction: "Har <a> tag mein href attribute dena na bhoolen" },
              { mistake: "External links mein target=\"_blank\" na dena", correction: "External links ke liye target=\"_blank\" use karein taaki user ki site na chhute" },
            ],
            interviewQuestions: [
              "Anchor tag mein href attribute kya karta hai?",
              "target=\"_blank\" aur target=\"_self\" mein kya antar hai?",
              "Relative aur Absolute URL mein kya difference hai?",
            ],
            practiceExercises: [
              { question: "Ek page banaye jisme 5 different types ke links hon - external, internal, email, phone aur image link.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-links",
              title: "Links Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Link banane ke liye kaunsa tag use hota hai?",
                  options: ["<link>", "<a>", "<href>", "<url>"],
                  correctAnswer: 1,
                  explanation: "<a> tag (anchor) hyperlink banane ke liye use hota hai."
                },
                {
                  id: "q2",
                  question: "Naye tab mein link khole ke liye kaunsa attribute use hota hai?",
                  options: ["target=\"_self\"", "target=\"_blank\"", "target=\"_new\"", "target=\"_tab\""],
                  correctAnswer: 1,
                  explanation: "target=\"_blank\" se link naye tab mein khulta hai."
                },
                {
                  id: "q3",
                  question: "Email link banane ke liye href mein kya use hota hai?",
                  options: ["email:", "mail:", "mailto:", "to:"],
                  correctAnswer: 2,
                  explanation: "mailto: se email links bante hain."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-images",
          title: "Images aur Multimedia",
          description: "HTML mein images aur media elements ka use seekhein",
          order: 5,
          content: {
            introduction: "Images web pages ko attractive aur informative banate hain. HTML mein <img> tag se images add ki jati hain. Ye self-closing tag hai jiska closing tag nahi hota.",
            sections: [
              {
                title: "Image Tag Kya Hai?",
                explanation: "<img> tag images display karne ke liye use hota hai. Iske do mandatory attributes hain - src (source) jo image ka path batata hai, aur alt (alternative text) jo image load na hone par dikhta hai aur accessibility ke liye important hai.",
                example: "<img src=\"photo.jpg\" alt=\"Ek khubsurat photo\">"
              },
              {
                title: "Image Attributes",
                explanation: "Width aur height attributes se image ka size set kar sakte hain. Title attribute se tooltip add kar sakte hain. Loading attribute (lazy/ eager) se performance optimize kar sakte hain.",
                example: "<img src=\"photo.jpg\" alt=\"Photo\" width=\"300\" height=\"200\" loading=\"lazy\">"
              },
              {
                title: "Image Formats",
                explanation: "Common image formats hain: JPEG (photos ke liye), PNG (transparency support), GIF (animations), SVG (scalable graphics), WebP (modern compressed format).",
                example: "JPEG: photos ke liye, PNG: icons/ logos ke liye, SVG: responsive graphics ke liye"
              },
            ],
            codeExamples: [
              {
                title: "Basic Image",
                language: "html",
                code: "<img src=\"https://via.placeholder.com/300\" alt=\"Placeholder Image\" width=\"300\" height=\"200\">",
                output: "Ye ek 300x200 size ki image dikhayega."
              },
              {
                title: "Figure with Caption",
                language: "html",
                code: "<figure>\n    <img src=\"nature.jpg\" alt=\"Beautiful Nature\">\n    <figcaption>Yeh ek khubsurat nature ki photo hai</figcaption>\n</figure>",
                output: "Image ke saath caption bhi dikhega."
              },
            ],
            notes: [
              "<img> tag self-closing tag hai",
              "Alt attribute accessibility ke liye zaroori hai",
              "Width aur height se layout shift prevent hota hai",
              "WebP format best compression deta hai",
              "Lazy loading se page speed improve hoti hai"
            ],
            commonMistakes: [
              { mistake: "Alt attribute bhoolna", correction: "Hamesha alt attribute add karein for accessibility" },
              { mistake: "Large images bina compress kare use karna", correction: "Images ko compress karke use karein for better performance" },
            ],
            interviewQuestions: [
              "Img tag ke mandatory attributes kaun se hain?",
              "Alt text kyun important hai?",
              "Lazy loading kya hai aur kaise kaam karta hai?",
            ],
            practiceExercises: [
              { question: "Ek page banaye jisme 3 images hon with figure aur figcaption.", difficulty: "easy" },
            ],
            quiz: {
              id: "quiz-html-images",
              title: "Images Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Image add karne ke liye kaunsa tag use hota hai?",
                  options: ["<image>", "<img>", "<pic>", "<src>"],
                  correctAnswer: 1,
                  explanation: "<img> tag images ke liye use hota hai."
                },
                {
                  id: "q2",
                  question: "Image ka source batane ke liye kaunsa attribute use hota hai?",
                  options: ["href", "src", "source", "link"],
                  correctAnswer: 1,
                  explanation: "src attribute image ka path batata hai."
                },
                {
                  id: "q3",
                  question: "Accessibility ke liye kaunsa attribute important hai?",
                  options: ["title", "alt", "name", "id"],
                  correctAnswer: 1,
                  explanation: "Alt attribute accessibility ke liye important hai."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-lists",
          title: "Lists in HTML",
          description: "Ordered, unordered aur definition lists seekhein",
          order: 6,
          content: {
            introduction: "Lists web pages mein information ko organize karne ka ek powerful way hai. HTML mein teen types ki lists hoti hain - Ordered Lists (<ol>), Unordered Lists (<ul>), aur Definition Lists (<dl>).",
            sections: [
              {
                title: "Unordered List",
                explanation: "Unordered list (<ul>) bullet points ke saath list banane ke liye use hoti hai. Har item <li> tag mein likha jaata hai. CSS se bullet style change kar sakte hain.",
                example: "<ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>"
              },
              {
                title: "Ordered List",
                explanation: "Ordered list (<ol>) numbered list banane ke liye use hoti hai. Type attribute se number style change kar sakte hain - 1, A, a, I, i.",
                example: "<ol type=\"A\"><li>Pehla</li><li>Doosra</li><li>Tehra</li></ol>"
              },
              {
                title: "Nested Lists",
                explanation: "Lists ke andar doosri list bana sakte hain. Isse multi-level lists bante hain jaise menu structure mein use hota hai.",
                example: "<ul><li>Fruits<ul><li>Apple</li><li>Banana</li></ul></li></ul>"
              },
            ],
            codeExamples: [
              {
                title: "Types of Lists",
                language: "html",
                code: "<!-- Unordered List -->\n<ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n</ul>\n\n<!-- Ordered List -->\n<ol>\n    <li>Pehla Step</li>\n    <li>Doosra Step</li>\n    <li>Tehra Step</li>\n</ol>\n\n<!-- Definition List -->\n<dl>\n    <dt>HTML</dt>\n    <dd>HyperText Markup Language</dd>\n    <dt>CSS</dt>\n    <dd>Cascading Style Sheets</dd>\n</dl>",
                output: "Teen different types ki lists dikhayega."
              },
            ],
            notes: [
              "<ul> unordered list ke liye",
              "<ol> ordered list ke liye",
              "<li> list item ke liye",
              "Lists ko nest kar sakte hain",
              "<dl> definition list ke liye"
            ],
            commonMistakes: [
              { mistake: "<li> tag ko <ul>/<ol> ke bahar use karna", correction: "<li> hamesha <ul> ya <ol> ke andar use karein" },
              { mistake: "Nested list ko sahi se na close karna", correction: "Nested lists ko properly close karein" },
            ],
            interviewQuestions: [
              "HTML mein kitne types ki lists hain?",
              "Ordered aur unordered list mein kya antar hai?",
              "Definition list mein <dt> aur <dd> kya represent karte hain?",
            ],
            practiceExercises: [
              { question: "Apni daily routine ki ordered list aur favourite items ki unordered list banaye.", difficulty: "easy" },
              { question: "Ek nested list banaye jisme categories aur sub-categories hon.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-lists",
              title: "Lists Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Unordered list ke liye kaunsa tag use hota hai?",
                  options: ["<ol>", "<ul>", "<li>", "<list>"],
                  correctAnswer: 1,
                  explanation: "<ul> unordered list ke liye use hota hai."
                },
                {
                  id: "q2",
                  question: "List item ke liye kaunsa tag use hota hai?",
                  options: ["<item>", "<li>", "<el>", "<i>"],
                  correctAnswer: 1,
                  explanation: "<li> tag list item ke liye use hota hai."
                },
                {
                  id: "q3",
                  question: "Ordered list mein default numbering kaunsa hota hai?",
                  options: ["1, 2, 3", "A, B, C", "a, b, c", "I, II, III"],
                  correctAnswer: 0,
                  explanation: "Ordered list mein default numbering 1, 2, 3 hoti hai."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-tables",
          title: "Tables in HTML",
          description: "HTML tables banana seekhein",
          order: 7,
          content: {
            introduction: "Tables ka use tabular data display karne ke liye hota hai. HTML tables rows aur columns mein data organize karte hain. Ye complex data ko structured way mein present karne ke liye useful hain.",
            sections: [
              {
                title: "Table Structure",
                explanation: "Table banane ke liye <table> tag use hota hai. <tr> se row, <th> se header cell, aur <td> se data cell banate hain. <thead>, <tbody>, <tfoot> se table ko semantic parts mein divide kar sakte hain.",
                example: "<table><tr><th>Name</th><th>Age</th></tr><tr><td>Rahul</td><td>20</td></tr></table>"
              },
              {
                title: "Table Attributes",
                explanation: "Border attribute se table ki border set karte hain. Cellpadding aur cellspacing se cells ke andar aur bahar ka space control karte hain. Colspan aur rowspan se multiple columns ya rows merge kar sakte hain.",
                example: "<td colspan=\"2\">Two Columns Merge</td>"
              },
              {
                title: "Styling Tables",
                explanation: "CSS se tables ko attractive bana sakte hain. Border-collapse property se double border hatate hain. Alternating row colors se readability improve hoti hai. Hover effect se interactive feel aata hai.",
                example: "CSS: table { border-collapse: collapse; } td { padding: 10px; }"
              },
            ],
            codeExamples: [
              {
                title: "Basic Table",
                language: "html",
                code: "<table border=\"1\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Age</th>\n            <th>City</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Rahul</td>\n            <td>20</td>\n            <td>Delhi</td>\n        </tr>\n        <tr>\n            <td>Priya</td>\n            <td>22</td>\n            <td>Mumbai</td>\n        </tr>\n    </tbody>\n</table>",
                output: "Ye ek table dikhayega jisme 3 columns aur 2 rows hain."
              },
            ],
            notes: [
              "<table> table banane ke liye",
              "<tr> table row ke liye",
              "<th> table header ke liye",
              "<td> table data ke liye",
              "Colspan aur rowspan se merge kar sakte hain"
            ],
            commonMistakes: [
              { mistake: "Table layout ke liye use karna jo ki responsive nahi hota", correction: "Layout ke liye CSS Grid ya Flexbox use karein" },
              { mistake: "Scope attribute na dena", correction: "Accessibility ke liye <th> mein scope attribute dena" },
            ],
            interviewQuestions: [
              "Table ke main tags kaun se hain?",
              "Colspan aur rowspan kya karte hain?",
              "Thead, tbody aur tfoot kyun use karte hain?",
            ],
            practiceExercises: [
              { question: "Apne class ka timetable ek HTML table mein banaye.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-tables",
              title: "Tables Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Table data cell ke liye kaunsa tag use hota hai?",
                  options: ["<tc>", "<td>", "<th>", "<tr>"],
                  correctAnswer: 1,
                  explanation: "<td> table data cell ke liye use hota hai."
                },
                {
                  id: "q2",
                  question: "Multiple columns merge karne ke liye kaunsa attribute use hota hai?",
                  options: ["colspan", "rowspan", "merge", "span"],
                  correctAnswer: 0,
                  explanation: "Colspan attribute multiple columns merge karta hai."
                },
                {
                  id: "q3",
                  question: "Table header cell ke liye kaunsa tag use hota hai?",
                  options: ["<td>", "<th>", "<header>", "<h>"],
                  correctAnswer: 1,
                  explanation: "<th> tag table header ke liye use hota hai."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-forms",
          title: "Forms aur Input Elements",
          description: "HTML forms aur input types seekhein",
          order: 8,
          content: {
            introduction: "Forms web development ka ek important hissa hain. Forms ke through users data submit kar sakte hain - jaise login form, registration form, search form, contact form etc.",
            sections: [
              {
                title: "Form Element",
                explanation: "<form> tag se form banate hain. Iske action attribute mein data kahan jayega aur method attribute mein kaise jayega (GET ya POST) batate hain.",
                example: "<form action=\"/submit\" method=\"POST\">...</form>"
              },
              {
                title: "Input Types",
                explanation: "<input> tag ke type attribute se different types ke input fields bana sakte hain - text, email, password, number, date, radio, checkbox, file, submit, button, etc.",
                example: "<input type=\"text\">, <input type=\"email\">, <input type=\"password\">"
              },
              {
                title: "Labels aur Placeholders",
                explanation: "<label> tag form fields ke saath label associate karta hai. Isse accessibility improve hoti hai. Placeholder attribute input field mein hint text dikhata hai jo click karne par gayab ho jata hai.",
                example: "<label for=\"name\">Name:</label><input type=\"text\" id=\"name\" placeholder=\"Apna naam likhein\">"
              },
            ],
            codeExamples: [
              {
                title: "Registration Form",
                language: "html",
                code: "<form action=\"/register\" method=\"POST\">\n    <label for=\"name\">Naam:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required>\n\n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" id=\"password\" name=\"password\" required>\n\n    <label>Gender:</label>\n    <input type=\"radio\" name=\"gender\" value=\"male\"> Male\n    <input type=\"radio\" name=\"gender\" value=\"female\"> Female\n\n    <button type=\"submit\">Register</button>\n</form>",
                output: "Ye ek registration form dikhayega jisme name, email, password aur gender fields hain."
              },
            ],
            notes: [
              "Form mein action aur method attributes important hain",
              "Label tag accessibility improve karta hai",
              "Required attribute validation ke liye",
              "Input ke type attribute se field type decide hota hai",
              "Name attribute data submit karne ke liye zaroori hai"
            ],
            commonMistakes: [
              { mistake: "Form fields ko label se connect na karna", correction: "Label ko input ke saath for attribute se connect karein" },
              { mistake: "Name attribute bhoolna", correction: "Har input field mein name attribute dena na bhoolen" },
            ],
            interviewQuestions: [
              "Form ke action aur method attributes kya karte hain?",
              "GET aur POST method mein kya antar hai?",
              "Required validation kya hai?",
            ],
            practiceExercises: [
              { question: "Ek login form banaye jisme email, password aur submit button ho.", difficulty: "easy" },
              { question: "Ek complete registration form banaye jisme 10+ different input types hon.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-forms",
              title: "Forms Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Form ke data kahan bhejna hai ye batane wala attribute kaunsa hai?",
                  options: ["method", "action", "target", "href"],
                  correctAnswer: 1,
                  explanation: "Action attribute data bhejne ka URL batata hai."
                },
                {
                  id: "q2",
                  question: "Password field ke liye kaunsa input type use hota hai?",
                  options: ["text", "password", "secret", "hidden"],
                  correctAnswer: 1,
                  explanation: "Input type=\"password\" se password field banta hai."
                },
                {
                  id: "q3",
                  question: "Label ko input ke saath connect karne ke liye kaunsa attribute use hota hai?",
                  options: ["id", "name", "for", "class"],
                  correctAnswer: 2,
                  explanation: "Label ka for attribute input ke id ke saath connect karta hai."
                },
              ],
            },
          },
          duration: "20 min",
        },
      ],
    },
    {
      id: "html-advanced",
      title: "HTML Advanced Concepts",
      description: "Semantic HTML, multimedia, aur advanced HTML topics",
      order: 2,
      lessons: [
        {
          id: "html-semantic",
          title: "Semantic HTML",
          description: "Semantic HTML tags aur unka importance samjhein",
          order: 1,
          content: {
            introduction: "Semantic HTML ka matlab hai meaningful tags ka use karna jo content ke purpose ko describe karte hain. Jaise <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>. Ye tags browser aur search engines ko content ka structure samajhne mein madad karte hain.",
            sections: [
              {
                title: "Semantic Tags Kya Hain?",
                explanation: "Semantic tags woh tags hain jo apne name se hi bata dete hain ki unme kya content hoga. Jaise <nav> navigation ke liye, <article> article ke liye. Isse code readable aur maintainable banta hai.",
                example: "<nav>Menu links yahan aate hain</nav>, <article>Article content yahan aata hai</article>"
              },
              {
                title: "Non-Semantic vs Semantic",
                explanation: "Pehle log <div> tags se sab kuch banate the jisme code samajhna mushkil hota tha. Semantic HTML se code clear aur structured banta hai. Isse SEO bhi improve hota hai.",
                example: "<div class=\"header\"> vs <header> - Dono same dikhte hain but semantic tag zyada meaningful hai."
              },
              {
                title: "Important Semantic Tags",
                explanation: "<header> - top section, <nav> - navigation links, <main> - main content, <article> - self-contained content, <section> - related content group, <aside> - sidebar, <footer> - bottom section. <figure> aur <figcaption> images ke liye.",
                example: "Ek typical page: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>"
              },
            ],
            codeExamples: [
              {
                title: "Semantic HTML Page",
                language: "html",
                code: "<!DOCTYPE html>\n<html>\n<body>\n    <header>\n        <h1>My Website</h1>\n        <nav>\n            <a href=\"/\">Home</a>\n            <a href=\"/about\">About</a>\n        </nav>\n    </header>\n    <main>\n        <article>\n            <h2>Article Title</h2>\n            <section>\n                <h3>Section 1</h3>\n                <p>Content of section 1</p>\n            </section>\n        </article>\n        <aside>\n            <p>Related links</p>\n        </aside>\n    </main>\n    <footer>\n        <p>&copy; 2024 My Website</p>\n    </footer>\n</body>\n</html>",
                output: "Ye ek semantic HTML page hai jo proper structure follow karta hai."
              },
            ],
            notes: [
              "Semantic tags content ke purpose ko describe karte hain",
              "SEO ke liye semantic HTML important hai",
              "Accessibility improve hoti hai semantic tags se",
              "Code readable aur maintainable banta hai",
              "<div> aur <span> non-semantic tags hain"
            ],
            commonMistakes: [
              { mistake: "Sab kuch <div> mein daal dena", correction: "Jahan possible ho semantic tags use karein" },
              { mistake: "Semantic tags ka galat use - jaise <nav> mein non-links rakhna", correction: "Har semantic tag apne appropriate use case ke liye use karein" },
            ],
            interviewQuestions: [
              "Semantic HTML kya hai?",
              "Semantic aur non-semantic tags mein kya antar hai?",
              "SEO ke liye semantic HTML kyun important hai?",
            ],
            practiceExercises: [
              { question: "Ek semantic HTML page banaye jisme proper structure ho - header, nav, main, article, section, aside, footer.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-semantic",
              title: "Semantic HTML Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Navigation ke liye kaunsa semantic tag use hota hai?",
                  options: ["<menu>", "<nav>", "<links>", "<navigation>"],
                  correctAnswer: 1,
                  explanation: "<nav> tag navigation ke liye use hota hai."
                },
                {
                  id: "q2",
                  question: "Non-semantic tag kaunsa hai?",
                  options: ["<article>", "<section>", "<div>", "<header>"],
                  correctAnswer: 2,
                  explanation: "<div> non-semantic tag hai kyunki ye content ke baare mein kuch nahi batata."
                },
                {
                  id: "q3",
                  question: "Self-contained content ke liye kaunsa tag use hota hai?",
                  options: ["<section>", "<article>", "<div>", "<main>"],
                  correctAnswer: 1,
                  explanation: "<article> tag self-contained content ke liye use hota hai."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-audio-video",
          title: "Audio aur Video",
          description: "HTML5 audio aur video elements seekhein",
          order: 2,
          content: {
            introduction: "HTML5 mein audio aur video elements aaye jisse bina kisi third-party plugin (jaise Flash) ke media files directly browser mein play kar sakte hain. Ye elements bahut powerful hain aur multiple formats support karte hain.",
            sections: [
              {
                title: "Audio Element",
                explanation: "<audio> tag se audio files play karte hain. Controls attribute se play/ pause/ volume controls aate hain. Autoplay se page load hote hi play hota hai. Loop se repeat hota hai.",
                example: "<audio controls> <source src=\"song.mp3\" type=\"audio/mpeg\"> </audio>"
              },
              {
                title: "Video Element",
                explanation: "<video> tag se video files play karte hain. Isme width aur height set kar sakte hain. Poster attribute se video play karne se pehle thumbnail show kar sakte hain. Source tag se multiple formats provide kar sakte hain.",
                example: "<video width=\"320\" height=\"240\" controls> <source src=\"video.mp4\" type=\"video/mp4\"> </video>"
              },
            ],
            codeExamples: [
              {
                title: "Audio Player",
                language: "html",
                code: "<audio controls>\n    <source src=\"music.mp3\" type=\"audio/mpeg\">\n    <source src=\"music.ogg\" type=\"audio/ogg\">\n    Aapka browser audio element support nahi karta.\n</audio>",
                output: "Ye ek audio player dikhayega jisme play, pause, volume controls hain."
              },
              {
                title: "Video Player",
                language: "html",
                code: "<video width=\"400\" controls poster=\"thumbnail.jpg\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <track src=\"subtitles.vtt\" kind=\"subtitles\" srclang=\"hi\" label=\"Hindi\">\n    Aapka browser video element support nahi karta.\n</video>",
                output: "Ye ek video player dikhayega with controls aur subtitles support."
              },
            ],
            notes: [
              "Audio aur video HTML5 elements hain",
              "Multiple source formats provide karein for browser compatibility",
              "Controls attribute users ko control deta hai",
              "Poster attribute video ke thumbnail ke liye",
              "Track tag subtitles ke liye use hota hai"
            ],
            commonMistakes: [
              { mistake: "Sirf ek format ka source dena", correction: "Multiple formats (mp4, webm, ogg) provide karein" },
              { mistake: "Autoplay attribute use karna bina muted attribute ke", correction: "Autoplay chahiye to muted attribute bhi use karein" },
            ],
            interviewQuestions: [
              "HTML5 audio aur video elements kya hain?",
              "Multiple source formats kyun provide karte hain?",
              "Track tag kya karta hai?",
            ],
            practiceExercises: [
              { question: "Ek page banaye jisme audio player aur video player ho with multiple source formats.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-media",
              title: "Audio Video Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Audio ke liye kaunsa HTML5 element use hota hai?",
                  options: ["<audio>", "<sound>", "<music>", "<media>"],
                  correctAnswer: 0,
                  explanation: "<audio> element audio ke liye use hota hai."
                },
                {
                  id: "q2",
                  question: "Video ke thumbnail ke liye kaunsa attribute use hota hai?",
                  options: ["thumbnail", "poster", "preview", "image"],
                  correctAnswer: 1,
                  explanation: "Poster attribute video ka thumbnail show karta hai."
                },
                {
                  id: "q3",
                  question: "Subtitles ke liye kaunsa tag use hota hai?",
                  options: ["<sub>", "<track>", "<caption>", "<text>"],
                  correctAnswer: 1,
                  explanation: "<track> tag subtitles ke liye use hota hai."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-seo",
          title: "SEO Basics in HTML",
          description: "HTML ke saath SEO basics samjhein",
          order: 3,
          content: {
            introduction: "SEO (Search Engine Optimization) ka matlab hai apni website ko search engines ke liye optimize karna. HTML mein kuch specific tags aur attributes hain jo SEO improve karte hain. Isse aapki website Google ya Bing mein top par aa sakti hai.",
            sections: [
              {
                title: "Meta Tags for SEO",
                explanation: "Meta tags search engines ko page ke baare mein information dete hain. Title tag page ka title batata hai. Meta description tag search result mein description dikhata hai. Meta keywords tag keywords list karta hai (ab utna important nahi).",
                example: "<meta name=\"description\" content=\"Free HTML course in Roman English\">"
              },
              {
                title: "Heading Tags aur SEO",
                explanation: "Proper heading structure SEO ke liye important hai. H1 tag page ka main topic batata hai. H2, H3 etc sub-topics organize karte hain. Search engines headings ko important signal consider karte hain.",
                example: "<h1>Learn HTML</h1> - Page ka main topic, sirf ek baar use karein."
              },
              {
                title: "Image Alt Text aur SEO",
                explanation: "Alt text search engines ko batata hai ki image mein kya hai. Isse image search mein ranking improve hoti hai. Alt text descriptive aur keyword-rich hona chahiye.",
                example: "Good: <img src=\"html-logo.png\" alt=\"HTML5 logo with code\">"
              },
            ],
            codeExamples: [
              {
                title: "SEO Optimized HTML",
                language: "html",
                code: "<!DOCTYPE html>\n<html lang=\"hi\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML Course - Roman English mein Seekhein</title>\n    <meta name=\"description\" content=\"HTML course in Roman English. Aasan bhasha mein HTML seekhein.\">\n    <meta name=\"keywords\" content=\"HTML, web development, Roman English, course\">\n    <meta name=\"author\" content=\"CodeDuniya\">\n</head>\n<body>\n    <h1>HTML Course - CodeDuniya</h1>\n    <img src=\"html-banner.jpg\" alt=\"HTML coding banner with examples\">\n</body>\n</html>",
                output: "Ye SEO optimized HTML page hai."
              },
            ],
            notes: [
              "Title tag SEO ke liye most important meta tag hai",
              "Meta description search result mein dikhta hai",
              "Heading structure proper hona chahiye",
              "Alt text images ke liye important hai",
              "Meta viewport mobile optimization ke liye hai"
            ],
            commonMistakes: [
              { mistake: "Duplicate title ya description use karna", correction: "Har page ka unique title aur description hona chahiye" },
              { mistake: "Alt text mein keyword stuffing karna", correction: "Alt text natural aur descriptive hona chahiye" },
            ],
            interviewQuestions: [
              "SEO kya hai aur kyun important hai?",
              "Meta tags SEO mein kaise help karte hain?",
              "Alt text SEO ke liye kyun important hai?",
            ],
            practiceExercises: [
              { question: "Ek SEO optimized HTML page banaye jisme proper meta tags, headings aur image alt text ho.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-seo",
              title: "SEO Quiz",
              questions: [
                {
                  id: "q1",
                  question: "SEO mein sabse important meta tag kaunsa hai?",
                  options: ["meta keywords", "meta description", "title", "meta author"],
                  correctAnswer: 2,
                  explanation: "Title tag SEO mein sabse important hai."
                },
                {
                  id: "q2",
                  question: "Search result mein description dikhane ke liye kaunsa tag use hota hai?",
                  options: ["meta title", "meta description", "meta keywords", "meta content"],
                  correctAnswer: 1,
                  explanation: "Meta description tag search result mein description dikhata hai."
                },
                {
                  id: "q3",
                  question: "Page mein H1 tag kitni baar use karna chahiye?",
                  options: ["Jitni baar chahein", "Ek baar", "Do baar", "Teen baar"],
                  correctAnswer: 1,
                  explanation: "H1 page mein sirf ek baar use karna best practice hai."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-entities",
          title: "HTML Entities aur Special Characters",
          description: "HTML entities aur symbols ka use seekhein",
          order: 4,
          content: {
            introduction: "HTML entities special characters ko display karne ke liye use hote hain jo direct type nahi kiye ja sakte. Jaise <, >, &, copyright symbol, aur bhi bahut se symbols HTML entities ke through display kiye jate hain.",
            sections: [
              {
                title: "HTML Entities Kya Hain?",
                explanation: "HTML entities & (ampersand) se start hote hain aur semicolon (;) se khatam hote hain. Ye reserved characters ya special symbols ko display karte hain jaise &lt; for <, &gt; for >, &amp; for &, &copy; for copyright.",
                example: "&amp; - ampersand, &lt; - less than, &gt; - greater than, &copy; - copyright"
              },
              {
                title: "Commonly Used Entities",
                explanation: "&nbsp; - non-breaking space, &quot; - double quote, &apos; - apostrophe, &pound; - pound symbol, &euro; - euro symbol, &#9829; - heart symbol. Numeric entities bhi use kar sakte hain jaise &#60; for <.",
                example: "&copy; 2024 CodeDuniya. &hearts; Learning with love."
              },
            ],
            codeExamples: [
              {
                title: "HTML Entities Examples",
                language: "html",
                code: "<p>Copyright &copy; 2024 CodeDuniya</p>\n<p>Trademark &reg; Reserved</p>\n<p>Euro symbol: &euro;100</p>\n<p>Heart: &hearts; &diams; &spades; &clubs;</p>\n<p>HTML tags: &lt;h1&gt;Heading&lt;/h1&gt;</p>",
                output: "Ye different HTML entities ko display karega."
              },
            ],
            notes: [
              "Entities & se shuru aur ; se khatam hote hain",
              "Reserved characters ke liye entities use karein",
              "Numeric entities bhi use kar sakte hain (&#code;)",
              "Non-breaking space (&nbsp;) multiple spaces ke liye",
              "Entities case-sensitive hote hain"
            ],
            commonMistakes: [
              { mistake: "& ko bina entity ke direct use karna (jaise AT&T)", correction: "& ke liye &amp; entity use karein" },
              { mistake: "Semicolon bhoolna", correction: "Har entity ke end mein semicolon lagana na bhoolen" },
            ],
            interviewQuestions: [
              "HTML entities kya hain?",
              "Reserved characters kaunsa hain HTML mein?",
              "Numeric aur named entities mein kya antar hai?",
            ],
            practiceExercises: [
              { question: "Ek page banaye jisme copyright, trademark, euro, heart aur arrow symbols display ho.", difficulty: "easy" },
            ],
            quiz: {
              id: "quiz-html-entities",
              title: "HTML Entities Quiz",
              questions: [
                {
                  id: "q1",
                  question: "HTML mein < symbol ke liye kaunsi entity use hoti hai?",
                  options: ["&lt;", "&gt;", "&amp;", "&copy;"],
                  correctAnswer: 0,
                  explanation: "&lt; less than symbol (<) ke liye use hoti hai."
                },
                {
                  id: "q2",
                  question: "Non-breaking space ke liye kaunsi entity use hoti hai?",
                  options: ["&space;", "&nbsp;", "&nbs;", "&br;"],
                  correctAnswer: 1,
                  explanation: "&nbsp; non-breaking space ke liye use hoti hai."
                },
                {
                  id: "q3",
                  question: "Copyright symbol ke liye kaunsi entity use hoti hai?",
                  options: ["&copy;", "&reg;", "&trade;", "&cpr;"],
                  correctAnswer: 0,
                  explanation: "&copy; copyright symbol ke liye use hoti hai."
                },
              ],
            },
          },
          duration: "10 min",
        },
        {
          id: "html-html5-api",
          title: "HTML5 APIs",
          description: "HTML5 mein available naye APIs ke baare mein jaanein",
          order: 5,
          content: {
            introduction: "HTML5 mein bahut si naye APIs aayi hain jo web developers ko powerful features deti hain. Jaise Local Storage, Geolocation, Drag and Drop, Canvas, Web Workers, aur bahut kuch. Ye APIs bina kisi third-party library ke kaam karti hain.",
            sections: [
              {
                title: "Local Storage API",
                explanation: "Local Storage browser mein data store karne ki facility deta hai. Data tab tak stored rehta hai jab tak user manually clear na kare. Key-value pairs mein data store hota hai. setItem() se save, getItem() se read, removeItem() se delete karte hain.",
                example: "localStorage.setItem('name', 'Rahul'); localStorage.getItem('name');"
              },
              {
                title: "Geolocation API",
                explanation: "Geolocation API user ka location pata karti hai (user permission se). Isse location-based services bana sakte hain jaise nearby restaurants, weather apps. navigator.geolocation.getCurrentPosition() se current location pata karte hain.",
                example: "navigator.geolocation.getCurrentPosition((pos) => { console.log(pos.coords); })"
              },
              {
                title: "Drag and Drop API",
                explanation: "Drag and Drop API se elements ko drag karke drop kar sakte hain. Isse interactive UIs bana sakte hain jaise file upload, to-do lists, games. dragstart, dragover, drop events par kaam karta hai.",
                example: "<div draggable=\"true\">Drag me!</div>"
              },
            ],
            codeExamples: [
              {
                title: "Local Storage Example",
                language: "html",
                code: "<script>\n// Data save karein\nlocalStorage.setItem('username', 'rahul123');\n\n// Data read karein\nconst user = localStorage.getItem('username');\nconsole.log(user); // 'rahul123'\n\n// Data delete karein\nlocalStorage.removeItem('username');\n\n// Saara data clear karein\nlocalStorage.clear();\n</script>",
                output: "Ye local storage mein data save, read, aur delete karega."
              },
            ],
            notes: [
              "Local Storage mein data persistent rehta hai",
              "Session Storage tab close hone par delete hota hai",
              "Geolocation ke liye user permission chahiye",
              "Canvas 2D graphics draw karne ke liye",
              "HTML5 APIs cross-browser compatible hain"
            ],
            commonMistakes: [
              { mistake: "Local Storage mein sensitive data store karna", correction: "Passwords jaise sensitive data localStorage mein store na karein" },
              { mistake: "Geolocation ko bina error handling ke use karna", correction: "Hamesha error callback bhi provide karein" },
            ],
            interviewQuestions: [
              "HTML5 mein kaun si important APIs aayi hain?",
              "Local Storage aur Session Storage mein kya antar hai?",
              "Geolocation API kaise kaam karta hai?",
            ],
            practiceExercises: [
              { question: "Ek page banaye jo Local Storage mein visitor count store kare aur display kare.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html5-api",
              title: "HTML5 APIs Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Local Storage mein data set karne ke liye kaunsa method use hota hai?",
                  options: ["setData()", "setItem()", "store()", "save()"],
                  correctAnswer: 1,
                  explanation: "setItem() method se data set karte hain."
                },
                {
                  id: "q2",
                  question: "User ka location pata karne ke liye kaunsi API use hoti hai?",
                  options: ["Location API", "Geolocation API", "Maps API", "GPS API"],
                  correctAnswer: 1,
                  explanation: "Geolocation API user ka location pata karti hai."
                },
                {
                  id: "q3",
                  question: "Session Storage ka data kab delete hota hai?",
                  options: ["Kabhi nahi", "Browser restart karne par", "Tab close karne par", "Computer restart karne par"],
                  correctAnswer: 2,
                  explanation: "Session Storage tab close hone par delete ho jata hai."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-forms-advanced",
          title: "Advanced Forms aur Validation",
          description: "Advanced form elements aur validation seekhein",
          order: 6,
          content: {
            introduction: "HTML5 mein bahut se naye form elements aur validation features aaye hain jo form creation ko easy aur powerful banate hain. Ab bina JavaScript ke bhi form validation kar sakte hain.",
            sections: [
              {
                title: "HTML5 Form Elements",
                explanation: "HTML5 mein naye input types aaye - color, date, time, datetime-local, month, week, range, search, tel, url. Iske alawa naye elements - <datalist>, <output>, <progress>, <meter> bhi hain.",
                example: "<input type=\"color\"> - color picker, <input type=\"range\"> - slider"
              },
              {
                title: "Form Validation",
                explanation: "HTML5 mein built-in validation hoti hai. Required attribute mandatory field ke liye. Pattern attribute se regex validation. Min, max, minlength, maxlength se constraints set kar sakte hain.",
                example: "<input type=\"text\" pattern=\"[A-Za-z]{3,}\" title=\"Sirf letters aur minimum 3 characters\">"
              },
              {
                title: "Datalist Element",
                explanation: "<datalist> tag input field ke liye pre-defined options provide karta hai, lekin user apna custom value bhi type kar sakta hai. Ye <select> se different hai kyunki isme user custom value daal sakta hai.",
                example: "<input list=\"countries\"><datalist id=\"countries\"><option value=\"India\"><option value=\"USA\"></datalist>"
              },
            ],
            codeExamples: [
              {
                title: "Advanced Form with Validation",
                language: "html",
                code: "<form>\n    <label>Username (min 3 letters):</label>\n    <input type=\"text\" pattern=\"[A-Za-z]{3,}\" required title=\"Kam se kam 3 letters\">\n\n    <label>Age (18-60):</label>\n    <input type=\"number\" min=\"18\" max=\"60\" required>\n\n    <label>Color:</label>\n    <input type=\"color\">\n\n    <label>Country:</label>\n    <input list=\"countries\">\n    <datalist id=\"countries\">\n        <option value=\"India\">\n        <option value=\"USA\">\n        <option value=\"UK\">\n    </datalist>\n\n    <label>Rating:</label>\n    <input type=\"range\" min=\"0\" max=\"10\">\n    <output>5</output>\n\n    <button type=\"submit\">Submit</button>\n</form>",
                output: "Ye advanced form hai jisme different input types aur validation hain."
              },
            ],
            notes: [
              "HTML5 mein naye input types hain jaise date, color, range",
              "Required attribute se mandatory field banate hain",
              "Pattern attribute se regex validation hoti hai",
              "Datalist pre-defined options ke saath custom input deta hai",
              "Min/max attributes numeric validation ke liye"
            ],
            commonMistakes: [
              { mistake: "Pattern attribute mein galat regex dena", correction: "Regex sahi se test karein pehle" },
              { mistake: "Server-side validation na karna sirf client-side pe bharosa", correction: "Hamesha server-side validation bhi implement karein" },
            ],
            interviewQuestions: [
              "HTML5 mein kaun se naye input types aaye hain?",
              "Client-side aur server-side validation mein kya antar hai?",
              "Pattern attribute kya karta hai?",
            ],
            practiceExercises: [
              { question: "Ek form banaye jisme 10 different input types hon with HTML5 validation.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-forms-advanced",
              title: "Advanced Forms Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Color picker ke liye kaunsa input type use hota hai?",
                  options: ["color", "picker", "palette", "choose"],
                  correctAnswer: 0,
                  explanation: "Input type=\"color\" color picker ke liye use hota hai."
                },
                {
                  id: "q2",
                  question: "Regex validation ke liye kaunsa attribute use hota hai?",
                  options: ["regex", "format", "pattern", "match"],
                  correctAnswer: 2,
                  explanation: "Pattern attribute regex validation ke liye use hota hai."
                },
                {
                  id: "q3",
                  question: "Pre-defined options ke saath custom input ke liye kaunsa element use hota hai?",
                  options: ["<select>", "<datalist>", "<list>", "<options>"],
                  correctAnswer: 1,
                  explanation: "<datalist> pre-defined options ke saath custom input deta hai."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-responsive",
          title: "Responsive Web Design Basics",
          description: "Responsive design aur viewport meta tag samjhein",
          order: 7,
          content: {
            introduction: "Responsive Web Design ka matlab hai website ko aisa banana jo sab devices par achha dikhe - mobile, tablet, laptop, ya desktop. Iske liye HTML aur CSS dono ka use hota hai. Viewport meta tag iski shuruaat hai.",
            sections: [
              {
                title: "Viewport Meta Tag",
                explanation: "Viewport meta tag browser ko batata hai ki page ko device ki width ke according kaise render karna hai. Ye mobile responsiveness ke liye sabse important tag hai.",
                example: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
              },
              {
                title: "Responsive Images",
                explanation: "Srcset attribute se different screen sizes ke liye different images provide kar sakte hain. Picture element se art direction possible hai. Isse bandwidth save hoti hai aur page fast load hota hai.",
                example: "<img src=\"small.jpg\" srcset=\"medium.jpg 768w, large.jpg 1200w\" sizes=\"100vw\">"
              },
              {
                title: "CSS Media Queries",
                explanation: "Media queries CSS mein conditions check karte hain jaise screen width. Iske according different CSS apply kar sakte hain. Mobile-first approach mein pehle mobile ke liye CSS likhte hain phir desktop ke liye overwrite karte hain.",
                example: "@media (max-width: 768px) { body { font-size: 14px; } }"
              },
            ],
            codeExamples: [
              {
                title: "Responsive HTML Setup",
                language: "html",
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <style>\n        /* Mobile-first approach */\n        body { font-size: 16px; }\n        @media (min-width: 768px) {\n            body { font-size: 18px; }\n        }\n        @media (min-width: 1200px) {\n            body { font-size: 20px; }\n        }\n    </style>\n</head>\n<body>\n    <h1>Responsive Design</h1>\n    <p>Ye text screen size ke according change hoga.</p>\n</body>\n</html>",
                output: "Ye page screen size ke according responsive hoga."
              },
            ],
            notes: [
              "Viewport meta tag mobile responsiveness ke liye mandatory hai",
              "Srcset se responsive images provide karte hain",
              "Media queries CSS mein conditions check karte hain",
              "Mobile-first approach best practice hai",
              "Responsive design user experience improve karta hai"
            ],
            commonMistakes: [
              { mistake: "Viewport meta tag bhoolna", correction: "Har responsive page mein viewport meta tag add karein" },
              { mistake: "Sirf desktop version banana aur mobile ko ignore karna", correction: "Always mobile-first approach use karein" },
            ],
            interviewQuestions: [
              "Responsive web design kya hai?",
              "Viewport meta tag kya karta hai?",
              "Mobile-first aur desktop-first mein kya antar hai?",
            ],
            practiceExercises: [
              { question: "Ek responsive HTML page banaye jisme viewport meta tag aur basic media queries hon.", difficulty: "medium" },
            ],
            quiz: {
              id: "quiz-html-responsive",
              title: "Responsive Design Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Mobile responsiveness ke liye sabse important tag kaunsa hai?",
                  options: ["<meta charset>", "<meta viewport>", "<meta author>", "<meta keywords>"],
                  correctAnswer: 1,
                  explanation: "Viewport meta tag mobile ke liye important hai."
                },
                {
                  id: "q2",
                  question: "CSS mein screen size check karne ke liye kya use hota hai?",
                  options: ["Conditional statements", "Media queries", "Functions", "Loops"],
                  correctAnswer: 1,
                  explanation: "Media queries screen size check karte hain."
                },
                {
                  id: "q3",
                  question: "Mobile-first approach mein pehle kiske liye CSS likhte hain?",
                  options: ["Desktop", "Tablet", "Mobile", "TV"],
                  correctAnswer: 2,
                  explanation: "Mobile-first mein pehle mobile ke liye CSS likhte hain."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-accessibility",
          title: "Web Accessibility Basics",
          description: "Website accessibility kaise improve karein seekhein",
          order: 8,
          content: {
            introduction: "Web accessibility ka matlab hai websies aisa banana jo disabled log bhi use kar sakein. Jaise blind people screen readers ka use karte hain, aur unke liye proper HTML structure hona chahiye.",
            sections: [
              {
                title: "ARIA Tags",
                explanation: "ARIA (Accessible Rich Internet Applications) tags accessibility improve karte hain. Role attribute element ka purpose batata hai. Aria-label, aria-labelledby, aria-describedby additional information provide karte hain screen readers ko.",
                example: "<nav aria-label=\"Main navigation\">...</nav>"
              },
              {
                title: "Keyboard Navigation",
                explanation: "Sab elements keyboard se accessible hone chahiye. Tabindex attribute se tab order control kar sakte hain. Focus visible rehna chahiye. Enter aur Space se interactive elements activate hone chahiye.",
                example: "<button tabindex=\"0\">Click me</button>"
              },
              {
                title: "Color Contrast",
                explanation: "Text aur background mein sufficient contrast hona chahiye taaki low vision log bhi padh sakein. WCAG guidelines ke according normal text ke liye 4.5:1 aur large text ke liye 3:1 ratio chahiye.",
                example: "Light grey text on white background - accessibility issue."
              },
            ],
            codeExamples: [
              {
                title: "Accessible Form",
                language: "html",
                code: "<form>\n    <div role=\"form\" aria-label=\"Contact Form\">\n        <label for=\"name\">Apna Naam Daein: <span aria-hidden=\"true\">*</span></label>\n        <input type=\"text\" id=\"name\" required aria-required=\"true\">\n        \n        <label for=\"message\">Sandesh:</label>\n        <textarea id=\"message\" aria-describedby=\"hint\"></textarea>\n        <p id=\"hint\">Kam se kam 10 characters likhein</p>\n        \n        <button type=\"submit\" aria-label=\"Form Submit Karein\">Submit</button>\n    </div>\n</form>",
                output: "Ye ek accessible form hai jisme ARIA attributes hain."
              },
            ],
            notes: [
              "Web accessibility sab users ke liye equal access ensure karta hai",
              "Screen readers blind users ke liye content read karte hain",
              "ARIA attributes accessibility improve karte hain",
              "Keyboard navigation sab elements ke liye honi chahiye",
              "Color contrast WCAG guidelines follow karein"
            ],
            commonMistakes: [
              { mistake: "Sirf color par rely karna (jaise red text for errors)", correction: "Color ke alawa bhi indicators use karein jaise icons ya text" },
              { mistake: "ARIA ka overuse - jahan semantic HTML enough ho wahan ARIA na lagayein", correction: "Pehle semantic HTML use karein, phir ARIA" },
            ],
            interviewQuestions: [
              "Web accessibility kya hai aur kyun important hai?",
              "ARIA ka full form kya hai?",
              "WCAG guidelines kya hain?",
            ],
            practiceExercises: [
              { question: "Ek accessible form banaye jisme proper labels, ARIA attributes aur keyboard navigation ho.", difficulty: "hard" },
            ],
            quiz: {
              id: "quiz-html-accessibility",
              title: "Accessibility Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Blind users ke liye kaunsa software content read karta hai?",
                  options: ["Antivirus", "Screen reader", "Compiler", "Browser"],
                  correctAnswer: 1,
                  explanation: "Screen reader blind users ke liye content read karta hai."
                },
                {
                  id: "q2",
                  question: "ARIA ka full form kya hai?",
                  options: ["Accessible Rich Internet Applications", "Advanced Rich Internet Apps", "Accessible Resource Integration", "None"],
                  correctAnswer: 0,
                  explanation: "ARIA = Accessible Rich Internet Applications."
                },
                {
                  id: "q3",
                  question: "Normal text ke liye minimum color contrast ratio kya hona chahiye?",
                  options: ["3:1", "4.5:1", "5:1", "2:1"],
                  correctAnswer: 1,
                  explanation: "WCAG guidelines ke according 4.5:1 ratio chahiye."
                },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "html-project-1",
          title: "Project - Portfolio Page",
          description: "HTML ka use karke ek portfolio page banayein",
          order: 9,
          content: {
            introduction: "Ab hum jo kuch sikha hai uska use karke ek personal portfolio page banayenge. Is project mein aap HTML ke sabhi important concepts ka practical use dekhenge - semantic HTML, links, images, lists, forms, aur responsive design.",
            sections: [
              {
                title: "Project Overview",
                explanation: "Hum ek simple personal portfolio page banayenge jisme aapka naam, about section, skills list, projects gallery, aur contact form hoga. Ye page fully responsive hoga aur semantic HTML use karega.",
                example: "Portfolio page mein 5 sections - header, about, skills, projects, contact."
              },
              {
                title: "Project Requirements",
                explanation: "Semantic HTML tags use karein. Proper heading structure. Navigation menu. Images with alt text. Skills list. Project gallery with figure tags. Contact form with validation. Footer with copyright. Meta tags for SEO. Viewport meta for responsive.",
                example: "Requirements check karein aur ensure karein sab present hai."
              },
            ],
            codeExamples: [
              {
                title: "Portfolio Page Structure",
                language: "html",
                code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>My Portfolio - CodeDuniya</title>\n    <meta name=\"description\" content=\"Mera personal portfolio page\">\n</head>\n<body>\n    <header>\n        <h1>Rahul Kumar</h1>\n        <p>Web Developer | Learner | Teacher</p>\n        <nav>\n            <ul>\n                <li><a href=\"#about\">About</a></li>\n                <li><a href=\"#skills\">Skills</a></li>\n                <li><a href=\"#projects\">Projects</a></li>\n                <li><a href=\"#contact\">Contact</a></li>\n            </ul>\n        </nav>\n    </header>\n    <main>\n        <section id=\"about\">\n            <h2>About Me</h2>\n            <p>Main ek web developer hoon...</p>\n            <img src=\"profile.jpg\" alt=\"Rahul's profile photo\" width=\"200\">\n        </section>\n        <section id=\"skills\">\n            <h2>My Skills</h2>\n            <ul>\n                <li>HTML5</li>\n                <li>CSS3</li>\n                <li>JavaScript</li>\n            </ul>\n        </section>\n        <section id=\"contact\">\n            <h2>Contact Me</h2>\n            <form>\n                <label for=\"name\">Name:</label>\n                <input type=\"text\" id=\"name\" required>\n                <button type=\"submit\">Send</button>\n            </form>\n        </section>\n    </main>\n    <footer>\n        <p>&copy; 2024 Rahul. All rights reserved.</p>\n    </footer>\n</body>\n</html>",
                output: "Ye ek complete portfolio page hai."
              },
            ],
            notes: [
              "Portfolio page aapki pehli real HTML project hai",
              "Semantic HTML use karein",
              "Proper meta tags include karein",
              "Images ke saath alt text dena na bhoolen",
              "Responsive design ke liye viewport meta tag use karein"
            ],
            commonMistakes: [
              { mistake: "Navigation links ka href missing", correction: "Har link ka proper href dena" },
              { mistake: "Form mein submit button bhoolna", correction: "Form ke andar submit button dena na bhoolen" },
            ],
            interviewQuestions: [
              "Semantic HTML kaise use kiya aapne is project mein?",
              "Aapne portfolio mein accessibility kaise handle ki?",
              "Responsive design kaise implement kiya?",
            ],
            practiceExercises: [
              { question: "Apna personal portfolio page banaye jisme 5 sections hon - header, about, skills, projects, contact.", difficulty: "hard" },
            ],
            quiz: {
              id: "quiz-html-project",
              title: "HTML Project Quiz",
              questions: [
                {
                  id: "q1",
                  question: "Portfolio page mein navigation ke liye kaunsa semantic tag use karna chahiye?",
                  options: ["<nav>", "<menu>", "<ul>", "<links>"],
                  correctAnswer: 0,
                  explanation: "<nav> tag navigation ke liye best hai."
                },
                {
                  id: "q2",
                  question: "Contact form submit karne ke liye button ka type kya hona chahiye?",
                  options: ["button", "submit", "input", "click"],
                  correctAnswer: 1,
                  explanation: "Button type=\"submit\" form submit karta hai."
                },
                {
                  id: "q3",
                  question: "Page ke bottom section ke liye kaunsa tag use hota hai?",
                  options: ["<bottom>", "<footer>", "<end>", "<last>"],
                  correctAnswer: 1,
                  explanation: "<footer> tag page ke bottom section ke liye use hota hai."
                },
              ],
            },
          },
          duration: "30 min",
        },
      ],
    },
  ],
}
