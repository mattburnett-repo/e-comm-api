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
                                            'data-target="#controllers-links-module-AddressModule-24226ff7fc178fb37d3aafac5f5badf2171e63493ef20ea3e1847d11b6a3466e4f80bb31dc8179f426b8453af58cff9233aa7cf61c086566b577af607c85386f"' : 'data-target="#xs-controllers-links-module-AddressModule-24226ff7fc178fb37d3aafac5f5badf2171e63493ef20ea3e1847d11b6a3466e4f80bb31dc8179f426b8453af58cff9233aa7cf61c086566b577af607c85386f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddressModule-24226ff7fc178fb37d3aafac5f5badf2171e63493ef20ea3e1847d11b6a3466e4f80bb31dc8179f426b8453af58cff9233aa7cf61c086566b577af607c85386f"' :
                                            'id="xs-controllers-links-module-AddressModule-24226ff7fc178fb37d3aafac5f5badf2171e63493ef20ea3e1847d11b6a3466e4f80bb31dc8179f426b8453af58cff9233aa7cf61c086566b577af607c85386f"' }>
                                            <li class="link">
                                                <a href="controllers/AddressController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AddressModule-24226ff7fc178fb37d3aafac5f5badf2171e63493ef20ea3e1847d11b6a3466e4f80bb31dc8179f426b8453af58cff9233aa7cf61c086566b577af607c85386f"' : 'data-target="#xs-injectables-links-module-AddressModule-24226ff7fc178fb37d3aafac5f5badf2171e63493ef20ea3e1847d11b6a3466e4f80bb31dc8179f426b8453af58cff9233aa7cf61c086566b577af607c85386f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddressModule-24226ff7fc178fb37d3aafac5f5badf2171e63493ef20ea3e1847d11b6a3466e4f80bb31dc8179f426b8453af58cff9233aa7cf61c086566b577af607c85386f"' :
                                        'id="xs-injectables-links-module-AddressModule-24226ff7fc178fb37d3aafac5f5badf2171e63493ef20ea3e1847d11b6a3466e4f80bb31dc8179f426b8453af58cff9233aa7cf61c086566b577af607c85386f"' }>
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
                                            'data-target="#controllers-links-module-CartItemModule-7a586326f5c1b49b7c335c9f43baf1e0cf37aa735be0c4b2c32fc9ff5712ab7b1a6b794d61dce9076f273bed8ba5026618089c1a673c6117696f71c9c9780659"' : 'data-target="#xs-controllers-links-module-CartItemModule-7a586326f5c1b49b7c335c9f43baf1e0cf37aa735be0c4b2c32fc9ff5712ab7b1a6b794d61dce9076f273bed8ba5026618089c1a673c6117696f71c9c9780659"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartItemModule-7a586326f5c1b49b7c335c9f43baf1e0cf37aa735be0c4b2c32fc9ff5712ab7b1a6b794d61dce9076f273bed8ba5026618089c1a673c6117696f71c9c9780659"' :
                                            'id="xs-controllers-links-module-CartItemModule-7a586326f5c1b49b7c335c9f43baf1e0cf37aa735be0c4b2c32fc9ff5712ab7b1a6b794d61dce9076f273bed8ba5026618089c1a673c6117696f71c9c9780659"' }>
                                            <li class="link">
                                                <a href="controllers/CartItemController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartItemModule-7a586326f5c1b49b7c335c9f43baf1e0cf37aa735be0c4b2c32fc9ff5712ab7b1a6b794d61dce9076f273bed8ba5026618089c1a673c6117696f71c9c9780659"' : 'data-target="#xs-injectables-links-module-CartItemModule-7a586326f5c1b49b7c335c9f43baf1e0cf37aa735be0c4b2c32fc9ff5712ab7b1a6b794d61dce9076f273bed8ba5026618089c1a673c6117696f71c9c9780659"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartItemModule-7a586326f5c1b49b7c335c9f43baf1e0cf37aa735be0c4b2c32fc9ff5712ab7b1a6b794d61dce9076f273bed8ba5026618089c1a673c6117696f71c9c9780659"' :
                                        'id="xs-injectables-links-module-CartItemModule-7a586326f5c1b49b7c335c9f43baf1e0cf37aa735be0c4b2c32fc9ff5712ab7b1a6b794d61dce9076f273bed8ba5026618089c1a673c6117696f71c9c9780659"' }>
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
                                            'data-target="#controllers-links-module-CartModule-1eb1583c8fd5d21a218b8383cd4c64df7ba1198d8ac0f40aa6f47d00244f7a802bf04f46df372da9c883a2ca739b5ec1d2b55a878f958ba9b4835a3e6e7fade6"' : 'data-target="#xs-controllers-links-module-CartModule-1eb1583c8fd5d21a218b8383cd4c64df7ba1198d8ac0f40aa6f47d00244f7a802bf04f46df372da9c883a2ca739b5ec1d2b55a878f958ba9b4835a3e6e7fade6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartModule-1eb1583c8fd5d21a218b8383cd4c64df7ba1198d8ac0f40aa6f47d00244f7a802bf04f46df372da9c883a2ca739b5ec1d2b55a878f958ba9b4835a3e6e7fade6"' :
                                            'id="xs-controllers-links-module-CartModule-1eb1583c8fd5d21a218b8383cd4c64df7ba1198d8ac0f40aa6f47d00244f7a802bf04f46df372da9c883a2ca739b5ec1d2b55a878f958ba9b4835a3e6e7fade6"' }>
                                            <li class="link">
                                                <a href="controllers/CartController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartModule-1eb1583c8fd5d21a218b8383cd4c64df7ba1198d8ac0f40aa6f47d00244f7a802bf04f46df372da9c883a2ca739b5ec1d2b55a878f958ba9b4835a3e6e7fade6"' : 'data-target="#xs-injectables-links-module-CartModule-1eb1583c8fd5d21a218b8383cd4c64df7ba1198d8ac0f40aa6f47d00244f7a802bf04f46df372da9c883a2ca739b5ec1d2b55a878f958ba9b4835a3e6e7fade6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-1eb1583c8fd5d21a218b8383cd4c64df7ba1198d8ac0f40aa6f47d00244f7a802bf04f46df372da9c883a2ca739b5ec1d2b55a878f958ba9b4835a3e6e7fade6"' :
                                        'id="xs-injectables-links-module-CartModule-1eb1583c8fd5d21a218b8383cd4c64df7ba1198d8ac0f40aa6f47d00244f7a802bf04f46df372da9c883a2ca739b5ec1d2b55a878f958ba9b4835a3e6e7fade6"' }>
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
                                            'data-target="#controllers-links-module-CartTypeModule-f47c6cdc827ab4a5583f91024e5381ff43f674059803b96a50aa743e965117650b6eb3e184cb74e27013bceb136bea75fe8cc15e074d1a6e0d6f56a5b4789612"' : 'data-target="#xs-controllers-links-module-CartTypeModule-f47c6cdc827ab4a5583f91024e5381ff43f674059803b96a50aa743e965117650b6eb3e184cb74e27013bceb136bea75fe8cc15e074d1a6e0d6f56a5b4789612"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartTypeModule-f47c6cdc827ab4a5583f91024e5381ff43f674059803b96a50aa743e965117650b6eb3e184cb74e27013bceb136bea75fe8cc15e074d1a6e0d6f56a5b4789612"' :
                                            'id="xs-controllers-links-module-CartTypeModule-f47c6cdc827ab4a5583f91024e5381ff43f674059803b96a50aa743e965117650b6eb3e184cb74e27013bceb136bea75fe8cc15e074d1a6e0d6f56a5b4789612"' }>
                                            <li class="link">
                                                <a href="controllers/CartTypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartTypeModule-f47c6cdc827ab4a5583f91024e5381ff43f674059803b96a50aa743e965117650b6eb3e184cb74e27013bceb136bea75fe8cc15e074d1a6e0d6f56a5b4789612"' : 'data-target="#xs-injectables-links-module-CartTypeModule-f47c6cdc827ab4a5583f91024e5381ff43f674059803b96a50aa743e965117650b6eb3e184cb74e27013bceb136bea75fe8cc15e074d1a6e0d6f56a5b4789612"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartTypeModule-f47c6cdc827ab4a5583f91024e5381ff43f674059803b96a50aa743e965117650b6eb3e184cb74e27013bceb136bea75fe8cc15e074d1a6e0d6f56a5b4789612"' :
                                        'id="xs-injectables-links-module-CartTypeModule-f47c6cdc827ab4a5583f91024e5381ff43f674059803b96a50aa743e965117650b6eb3e184cb74e27013bceb136bea75fe8cc15e074d1a6e0d6f56a5b4789612"' }>
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
                                            'data-target="#controllers-links-module-OrderModule-fc10a0b0db93d0cda7e285758ecc66aa416080a2e6ac9eafcb52c23d62ced5bc5cbb90ce466a7544dd190d4b13db1b4689e3ee46d17a501e36850f0228406649"' : 'data-target="#xs-controllers-links-module-OrderModule-fc10a0b0db93d0cda7e285758ecc66aa416080a2e6ac9eafcb52c23d62ced5bc5cbb90ce466a7544dd190d4b13db1b4689e3ee46d17a501e36850f0228406649"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-fc10a0b0db93d0cda7e285758ecc66aa416080a2e6ac9eafcb52c23d62ced5bc5cbb90ce466a7544dd190d4b13db1b4689e3ee46d17a501e36850f0228406649"' :
                                            'id="xs-controllers-links-module-OrderModule-fc10a0b0db93d0cda7e285758ecc66aa416080a2e6ac9eafcb52c23d62ced5bc5cbb90ce466a7544dd190d4b13db1b4689e3ee46d17a501e36850f0228406649"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-fc10a0b0db93d0cda7e285758ecc66aa416080a2e6ac9eafcb52c23d62ced5bc5cbb90ce466a7544dd190d4b13db1b4689e3ee46d17a501e36850f0228406649"' : 'data-target="#xs-injectables-links-module-OrderModule-fc10a0b0db93d0cda7e285758ecc66aa416080a2e6ac9eafcb52c23d62ced5bc5cbb90ce466a7544dd190d4b13db1b4689e3ee46d17a501e36850f0228406649"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-fc10a0b0db93d0cda7e285758ecc66aa416080a2e6ac9eafcb52c23d62ced5bc5cbb90ce466a7544dd190d4b13db1b4689e3ee46d17a501e36850f0228406649"' :
                                        'id="xs-injectables-links-module-OrderModule-fc10a0b0db93d0cda7e285758ecc66aa416080a2e6ac9eafcb52c23d62ced5bc5cbb90ce466a7544dd190d4b13db1b4689e3ee46d17a501e36850f0228406649"' }>
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
                                            'data-target="#controllers-links-module-PaymentModule-fdf461e8a95fd43375629e75fb5ea9e941cb99cf0464c4e1f12656514ee4aa0c1a9242ca421d4ac68fc3c133b513e8cd1d886efff65fe8a3e380b958851afdaf"' : 'data-target="#xs-controllers-links-module-PaymentModule-fdf461e8a95fd43375629e75fb5ea9e941cb99cf0464c4e1f12656514ee4aa0c1a9242ca421d4ac68fc3c133b513e8cd1d886efff65fe8a3e380b958851afdaf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-fdf461e8a95fd43375629e75fb5ea9e941cb99cf0464c4e1f12656514ee4aa0c1a9242ca421d4ac68fc3c133b513e8cd1d886efff65fe8a3e380b958851afdaf"' :
                                            'id="xs-controllers-links-module-PaymentModule-fdf461e8a95fd43375629e75fb5ea9e941cb99cf0464c4e1f12656514ee4aa0c1a9242ca421d4ac68fc3c133b513e8cd1d886efff65fe8a3e380b958851afdaf"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PaymentModule-fdf461e8a95fd43375629e75fb5ea9e941cb99cf0464c4e1f12656514ee4aa0c1a9242ca421d4ac68fc3c133b513e8cd1d886efff65fe8a3e380b958851afdaf"' : 'data-target="#xs-injectables-links-module-PaymentModule-fdf461e8a95fd43375629e75fb5ea9e941cb99cf0464c4e1f12656514ee4aa0c1a9242ca421d4ac68fc3c133b513e8cd1d886efff65fe8a3e380b958851afdaf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-fdf461e8a95fd43375629e75fb5ea9e941cb99cf0464c4e1f12656514ee4aa0c1a9242ca421d4ac68fc3c133b513e8cd1d886efff65fe8a3e380b958851afdaf"' :
                                        'id="xs-injectables-links-module-PaymentModule-fdf461e8a95fd43375629e75fb5ea9e941cb99cf0464c4e1f12656514ee4aa0c1a9242ca421d4ac68fc3c133b513e8cd1d886efff65fe8a3e380b958851afdaf"' }>
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
                                            'data-target="#controllers-links-module-PaymentTypeModule-1134536ae512dc16101e8e15064ce7d6a12f2ff4965720322de73bd910823e4d13ac19a7c9760a2c743322bc1f9f79b5c26ff87f1dfb6eab60f3ea6b14791a86"' : 'data-target="#xs-controllers-links-module-PaymentTypeModule-1134536ae512dc16101e8e15064ce7d6a12f2ff4965720322de73bd910823e4d13ac19a7c9760a2c743322bc1f9f79b5c26ff87f1dfb6eab60f3ea6b14791a86"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentTypeModule-1134536ae512dc16101e8e15064ce7d6a12f2ff4965720322de73bd910823e4d13ac19a7c9760a2c743322bc1f9f79b5c26ff87f1dfb6eab60f3ea6b14791a86"' :
                                            'id="xs-controllers-links-module-PaymentTypeModule-1134536ae512dc16101e8e15064ce7d6a12f2ff4965720322de73bd910823e4d13ac19a7c9760a2c743322bc1f9f79b5c26ff87f1dfb6eab60f3ea6b14791a86"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentTypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PaymentTypeModule-1134536ae512dc16101e8e15064ce7d6a12f2ff4965720322de73bd910823e4d13ac19a7c9760a2c743322bc1f9f79b5c26ff87f1dfb6eab60f3ea6b14791a86"' : 'data-target="#xs-injectables-links-module-PaymentTypeModule-1134536ae512dc16101e8e15064ce7d6a12f2ff4965720322de73bd910823e4d13ac19a7c9760a2c743322bc1f9f79b5c26ff87f1dfb6eab60f3ea6b14791a86"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentTypeModule-1134536ae512dc16101e8e15064ce7d6a12f2ff4965720322de73bd910823e4d13ac19a7c9760a2c743322bc1f9f79b5c26ff87f1dfb6eab60f3ea6b14791a86"' :
                                        'id="xs-injectables-links-module-PaymentTypeModule-1134536ae512dc16101e8e15064ce7d6a12f2ff4965720322de73bd910823e4d13ac19a7c9760a2c743322bc1f9f79b5c26ff87f1dfb6eab60f3ea6b14791a86"' }>
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
                                            'data-target="#controllers-links-module-ProductCategoryModule-56f7786731ae3a9c2799b15e80bb773c2af7dfa6b19ab1c478f8da28001f38a576c16ed9de5a4512605deecf6a7a0556e7f09f688fc4b6b07d6b8b1c901e9923"' : 'data-target="#xs-controllers-links-module-ProductCategoryModule-56f7786731ae3a9c2799b15e80bb773c2af7dfa6b19ab1c478f8da28001f38a576c16ed9de5a4512605deecf6a7a0556e7f09f688fc4b6b07d6b8b1c901e9923"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductCategoryModule-56f7786731ae3a9c2799b15e80bb773c2af7dfa6b19ab1c478f8da28001f38a576c16ed9de5a4512605deecf6a7a0556e7f09f688fc4b6b07d6b8b1c901e9923"' :
                                            'id="xs-controllers-links-module-ProductCategoryModule-56f7786731ae3a9c2799b15e80bb773c2af7dfa6b19ab1c478f8da28001f38a576c16ed9de5a4512605deecf6a7a0556e7f09f688fc4b6b07d6b8b1c901e9923"' }>
                                            <li class="link">
                                                <a href="controllers/ProductCategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductCategoryModule-56f7786731ae3a9c2799b15e80bb773c2af7dfa6b19ab1c478f8da28001f38a576c16ed9de5a4512605deecf6a7a0556e7f09f688fc4b6b07d6b8b1c901e9923"' : 'data-target="#xs-injectables-links-module-ProductCategoryModule-56f7786731ae3a9c2799b15e80bb773c2af7dfa6b19ab1c478f8da28001f38a576c16ed9de5a4512605deecf6a7a0556e7f09f688fc4b6b07d6b8b1c901e9923"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductCategoryModule-56f7786731ae3a9c2799b15e80bb773c2af7dfa6b19ab1c478f8da28001f38a576c16ed9de5a4512605deecf6a7a0556e7f09f688fc4b6b07d6b8b1c901e9923"' :
                                        'id="xs-injectables-links-module-ProductCategoryModule-56f7786731ae3a9c2799b15e80bb773c2af7dfa6b19ab1c478f8da28001f38a576c16ed9de5a4512605deecf6a7a0556e7f09f688fc4b6b07d6b8b1c901e9923"' }>
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
                                            'data-target="#controllers-links-module-ProductModule-2552e65e8c5e26d1c22535ad1560f13fb21229606d0f9ac4980de00d3d8506b42ace6205df4110a1f2af451ad496e72f2f5863c67fc07915f3fc68075447cebc"' : 'data-target="#xs-controllers-links-module-ProductModule-2552e65e8c5e26d1c22535ad1560f13fb21229606d0f9ac4980de00d3d8506b42ace6205df4110a1f2af451ad496e72f2f5863c67fc07915f3fc68075447cebc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-2552e65e8c5e26d1c22535ad1560f13fb21229606d0f9ac4980de00d3d8506b42ace6205df4110a1f2af451ad496e72f2f5863c67fc07915f3fc68075447cebc"' :
                                            'id="xs-controllers-links-module-ProductModule-2552e65e8c5e26d1c22535ad1560f13fb21229606d0f9ac4980de00d3d8506b42ace6205df4110a1f2af451ad496e72f2f5863c67fc07915f3fc68075447cebc"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-2552e65e8c5e26d1c22535ad1560f13fb21229606d0f9ac4980de00d3d8506b42ace6205df4110a1f2af451ad496e72f2f5863c67fc07915f3fc68075447cebc"' : 'data-target="#xs-injectables-links-module-ProductModule-2552e65e8c5e26d1c22535ad1560f13fb21229606d0f9ac4980de00d3d8506b42ace6205df4110a1f2af451ad496e72f2f5863c67fc07915f3fc68075447cebc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-2552e65e8c5e26d1c22535ad1560f13fb21229606d0f9ac4980de00d3d8506b42ace6205df4110a1f2af451ad496e72f2f5863c67fc07915f3fc68075447cebc"' :
                                        'id="xs-injectables-links-module-ProductModule-2552e65e8c5e26d1c22535ad1560f13fb21229606d0f9ac4980de00d3d8506b42ace6205df4110a1f2af451ad496e72f2f5863c67fc07915f3fc68075447cebc"' }>
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