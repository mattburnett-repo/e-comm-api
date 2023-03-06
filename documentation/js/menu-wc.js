'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">E-Commerce API</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddressModule.html" data-type="entity-link" >AddressModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AddressModule-2e4b4e5e37b619fac9154fc6d8957917887b30634d76151c5f6eaa76fdbfde9837f9008eb8ea3cdbe93a08f95378e65f3dc9e226a9f807a492434a7300e3d3e9"' : 'data-target="#xs-controllers-links-module-AddressModule-2e4b4e5e37b619fac9154fc6d8957917887b30634d76151c5f6eaa76fdbfde9837f9008eb8ea3cdbe93a08f95378e65f3dc9e226a9f807a492434a7300e3d3e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddressModule-2e4b4e5e37b619fac9154fc6d8957917887b30634d76151c5f6eaa76fdbfde9837f9008eb8ea3cdbe93a08f95378e65f3dc9e226a9f807a492434a7300e3d3e9"' :
                                            'id="xs-controllers-links-module-AddressModule-2e4b4e5e37b619fac9154fc6d8957917887b30634d76151c5f6eaa76fdbfde9837f9008eb8ea3cdbe93a08f95378e65f3dc9e226a9f807a492434a7300e3d3e9"' }>
                                            <li class="link">
                                                <a href="controllers/AddressController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AddressModule-2e4b4e5e37b619fac9154fc6d8957917887b30634d76151c5f6eaa76fdbfde9837f9008eb8ea3cdbe93a08f95378e65f3dc9e226a9f807a492434a7300e3d3e9"' : 'data-target="#xs-injectables-links-module-AddressModule-2e4b4e5e37b619fac9154fc6d8957917887b30634d76151c5f6eaa76fdbfde9837f9008eb8ea3cdbe93a08f95378e65f3dc9e226a9f807a492434a7300e3d3e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddressModule-2e4b4e5e37b619fac9154fc6d8957917887b30634d76151c5f6eaa76fdbfde9837f9008eb8ea3cdbe93a08f95378e65f3dc9e226a9f807a492434a7300e3d3e9"' :
                                        'id="xs-injectables-links-module-AddressModule-2e4b4e5e37b619fac9154fc6d8957917887b30634d76151c5f6eaa76fdbfde9837f9008eb8ea3cdbe93a08f95378e65f3dc9e226a9f807a492434a7300e3d3e9"' }>
                                        <li class="link">
                                            <a href="injectables/AddressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-658e8daf76543eab1c17a80bb2fc3a17db8e8e72e516bd14ae393750446ccacab8ac780470e93910e52bbf73b93c888b8461300ac2cb674f2caf3b92777f3894"' : 'data-target="#xs-controllers-links-module-AppModule-658e8daf76543eab1c17a80bb2fc3a17db8e8e72e516bd14ae393750446ccacab8ac780470e93910e52bbf73b93c888b8461300ac2cb674f2caf3b92777f3894"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-658e8daf76543eab1c17a80bb2fc3a17db8e8e72e516bd14ae393750446ccacab8ac780470e93910e52bbf73b93c888b8461300ac2cb674f2caf3b92777f3894"' :
                                            'id="xs-controllers-links-module-AppModule-658e8daf76543eab1c17a80bb2fc3a17db8e8e72e516bd14ae393750446ccacab8ac780470e93910e52bbf73b93c888b8461300ac2cb674f2caf3b92777f3894"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-658e8daf76543eab1c17a80bb2fc3a17db8e8e72e516bd14ae393750446ccacab8ac780470e93910e52bbf73b93c888b8461300ac2cb674f2caf3b92777f3894"' : 'data-target="#xs-injectables-links-module-AppModule-658e8daf76543eab1c17a80bb2fc3a17db8e8e72e516bd14ae393750446ccacab8ac780470e93910e52bbf73b93c888b8461300ac2cb674f2caf3b92777f3894"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-658e8daf76543eab1c17a80bb2fc3a17db8e8e72e516bd14ae393750446ccacab8ac780470e93910e52bbf73b93c888b8461300ac2cb674f2caf3b92777f3894"' :
                                        'id="xs-injectables-links-module-AppModule-658e8daf76543eab1c17a80bb2fc3a17db8e8e72e516bd14ae393750446ccacab8ac780470e93910e52bbf73b93c888b8461300ac2cb674f2caf3b92777f3894"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-71d30f171111a487b0b02370bcc412b3e0b2fd2f2da62dae677d1f45448289691d4ee556df8fe8c98c9c5140abb692b40f1cd1ec7f53b4b8ec688b95950395a8"' : 'data-target="#xs-controllers-links-module-AuthModule-71d30f171111a487b0b02370bcc412b3e0b2fd2f2da62dae677d1f45448289691d4ee556df8fe8c98c9c5140abb692b40f1cd1ec7f53b4b8ec688b95950395a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-71d30f171111a487b0b02370bcc412b3e0b2fd2f2da62dae677d1f45448289691d4ee556df8fe8c98c9c5140abb692b40f1cd1ec7f53b4b8ec688b95950395a8"' :
                                            'id="xs-controllers-links-module-AuthModule-71d30f171111a487b0b02370bcc412b3e0b2fd2f2da62dae677d1f45448289691d4ee556df8fe8c98c9c5140abb692b40f1cd1ec7f53b4b8ec688b95950395a8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-71d30f171111a487b0b02370bcc412b3e0b2fd2f2da62dae677d1f45448289691d4ee556df8fe8c98c9c5140abb692b40f1cd1ec7f53b4b8ec688b95950395a8"' : 'data-target="#xs-injectables-links-module-AuthModule-71d30f171111a487b0b02370bcc412b3e0b2fd2f2da62dae677d1f45448289691d4ee556df8fe8c98c9c5140abb692b40f1cd1ec7f53b4b8ec688b95950395a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-71d30f171111a487b0b02370bcc412b3e0b2fd2f2da62dae677d1f45448289691d4ee556df8fe8c98c9c5140abb692b40f1cd1ec7f53b4b8ec688b95950395a8"' :
                                        'id="xs-injectables-links-module-AuthModule-71d30f171111a487b0b02370bcc412b3e0b2fd2f2da62dae677d1f45448289691d4ee556df8fe8c98c9c5140abb692b40f1cd1ec7f53b4b8ec688b95950395a8"' }>
                                        <li class="link">
                                            <a href="injectables/AccessTokenStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessTokenStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshTokenStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokenStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartItemModule.html" data-type="entity-link" >CartItemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CartItemModule-e432c887f22a6eaa0765d6aafff0a92afdda78c6615d892666a23ee05a16722b51837c45feef384fcb94fa8a3c7c3760e5b693e5cbb7a9d5fce20ab4e8fab0a0"' : 'data-target="#xs-controllers-links-module-CartItemModule-e432c887f22a6eaa0765d6aafff0a92afdda78c6615d892666a23ee05a16722b51837c45feef384fcb94fa8a3c7c3760e5b693e5cbb7a9d5fce20ab4e8fab0a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartItemModule-e432c887f22a6eaa0765d6aafff0a92afdda78c6615d892666a23ee05a16722b51837c45feef384fcb94fa8a3c7c3760e5b693e5cbb7a9d5fce20ab4e8fab0a0"' :
                                            'id="xs-controllers-links-module-CartItemModule-e432c887f22a6eaa0765d6aafff0a92afdda78c6615d892666a23ee05a16722b51837c45feef384fcb94fa8a3c7c3760e5b693e5cbb7a9d5fce20ab4e8fab0a0"' }>
                                            <li class="link">
                                                <a href="controllers/CartItemController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartItemModule-e432c887f22a6eaa0765d6aafff0a92afdda78c6615d892666a23ee05a16722b51837c45feef384fcb94fa8a3c7c3760e5b693e5cbb7a9d5fce20ab4e8fab0a0"' : 'data-target="#xs-injectables-links-module-CartItemModule-e432c887f22a6eaa0765d6aafff0a92afdda78c6615d892666a23ee05a16722b51837c45feef384fcb94fa8a3c7c3760e5b693e5cbb7a9d5fce20ab4e8fab0a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartItemModule-e432c887f22a6eaa0765d6aafff0a92afdda78c6615d892666a23ee05a16722b51837c45feef384fcb94fa8a3c7c3760e5b693e5cbb7a9d5fce20ab4e8fab0a0"' :
                                        'id="xs-injectables-links-module-CartItemModule-e432c887f22a6eaa0765d6aafff0a92afdda78c6615d892666a23ee05a16722b51837c45feef384fcb94fa8a3c7c3760e5b693e5cbb7a9d5fce20ab4e8fab0a0"' }>
                                        <li class="link">
                                            <a href="injectables/CartItemService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CartModule-27d9657adaa922f7edafe48462643ff507ee19a445e0ab76a0c8d891fdc9fb23ec70c005c3e23112f14bb7cf9e2203a2db66a018b4c88ef39c0e9a615493ab43"' : 'data-target="#xs-controllers-links-module-CartModule-27d9657adaa922f7edafe48462643ff507ee19a445e0ab76a0c8d891fdc9fb23ec70c005c3e23112f14bb7cf9e2203a2db66a018b4c88ef39c0e9a615493ab43"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartModule-27d9657adaa922f7edafe48462643ff507ee19a445e0ab76a0c8d891fdc9fb23ec70c005c3e23112f14bb7cf9e2203a2db66a018b4c88ef39c0e9a615493ab43"' :
                                            'id="xs-controllers-links-module-CartModule-27d9657adaa922f7edafe48462643ff507ee19a445e0ab76a0c8d891fdc9fb23ec70c005c3e23112f14bb7cf9e2203a2db66a018b4c88ef39c0e9a615493ab43"' }>
                                            <li class="link">
                                                <a href="controllers/CartController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartModule-27d9657adaa922f7edafe48462643ff507ee19a445e0ab76a0c8d891fdc9fb23ec70c005c3e23112f14bb7cf9e2203a2db66a018b4c88ef39c0e9a615493ab43"' : 'data-target="#xs-injectables-links-module-CartModule-27d9657adaa922f7edafe48462643ff507ee19a445e0ab76a0c8d891fdc9fb23ec70c005c3e23112f14bb7cf9e2203a2db66a018b4c88ef39c0e9a615493ab43"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-27d9657adaa922f7edafe48462643ff507ee19a445e0ab76a0c8d891fdc9fb23ec70c005c3e23112f14bb7cf9e2203a2db66a018b4c88ef39c0e9a615493ab43"' :
                                        'id="xs-injectables-links-module-CartModule-27d9657adaa922f7edafe48462643ff507ee19a445e0ab76a0c8d891fdc9fb23ec70c005c3e23112f14bb7cf9e2203a2db66a018b4c88ef39c0e9a615493ab43"' }>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartTypeModule.html" data-type="entity-link" >CartTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CartTypeModule-3f886b65b4552c3acd6ae49a14bbfdc8e04d5f2ba426893e4e06d0b840225c59c947f2e6b4b310c5ec988571db766188d61deba9bb8e1c7c3a959c4fd752a861"' : 'data-target="#xs-controllers-links-module-CartTypeModule-3f886b65b4552c3acd6ae49a14bbfdc8e04d5f2ba426893e4e06d0b840225c59c947f2e6b4b310c5ec988571db766188d61deba9bb8e1c7c3a959c4fd752a861"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartTypeModule-3f886b65b4552c3acd6ae49a14bbfdc8e04d5f2ba426893e4e06d0b840225c59c947f2e6b4b310c5ec988571db766188d61deba9bb8e1c7c3a959c4fd752a861"' :
                                            'id="xs-controllers-links-module-CartTypeModule-3f886b65b4552c3acd6ae49a14bbfdc8e04d5f2ba426893e4e06d0b840225c59c947f2e6b4b310c5ec988571db766188d61deba9bb8e1c7c3a959c4fd752a861"' }>
                                            <li class="link">
                                                <a href="controllers/CartTypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartTypeModule-3f886b65b4552c3acd6ae49a14bbfdc8e04d5f2ba426893e4e06d0b840225c59c947f2e6b4b310c5ec988571db766188d61deba9bb8e1c7c3a959c4fd752a861"' : 'data-target="#xs-injectables-links-module-CartTypeModule-3f886b65b4552c3acd6ae49a14bbfdc8e04d5f2ba426893e4e06d0b840225c59c947f2e6b4b310c5ec988571db766188d61deba9bb8e1c7c3a959c4fd752a861"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartTypeModule-3f886b65b4552c3acd6ae49a14bbfdc8e04d5f2ba426893e4e06d0b840225c59c947f2e6b4b310c5ec988571db766188d61deba9bb8e1c7c3a959c4fd752a861"' :
                                        'id="xs-injectables-links-module-CartTypeModule-3f886b65b4552c3acd6ae49a14bbfdc8e04d5f2ba426893e4e06d0b840225c59c947f2e6b4b310c5ec988571db766188d61deba9bb8e1c7c3a959c4fd752a861"' }>
                                        <li class="link">
                                            <a href="injectables/CartTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExampleModule.html" data-type="entity-link" >ExampleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' : 'data-target="#xs-controllers-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' :
                                            'id="xs-controllers-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' }>
                                            <li class="link">
                                                <a href="controllers/ExampleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExampleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' : 'data-target="#xs-injectables-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' :
                                        'id="xs-injectables-links-module-ExampleModule-3787cee0e2a718e7034434d970d7b6cba6f0d83a31f6e2216bdccc101d915a03adde9ee4c15cbde9ef1abde332615daa3770ad2fac1072be23feb4cddba5a037"' }>
                                        <li class="link">
                                            <a href="injectables/ExampleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExampleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-50a89a6064defa20d440f13b6e4d7ac405dfaf30f0bef2dc9c15bb51197368251e37db125336d8665e7c6e3c050fc26e28da38dece2b00712ae888dc17e8c36d"' : 'data-target="#xs-controllers-links-module-OrderModule-50a89a6064defa20d440f13b6e4d7ac405dfaf30f0bef2dc9c15bb51197368251e37db125336d8665e7c6e3c050fc26e28da38dece2b00712ae888dc17e8c36d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-50a89a6064defa20d440f13b6e4d7ac405dfaf30f0bef2dc9c15bb51197368251e37db125336d8665e7c6e3c050fc26e28da38dece2b00712ae888dc17e8c36d"' :
                                            'id="xs-controllers-links-module-OrderModule-50a89a6064defa20d440f13b6e4d7ac405dfaf30f0bef2dc9c15bb51197368251e37db125336d8665e7c6e3c050fc26e28da38dece2b00712ae888dc17e8c36d"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-50a89a6064defa20d440f13b6e4d7ac405dfaf30f0bef2dc9c15bb51197368251e37db125336d8665e7c6e3c050fc26e28da38dece2b00712ae888dc17e8c36d"' : 'data-target="#xs-injectables-links-module-OrderModule-50a89a6064defa20d440f13b6e4d7ac405dfaf30f0bef2dc9c15bb51197368251e37db125336d8665e7c6e3c050fc26e28da38dece2b00712ae888dc17e8c36d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-50a89a6064defa20d440f13b6e4d7ac405dfaf30f0bef2dc9c15bb51197368251e37db125336d8665e7c6e3c050fc26e28da38dece2b00712ae888dc17e8c36d"' :
                                        'id="xs-injectables-links-module-OrderModule-50a89a6064defa20d440f13b6e4d7ac405dfaf30f0bef2dc9c15bb51197368251e37db125336d8665e7c6e3c050fc26e28da38dece2b00712ae888dc17e8c36d"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PaymentModule-b8a223ad746a7db8be813667da274c31d33ac6ab0c0070fe236fcf19b898e19fa727c18c261bddbfbc346e0e14d4f815431b6895a1a8035fe48c66febba048da"' : 'data-target="#xs-controllers-links-module-PaymentModule-b8a223ad746a7db8be813667da274c31d33ac6ab0c0070fe236fcf19b898e19fa727c18c261bddbfbc346e0e14d4f815431b6895a1a8035fe48c66febba048da"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-b8a223ad746a7db8be813667da274c31d33ac6ab0c0070fe236fcf19b898e19fa727c18c261bddbfbc346e0e14d4f815431b6895a1a8035fe48c66febba048da"' :
                                            'id="xs-controllers-links-module-PaymentModule-b8a223ad746a7db8be813667da274c31d33ac6ab0c0070fe236fcf19b898e19fa727c18c261bddbfbc346e0e14d4f815431b6895a1a8035fe48c66febba048da"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PaymentModule-b8a223ad746a7db8be813667da274c31d33ac6ab0c0070fe236fcf19b898e19fa727c18c261bddbfbc346e0e14d4f815431b6895a1a8035fe48c66febba048da"' : 'data-target="#xs-injectables-links-module-PaymentModule-b8a223ad746a7db8be813667da274c31d33ac6ab0c0070fe236fcf19b898e19fa727c18c261bddbfbc346e0e14d4f815431b6895a1a8035fe48c66febba048da"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-b8a223ad746a7db8be813667da274c31d33ac6ab0c0070fe236fcf19b898e19fa727c18c261bddbfbc346e0e14d4f815431b6895a1a8035fe48c66febba048da"' :
                                        'id="xs-injectables-links-module-PaymentModule-b8a223ad746a7db8be813667da274c31d33ac6ab0c0070fe236fcf19b898e19fa727c18c261bddbfbc346e0e14d4f815431b6895a1a8035fe48c66febba048da"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentTypeModule.html" data-type="entity-link" >PaymentTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PaymentTypeModule-87fa9e01150a8e46cd363ad459148fe9ccfede327df8392c1357c5b192af35f3c011cac5e745fd1a552d2240d41aeb26e77d013bc4735b0daa739013b9d8217b"' : 'data-target="#xs-controllers-links-module-PaymentTypeModule-87fa9e01150a8e46cd363ad459148fe9ccfede327df8392c1357c5b192af35f3c011cac5e745fd1a552d2240d41aeb26e77d013bc4735b0daa739013b9d8217b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentTypeModule-87fa9e01150a8e46cd363ad459148fe9ccfede327df8392c1357c5b192af35f3c011cac5e745fd1a552d2240d41aeb26e77d013bc4735b0daa739013b9d8217b"' :
                                            'id="xs-controllers-links-module-PaymentTypeModule-87fa9e01150a8e46cd363ad459148fe9ccfede327df8392c1357c5b192af35f3c011cac5e745fd1a552d2240d41aeb26e77d013bc4735b0daa739013b9d8217b"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentTypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PaymentTypeModule-87fa9e01150a8e46cd363ad459148fe9ccfede327df8392c1357c5b192af35f3c011cac5e745fd1a552d2240d41aeb26e77d013bc4735b0daa739013b9d8217b"' : 'data-target="#xs-injectables-links-module-PaymentTypeModule-87fa9e01150a8e46cd363ad459148fe9ccfede327df8392c1357c5b192af35f3c011cac5e745fd1a552d2240d41aeb26e77d013bc4735b0daa739013b9d8217b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentTypeModule-87fa9e01150a8e46cd363ad459148fe9ccfede327df8392c1357c5b192af35f3c011cac5e745fd1a552d2240d41aeb26e77d013bc4735b0daa739013b9d8217b"' :
                                        'id="xs-injectables-links-module-PaymentTypeModule-87fa9e01150a8e46cd363ad459148fe9ccfede327df8392c1357c5b192af35f3c011cac5e745fd1a552d2240d41aeb26e77d013bc4735b0daa739013b9d8217b"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductCategoryModule.html" data-type="entity-link" >ProductCategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductCategoryModule-44266bebaa2345ff2bc76e85b33e0ef8f3a2eaea6f6e01b66d0e3465d78b2399569fd6d89bb5851dd97841559a905e0433398fd197a7c199df20751dd3c9767a"' : 'data-target="#xs-controllers-links-module-ProductCategoryModule-44266bebaa2345ff2bc76e85b33e0ef8f3a2eaea6f6e01b66d0e3465d78b2399569fd6d89bb5851dd97841559a905e0433398fd197a7c199df20751dd3c9767a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductCategoryModule-44266bebaa2345ff2bc76e85b33e0ef8f3a2eaea6f6e01b66d0e3465d78b2399569fd6d89bb5851dd97841559a905e0433398fd197a7c199df20751dd3c9767a"' :
                                            'id="xs-controllers-links-module-ProductCategoryModule-44266bebaa2345ff2bc76e85b33e0ef8f3a2eaea6f6e01b66d0e3465d78b2399569fd6d89bb5851dd97841559a905e0433398fd197a7c199df20751dd3c9767a"' }>
                                            <li class="link">
                                                <a href="controllers/ProductCategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductCategoryModule-44266bebaa2345ff2bc76e85b33e0ef8f3a2eaea6f6e01b66d0e3465d78b2399569fd6d89bb5851dd97841559a905e0433398fd197a7c199df20751dd3c9767a"' : 'data-target="#xs-injectables-links-module-ProductCategoryModule-44266bebaa2345ff2bc76e85b33e0ef8f3a2eaea6f6e01b66d0e3465d78b2399569fd6d89bb5851dd97841559a905e0433398fd197a7c199df20751dd3c9767a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductCategoryModule-44266bebaa2345ff2bc76e85b33e0ef8f3a2eaea6f6e01b66d0e3465d78b2399569fd6d89bb5851dd97841559a905e0433398fd197a7c199df20751dd3c9767a"' :
                                        'id="xs-injectables-links-module-ProductCategoryModule-44266bebaa2345ff2bc76e85b33e0ef8f3a2eaea6f6e01b66d0e3465d78b2399569fd6d89bb5851dd97841559a905e0433398fd197a7c199df20751dd3c9767a"' }>
                                        <li class="link">
                                            <a href="injectables/ProductCategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-a913f34e8b5757dd8924e23d46ef793f48c0d0ca82f86e5fdaf0a9f04c691d4113d5d0d0217599580ff5cc0ecc038fb994e3978924ac553e16343513c366aeea"' : 'data-target="#xs-controllers-links-module-ProductModule-a913f34e8b5757dd8924e23d46ef793f48c0d0ca82f86e5fdaf0a9f04c691d4113d5d0d0217599580ff5cc0ecc038fb994e3978924ac553e16343513c366aeea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-a913f34e8b5757dd8924e23d46ef793f48c0d0ca82f86e5fdaf0a9f04c691d4113d5d0d0217599580ff5cc0ecc038fb994e3978924ac553e16343513c366aeea"' :
                                            'id="xs-controllers-links-module-ProductModule-a913f34e8b5757dd8924e23d46ef793f48c0d0ca82f86e5fdaf0a9f04c691d4113d5d0d0217599580ff5cc0ecc038fb994e3978924ac553e16343513c366aeea"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-a913f34e8b5757dd8924e23d46ef793f48c0d0ca82f86e5fdaf0a9f04c691d4113d5d0d0217599580ff5cc0ecc038fb994e3978924ac553e16343513c366aeea"' : 'data-target="#xs-injectables-links-module-ProductModule-a913f34e8b5757dd8924e23d46ef793f48c0d0ca82f86e5fdaf0a9f04c691d4113d5d0d0217599580ff5cc0ecc038fb994e3978924ac553e16343513c366aeea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-a913f34e8b5757dd8924e23d46ef793f48c0d0ca82f86e5fdaf0a9f04c691d4113d5d0d0217599580ff5cc0ecc038fb994e3978924ac553e16343513c366aeea"' :
                                        'id="xs-injectables-links-module-ProductModule-a913f34e8b5757dd8924e23d46ef793f48c0d0ca82f86e5fdaf0a9f04c691d4113d5d0d0217599580ff5cc0ecc038fb994e3978924ac553e16343513c366aeea"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-335dfa549908dd430116eb7b37a05a97a68e0ca62444d4e0e516222ee0f94fa2b6e7762a73d4185ec8883633ec12c25d10de5c5aad4e02efd356aca022181301"' : 'data-target="#xs-controllers-links-module-UserModule-335dfa549908dd430116eb7b37a05a97a68e0ca62444d4e0e516222ee0f94fa2b6e7762a73d4185ec8883633ec12c25d10de5c5aad4e02efd356aca022181301"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-335dfa549908dd430116eb7b37a05a97a68e0ca62444d4e0e516222ee0f94fa2b6e7762a73d4185ec8883633ec12c25d10de5c5aad4e02efd356aca022181301"' :
                                            'id="xs-controllers-links-module-UserModule-335dfa549908dd430116eb7b37a05a97a68e0ca62444d4e0e516222ee0f94fa2b6e7762a73d4185ec8883633ec12c25d10de5c5aad4e02efd356aca022181301"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-335dfa549908dd430116eb7b37a05a97a68e0ca62444d4e0e516222ee0f94fa2b6e7762a73d4185ec8883633ec12c25d10de5c5aad4e02efd356aca022181301"' : 'data-target="#xs-injectables-links-module-UserModule-335dfa549908dd430116eb7b37a05a97a68e0ca62444d4e0e516222ee0f94fa2b6e7762a73d4185ec8883633ec12c25d10de5c5aad4e02efd356aca022181301"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-335dfa549908dd430116eb7b37a05a97a68e0ca62444d4e0e516222ee0f94fa2b6e7762a73d4185ec8883633ec12c25d10de5c5aad4e02efd356aca022181301"' :
                                        'id="xs-injectables-links-module-UserModule-335dfa549908dd430116eb7b37a05a97a68e0ca62444d4e0e516222ee0f94fa2b6e7762a73d4185ec8883633ec12c25d10de5c5aad4e02efd356aca022181301"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Address.html" data-type="entity-link" >Address</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Cart.html" data-type="entity-link" >Cart</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CartItem.html" data-type="entity-link" >CartItem</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CartType.html" data-type="entity-link" >CartType</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Example.html" data-type="entity-link" >Example</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Order.html" data-type="entity-link" >Order</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Payment.html" data-type="entity-link" >Payment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PaymentType.html" data-type="entity-link" >PaymentType</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Product.html" data-type="entity-link" >Product</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ProductCategory.html" data-type="entity-link" >ProductCategory</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthDto.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartItem.html" data-type="entity-link" >CartItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartType.html" data-type="entity-link" >CartType</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAddressDto.html" data-type="entity-link" >CreateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCartDto.html" data-type="entity-link" >CreateCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCartItemDto.html" data-type="entity-link" >CreateCartItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCartTypeDto.html" data-type="entity-link" >CreateCartTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/createEcomTables1678040718350.html" data-type="entity-link" >createEcomTables1678040718350</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateExampleDto.html" data-type="entity-link" >CreateExampleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePaymentDto.html" data-type="entity-link" >CreatePaymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePaymentTypeDto.html" data-type="entity-link" >CreatePaymentTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductCategoryDto.html" data-type="entity-link" >CreateProductCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Payment.html" data-type="entity-link" >Payment</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentType.html" data-type="entity-link" >PaymentType</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCategory.html" data-type="entity-link" >ProductCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/seedProductTable.html" data-type="entity-link" >seedProductTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/seedTables.html" data-type="entity-link" >seedTables</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAddressDto.html" data-type="entity-link" >UpdateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCartDto.html" data-type="entity-link" >UpdateCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCartItemDto.html" data-type="entity-link" >UpdateCartItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCartTypeDto.html" data-type="entity-link" >UpdateCartTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateExampleDto.html" data-type="entity-link" >UpdateExampleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderDto.html" data-type="entity-link" >UpdateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePaymentDto.html" data-type="entity-link" >UpdatePaymentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePaymentTypeDto.html" data-type="entity-link" >UpdatePaymentTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductCategoryDto.html" data-type="entity-link" >UpdateProductCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSeeder.html" data-type="entity-link" >UserSeeder</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshTokenGuard.html" data-type="entity-link" >RefreshTokenGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});