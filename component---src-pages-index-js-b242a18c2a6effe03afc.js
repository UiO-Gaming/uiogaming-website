(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/PZL":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},"7FV1":function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n("q1tI"),c=(n("i8i4"),n("xFC4"),n("wT0s")),u=n("zPnG"),f=n("17x9"),d=n("Dy/p"),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool},m={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||u,f=function(t){function u(e){a(this,u);var t=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return m.call(t),t.state={active:!1},t}return l(u,t),o(u,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();c.isMounted(e)||c.mount(e),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,e)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var o in p)n.hasOwnProperty(o)&&delete n[o];return n.className=t,n.onClick=this.handleClick,s.createElement(e,n)}}]),u}(s.Component),m=function(){var e=this;this.scrollTo=function(t,o){n.scrollTo(t,r({},e.state,o))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var r=e.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var o=e.props.to,a=null,i=0,l=0,s=0;if(r.getBoundingClientRect)s=r.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(o)))return;var u=a.getBoundingClientRect();l=(i=u.top-s+t)+u.height}var f=t-e.props.offset,p=f>=Math.floor(i)&&f<Math.floor(l),m=f<Math.floor(i)||f>=Math.floor(l),h=n.getActiveLink();return m?(o===h&&n.setActiveLink(void 0),e.props.hashSpy&&d.getHash()===o&&d.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),c.updateStates()):p&&h!==o?(n.setActiveLink(o),e.props.hashSpy&&d.changeHash(o),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(o)),c.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return l(n,t),o(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(e){u.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return s.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(s.Component);return t.propTypes={name:f.string,id:f.string},t}};e.exports=m},"7wkA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n("q1tI")),a=i(n("pUFB"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return o.default.createElement("input",this.props,this.props.children)}}]),t}(o.default.Component);t.default=(0,a.default)(c)},"8QoP":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("QLqi"),o=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&o.forEach((function(t){return(0,r.addPassiveEventListener)(document,t,e)}))}}},"8ypT":function(e,t,n){},"Dy/p":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("QLqi");var r,o=n("xFC4"),a=(r=o)&&r.__esModule?r:{default:r};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var r=this.containers[e]||document;n.scrollTo(e,{container:r})}},getHash:function(){return a.default.getHash()},changeHash:function(e,t){this.isInitialized()&&a.default.getHash()!==e&&a.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=i},Fte6:function(e,t,n){e.exports=n.p+"static/placeholderImage-a5bbe21d3219aaced485b9ce92474246.png"},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.a.createContext&&o.a.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return function(t){return o.a.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return o.a.createElement(t.tag,l({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,r=e.attr,a=e.size,i=e.title,c=s(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&o.a.createElement("title",null,i),e.children)};return void 0!==i?o.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},NEP4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=(l(n("xFC4")),l(n("/PZL"))),a=l(n("8QoP")),i=l(n("QQPg"));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return o.default[e.smooth]||o.default.defaultEasing},c=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},u=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},f=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},d=function e(t,n,r){var o=n.data;if(n.ignoreCancelEvents||!o.cancel)if(o.delta=Math.round(o.targetPosition-o.startPosition),null===o.start&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var a=e.bind(null,t,n);c.call(window,a)}else i.default.registered.end&&i.default.registered.end(o.to,o.target,o.currentPosition);else i.default.registered.end&&i.default.registered.end(o.to,o.target,o.currentPositionY)},p=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},m=function(e,t,n,r){if(t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),a.default.subscribe((function(){t.data.cancel=!0})),p(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?u(t):f(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var o;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"==typeof(o=t.duration)?o:function(){return o})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=r;var l=s(t),m=d.bind(null,l,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),c.call(window,m)}),t.delay):(i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),c.call(window,m))}else i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},h=function(e){return(e=r({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:m,getAnimationType:s,scrollToTop:function(e){m(0,h(e))},scrollToBottom:function(e){e=h(e),p(e),m(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,r=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,r=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)}(e),e)},scrollTo:function(e,t){m(e,h(t))},scrollMore:function(e,t){t=h(t),p(t);var n=t.horizontal?u(t):f(t);m(e+n,t)}}},PGca:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI")),o=a(n("pUFB"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,o;i(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.render=function(){return r.default.createElement("a",o.props,o.props.children)},l(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.Component);t.default=(0,o.default)(s)},QLqi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var r=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,n,!!r&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},QQPg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={registered:{},scrollEvent:{register:function(e,t){r.registered[e]=t},remove:function(e){r.registered[e]=null}}};t.default=r},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("wEa+"),i=n.n(a),l=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"split footer-container"},o.a.createElement("div",{className:"split"},o.a.createElement("div",null,o.a.createElement("img",{src:i.a})),o.a.createElement("ul",{className:"remove-bullets"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://vedtekter.uiogaming.no"},"Vedtekter")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/UiO-Gaming/uiogaming-website/"},"Kildekode til nettside")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://uiogaming.sanity.studio/"},"Adminområdet")))),o.a.createElement("div",null,o.a.createElement("p",null,"Nettsiden er utviklet og driftet av foreningen")))))},s=(n("8ypT"),function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("main",null,t),o.a.createElement(l,null))}),c=n("vrFN"),u=n("oqc9"),f=function(){var e,t,n,r,a;return o.a.createElement("nav",null,o.a.createElement("ul",{className:"nav-content remove-bullets"},o.a.createElement("li",null,o.a.createElement(u.Link,((e={to:"om",smooth:!0,offset:50,duration:750,spy:!0}).smooth="easeInOutCubic",e),"Om")),o.a.createElement("li",null,o.a.createElement(u.Link,((t={to:"arrangementer",smooth:!0,offset:50,duration:750,spy:!0}).smooth="easeInOutCubic",t),"Arrangmenter")),o.a.createElement("li",null,o.a.createElement(u.Link,((n={to:"blogg",smooth:!0,offset:50,duration:750,spy:!0}).smooth="easeInOutCubic",n),"Blogg")),o.a.createElement("li",null,o.a.createElement(u.Link,((r={to:"styret",smooth:!0,offset:50,duration:750,spy:!0}).smooth="easeInOutCubic",r),"Styret")),o.a.createElement("li",null,o.a.createElement(u.Link,((a={to:"kontakt",smooth:!0,offset:50,duration:750,spy:!0}).smooth="easeInOutCubic",a),"Kontakt"))))},d=n("Fte6"),p=n.n(d),m=n("ma3e");t.default=function(e){var t=e.data;return o.a.createElement(s,null,o.a.createElement(c.a,{title:"UiO Gaming"}),o.a.createElement(f,null),o.a.createElement("header",{id:"hjem",className:"text-center"},o.a.createElement("div",{className:"header"},o.a.createElement("img",{src:i.a}),o.a.createElement("h1",null,"UiO Gaming"),o.a.createElement("p",null,"En hobbyforening som ønsker skape et sosialt miljø rundt gaming og E-sport på UiO"))),o.a.createElement("section",{id:"om"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"split"},o.a.createElement("div",{className:"split-image-container"},o.a.createElement("img",{className:"no-mobile",src:p.a})),o.a.createElement("div",null,o.a.createElement("h2",null,"Hvem er vi?"),o.a.createElement("p",null,"UiO Gaming er en forening med hovedfokus på å danne et inkluderende fellesskap rundt videospill og E-sport. Hos oss er det enkelt å skaffe seg venner, ettersom alle har felles interesser. Vi arrangerer ukentlige spillkvelder og fysiske sosiale arrangementer, som for eksempel brettspillkvelder og sosiale sammenkomster. Vår hovedkanal er en aktiv Discord-server hvor man kan møte nye folk med felles interesser og game med andre studenter."),o.a.createElement("div",{className:"join-button-container"},o.a.createElement("h3",null,"Interessert?"),o.a.createElement("a",{href:"https://discord.gg/556mseV",target:"_blank",className:"join-button"},"Bli med!")))))),o.a.createElement("section",{id:"arrangementer"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"split"},o.a.createElement("div",null,o.a.createElement("h2",null,"Kommende Arrangementer"),o.a.createElement("div",{className:"eventcard-container"},t.allSanityEvent.edges.filter((function(e){var t=e.node;return new Date(t.date).getTime()>Date.now()})).slice(0,2).map((function(e){var t=e.node;return o.a.createElement("a",{href:"event/"+t.slug.current},o.a.createElement("article",{className:"eventcard"},o.a.createElement("h3",null,t.title),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(m.g,null),o.a.createElement("p",null,t.location)),o.a.createElement("div",null,o.a.createElement(m.b,null),o.a.createElement("p",null,new Date(t.date).toLocaleString("nb-NO",{weekday:"long",year:"numeric",month:"long",day:"numeric"})))),o.a.createElement("p",null,t.body[0].children[0].text)))})))),o.a.createElement("div",null,o.a.createElement("img",{className:"no-mobile",src:p.a}))))),o.a.createElement("section",{id:"blogg"},o.a.createElement("div",{className:"container"},o.a.createElement("h2",{className:"text-center"},"Bloggen"),o.a.createElement("div",{className:"split blogcard-container"},t.allSanityPost.edges.map((function(e){var t=e.node;return o.a.createElement("a",{href:"blog/"+t.slug.current},o.a.createElement("article",{className:"split blogcard"},o.a.createElement("div",null,o.a.createElement("img",{src:p.a})),o.a.createElement("div",{className:"blogcard-content"},o.a.createElement("h3",null,t.title),o.a.createElement("div",{className:"blogcard-author"},o.a.createElement("img",{src:t.author.image.asset.fixed.src}),o.a.createElement("p",null,t.author.name)),o.a.createElement("p",null,"Publisert: ",o.a.createElement("time",null,t.publishedAt)),o.a.createElement("p",null,t.excerpt))))})),o.a.createElement("a",{href:"/blog"},"Se alle blogginnlegg")))),o.a.createElement("section",{id:"styret"},o.a.createElement("div",{className:"container"},o.a.createElement("h2",{className:"text-center"},"Styret"),o.a.createElement("div",{className:"membercard-container"},t.allSanityAuthor.edges.map((function(e){var t=e.node;return o.a.createElement("article",{className:"membercard"},o.a.createElement("div",{className:"split membercard-header"},o.a.createElement("img",{src:t.image.asset.fixed.src}),o.a.createElement("div",{className:"membercard-header-info"},o.a.createElement("h3",null,t.name),o.a.createElement("p",null,t.role))),o.a.createElement("p",null,t.bio[0].children[0].text),o.a.createElement("div",{className:"membercard-footer"},o.a.createElement("p",{className:"text-center"},t.email)))}))))),o.a.createElement("section",{id:"kontakt"},o.a.createElement("div",{className:"container"},o.a.createElement("h2",{className:"text-center"},"Finn oss"),o.a.createElement("div",{className:"contact-container"},o.a.createElement("div",{className:"contact"},o.a.createElement(m.a,null),o.a.createElement("a",{href:"mailto:styret.uiogaming@gmail.com",target:"_blank"},"E-post")),o.a.createElement("div",{className:"contact"},o.a.createElement(m.c,null),o.a.createElement("a",{href:"https://discord.gg/PqsgXbnds4",target:"_blank"},"Discord")),o.a.createElement("div",{className:"contact"},o.a.createElement(m.d,null),o.a.createElement("a",{href:"https://www.facebook.com/UiO-Gaming-113445760510985",target:"_blank"},"Facebook")),o.a.createElement("div",{className:"contact"},o.a.createElement(m.f,null),o.a.createElement("a",{href:"https://www.instagram.com/uio_gaming/",target:"_blank"},"Instagram")),o.a.createElement("div",{className:"contact"},o.a.createElement(m.e,null),o.a.createElement("a",{href:"https://github.com/UiO-Gaming",target:"_blank"},"GitHub"))))))}},Y30y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n("q1tI")),i=s(n("w2Tm")),l=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=r({},this.props);return t.parentBindings&&delete t.parentBindings,a.default.createElement("div",r({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);f.propTypes={name:l.default.string,id:l.default.string},t.default=(0,i.default)(f)},"hKI/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,c=l||s||Function("return this")(),u=Object.prototype.toString,f=Math.max,d=Math.min,p=function(){return c.Date.now()};function m(e,t,n){var r,o,a,i,l,s,c=0,u=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function b(e){return c=e,l=setTimeout(w,t),u?y(e):i}function E(e){var n=e-s;return void 0===s||n>=t||n<0||m&&e-c>=a}function w(){var e=p();if(E(e))return O(e);l=setTimeout(w,function(e){var n=t-(e-s);return m?d(n,a-(e-c)):n}(e))}function O(e){return l=void 0,g&&r?y(e):(r=o=void 0,i)}function S(){var e=p(),n=E(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return b(s);if(m)return l=setTimeout(w,t),y(s)}return void 0===l&&(l=setTimeout(w,t)),i}return t=v(t)||0,h(n)&&(u=!!n.leading,a=(m="maxWait"in n)?f(v(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},S.flush=function(){return void 0===l?i:O(p())},S}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=o.test(e);return l||a.test(e)?i(e.slice(2),l?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:r,maxWait:t,trailing:o})}}).call(this,n("yLpj"))},oqc9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Helpers=t.ScrollElement=t.ScrollLink=t.animateScroll=t.scrollSpy=t.Events=t.scroller=t.Element=t.Button=t.Link=void 0;var r=p(n("PGca")),o=p(n("7wkA")),a=p(n("Y30y")),i=p(n("zPnG")),l=p(n("QQPg")),s=p(n("wT0s")),c=p(n("NEP4")),u=p(n("pUFB")),f=p(n("w2Tm")),d=p(n("7FV1"));function p(e){return e&&e.__esModule?e:{default:e}}t.Link=r.default,t.Button=o.default,t.Element=a.default,t.scroller=i.default,t.Events=l.default,t.scrollSpy=s.default,t.animateScroll=c.default,t.ScrollLink=u.default,t.ScrollElement=f.default,t.Helpers=d.default,t.default={Link:r.default,Button:o.default,Element:a.default,scroller:i.default,Events:l.default,scrollSpy:s.default,animateScroll:c.default,ScrollLink:u.default,ScrollElement:f.default,Helpers:d.default}},pUFB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n("q1tI")),i=u(n("wT0s")),l=u(n("zPnG")),s=u(n("17x9")),c=u(n("Dy/p"));function u(e){return e&&e.__esModule?e:{default:e}}var f={to:s.default.string.isRequired,containerId:s.default.string,container:s.default.object,activeClass:s.default.string,spy:s.default.bool,horizontal:s.default.bool,smooth:s.default.oneOfType([s.default.bool,s.default.string]),offset:s.default.number,delay:s.default.number,isDynamic:s.default.bool,onClick:s.default.func,duration:s.default.oneOfType([s.default.number,s.default.func]),absolute:s.default.bool,onSetActive:s.default.func,onSetInactive:s.default.func,ignoreCancelEvents:s.default.bool,hashSpy:s.default.bool,saveHashHistory:s.default.bool};t.default=function(e,t){var n=t||l.default,s=function(t){function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return u.call(t),t.state={active:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,t),o(l,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();i.default.isMounted(e)||i.default.mount(e),this.props.hashSpy&&(c.default.isMounted()||c.default.mount(n),c.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var o in f)n.hasOwnProperty(o)&&delete n[o];return n.className=t,n.onClick=this.handleClick,a.default.createElement(e,n)}}]),l}(a.default.PureComponent),u=function(){var e=this;this.scrollTo=function(t,o){n.scrollTo(t,r({},e.state,o))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,r){var o=e.getScrollSpyContainer();if(!c.default.isMounted()||c.default.isInitialized()){var a=e.props.horizontal,i=e.props.to,l=null,s=void 0,u=void 0;if(a){var f=0,d=0,p=0;if(o.getBoundingClientRect)p=o.getBoundingClientRect().left;if(!l||e.props.isDynamic){if(!(l=n.get(i)))return;var m=l.getBoundingClientRect();d=(f=m.left-p+t)+m.width}var h=t-e.props.offset;s=h>=Math.floor(f)&&h<Math.floor(d),u=h<Math.floor(f)||h>=Math.floor(d)}else{var v=0,g=0,y=0;if(o.getBoundingClientRect)y=o.getBoundingClientRect().top;if(!l||e.props.isDynamic){if(!(l=n.get(i)))return;var b=l.getBoundingClientRect();g=(v=b.top-y+r)+b.height}var E=r-e.props.offset;s=E>=Math.floor(v)&&E<Math.floor(g),u=E<Math.floor(v)||E>=Math.floor(g)}var w=n.getActiveLink();if(u){if(i===w&&n.setActiveLink(void 0),e.props.hashSpy&&c.default.getHash()===i){var O=e.props.saveHashHistory,S=void 0!==O&&O;c.default.changeHash("",S)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(i,l))}if(s&&(w!==i||!1===e.state.active)){n.setActiveLink(i);var P=e.props.saveHashHistory,k=void 0!==P&&P;e.props.hashSpy&&c.default.changeHash(i,k),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i,l))}}}};return s.propTypes=f,s.defaultProps={offset:0},s}},w2Tm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n("q1tI")),i=(s(n("i8i4")),s(n("zPnG"))),l=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),o(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:l.default.string,id:l.default.string},t}},"wEa+":function(e,t,n){e.exports=n.p+"static/logo-7bfc1d7ad767b8bd06722530ef3bdc2a.jpg"},wT0s:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("hKI/"),a=(r=o)&&r.__esModule?r:{default:r},i=n("QLqi");var l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e){if(e){var t=function(e){return(0,a.default)(e,66)}((function(t){l.scrollHandler(e)}));l.scrollSpyContainers.push(e),(0,i.addPassiveEventListener)(e,"scroll",t)}},isMounted:function(e){return-1!==l.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(l.scrollSpyContainers[l.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(l.currentPositionX(e),l.currentPositionY(e))}))},addStateHandler:function(e){l.spySetState.push(e)},addSpyHandler:function(e,t){var n=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(l.currentPositionX(t),l.currentPositionY(t))},updateStates:function(){l.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){l.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),l.spySetState&&l.spySetState.length&&l.spySetState.splice(l.spySetState.indexOf(e),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach((function(e){return l.scrollHandler(e)}))}};t.default=l},xFC4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,r=n?"#"+n:"",o=window&&window.location,a=r?o.pathname+o.search+r:o.pathname+o.search;t?history.pushState(null,"",a):history.replaceState(null,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,n){return n?e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft:e===document?t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset):"static"!==getComputedStyle(e).position?t.offsetTop:t.offsetTop-e.offsetTop}}},zPnG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n("xFC4")),a=l(n("NEP4")),i=l(n("QQPg"));function l(e){return e&&e.__esModule?e:{default:e}}var s={},c=void 0;t.default={unmount:function(){s={}},register:function(e,t){s[e]=t},unregister:function(e){delete s[e]},get:function(e){return s[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return c=e},getActiveLink:function(){return c},scrollTo:function(e,t){var n=this.get(e);if(n){var l=(t=r({},t,{absolute:!1})).containerId,s=t.container,c=void 0;c=l?document.getElementById(l):s&&s.nodeType?s:document,t.absolute=!0;var u=t.horizontal,f=o.default.scrollOffset(c,n,u)+(t.offset||0);if(!t.smooth)return i.default.registered.begin&&i.default.registered.begin(e,n),c===document?t.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):c.scrollTop=f,void(i.default.registered.end&&i.default.registered.end(e,n));a.default.animateTopScroll(f,t,e,n)}else console.warn("target Element not found")}}}}]);
//# sourceMappingURL=component---src-pages-index-js-b242a18c2a6effe03afc.js.map