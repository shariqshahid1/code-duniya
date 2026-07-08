import { Course } from "@/types"

export const cssCourse: Course = {
  id: "css",
  title: "CSS",
  description: "CSS seekhein - Website ko stylish aur attractive banana sikhe",
  longDescription: "CSS (Cascading Style Sheets) web designing ki soul hai. Is course mein aap CSS ke basic se lekar advanced concepts tak seekhenge - selectors, flexbox, grid, animations, aur responsive design.",
  category: "frontend",
  icon: "Palette",
  color: "from-blue-500 to-purple-500",
  difficulty: "beginner",
  lessonsCount: 22,
  duration: "5 hours",
  prerequisites: ["HTML ka basic knowledge"],
  modules: [
    {
      id: "css-basics",
      title: "CSS Basics",
      description: "CSS fundamentals aur styling properties",
      order: 1,
      lessons: [
        {
          id: "css-what-is",
          title: "CSS Kya Hai?",
          description: "CSS ka matlab aur iska use samjhein",
          order: 1,
          content: {
            introduction: "CSS ka matlab Cascading Style Sheets hai. Ye web pages ko style aur design dene ke liye use hota hai. HTML se structure banate hain aur CSS se us structure ko beautiful banate hain.",
            sections: [
              { title: "CSS Kya Hai?", explanation: "CSS ek stylesheet language hai jo HTML elements ki styling karti hai. CSS ke through hum colors, fonts, layouts, animations aur bahut kuch control kar sakte hain.", example: "CSS ke bina website bilkul plain dikhti hai, CSS lagane ke baad wo attractive ban jaati hai." },
              { title: "CSS Kaise Kaam Karta Hai?", explanation: "CSS selectors ke through HTML elements ko target karta hai aur un par style rules apply karta hai. Har style rule ek selector aur declaration block se banta hai.", example: "p { color: blue; font-size: 16px; }" },
              { title: "CSS Add Karne Ke Tareeke", explanation: "CSS add karne ke 3 tareeke hain: Inline, Internal (head mein style tag), External (alag .css file). External CSS sabse best practice hai.", example: "<link rel=\"stylesheet\" href=\"styles.css\">" },
            ],
            codeExamples: [
              { title: "Pehla CSS Program", language: "css", code: "body {\n    background-color: #f0f0f0;\n    font-family: Arial, sans-serif;\n}\nh1 {\n    color: #333;\n    text-align: center;\n}", output: "Ye CSS body ka background grey aur heading dark grey karega." },
            ],
            notes: ["CSS ka full form Cascading Style Sheets hai", "CSS styling language hai, programming language nahi", "External CSS best practice hai", "CSS rules selectors aur declarations se bante hain"],
            commonMistakes: [
              { mistake: "CSS syntax bhoolna - colon ki jagah equals use karna", correction: "Hamesha property: value; syntax use karein" },
            ],
            interviewQuestions: ["CSS ka full form kya hai?", "CSS add karne ke kitne tareeke hain?", "Cascading ka CSS mein kya matlab hai?"],
            practiceExercises: [{ question: "Ek HTML page banaye aur usme external CSS ke through body ka background blue aur heading red karein.", difficulty: "easy" }],
            quiz: {
              id: "quiz-css-intro", title: "CSS Introduction Quiz",
              questions: [
                { id: "q1", question: "CSS ka full form kya hai?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Cascading Simple Sheets", "Computer Style Sheets"], correctAnswer: 0, explanation: "CSS ka full form Cascading Style Sheets hai." },
                { id: "q2", question: "CSS mein property aur value ke beech mein kaunsa symbol aata hai?", options: ["=", ":", ";", "!"], correctAnswer: 1, explanation: "Property aur value ke beech colon aata hai." },
                { id: "q3", question: "Sabse recommended CSS add karne ka tareeka kaunsa hai?", options: ["Inline", "Internal", "External", "Inline aur Internal"], correctAnswer: 2, explanation: "External CSS sabse best practice hai." },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "css-selectors",
          title: "CSS Selectors",
          description: "Different types of CSS selectors seekhein",
          order: 2,
          content: {
            introduction: "CSS selectors woh powerful tools hain jinse hum HTML elements ko target karte hain. Sahi selector ka use karke hum exactly un elements ko style kar sakte hain jinhe hume style karna hai.",
            sections: [
              { title: "Basic Selectors", explanation: "Element selector (p, h1) sab elements ko target karta hai. Class selector (.classname) specific class wale elements ko target karta hai. ID selector (#idname) unique id wale element ko target karta hai.", example: "p { color: red; } .box { border: 1px solid; }" },
              { title: "Combinator Selectors", explanation: "Descendant selector (div p) - div ke andar sab p. Child selector (div > p) - div ke direct child p. Adjacent sibling (div + p) - div ke immediately baad wala p.", example: "div p { } div > p { } div + p { }" },
              { title: "Attribute aur Pseudo Selectors", explanation: "Attribute selectors HTML attributes ke basis par elements select karte hain. Pseudo-classes (:hover, :focus) element ki state target karti hain. Pseudo-elements (::before, ::after) element ke specific part ko target karte hain.", example: "input[type=\"text\"] { } a:hover { } p::first-line { }" },
            ],
            codeExamples: [
              { title: "CSS Selectors Examples", language: "css", code: "/* Element Selector */\np { color: blue; }\n/* Class Selector */\n.highlight { background-color: yellow; }\n/* ID Selector */\n#logo { width: 100px; }\n/* Pseudo-class */\na:hover { text-decoration: underline; }", output: "Ye different selectors ka use dikhata hai." },
            ],
            notes: ["Element selector HTML tag ko target karta hai", "Class selector . se start hota hai", "ID selector # se start hota hai", "Pseudo-classes element ki state target karti hain"],
            commonMistakes: [
              { mistake: "ID selector ka multiple elements par use", correction: "ID unique hota hai - class use karein multiple elements ke liye" },
            ],
            interviewQuestions: ["CSS mein kitne types ke selectors hain?", "Class aur ID selector mein kya antar hai?", "Pseudo-class aur pseudo-element mein kya difference hai?"],
            practiceExercises: [{ question: "Ek HTML page banaye aur us par element, class, ID, aur attribute selectors ka use karein.", difficulty: "easy" }],
            quiz: {
              id: "quiz-css-selectors", title: "CSS Selectors Quiz",
              questions: [
                { id: "q1", question: "Class selector kaunsa symbol use karta hai?", options: ["#", ".", "*", ":"], correctAnswer: 1, explanation: "Class selector dot se start hota hai." },
                { id: "q2", question: "Sabse specific selector kaunsa hai?", options: ["Element", "Class", "ID", "Universal"], correctAnswer: 2, explanation: "ID selector sabse specific hota hai." },
                { id: "q3", question: "Link par hover karne par style change ke liye kaunsa selector use hota hai?", options: [":hover", ":link", ":active", ":visited"], correctAnswer: 0, explanation: ":hover pseudo-class hover state ke liye use hoti hai." },
              ],
            },
          },
          duration: "20 min",
        },
        {
          id: "css-colors",
          title: "Colors aur Backgrounds",
          description: "CSS mein colors aur backgrounds properties seekhein",
          order: 3,
          content: {
            introduction: "CSS colors aur backgrounds websites ko visually appealing banane ke liye important hain. Colors defined karne ke multiple tarike hain - named colors, hex, rgb, hsl aur gradients.",
            sections: [
              { title: "Colors Define Karne Ke Tareeke", explanation: "Named colors (red, blue), Hex codes (#ff0000), RGB (rgb(255,0,0)), RGBA (rgba(255,0,0,0.5)), HSL (hsl(0,100%,50%)). Hex sabse common hai.", example: "color: #ff0000; color: rgb(255, 0, 0);" },
              { title: "Background Properties", explanation: "Background-color se solid color. Background-image se image. Background-repeat se repeat control. Background-position se position. Background-size se size.", example: "background: #fff url('bg.jpg') no-repeat center/cover;" },
              { title: "Gradients", explanation: "Linear-gradient se line mein gradient. Radial-gradient se circular gradient. Multiple color stops define kar sakte hain. Direction deg mein define karte hain.", example: "background: linear-gradient(to right, red, blue);" },
            ],
            codeExamples: [
              { title: "Colors and Backgrounds", language: "css", code: ".box {\n    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);\n    color: white;\n    padding: 20px;\n    border-radius: 10px;\n}", output: "Ye gradient background ke saath ek box dikhayega." },
            ],
            notes: ["Hex colors # se start hote hain", "RGBA mein alpha channel transparency deta hai", "Gradients 2+ colors ke beech smooth transition", "Background shorthand se code short hota hai"],
            commonMistakes: [
              { mistake: "Color contrast ka dhyan na rakhna", correction: "Text aur background mein sufficient contrast rakhein" },
            ],
            interviewQuestions: ["CSS mein colors define karne ke kitne tareeke hain?", "RGB aur HEX mein kya antar hai?", "Opacity aur RGBA alpha mein kya difference hai?"],
            practiceExercises: [{ question: "Ek box banaye jisme gradient background ho, border ho, aur shadow ho.", difficulty: "easy" }],
            quiz: {
              id: "quiz-css-colors", title: "Colors Quiz",
              questions: [
                { id: "q1", question: "Hex color code kaunsa symbol se shuru hota hai?", options: ["#", "$", "&", "%"], correctAnswer: 0, explanation: "Hex code # se shuru hota hai." },
                { id: "q2", question: "Transparency add karne ke liye kaunsa color function use hota hai?", options: ["rgb()", "rgba()", "hsl()", "hex"], correctAnswer: 1, explanation: "RGBA mein alpha channel transparency deta hai." },
                { id: "q3", question: "Gradient banane ke liye kaunsa function use hota hai?", options: ["gradient()", "linear-gradient()", "color-gradient()", "bg-gradient()"], correctAnswer: 1, explanation: "linear-gradient() se gradient banate hain." },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "css-box-model",
          title: "Box Model",
          description: "CSS box model - margin, border, padding samjhein",
          order: 4,
          content: {
            introduction: "Box model CSS ka sabse important concept hai. Har HTML element ek box ki tarah hota hai jisme content, padding, border aur margin hota hai.",
            sections: [
              { title: "Box Model Components", explanation: "Content - actual content area. Padding - content aur border ke beech ka space. Border - padding ke around border. Margin - border ke bahar ka space. Box-sizing decide karta hai ki width mein padding+border shamil hain ya nahi.", example: "Content -> Padding -> Border -> Margin" },
              { title: "Margin aur Padding", explanation: "Margin elements ke beech space banata hai. Padding element ke andar space banata hai. Dono ke liye shorthand: top-right-bottom-left (clock-wise).", example: "margin: 10px 20px; padding: 10px;" },
              { title: "Border Properties", explanation: "Border-style (solid, dashed, dotted), border-width, border-color. Border-radius se rounded corners banate hain. Border shorthand mein ek line mein sab likh sakte hain.", example: "border: 2px solid #333; border-radius: 10px;" },
            ],
            codeExamples: [
              { title: "Box Model Example", language: "css", code: ".box {\n    width: 300px;\n    padding: 20px;\n    border: 2px solid #333;\n    margin: 30px;\n    background-color: #f0f0f0;\n    box-sizing: border-box;\n}", output: "Ye box model ke saare components dikhayega." },
            ],
            notes: ["Content - actual area jahan text/image hai", "Padding - content ke around clear area", "Border - padding ke around border", "Margin - border ke bahar transparent area", "box-sizing: border-box use karna best practice hai"],
            commonMistakes: [
              { mistake: "Width set karte waqt padding aur border ka na sochna", correction: "box-sizing: border-box use karein ya total width calculate karein" },
            ],
            interviewQuestions: ["Box model kya hai?", "Margin aur padding mein kya antar hai?", "Box-sizing property kya karti hai?"],
            practiceExercises: [{ question: "Ek card layout banaye jisme proper box model properties use ho - margin, padding, border.", difficulty: "easy" }],
            quiz: {
              id: "quiz-css-box-model", title: "Box Model Quiz",
              questions: [
                { id: "q1", question: "Box model mein sabse andar kya hota hai?", options: ["Margin", "Border", "Content", "Padding"], correctAnswer: 2, explanation: "Content sabse andar hota hai." },
                { id: "q2", question: "Content aur border ke beech ka space kya kehlata hai?", options: ["Margin", "Padding", "Gap", "Spacing"], correctAnswer: 1, explanation: "Padding content aur border ke beech ka space hai." },
                { id: "q3", question: "Rounded corners ke liye kaunsa property use hoti hai?", options: ["border-round", "border-radius", "corner-radius", "round-corner"], correctAnswer: 1, explanation: "border-radius se rounded corners bante hain." },
              ],
            },
          },
          duration: "20 min",
        },
        {
          id: "css-fonts",
          title: "Fonts aur Typography",
          description: "CSS typography - fonts, text properties seekhein",
          order: 5,
          content: {
            introduction: "Typography web design ka important hissa hai. Sahi font aur text styling se website ki readability aur user experience bahut improve hota hai.",
            sections: [
              { title: "Font Properties", explanation: "Font-family se font type set karte hain. Font-size se size. Font-weight se bold/normal. Font-style se italic. Line-height se lines ke beech space.", example: "font-family: 'Arial', sans-serif; font-size: 16px;" },
              { title: "Text Properties", explanation: "Text-align se alignment (left, right, center, justify). Text-decoration se underline, line-through. Text-transform se uppercase, lowercase. Text-shadow se shadow.", example: "text-align: center; text-decoration: underline;" },
              { title: "Web Fonts", explanation: "Web fonts woh fonts hain jo server se load hote hain. Google Fonts free web fonts provide karta hai. @import ya link se Google Fonts add kar sakte hain.", example: "@import url('https://fonts.googleapis.com/css2?family=Roboto');" },
            ],
            codeExamples: [
              { title: "Typography Styles", language: "css", code: "body {\n    font-family: 'Segoe UI', Tahoma, sans-serif;\n    font-size: 16px;\n    line-height: 1.6;\n    color: #333;\n}\nh1 {\n    font-size: 2.5rem;\n    font-weight: 700;\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\n}", output: "Ye different typography styles dikhata hai." },
            ],
            notes: ["Font-family multiple fonts comma se separate likhte hain", "Rem/em units responsive typography ke liye best hain", "Line-height readability improve karta hai", "Google Fonts free web fonts provide karte hain"],
            commonMistakes: [
              { mistake: "Fallback font na dena", correction: "Hamesha fallback font family provide karein" },
            ],
            interviewQuestions: ["Serif aur sans-serif fonts mein kya antar hai?", "Rem aur em units mein kya difference hai?", "Web fonts kya hote hain?"],
            practiceExercises: [{ question: "Ek page banaye jisme Google Fonts ka use ho aur proper typography styling ho.", difficulty: "medium" }],
            quiz: {
              id: "quiz-css-typography", title: "Typography Quiz",
              questions: [
                { id: "q1", question: "Font bold karne ke liye kaunsa property use hota hai?", options: ["font-bold", "font-weight", "font-style", "font-size"], correctAnswer: 1, explanation: "font-weight boldness set karta hai." },
                { id: "q2", question: "Text ko underline karne ke liye kaunsa property use hota hai?", options: ["text-style", "text-decoration", "text-line", "text-underline"], correctAnswer: 1, explanation: "text-decoration underline ke liye use hota hai." },
                { id: "q3", question: "Responsive typography ke liye best unit kaunsa hai?", options: ["px", "pt", "rem", "cm"], correctAnswer: 2, explanation: "rem responsive typography ke liye best hai." },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "css-flexbox",
          title: "Flexbox Layout",
          description: "CSS flexbox layout system seekhein",
          order: 6,
          content: {
            introduction: "Flexbox CSS3 ka ek powerful layout mode hai jo responsive layouts banane mein madad karta hai. Flexbox se elements ko easily align aur distribute kar sakte hain.",
            sections: [
              { title: "Flex Container Properties", explanation: "display: flex se flex container banata hai. flex-direction se direction (row, column). justify-content se horizontal alignment. align-items se vertical alignment. flex-wrap se wrap behavior.", example: "display: flex; justify-content: center; align-items: center;" },
              { title: "Flex Item Properties", explanation: "flex-grow se item ka grow ratio. flex-shrink se shrink ratio. flex-basis se initial size. order se items ka order badal sakte hain. align-self se individual alignment.", example: ".item { flex: 1; order: 2; align-self: flex-end; }" },
              { title: "Alignment aur Gap", explanation: "align-content se multiple rows ka vertical alignment. gap property se items ke beech gap define karte hain. Ye margin se better hai kyunki gap sirf flex/grid mein kaam karta hai.", example: "align-content: space-between; gap: 20px;" },
            ],
            codeExamples: [
              { title: "Flexbox Layout", language: "css", code: ".container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n}\n.item {\n    flex: 1 1 200px;\n    padding: 20px;\n    background: #f0f0f0;\n}", output: "Ye flexbox container mein items ko space-between align karega." },
            ],
            notes: ["Flexbox 1-dimensional layout ke liye hai", "Main axis flex-direction par depend karta hai", "justify-content main axis par alignment ke liye", "align-items cross axis par alignment ke liye", "gap property modern browsers mein supported hai"],
            commonMistakes: [
              { mistake: "flex-direction na samajhna - justify-content aur align-items ka axis change ho jata hai", correction: "Yad rakhein: flex-direction: column par justify-content vertical hota hai" },
            ],
            interviewQuestions: ["Flexbox kya hai?", "justify-content aur align-items mein kya antar hai?", "flex-grow, flex-shrink, flex-basis kya hain?"],
            practiceExercises: [{ question: "Ek navigation bar banaye flexbox se jisme logo left mein aur menu links right mein hon.", difficulty: "medium" }],
            quiz: {
              id: "quiz-css-flexbox", title: "Flexbox Quiz",
              questions: [
                { id: "q1", question: "Flex container banane ke liye kaunsa property use hota hai?", options: ["display: block", "display: flex", "display: grid", "position: relative"], correctAnswer: 1, explanation: "display: flex se flex container banta hai." },
                { id: "q2", question: "Horizontal alignment ke liye kaunsa property use hota hai?", options: ["align-items", "justify-content", "align-content", "text-align"], correctAnswer: 1, explanation: "justify-content horizontal alignment ke liye hai." },
                { id: "q3", question: "Items ke beech gap define karne ke liye kaunsa property use hota hai?", options: ["margin", "gap", "padding", "space"], correctAnswer: 1, explanation: "gap property items ke beech gap define karta hai." },
              ],
            },
          },
          duration: "20 min",
        },
        {
          id: "css-grid",
          title: "CSS Grid Layout",
          description: "CSS Grid layout system seekhein",
          order: 7,
          content: {
            introduction: "CSS Grid ek 2-dimensional layout system hai jo rows aur columns dono par kaam karta hai. Ye complex layouts banane ke liye flexbox se bhi powerful hai.",
            sections: [
              { title: "Grid Container", explanation: "display: grid se grid container banata hai. grid-template-columns aur grid-template-rows se columns aur rows ki size define karte hain. grid-template-areas se named areas bana sakte hain.", example: "display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 20px;" },
              { title: "Grid Items Placement", explanation: "grid-column aur grid-row se items ko specific columns/rows mein place karte hain. grid-column-start, grid-column-end se span control karte hain. justify-self aur align-self se individual alignment.", example: ".item { grid-column: 1 / 3; grid-row: 1 / 2; }" },
              { title: "Fractional Units aur Functions", explanation: "Fr (fraction) unit available space ko distribute karta hai. repeat() function se repetitive pattern. minmax() se minimum aur maximum size define. auto-fill aur auto-fit se responsive grids.", example: "grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));" },
            ],
            codeExamples: [
              { title: "CSS Grid Layout", language: "css", code: ".container {\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-areas:\n        'header header header'\n        'sidebar main aside'\n        'footer footer footer';\n    gap: 20px;\n}", output: "Ye ek 3-column layout banayega." },
            ],
            notes: ["CSS Grid 2-dimensional layout ke liye hai", "Grid-template-areas se visual layout define karte hain", "Fr unit available space distribute karta hai", "repeat() function se repetitive patterns", "minmax() responsive designs ke liye useful"],
            commonMistakes: [
              { mistake: "Grid aur flexbox ko confuse karna", correction: "Grid 2D ke liye, flexbox 1D ke liye" },
            ],
            interviewQuestions: ["CSS Grid aur Flexbox mein kya antar hai?", "Fr (fraction) unit kya hai?", "grid-template-areas kya karta hai?"],
            practiceExercises: [{ question: "Ek magazine-style layout banaye CSS Grid se jisme header, nav, main, sidebar, aur footer ho.", difficulty: "hard" }],
            quiz: {
              id: "quiz-css-grid", title: "CSS Grid Quiz",
              questions: [
                { id: "q1", question: "CSS Grid kaunsa dimensional layout system hai?", options: ["1D", "2D", "3D", "4D"], correctAnswer: 1, explanation: "CSS Grid 2-dimensional layout system hai." },
                { id: "q2", question: "Available space ko distribute karne wala unit kaunsa hai?", options: ["px", "%", "fr", "vw"], correctAnswer: 2, explanation: "Fr (fraction) unit available space distribute karta hai." },
                { id: "q3", question: "Named grid areas define karne ke liye kaunsa property use hota hai?", options: ["grid-areas", "grid-template-areas", "grid-placement", "grid-layout"], correctAnswer: 1, explanation: "grid-template-areas se named areas define karte hain." },
              ],
            },
          },
          duration: "20 min",
        },
        {
          id: "css-responsive",
          title: "Responsive Design aur Media Queries",
          description: "CSS media queries aur responsive design seekhein",
          order: 8,
          content: {
            introduction: "Responsive design ka matlab hai website ko aisa banana jo sab screen sizes par achha lage. Media queries iski key hain.",
            sections: [
              { title: "Media Queries Syntax", explanation: "@media rule se media queries likhte hain. Common breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop), 1200px (large desktop).", example: "@media (max-width: 768px) { body { font-size: 14px; } }" },
              { title: "Mobile-First Approach", explanation: "Mobile-first mein pehle mobile devices ke liye CSS likhte hain, phir min-width media queries se larger devices ke liye styles add karte hain.", example: "Base CSS (mobile) -> @media (min-width: 768px) (tablet)" },
              { title: "Responsive Units", explanation: "%, vw, vh, rem, em responsive units hain. % relative to parent. vw/vh viewport ke relative. rem root element ke relative. em parent element ke relative.", example: "width: 100%; font-size: 1.2rem; height: 50vh;" },
            ],
            codeExamples: [
              { title: "Responsive Layout", language: "css", code: ".container { display: flex; flex-direction: column; padding: 10px; }\n@media (min-width: 768px) {\n    .container { flex-direction: row; max-width: 720px; margin: 0 auto; }\n}\n@media (min-width: 1024px) {\n    .container { max-width: 960px; }\n}", output: "Ye responsive layout hai jo screen size ke according adjust hota hai." },
            ],
            notes: ["Media queries responsive design ki buniyad hain", "Mobile-first approach best practice hai", "Common breakpoints: 480, 768, 1024, 1200px", "Rem/em units responsive typography ke liye"],
            commonMistakes: [
              { mistake: "Desktop-first approach use karna", correction: "Mobile-first approach use karein" },
            ],
            interviewQuestions: ["Responsive web design kya hai?", "Mobile-first approach kya hota hai?", "Media queries ke common breakpoints kaun se hain?"],
            practiceExercises: [{ question: "Ek page banaye jo 3 breakpoints par responsive ho - mobile, tablet, desktop.", difficulty: "hard" }],
            quiz: {
              id: "quiz-css-responsive", title: "Responsive Design Quiz",
              questions: [
                { id: "q1", question: "Media queries ke liye kaunsa CSS rule use hota hai?", options: ["@media", "@screen", "@responsive", "@viewport"], correctAnswer: 0, explanation: "@media rule media queries ke liye use hota hai." },
                { id: "q2", question: "Mobile-first approach mein kaunsa media query pattern use hota hai?", options: ["max-width", "min-width", "device-width", "screen-width"], correctAnswer: 1, explanation: "Mobile-first mein min-width media queries use hoti hain." },
                { id: "q3", question: "Viewport width relative unit kaunsa hai?", options: ["%", "rem", "vw", "em"], correctAnswer: 2, explanation: "vw viewport width relative unit hai." },
              ],
            },
          },
          duration: "20 min",
        },
        {
          id: "css-animations",
          title: "Animations aur Transitions",
          description: "CSS animations aur transitions seekhein",
          order: 9,
          content: {
            introduction: "CSS animations aur transitions websites ko interactive aur engaging banate hain. Transitions smooth property changes ke liye hain, animations complex multi-step effects ke liye.",
            sections: [
              { title: "CSS Transitions", explanation: "Transition property change ko smooth banata hai. transition-property, transition-duration, transition-timing-function (ease, linear), transition-delay.", example: "transition: all 0.3s ease-in-out;" },
              { title: "CSS Animations aur Keyframes", explanation: "Animation @keyframes rule se define hota hai. animation-name, animation-duration, animation-iteration-count, animation-direction, animation-fill-mode.", example: "@keyframes slideIn { from { left: -100px; } to { left: 0; } }" },
              { title: "Transform Property", explanation: "Transform se elements rotate, scale, skew, translate kar sakte hain. translateX/Y se move, scale se size change, rotate se ghumana, skew se tilt.", example: "transform: translateX(50px) rotate(45deg) scale(1.2);" },
            ],
            codeExamples: [
              { title: "CSS Animation", language: "css", code: ".button {\n    transition: all 0.3s ease;\n}\n.button:hover {\n    transform: scale(1.1);\n}\n@keyframes bounce {\n    0% { transform: translateY(0); }\n    50% { transform: translateY(-20px); }\n    100% { transform: translateY(0); }\n}\n.ball { animation: bounce 1s infinite; }", output: "Button hover par smoothly change hoga." },
            ],
            notes: ["Transitions simple property changes ke liye", "Animations complex multi-step effects ke liye", "@keyframes se animation define karte hain", "Transform hardware-accelerated hota hai"],
            commonMistakes: [
              { mistake: "transition property specify na karna (all use karna)", correction: "Sirf required properties transition karein for better performance" },
            ],
            interviewQuestions: ["Transition aur animation mein kya antar hai?", "@keyframes kya hai?", "Transform property ke different functions kaun se hain?"],
            practiceExercises: [{ question: "Ek button banaye jisme hover transition ho aur ek bouncing ball animation ho.", difficulty: "medium" }],
            quiz: {
              id: "quiz-css-animations", title: "Animations Quiz",
              questions: [
                { id: "q1", question: "Smooth property change ke liye kaunsa property use hota hai?", options: ["transition", "animation", "transform", "keyframe"], correctAnswer: 0, explanation: "Transition smooth property changes ke liye." },
                { id: "q2", question: "Keyframe animation define karne ke liye kaunsa rule use hota hai?", options: ["@keyframe", "@keyframes", "@animation", "@move"], correctAnswer: 1, explanation: "@keyframes rule se animation define karte hain." },
                { id: "q3", question: "Element ko ghumane ke liye kaunsa transform function use hota hai?", options: ["translate()", "scale()", "rotate()", "skew()"], correctAnswer: 2, explanation: "rotate() function element ko ghumata hai." },
              ],
            },
          },
          duration: "20 min",
        },
        {
          id: "css-positioning",
          title: "CSS Positioning",
          description: "CSS position property seekhein",
          order: 10,
          content: {
            introduction: "CSS positioning se elements ko exact location par place kar sakte hain. Ye layout banane ke liye powerful feature hai lekin iska sahi use karna important hai.",
            sections: [
              { title: "Position Values", explanation: "static - default position. relative - apni original position se relative. absolute - nearest positioned ancestor se relative. fixed - viewport se relative. sticky - scroll position ke according.", example: "position: relative; top: 20px; left: 10px;" },
              { title: "Z-Index", explanation: "z-index property elements ki stacking order decide karta hai. Z-index sirf positioned elements (relative, absolute, fixed, sticky) par kaam karta hai. Higher z-index wala element upar dikhta hai.", example: "z-index: 10; /* Higher value means on top */" },
            ],
            codeExamples: [
              { title: "Positioning Examples", language: "css", code: ".relative-box {\n    position: relative;\n    top: 20px;\n    left: 20px;\n}\n.absolute-box {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n.fixed-header {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n}", output: "Ye different position values ka use dikhata hai." },
            ],
            notes: ["static default position hai", "relative apni position se shift hota hai", "absolute nearest positioned ancestor ke relative", "fixed viewport ke relative rehta hai", "z-index sirf positioned elements par kaam karta hai"],
            commonMistakes: [
              { mistake: "absolute position ka parent relative na banana", correction: "Parent ko position: relative dein taaki absolute child parent ke relative ho" },
            ],
            interviewQuestions: ["CSS position values kaun se hain?", "Relative aur absolute position mein kya antar hai?", "Z-index kya karta hai?"],
            practiceExercises: [{ question: "Ek fixed header aur absolute positioned sidebar banaye.", difficulty: "medium" }],
            quiz: {
              id: "quiz-css-positioning", title: "Positioning Quiz",
              questions: [
                { id: "q1", question: "Default position value kaunsa hai?", options: ["relative", "absolute", "static", "fixed"], correctAnswer: 2, explanation: "Default position static hota hai." },
                { id: "q2", question: "Viewport ke relative position kaunsa hai?", options: ["relative", "absolute", "sticky", "fixed"], correctAnswer: 3, explanation: "fixed viewport ke relative hota hai." },
              ],
            },
          },
          duration: "15 min",
        },
      ],
    },
    {
      id: "css-advanced",
      title: "CSS Advanced Topics",
      description: "Advanced CSS concepts aur project",
      order: 2,
      lessons: [
        {
          id: "css-variables",
          title: "CSS Variables aur Custom Properties",
          description: "CSS variables ka use seekhein",
          order: 1,
          content: {
            introduction: "CSS variables (custom properties) ek modern feature hai jo CSS mein dynamic values store aur reuse karne deta hai.",
            sections: [
              { title: "CSS Variables Define Karna", explanation: "CSS variables -- se start hote hain. Usually :root mein define karte hain. var() function se access karte hain. Fallback value bhi de sakte hain.", example: "--primary: #3498db; color: var(--primary);" },
              { title: "Scope aur Theaming", explanation: "Variables ka scope hota hai - :root mein globally, element mein locally. Isse theaming aasani se implement kar sakte hain. JavaScript se bhi variables change kar sakte hain.", example: ".dark { --bg: #333; --text: #fff; }" },
            ],
            codeExamples: [
              { title: "CSS Variables", language: "css", code: ":root {\n    --primary: #3498db;\n    --secondary: #2ecc71;\n    --text-color: #333;\n}\n.button { background: var(--primary); color: white; border-radius: 8px; }", output: "Ye CSS variables ke saath theme system dikhata hai." },
            ],
            notes: ["CSS variables -- se start hote hain", ":root mein global variables define karein", "var() function se access karein", "JavaScript se bhi change kar sakte hain"],
            commonMistakes: [{ mistake: "Variable name mein -- bhoolna", correction: "Hamesha -- se variable name shuru karein" }],
            interviewQuestions: ["CSS variables kya hain?", "CSS variables ka scope kaise kaam karta hai?"],
            practiceExercises: [{ question: "Ek theme system banaye CSS variables se jisme light aur dark mode ho.", difficulty: "medium" }],
            quiz: {
              id: "quiz-css-variables", title: "CSS Variables Quiz",
              questions: [
                { id: "q1", question: "CSS variable kaunsa symbol se start hota hai?", options: ["$", "@", "--", "##"], correctAnswer: 2, explanation: "CSS variable -- se start hota hai." },
                { id: "q2", question: "Variable access karne ke liye kaunsa function use hota hai?", options: ["get()", "use()", "var()", "call()"], correctAnswer: 2, explanation: "var() function se variable access karte hain." },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "css-pseudo",
          title: "Pseudo-Classes aur Pseudo-Elements",
          description: "CSS pseudo-classes aur pseudo-elements seekhein",
          order: 2,
          content: {
            introduction: "Pseudo-classes aur pseudo-elements CSS ke advanced features hain jo elements ki specific states ya parts ko target karte hain.",
            sections: [
              { title: "Pseudo Classes", explanation: "Pseudo-classes element ki state define karti hain. :hover (mouse hover), :focus (focus), :active (click), :first-child, :last-child, :nth-child().", example: "a:hover { color: red; } li:first-child { font-weight: bold; }" },
              { title: "Pseudo Elements", explanation: "Pseudo-elements element ke specific part ko target karte hain. ::before, ::after, ::first-line, ::first-letter, ::selection.", example: "p::first-line { font-weight: bold; } .box::before { content: '\u25cf'; }" },
            ],
            codeExamples: [
              { title: "Pseudo Classes and Elements", language: "css", code: "button:hover { background: #45a049; }\ninput:focus { border-color: #4CAF50; }\nli:nth-child(odd) { background: #f2f2f2; }\np::first-letter { font-size: 2em; font-weight: bold; }", output: "Ye pseudo classes aur pseudo elements ke examples hain." },
            ],
            notes: ["Pseudo-class ek colon se start hoti hai", "Pseudo-element do colon se start hota hai", "::before aur ::after content property ke saath use hote hain"],
            commonMistakes: [{ mistake: "Pseudo-element mein content property bhoolna", correction: "::before aur ::after mein content property compulsory hai" }],
            interviewQuestions: ["Pseudo-class aur pseudo-element mein kya antar hai?", "::before aur ::after kya karte hain?"],
            practiceExercises: [{ question: "Ek styled list banaye jisme odd/even rows different color hon aur hover effect ho.", difficulty: "medium" }],
            quiz: {
              id: "quiz-css-pseudo", title: "Pseudo Classes Quiz",
              questions: [
                { id: "q1", question: "Pseudo-class kaunsa symbol use karti hai?", options: ["::", ":", "!!", "##"], correctAnswer: 1, explanation: "Pseudo-class ek colon se start hoti hai." },
                { id: "q2", question: "Element ke baad content add karne ke liye kaunsa pseudo-element use hota hai?", options: ["::before", "::after", "::first", "::last"], correctAnswer: 1, explanation: "::after element ke baad content add karta hai." },
              ],
            },
          },
          duration: "15 min",
        },
        {
          id: "css-project",
          title: "Project - Responsive Website",
          description: "CSS ka use karke ek responsive website banayein",
          order: 3,
          content: {
            introduction: "Ab hum ek complete responsive website banayenge jisme CSS ke sabhi important concepts ka use karenge.",
            sections: [
              { title: "Project Overview", explanation: "Hum ek portfolio website banayenge jisme hero section, about, services, team, testimonials, contact form aur footer hoga. Fully responsive hoga.", example: "Sections: Hero -> About -> Services -> Team -> Contact -> Footer" },
              { title: "Implementation", explanation: "CSS Grid se main layout. Flexbox se internal components. Custom properties se theme. Media queries se responsiveness. Animations se micro-interactions.", example: "Mobile: single column. Tablet: 2 columns. Desktop: 3-4 columns." },
            ],
            codeExamples: [
              { title: "Website CSS Structure", language: "css", code: ":root {\n    --primary: #2563eb;\n    --dark: #1e293b;\n    --light: #f8fafc;\n}\n* { margin: 0; padding: 0; box-sizing: border-box; }\n.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }\n.hero { height: 100vh; display: flex; align-items: center; background: linear-gradient(135deg, var(--primary), #1e40af); }\n.services {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px;\n}", output: "Ye ek professional website ka CSS structure hai." },
            ],
            notes: ["CSS Grid se main layout banayein", "Flexbox se inner components align karein", "Custom properties se theme manage karein", "Media queries se responsiveness ensure karein"],
            commonMistakes: [{ mistake: "Sirf desktop version banana", correction: "Hamesha mobile-first approach use karein" }],
            interviewQuestions: ["Aap responsive design kaise implement karenge?", "CSS Grid aur Flexbox ka combination kaise use karenge?"],
            practiceExercises: [{ question: "Ek 5-section responsive website banaye CSS Grid aur Flexbox ke combination se.", difficulty: "hard" }],
            quiz: {
              id: "quiz-css-project", title: "CSS Project Quiz",
              questions: [
                { id: "q1", question: "Responsive layout ke liye best approach kaunsa hai?", options: ["Desktop-first", "Mobile-first", "Tablet-first", "All at once"], correctAnswer: 1, explanation: "Mobile-first approach best practice hai." },
              ],
            },
          },
          duration: "30 min",
        },
      ],
    },
  ],
}
