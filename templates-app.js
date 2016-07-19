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
    "\n" +
    "<div class=\"section-container\">\n" +
    "\n" +
    "\n" +
    "<!--FRONT END DEVELOPMENT-->\n" +
    "	<section id=\"front-end-development\" class=\"title-area\">\n" +
    "		<div class=\"container column text\">\n" +
    "			<h1>Front End Development</h1>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">						\n" +
    "			<p class=\"col-md-3 image\"><a href=\"http://anz.com.au\" target=\"_blank\"><img src=\"assets/images/frontEnd/frontEndANZ.jpg\" alt=\"Quote Wall\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"http://anz.com.au\" target=\"_blank\">ANZ - Know Your Customer</a></h2>\n" +
    "				<p>Here, in a team of 5 Front End Engineers, I built internal banking sofware, to add new customers. The software was built using <strong>Angular</strong> and <strong>Webpack</strong> on a <strong>JAVA</strong> platform.</p>\n" +
    "				<p>Being internal, the software was limited to working on IE8, which meant we spent a lot of time handling performance issues and working with the <strong>JS profiler</strong> and <strong>flame graph</strong> to speed up the site.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>			\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">						\n" +
    "			<p class=\"col-md-3 image\"><a href=\"https://github.com/pauldcollins/es6-quote-wall\" target=\"_blank\"><img src=\"assets/images/frontEnd/frontEndQuoteWall.jpg\" alt=\"Quote Wall\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"https://github.com/pauldcollins/es6-quote-wall\" target=\"_blank\">Quote Wall</a></h2>\n" +
    "				<p><strong>Fun project:</strong> A wall of quotes, basic <strong>MVC</strong> built using <strong>ES6 classes</strong> and some <strong>Flexbox CSS</strong>. Just barebones Javascript, with a little help from JQuery for animation.</p>\n" +
    "			</div>			\n" +
    "		</div>\n" +
    "	</section>		\n" +
    "<!--project-->\n" +
    "	<section class=\"image\">	\n" +
    "		<div class=\"container\">						\n" +
    "			<div class=\"col-md-12 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"http://www.medibank.com.au/about\" target=\"_blank\">Tranport ordering system</a></h2>\n" +
    "				<p><strong>(Subject to NDA)</strong></p>\n" +
    "				<p>Lead <strong>Angular</strong> developer on 5 month project, building a complete ordering system on JAVA platform. Setup of user roles and authentication, real time push notifications using <strong>Atmosphere JS</strong>, connecting to web services via a <strong>JSON RESTful API</strong>.</p>\n" +
    "				<p>Other tech used: <strong>HTML, CSS, Grunt, Require.js, Bootstrap, Kendo, Node, Bower</strong>. </p>\n" +
    "			</div>			\n" +
    "		</div>\n" +
    "	</section>	\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">				\n" +
    "			<p class=\"col-md-3 image\"><a href=\"http://stopphubbing.com/\" target=\"_blank\"><img src=\"assets/images/frontEnd/frontEndStopPhubbing.jpg\" alt=\"Stop Phubbing\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"http://stopphubbing.com/\" target=\"_blank\">Stop Phubbing</a></h2>\n" +
    "				<p>Stop Phubbing was a fun project I took over and completed as the sole Front End Dev. The idea was to bring awareness to \"the act of snubbing someone in a social setting by looking at your phone instead of paying attention\".</p>\n" +
    "				<p>I built the site animation using a combination of <strong>JQuery, CSS and HTML5</strong>.</p>\n" +
    "			</div>			\n" +
    "		</div>				\n" +
    "	</section>		\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">				\n" +
    "			<p class=\"col-md-3 image\"><a href=\"http://www.medibank.com.au/about/investor-centre\" target=\"_blank\"><img src=\"assets/images/frontEnd/frontEndMedibankInvestor.jpg\" alt=\"Medibank\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"http://www.medibank.com.au/about/investor-centre\" target=\"_blank\">Medibank - Investor Centre</a></h2>\n" +
    "				<p>Here I was also the lead Front End Developer for the newly floated Medibank investor centre site, built on a <strong>Java/Adobe CQ5 Platform</strong>.</p>\n" +
    "				<p>The responsive front end was also built using components I created for the style guide, which we again integrated into CQ5 templates.</p>\n" +
    "				<p>The site used <strong>Iguana</strong> to bring in all the ASX share information and I worked with their team to customise how the data was presented.</p>\n" +
    "			</div>			\n" +
    "		</div>				\n" +
    "	</section>\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">				\n" +
    "			<p class=\"col-md-3 image\"><a href=\"http://www.commotioncreative.com.au/master-your-myki/\" target=\"_blank\"><img src=\"assets/images/frontEnd/frontEndMyki.jpg\" alt=\"Master Your Myki\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"http://www.commotioncreative.com.au/master-your-myki/\" target=\"_blank\">Master Your Myki</a></h2>\n" +
    "				<p><strong>Mobile first</strong> website designed to help people on the go master Melbourne's complex transport system! I was the sole developer, building the responsive site using <strong>HMTL, JAVA, CSS</strong> and <strong>Google Maps</strong>.</p>\n" +
    "				<p>The site needed to be performant on mobile, so I setup <strong>CSS Sprites</strong> and build tools to optimise all files. (This was before service workers were an option).</p>\n" +
    "				<p>There was a tight deadline of <strong>2 weeks</strong>, but along with the <strong>designer</strong> and <strong>project manager</strong>, we made it and had the site tested in time for the advertising campaign.</p>\n" +
    "			</div>			\n" +
    "		</div>				\n" +
    "	</section>	\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">				\n" +
    "			<p class=\"col-md-3 image\"><a href=\"http://www.medibank.com.au/healthcover/health-cover-health-check.aspx\" target=\"_blank\"><img src=\"assets/images/frontEnd/frontEndMedibankHealthCheck.jpg\" alt=\"Medibank\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"http://www.medibank.com.au/healthcover/health-cover-health-check.aspx\" target=\"_blank\">Medibank - Health Cover Health Check</a></h2>\n" +
    "				<p>This was a single page app I built for potential customers to weigh up their current health plans against a Medibank one.</p>\n" +
    "				<p>I built the app using a combination of <strong>JQuery, CSS and HTML5</strong>. The backend was a <strong>.NET</strong> environment and I worked with the developers to integrate the page.</p>\n" +
    "			</div>			\n" +
    "		</div>				\n" +
    "	</section>	\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">				\n" +
    "			<p class=\"col-md-3 image\"><a href=\"https://wilsonstorage.com.au/\" target=\"_blank\"><img src=\"assets/images/frontEnd/frontEndWilsonStorage.jpg\" alt=\"Wilson Storage\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"https://wilsonstorage.com.au/\" target=\"_blank\">Wilson Storage</a></h2>\n" +
    "				<p>This was a <strong>Wordpress</strong> project I took over and completed as lead developer.</p>\n" +
    "				<p>I built the app using <strong>Jquery, CSS and HTML5</strong> and integrated various plugins for Wordpress.</p>\n" +
    "			</div>			\n" +
    "		</div>				\n" +
    "	</section>		\n" +
    "\n" +
    "\n" +
    "<!--UX DESIGN-->\n" +
    "	<section id=\"ux-design\" class=\"title-area\">\n" +
    "		<div class=\"container column text\">\n" +
    "			<h1>UX Design</h1>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">				\n" +
    "			<p class=\"col-md-3 image\"><a href=\"assets/images/ux-design/craft-fare-presentation.pdf\" target=\"_blank\" title=\"PDF Link\"><img src=\"assets/images/ux-design/craft-fare-image.jpg\" alt=\"Craft Fare\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"assets/images/ux-design/craft-fare-presentation.pdf\" target=\"_blank\" title=\"PDF Link\">Case study - Craft fare</a></h2>\n" +
    "				<p>Starting Feb 2015, I studied course in UX Design at <a href=\"https://generalassemb.ly/melbourne\" target=\"_blank\">General Assembly</a> for 12 weeks. I created an app called <strong>\"Craft Fare\"</strong>, which people could use to match beer and food. As part of the course, I applied a range of UX principles to my project, resulting in a final document of work.</p>\n" +
    "				<p><a href=\"assets/images/ux-design/craft-fare-presentation.pdf\" target=\"_blank\" title=\"PDF Link\">Click here to view my presentation</a></p>\n" +
    "			</div>			\n" +
    "		</div>				\n" +
    "	</section>\n" +
    "\n" +
    "\n" +
    "<!--ACCESSIBILITY-->\n" +
    "	<section id=\"accessibility\" class=\"title-area\">\n" +
    "		<div class=\"container column text\">\n" +
    "			<h1>Accessibility</h1>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "<!--intro-->\n" +
    "	<section class=\"intro\">\n" +
    "		<p>\n" +
    "			In my second web role, way back in 2003, (yes that long ago!), I ran our site through the <a href=\"http://www.coggan.com/bobby-approved.html\" target=\"_blank\">Bobby validator</a> and <a href=\"https://validator.w3.org/\" target=\"_blank\">W3C Validator</a>, quickly learning that our site didn't comply with basic coding standards, <strong>let alone was it accessible</strong>. I convinced my boss to send me on an accessibility training course, achieved my certificate, then <strong>trained our team of 40 plus staff</strong>, including front and back end developers, project managers and the like.\n" +
    "		</p>\n" +
    "		<p>\n" +
    "			I've since always tried to advocate for accessibility in my projects and worked on sites that are both AA and AAA compliant. More recently, I've begun to teach accessibility and present at meetups.\n" +
    "		</p>\n" +
    "	</section>\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">				\n" +
    "			<p class=\"col-md-3 image\"><a href=\"https://www.actiononhearingloss.org.uk/default.aspx\" target=\"_blank\"><img src=\"assets/images/accessibility/rnid.jpg\" alt=\"Action on Hearing Loss website\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"https://www.actiononhearingloss.org.uk/default.aspx\" target=\"_blank\">Action on hearing loss</a></h2>\n" +
    "				<p>I worked for 8 months on the previous website for the <strong>Royal National Institute for the Deaf</strong>, now known as <strong>Action on Hearing Loss</strong>. The site needed to be AAA compliant for it's audience.</p>\n" +
    "				<p>We worked hard to make sure the site was accessible to all. On top of the AA accessibility requirements, we also added video captioning, sign language interpretation and regularly user tested as we progressed. I was proud of the end product and the <acronym title=\"Royal National Institute for the Deaf\">RNID</acronym> received critical acclaim for the site.</p>\n" +
    "				<p><a href=\"https://www.actiononhearingloss.org.uk/default.aspx\" target=\"_blank\">Click here to view the Action Hearing Loss website</a></p>\n" +
    "			</div>			\n" +
    "		</div>				\n" +
    "	</section>\n" +
    "<!--project-->\n" +
    "	<section class=\"image left-image\">	\n" +
    "		<div class=\"container\">				\n" +
    "			<p class=\"col-md-3 image\"><a href=\"http://www.medibank.com.au/about\" target=\"_blank\"><img src=\"assets/images/frontEnd/frontEndMedibankAboutUs.jpg\" alt=\"Medibank\"></a></p>			\n" +
    "			<div class=\"col-md-9 text-area\">\n" +
    "				<h2 class=\"mainTitle\"><a href=\"http://www.medibank.com.au/about\" target=\"_blank\">Medibank - About Us</a></h2>\n" +
    "				<p>Here I was the lead Front End Developer for the first section released on Medibank's new <strong>Java/Adobe CQ5 Platform</strong>.</p>\n" +
    "				<p>The site was built to be AA compliant with a responsive front end. I created new, reusable components for the style guide that conformed to a <strong>AA rating for WCAG 2.0</strong>. We collaborated in an Agile team using JIRA &amp; Stash.</p>\n" +
    "			</div>			\n" +
    "		</div>				\n" +
    "	</section>\n" +
    "\n" +
    "\n" +
    "<!--TEACHING, TALKS, PUBLICATIONS-->\n" +
    "	<section id=\"teachings\" class=\"title-area\">\n" +
    "		<div class=\"container column text\">\n" +
    "			<h1>Teaching, Talks, Publications</h1>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "<!--intro-->\n" +
    "	<section>\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<h2>Teaching</h2>\n" +
    "			<dl>\n" +
    "				<dt>\"Introduction to Web Accessibility\"</dt>\n" +
    "				<dd>\n" +
    "					3 Hour workshop at General Assembly Melbourne.<br>Taught on March and July 2016<br>\n" +
    "					<a target=\"_blank\" href=\"http://ga.co/1oDoDTZ\">View introduction to accessibility course</a>\n" +
    "				</dd>\n" +
    "			</dl>\n" +
    "\n" +
    "			<h2>Publications</h2>\n" +
    "			<dl>\n" +
    "				<dt>\"9 Ways Facebook Can Improve Accessibility\"</dt>\n" +
    "				<dd>					\n" +
    "					<a target=\"_blank\" href=\"https://medium.com/@pcollins/9-ways-facebook-can-improve-accessibility-aa193ee7591a#.v5kq62ggo\">Read article: 9 ways Facebook can improve accessibility</a>\n" +
    "				</dd>\n" +
    "				<dt>\"5 Awesome Things Facebook is Doing for Accessibility\"</dt>\n" +
    "				<dd>					\n" +
    "					<a target=\"_blank\" href=\"https://medium.com/@pcollins/5-awesome-things-facebook-is-doing-for-accessibility-d329e390c6b4\">Read article: 5 Awesome Things Facebook is Doing for Accessibility</a>\n" +
    "				</dd>				\n" +
    "			</dl>			\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<h2>Presentations</h2>\n" +
    "			<dl>\n" +
    "				<dt>\"Accessibility Testing Tools\"</dt>\n" +
    "				<dd>\n" +
    "					A11y Bytes, May 2016<br>\n" +
    "					<a href=\"http://a11ybytes.org/melbourne/\" target=\"_blank\">View A11y Bytes website</a><br>\n" +
    "					<a href=\"http://pauldcollins.github.io/presentations/a11yBytes/\" target=\"_blank\">View accessibility testing tools presentation</a>\n" +
    "				</dd>\n" +
    "				<dt>\"Using ARIA in depth\"</dt>\n" +
    "				<dd>\n" +
    "					Odecee Brownbag, March 2016<br>\n" +
    "					<a href=\"assets/images/teaching/Web-Accessibility-Paul-Collins.pdf\" target=\"_blank\">View using ARIA in depth presentation (PDF)</a>\n" +
    "				</dd>\n" +
    "			</dl>\n" +
    "		</div>\n" +
    "		<div class=\"clear\"></div>\n" +
    "	</section>\n" +
    "\n" +
    "\n" +
    "<!--HOBBIES-->\n" +
    "	<section id=\"hobbies\" class=\"title-area\">\n" +
    "		<div class=\"container column text\">\n" +
    "			<h1>Hobbies</h1>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "<!--intro-->\n" +
    "	<section class=\"intro\">\n" +
    "		<p>\n" +
    "			When not doing digital, it's good to have another outlet!<br>\n" +
    "			Here are some of my paintings below...\n" +
    "		</p>\n" +
    "	</section>	\n" +
    "<!--image list-->\n" +
    "	<section class=\"image-list\">\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<p><img src=\"assets/images/hobbies/acland_street.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/bayswater.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/brighton.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/dublin.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/IMG_0298.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/IMG_1113.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/IMG_3376.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/IMG_3512.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/IMG_3725.jpg\" alt=\"\"></p>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<p><img src=\"assets/images/hobbies/IMG_4326.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/IMG_4982.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/IMG_5417.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/london.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/mitcham.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/nunnas_1.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/plaistow.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/westbourne_park.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/westbourne_tizer.jpg\" alt=\"\"></p>\n" +
    "			<p><img src=\"assets/images/hobbies/nunnas_2.jpg\" alt=\"\"></p>\n" +
    "<!-- 			<p><img src=\"assets/images/hobbies/IMG_3816.jpg\" alt=\"\"></p> -->\n" +
    "		</div>\n" +
    "	</section>	");
}]);
