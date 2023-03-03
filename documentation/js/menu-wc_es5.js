'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">NestJS API Template</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-555a8754c109d3d5424ef4a0bea43ee3679d34a013692f5396419a26ca2731631c5b54f47f4cdb459c059e7030f485279b15be1dea29d09b1d9a2a60d83b1d39"' : 'data-target="#xs-controllers-links-module-AppModule-555a8754c109d3d5424ef4a0bea43ee3679d34a013692f5396419a26ca2731631c5b54f47f4cdb459c059e7030f485279b15be1dea29d09b1d9a2a60d83b1d39"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-555a8754c109d3d5424ef4a0bea43ee3679d34a013692f5396419a26ca2731631c5b54f47f4cdb459c059e7030f485279b15be1dea29d09b1d9a2a60d83b1d39"' : 'id="xs-controllers-links-module-AppModule-555a8754c109d3d5424ef4a0bea43ee3679d34a013692f5396419a26ca2731631c5b54f47f4cdb459c059e7030f485279b15be1dea29d09b1d9a2a60d83b1d39"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-555a8754c109d3d5424ef4a0bea43ee3679d34a013692f5396419a26ca2731631c5b54f47f4cdb459c059e7030f485279b15be1dea29d09b1d9a2a60d83b1d39"' : 'data-target="#xs-injectables-links-module-AppModule-555a8754c109d3d5424ef4a0bea43ee3679d34a013692f5396419a26ca2731631c5b54f47f4cdb459c059e7030f485279b15be1dea29d09b1d9a2a60d83b1d39"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-555a8754c109d3d5424ef4a0bea43ee3679d34a013692f5396419a26ca2731631c5b54f47f4cdb459c059e7030f485279b15be1dea29d09b1d9a2a60d83b1d39"' : 'id="xs-injectables-links-module-AppModule-555a8754c109d3d5424ef4a0bea43ee3679d34a013692f5396419a26ca2731631c5b54f47f4cdb459c059e7030f485279b15be1dea29d09b1d9a2a60d83b1d39"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AuthModule-6c17f67254ad204030f5e4125fd118eb97a45102456f304a3463a5b25cc70eb80c9558ffba865dba84ccbb29de6a71ba798ed9110aa3dbaece77b50dbcb40e2e"' : 'data-target="#xs-controllers-links-module-AuthModule-6c17f67254ad204030f5e4125fd118eb97a45102456f304a3463a5b25cc70eb80c9558ffba865dba84ccbb29de6a71ba798ed9110aa3dbaece77b50dbcb40e2e"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-6c17f67254ad204030f5e4125fd118eb97a45102456f304a3463a5b25cc70eb80c9558ffba865dba84ccbb29de6a71ba798ed9110aa3dbaece77b50dbcb40e2e"' : 'id="xs-controllers-links-module-AuthModule-6c17f67254ad204030f5e4125fd118eb97a45102456f304a3463a5b25cc70eb80c9558ffba865dba84ccbb29de6a71ba798ed9110aa3dbaece77b50dbcb40e2e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AuthModule-6c17f67254ad204030f5e4125fd118eb97a45102456f304a3463a5b25cc70eb80c9558ffba865dba84ccbb29de6a71ba798ed9110aa3dbaece77b50dbcb40e2e"' : 'data-target="#xs-injectables-links-module-AuthModule-6c17f67254ad204030f5e4125fd118eb97a45102456f304a3463a5b25cc70eb80c9558ffba865dba84ccbb29de6a71ba798ed9110aa3dbaece77b50dbcb40e2e"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-6c17f67254ad204030f5e4125fd118eb97a45102456f304a3463a5b25cc70eb80c9558ffba865dba84ccbb29de6a71ba798ed9110aa3dbaece77b50dbcb40e2e"' : 'id="xs-injectables-links-module-AuthModule-6c17f67254ad204030f5e4125fd118eb97a45102456f304a3463a5b25cc70eb80c9558ffba865dba84ccbb29de6a71ba798ed9110aa3dbaece77b50dbcb40e2e"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AccessTokenStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AccessTokenStrategy</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/RefreshTokenStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RefreshTokenStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ExampleModule.html\" data-type=\"entity-link\" >ExampleModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' : 'data-target="#xs-controllers-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' : 'id="xs-controllers-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/ExampleController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ExampleController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' : 'data-target="#xs-injectables-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' : 'id="xs-injectables-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ExampleService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ExampleService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-UsersModule-682b0404d7b2d14d287a1afb538b3f75e670d1c9a805c7471b5fcabcc04df335e8cec0a3932bcc07c5fb9a04b1adfd3219eeb9dac6f11bbf1a72bcfefbfa0bdf"' : 'data-target="#xs-controllers-links-module-UsersModule-682b0404d7b2d14d287a1afb538b3f75e670d1c9a805c7471b5fcabcc04df335e8cec0a3932bcc07c5fb9a04b1adfd3219eeb9dac6f11bbf1a72bcfefbfa0bdf"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UsersModule-682b0404d7b2d14d287a1afb538b3f75e670d1c9a805c7471b5fcabcc04df335e8cec0a3932bcc07c5fb9a04b1adfd3219eeb9dac6f11bbf1a72bcfefbfa0bdf"' : 'id="xs-controllers-links-module-UsersModule-682b0404d7b2d14d287a1afb538b3f75e670d1c9a805c7471b5fcabcc04df335e8cec0a3932bcc07c5fb9a04b1adfd3219eeb9dac6f11bbf1a72bcfefbfa0bdf"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UsersModule-682b0404d7b2d14d287a1afb538b3f75e670d1c9a805c7471b5fcabcc04df335e8cec0a3932bcc07c5fb9a04b1adfd3219eeb9dac6f11bbf1a72bcfefbfa0bdf"' : 'data-target="#xs-injectables-links-module-UsersModule-682b0404d7b2d14d287a1afb538b3f75e670d1c9a805c7471b5fcabcc04df335e8cec0a3932bcc07c5fb9a04b1adfd3219eeb9dac6f11bbf1a72bcfefbfa0bdf"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-682b0404d7b2d14d287a1afb538b3f75e670d1c9a805c7471b5fcabcc04df335e8cec0a3932bcc07c5fb9a04b1adfd3219eeb9dac6f11bbf1a72bcfefbfa0bdf"' : 'id="xs-injectables-links-module-UsersModule-682b0404d7b2d14d287a1afb538b3f75e670d1c9a805c7471b5fcabcc04df335e8cec0a3932bcc07c5fb9a04b1adfd3219eeb9dac6f11bbf1a72bcfefbfa0bdf"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#entities-links"' : 'data-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/Example.html\" data-type=\"entity-link\" >Example</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/User.html\" data-type=\"entity-link\" >User</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AuthDto.html\" data-type=\"entity-link\" >AuthDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateExampleDto.html\" data-type=\"entity-link\" >CreateExampleDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ExampleSeeder.html\" data-type=\"entity-link\" >ExampleSeeder</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateExampleDto.html\" data-type=\"entity-link\" >UpdateExampleDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateUserDto.html\" data-type=\"entity-link\" >UpdateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserSeeder.html\" data-type=\"entity-link\" >UserSeeder</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AccessTokenGuard.html\" data-type=\"entity-link\" >AccessTokenGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RefreshTokenGuard.html\" data-type=\"entity-link\" >RefreshTokenGuard</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise-inverted.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));