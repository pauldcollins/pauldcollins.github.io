angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"section-container\">\n" +
    "  <!--FRONT END DEVELOPMENT-->\n" +
    "  <section id=\"front-end-development\" class=\"title-area\">\n" +
    "    <div class=\"container column text\"><h1>Front End Development</h1></div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"https://coles.com.au\" target=\"_blank\"\n" +
    "          ><img src=\"assets/images/frontEnd/frontEndColes.png\" alt=\"Coles\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"https://coles.com.au\" target=\"_blank\">Coles</a>\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          At Coles I worked as a UI Consultant, assisting multiple teams in\n" +
    "          improve the UX and UI quality of their apps. This involved me working closely\n" +
    "          with both the <strong>Design and Development</strong> teams.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          My role was to assist implementing the Coles Style Guide into an\n" +
    "          <strong>Oracle APEX app</strong>. This required refactoring of existing\n" +
    "          Oracle components using <strong>CSS, HTML</strong> and <strong>Javascript</strong>,\n" +
    "          as well as designing and building new components, where none currently existed.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          Another large part of my role was curating User Experience across the platforms. This\n" +
    "          meant attending business meetings to gather requirements and building out Wireframes. It\n" +
    "          also involved me creating UX/UI documentation and training the devs on Front End coding standards.\n" +
    "        </p>\n" +
    "        <p>My role was also to audit the apps for Accessibility and fix any code defects.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"https://good.work/\" target=\"_blank\"\n" +
    "          ><img src=\"assets/images/frontEnd/frontEndGoodwork.jpg\" alt=\"Goodwork\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"https://good.work/\" target=\"_blank\">goodwork</a>\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          At goodwork, I am worked with small team to build a\n" +
    "          <strong>React Native</strong> Mobile project. We launched early in\n" +
    "          2018 and gained <strong>20,000 users in 6 months</strong>.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          My role was heavily product focused and I worked closely with Design and\n" +
    "          UX to\n" +
    "          <strong>analyse data, do user research, build prototypes</strong>,\n" +
    "          then finally build out the components and features that\n" +
    "          <strong>our members wanted</strong>!\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          The site is built using\n" +
    "          <strong>React Native, Redux and Node JS</strong> for the backend.\n" +
    "          Challenges overcome have included learning mobile app development and\n" +
    "          getting to know our customers well enough\n" +
    "          <strong>to be able to support their needs</strong>.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"https://map.what3words.com\" target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/frontEnd/frontEndWhat3Words.jpg\"\n" +
    "            alt=\"What3words\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"https://map.what3words.com\" target=\"_blank\"\n" +
    "            >What3words Map Site</a\n" +
    "          >\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          This was a custom map site I built as an\n" +
    "          <strong>Interactive Web Developer</strong> for the navigation startup\n" +
    "          <strong>What3words</strong>.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <strong>React app using a Storybook library of components</strong>.\n" +
    "          Worked closely with the Design team to create the components, design\n" +
    "          interactions and animations. Challenges included detailed integration\n" +
    "          of several map APIs, including\n" +
    "          <strong>Google Maps, Esri and Mapbox</strong> and laying the\n" +
    "          What3Words grid and pin over them. The site and components were made\n" +
    "          to be responsive on all devices.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"https://altvr.com\" target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/frontEnd/frontEndAltspaceVR.jpg\"\n" +
    "            alt=\"Altspace VR\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"http://nab.com.au\" target=\"_blank\">Altspace VR</a>\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          This is a prototype I designed and built for the admin section of a\n" +
    "          Virtual Reality App. It's built using\n" +
    "          <strong>ReactJS, HTML</strong> &amp; <strong>CSS</strong>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          The old design needed rehashing, so I worked on testing the\n" +
    "          <strong>UX</strong> and designing the look and feel, to make it better\n" +
    "          for the end user.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"http://anz.com.au\" target=\"_blank\"\n" +
    "          ><img src=\"assets/images/frontEnd/frontEndANZ.jpg\" alt=\"ANZ\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"http://anz.com.au\" target=\"_blank\"\n" +
    "            >ANZ - Know Your Customer</a\n" +
    "          >\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          Here I worked with 5 Front End Engineers to build internal banking\n" +
    "          sofware, enabling staff to add and edit new customers. The software\n" +
    "          was built using <strong>Angular</strong> and\n" +
    "          <strong>Webpack</strong> on a <strong>JAVA</strong> platform.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          The software was internal and limited to\n" +
    "          <strong>working on IE8</strong>, which meant we spent a lot of time\n" +
    "          handling performance issues and working with the\n" +
    "          <strong>JS profiler</strong> and <strong>flame graph</strong> to speed\n" +
    "          up the site.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"https://github.com/pauldcollins/es6-quote-wall\" target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/frontEnd/frontEndQuoteWall.jpg\"\n" +
    "            alt=\"Quote Wall\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a\n" +
    "            href=\"https://github.com/pauldcollins/es6-quote-wall\"\n" +
    "            target=\"_blank\"\n" +
    "            >Quote Wall</a\n" +
    "          >\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          <strong>Fun project:</strong> A wall of quotes. Basic\n" +
    "          <strong>MVC</strong> pattern, built using\n" +
    "          <strong>ES6 classes</strong> and some <strong>Flexbox CSS</strong>.\n" +
    "          Just barebones Javascript, with a little help from JQuery for\n" +
    "          animation.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"http://app.outreached.com.au/\" target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/frontEnd/frontEndOutreached.jpg\"\n" +
    "            alt=\"Quote Wall\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"http://app.outreached.com.au/\" target=\"_blank\">Outreached</a>\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          For a new startup, I built a working prototype for a social media\n" +
    "          campaign manager. We used the\n" +
    "          <a\n" +
    "            href=\"https://wrapbootstrap.com/theme/homer-responsive-admin-theme-WB055J451\"\n" +
    "            >Homer theme</a\n" +
    "          >\n" +
    "          so we could set up quickly and build out components fast. I did the\n" +
    "          <strong>UX Design</strong> and customised the theme using\n" +
    "          <strong>Angular, CSS, HTML, Bootstrap</strong>. It was Optimised for\n" +
    "          iPad and web.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          We were working to a tight deadline and it was getting tested by a\n" +
    "          client as we built, so I could\n" +
    "          <strong>get instant feedback and push changes straight away</strong>.\n" +
    "          On this project I learned the importance of not always being fussy\n" +
    "          about code in the interest of iterating quickly!\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"http://stopphubbing.com/\" target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/frontEnd/frontEndStopPhubbing.jpg\"\n" +
    "            alt=\"Stop Phubbing\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"http://stopphubbing.com/\" target=\"_blank\">Stop Phubbing</a>\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          Stop Phubbing was a fun project I took over and completed as the sole\n" +
    "          Front End Dev. The idea was to bring awareness to \"the act of snubbing\n" +
    "          someone in a social setting by looking at your phone instead of paying\n" +
    "          attention\".\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          I built the site animation using a combination of\n" +
    "          <strong>JQuery, CSS and HTML5</strong>.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a\n" +
    "          href=\"http://www.commotioncreative.com.au/master-your-myki/\"\n" +
    "          target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/frontEnd/frontEndMyki.jpg\"\n" +
    "            alt=\"Master Your Myki\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a\n" +
    "            href=\"http://www.commotioncreative.com.au/master-your-myki/\"\n" +
    "            target=\"_blank\"\n" +
    "            >Master Your Myki</a\n" +
    "          >\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          <strong>Mobile first</strong> website designed to help people on the\n" +
    "          go master Melbourne's complex transport system! I was the sole\n" +
    "          developer, building the responsive site using\n" +
    "          <strong>HMTL, JAVA, CSS</strong> and <strong>Google Maps</strong>.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          The site needed to be performant on mobile, so I setup\n" +
    "          <strong>CSS Sprites</strong> and build tools to optimise all files.\n" +
    "          (This was before service workers were an option).\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          There was a tight deadline of <strong>2 weeks</strong>, but along with\n" +
    "          the <strong>designer</strong> and <strong>project manager</strong>, we\n" +
    "          had the site built, tested and live in time for the advertising\n" +
    "          campaign.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"https://wilsonstorage.com.au/\" target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/frontEnd/frontEndWilsonStorage.jpg\"\n" +
    "            alt=\"Wilson Storage\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"https://wilsonstorage.com.au/\" target=\"_blank\"\n" +
    "            >Wilson Storage</a\n" +
    "          >\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          This was a <strong>Wordpress</strong> project I took over and\n" +
    "          completed as lead developer.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          I built the app using <strong>Jquery, CSS and HTML5</strong> and\n" +
    "          integrated various plugins for Wordpress.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--UX DESIGN-->\n" +
    "  <section id=\"ux-design\" class=\"title-area\">\n" +
    "    <div class=\"container column text\">\n" +
    "      <h1>UX & Virtual Reality Design</h1>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--intro-->\n" +
    "  <section class=\"intro\">\n" +
    "    <p>\n" +
    "      In 2017, I did a 12 week course in <strong>VR Design</strong>. The course\n" +
    "      covered the <strong>fundamentals of VR Design</strong> and we built a\n" +
    "      project using Unity which we presented to a tech meetup at the end of the\n" +
    "      12 weeks.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      I am currently working on a <strong>VR Meditation app</strong> with my\n" +
    "      classmate. It's built using Unity.\n" +
    "    </p>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a\n" +
    "          href=\"assets/images/ux-design/craft-fare-presentation.pdf\"\n" +
    "          target=\"_blank\"\n" +
    "          title=\"PDF Link\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/ux-design/craft-fare-image.jpg\"\n" +
    "            alt=\"Craft Fare\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a\n" +
    "            href=\"assets/images/ux-design/craft-fare-presentation.pdf\"\n" +
    "            target=\"_blank\"\n" +
    "            title=\"PDF Link\"\n" +
    "            >Case study - Craft fare</a\n" +
    "          >\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          Starting Feb 2015, I studied course in UX Design at\n" +
    "          <a href=\"https://generalassemb.ly/melbourne\" target=\"_blank\"\n" +
    "            >General Assembly</a\n" +
    "          >\n" +
    "          for 12 weeks. I created an app called <strong>\"Craft Fare\"</strong>,\n" +
    "          which people could use to match beer and food. As part of the course,\n" +
    "          I applied a range of UX principles to my project, resulting in a final\n" +
    "          document of work.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <a\n" +
    "            href=\"assets/images/ux-design/craft-fare-presentation.pdf\"\n" +
    "            target=\"_blank\"\n" +
    "            title=\"PDF Link\"\n" +
    "            >Click here to view my presentation</a\n" +
    "          >\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--ACCESSIBILITY-->\n" +
    "  <section id=\"accessibility\" class=\"title-area\">\n" +
    "    <div class=\"container column text\"><h1>Accessibility</h1></div>\n" +
    "  </section>\n" +
    "  <!--intro-->\n" +
    "  <section class=\"intro\">\n" +
    "    <p>\n" +
    "      In my second web role, way back in 2003, (yes that long ago!), I ran our\n" +
    "      site through the\n" +
    "      <a href=\"http://www.coggan.com/bobby-approved.html\" target=\"_blank\"\n" +
    "        >Bobby validator</a\n" +
    "      >\n" +
    "      and <a href=\"https://validator.w3.org/\" target=\"_blank\">W3C Validator</a>,\n" +
    "      quickly learning that our site didn't comply with basic coding standards,\n" +
    "      <strong>let alone was it accessible</strong>. I convinced my boss to send\n" +
    "      me on an accessibility training course, achieved my certificate, then\n" +
    "      <strong>trained our team of 40 plus staff</strong>, including front and\n" +
    "      back end developers, project managers and the like.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      I've since always tried to advocate for accessibility in my projects and\n" +
    "      worked on sites that are both <strong>AA and AAA compliant</strong>. More\n" +
    "      recently, I've begun to teach accessibility and present at meetups.\n" +
    "    </p>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"http://nab.com.au\" target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/frontEnd/frontEndNAB.jpg\"\n" +
    "            alt=\"NAB Internet Banking\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"http://nab.com.au\" target=\"_blank\">NAB Internet Banking</a>\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          Here I worked on one of four Agile squads to completely rebuild NAB's\n" +
    "          Internet Banking website. The site was built using\n" +
    "          <strong>Angular, Redux, Bootstrap &amp; Webpack</strong>.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          Meeting accessibility was a challenge for both the testing and\n" +
    "          development teams when I arrived. I took the lead and trained other\n" +
    "          developers on <strong>HTML/CSS standards</strong> and\n" +
    "          <strong>Accessibility</strong>, working as a bridge between the\n" +
    "          Accessibility testing team and the 5 front end dev squads. I ran\n" +
    "          workshops on Accessibility and also implemented an Accesibility\n" +
    "          testing framework - <strong>Axe Core</strong>, across the project, to\n" +
    "          ensure we were meeting requirements even after I moved on.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a\n" +
    "          href=\"https://www.actiononhearingloss.org.uk/default.aspx\"\n" +
    "          target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/accessibility/rnid.jpg\"\n" +
    "            alt=\"Action on Hearing Loss website\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a\n" +
    "            href=\"https://www.actiononhearingloss.org.uk/default.aspx\"\n" +
    "            target=\"_blank\"\n" +
    "            >Action on hearing loss</a\n" +
    "          >\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          I worked for 8 months on the previous website for the\n" +
    "          <strong>Royal National Institute for the Deaf</strong>, now known as\n" +
    "          <strong>Action on Hearing Loss</strong>. The site needed to be AAA\n" +
    "          compliant for it's audience.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          We worked hard to make sure the site was accessible to all. On top of\n" +
    "          the AA accessibility requirements, we also added video captioning,\n" +
    "          sign language interpretation and regularly user tested as we\n" +
    "          progressed. I was proud of the end product and the\n" +
    "          <acronym title=\"Royal National Institute for the Deaf\">RNID</acronym>\n" +
    "          received critical acclaim for the site.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <a\n" +
    "            href=\"https://www.actiononhearingloss.org.uk/default.aspx\"\n" +
    "            target=\"_blank\"\n" +
    "            >Click here to view the Action Hearing Loss website</a\n" +
    "          >\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--project-->\n" +
    "  <section class=\"image left-image\">\n" +
    "    <div class=\"container\">\n" +
    "      <p class=\"col-md-3 image\">\n" +
    "        <a href=\"http://www.medibank.com.au/about\" target=\"_blank\"\n" +
    "          ><img\n" +
    "            src=\"assets/images/frontEnd/frontEndMedibankAboutUs.jpg\"\n" +
    "            alt=\"Medibank\"\n" +
    "        /></a>\n" +
    "      </p>\n" +
    "      <div class=\"col-md-9 text-area\">\n" +
    "        <h2 class=\"mainTitle\">\n" +
    "          <a href=\"http://www.medibank.com.au/about\" target=\"_blank\"\n" +
    "            >Medibank - About Us</a\n" +
    "          >\n" +
    "        </h2>\n" +
    "        <p>\n" +
    "          Here I was the lead Front End Developer for the first section released\n" +
    "          on Medibank's new <strong>Java/Adobe CQ5 Platform</strong>.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          The site was built to be AA compliant with a responsive front end. I\n" +
    "          created new, reusable components for the style guide that conformed to\n" +
    "          a <strong>AA rating for WCAG 2.0</strong>. We collaborated in an Agile\n" +
    "          team using JIRA &amp; Stash.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <!--TEACHING, TALKS, PUBLICATIONS-->\n" +
    "  <section id=\"teachings\" class=\"title-area\">\n" +
    "    <div class=\"container column text\">\n" +
    "      <h1>Teaching, Talks, Publications</h1>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <!--intro-->\n" +
    "  <section>\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <h2>Teaching</h2>\n" +
    "      <dl>\n" +
    "        <dt>\"Introduction to Web Accessibility\"</dt>\n" +
    "        <dd>\n" +
    "          3 Hour workshop at General Assembly Melbourne.<br />Taught on March\n" +
    "          and July 2016<br />\n" +
    "          <a target=\"_blank\" href=\"http://ga.co/1oDoDTZ\"\n" +
    "            >View introduction to accessibility course</a\n" +
    "          >\n" +
    "        </dd>\n" +
    "      </dl>\n" +
    "\n" +
    "      <h2>Publications</h2>\n" +
    "      <dl>\n" +
    "        <dt>\"9 Ways Facebook Can Improve Accessibility\"</dt>\n" +
    "        <dd>\n" +
    "          <a\n" +
    "            target=\"_blank\"\n" +
    "            href=\"https://medium.com/@pcollins/9-ways-facebook-can-improve-accessibility-aa193ee7591a#.v5kq62ggo\"\n" +
    "            >Read article: 9 ways Facebook can improve accessibility</a\n" +
    "          >\n" +
    "        </dd>\n" +
    "        <dt>\"5 Awesome Things Facebook is Doing for Accessibility\"</dt>\n" +
    "        <dd>\n" +
    "          <a\n" +
    "            target=\"_blank\"\n" +
    "            href=\"https://medium.com/@pcollins/5-awesome-things-facebook-is-doing-for-accessibility-d329e390c6b4\"\n" +
    "            >Read article: 5 Awesome Things Facebook is Doing for\n" +
    "            Accessibility</a\n" +
    "          >\n" +
    "        </dd>\n" +
    "        <dt>\n" +
    "          \"WAI-ARIA Compliant, Accessibile Form Validation: How To Do It Simple\n" +
    "          and Well\"\n" +
    "        </dt>\n" +
    "        <dd>\n" +
    "          <a\n" +
    "            target=\"_blank\"\n" +
    "            href=\"https://medium.com/@pcollins/wai-aria-compliant-accessibile-form-validation-how-to-do-it-simple-and-well-d07e5917b048\"\n" +
    "            >WAI-ARIA Compliant, Accessibile Form Validation: How To Do It\n" +
    "            Simple and Well</a\n" +
    "          >\n" +
    "        </dd>\n" +
    "        <dt>\"5 Ways Virtual Reality will be great for accessibility\"</dt>\n" +
    "        <dd>\n" +
    "          <a\n" +
    "            target=\"_blank\"\n" +
    "            href=\"https://medium.com/@pcollins/5-ways-virtual-reality-will-be-great-for-accessibility-74c49a9adf57\"\n" +
    "            >5 Ways Virtual Reality will be great for accessibility.</a\n" +
    "          >\n" +
    "        </dd>\n" +
    "      </dl>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <h2>Presentations</h2>\n" +
    "      <dl>\n" +
    "        <dt>\"Accessibility Testing Tools\"</dt>\n" +
    "        <dd>\n" +
    "          A11y Bytes, May 2016<br />\n" +
    "          <a href=\"http://a11ybytes.org/melbourne/\" target=\"_blank\"\n" +
    "            >View A11y Bytes website</a\n" +
    "          ><br />\n" +
    "          <a\n" +
    "            href=\"http://pauldcollins.github.io/assets/presentations/a11yBytes/\"\n" +
    "            target=\"_blank\"\n" +
    "            >View accessibility testing tools presentation</a\n" +
    "          >\n" +
    "        </dd>\n" +
    "        <dt>\"Using ARIA in depth\"</dt>\n" +
    "        <dd>\n" +
    "          Odecee Brownbag, March 2016<br />\n" +
    "          <a\n" +
    "            href=\"assets/images/teaching/Web-Accessibility-Paul-Collins.pdf\"\n" +
    "            target=\"_blank\"\n" +
    "            >View using ARIA in depth presentation (PDF)</a\n" +
    "          >\n" +
    "        </dd>\n" +
    "      </dl>\n" +
    "    </div>\n" +
    "    <div class=\"clear\"></div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "");
}]);
