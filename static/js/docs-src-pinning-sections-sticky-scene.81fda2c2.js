(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docs/src/PinningSections/StickyScene.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/react/index.js"),i=t.n(r),c=t("./node_modules/@mdx-js/react/dist/index.es.js"),s=t("./node_modules/docz/dist/index.esm.js"),a=t("./packages/core/src/index.ts"),l=t("./docs/src/components/DemoWrapper.jsx"),d=t("./docs/src/components/CenterBox.jsx"),b=t("./docs/src/components/DescriptionBox.jsx"),p=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),m=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof StickySceneProps&&StickySceneProps&&StickySceneProps===Object(StickySceneProps)&&Object.isExtensible(StickySceneProps)&&Object.defineProperty(StickySceneProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StickySceneProps",filename:"packages/scene/src/components/StickyScene.tsx"}});var g=function(e){var n=e.className,t=e.style,c=e.children,s=e.trackingId,l=e.renderOverlay,d=Object(o.a)(e,["className","style","children","trackingId","renderOverlay"]),b=Object(m.a)({},t,{position:"relative"}),p=Object(r.useRef)(null),u=Object(a.f)(p,s),g=Object(a.g)(p,u,s),A=Object(a.e)(g);return i.a.createElement("div",Object.assign({ref:p,className:n,style:b},d),i.a.createElement("div",{style:A},c(g)),i.a.createElement("div",{style:{position:"relative"}},l))};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StickyScene",filename:"packages/scene/src/components/StickyScene.tsx"}});var A=t("./docs/src/config/shared-styles.js");function j(){var e=Object(p.a)(["",""]);return j=function(){return e},e}var O=Object(u.d)(g)(j(),A.a);"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderedStickyScene",filename:"docs/src/components/DemoStickyScene.jsx"}});var h=t("./docs/src/config/theme.js");t.d(n,"default",function(){return S});var B={},y="wrapper";function S(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)(y,Object.assign({},B,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"stickyscene"},"StickyScene"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"<StickyScene>")," is another kind of ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"/scroll_tracking/section"}),"Section")," which sticks its main content on the background when the top of the section reaches the top of the viewport,\nand it lets the supplementary content scroll through its sticky background."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)(s.c,{__position:0,__code:"<PageProvider>\n  <StickyScene\n    color={defaultColors.gray}\n    renderOverlay={\n      <>\n        <div style={{ height: '80vh', position: 'relative' }}>\n          <DescriptionBox color={defaultColors.gray}>\n            <h4>Description #1</h4>\n            <p>Supplementary content #1</p>\n          </DescriptionBox>\n        </div>\n        <div style={{ height: '80vh', position: 'relative' }}>\n          <DescriptionBox color={defaultColors.red}>\n            <h4>Description #2</h4>\n            <p>Supplementary content #2</p>\n          </DescriptionBox>\n        </div>\n        <div style={{ height: '80vh', position: 'relative' }}>\n          <DescriptionBox color={defaultColors.blue}>\n            <h4>Description #3</h4>\n            <p>Supplementary content #3</p>\n          </DescriptionBox>\n        </div>\n      </>\n    }\n  >\n    {({ isIntersecting, scrolledRatio }) => (\n      <CenterBox>\n        <h4>{'<StickyScene> background'}</h4>\n        <li>\n          isIntersecting: <b>{`${isIntersecting}`}</b>\n        </li>\n        <li>\n          scrolledRatio: <b>{scrolledRatio.toFixed(4)}</b>\n        </li>\n      </CenterBox>\n    )}\n  </StickyScene>\n</PageProvider>",__scope:{props:this?this.props:t,Playground:s.c,PageProvider:a.b,DemoWrapper:l.a,CenterBox:d.a,DescriptionBox:b.a,StickyScene:O,defaultColors:h.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSCYNcNJoKEVguAyVD0NldoAAFTUlc04HIIQEkSAEulwiD2CgrUYCISgAHVMjmCi0KNaiPQPOBJDgARyABdN9Gk3j-KE2ZYU4_DuIcfQMmvbxKPE91pFOaTZPkz51xoaT7F0gR9KwTT1W03imP6GZu1QBzDLddpJNMmS5IUqyCGU-BmIgDyBi87wnPtKD9IEKdsmcGIdkSZwEWdEI7FS2JtgyrLujE3z_LOQKLMdaglMkFTKDy9LMvSOKCMwMAwigAhHCgIU7BKjCyrMoLdEgFJJAmPiYBa9hA0lKiTU1dowVQXQUWOU4sNSxIsXYbhuPWKIBGeVArnaAAGdgkxmRy92rGYOxYGdToAFmu9gADZrvaW6LDAYCADFvWgRJTv4ZxDgRB1MBgoR-CWfjUEoOB7oRb71j-mhnAgLDLnYABGZ7bvkZbVqmABBOZdvYCMoPIGwoHQMNUI5XaxGp6MZHYFFtpgbhgGwrasXkLca2AOnoEZ4IADIpfGRJ5koZpxYZpnuDVuUwGQyVovadgAH4NglsMIxZq5lcl1BierKQZCrN8zBhZy2o6qYTdZ9nrYp5dqwTWaCBwf7MhSK8CBFmta2goiYBIygyKnMPw9rBqCqa50V0TwseoEPnndCTrut6k9MkSK2M_DycMh1VgMjgxI-fTsvGATsuaxjDhudgPmoM2CAUkIU6AA4ztYPBvr7JGXmi06ujgmJq91-RhYbluE1ciKouobyqCznOYHavOusoLO4CL-Cl59leM8TZ6xDX9zPPYABiPGKxv5fL9retnFCOZL30VwBDJF0CBKYz8lzNw_lIO-kVPIOQgS3G2sZ35X05h3XmwBu4wF7v3OUQ8R5j0FPkTy095zRDYFNVC58P6J0YNAjeMUfDbyFLvfe-cj6Fy6OgKh1CaF4BvnQh-j8ABMr94GQK_j_Mkk0aAAKAcBF0wjwHIMbrVcK99opwOUeHRBsgtGt1QQQHmXdfBYL7gQQew9R6kgnsQhas9yEL24Tw2sAiNEGSYdnfme8XYFwECfDwUAGROOcbWPht81EwOik_JMoi9FXwkb_aRBBZGFj0JmR-MTJDexCbWVRblImb28GIq-O5dEXwQZuZRpcy7FO4jTTgcAGh6D8VsGIM4lhuSPrAdAIoyHDnkCzbgbMozlMbrZZpmjRkILCcAdojBk6FXSGzDwEptiITaBgdo8hYlTMblACAtSM62CabQFp2snq1g8GIYAxQAAkwBjnNLgK0go8hijbMkFcuJuT9mHNbr875FhOkJGyL07sVxGBXOAMC7pYKBg4AiP9CANQHzPQ5B8r5uySkAqxa3SQ4zTmTMvui9-UgFmpxgBAqQkdiKkXIgIBOUg_YByDiHEWUgvZ2zMF-EAUkKrBWqtZVRqlhKwn_HALAgFgH6AYHhZyaD0BrkFaFea7QFXmkssquAfoHZYC0qTdgdU1IiSOHtBVSqMyhRwDIYo6x7qdgKFcIRXRZR4xdSqash1jpXDxjgAeLr2BnQ9RYFZOx1nIXQFcR-YAY2xuDewLwSUMjmkyCwPIVwACs1143VEYn4E4IwrgXTxkIt6QjS0-AukdFZEYzqKDrXWnAZ13ociWBdT6PgCZvSrSkGtDb62KCbUmD8Zhigep5Xy8yArLU2Tsg5cVkrtDStAuBLS5qqoztVeqzVM7ppEAAI6qpwB6EavdJBHhYK4c0-6GRwm1R6uV8VjjeIPr4vqR6T3UFGuNTYR4dXOj1c5A1BK9IGTNYY7pFqlLWrYLau6Nip4hA8HAI-4QYDxoiDMTNZ0ACk8bYBgHMewDNuGMOZFQHAP6AgiBXFRO4OAs8YARnNCRnDSwWO4ZHdWDGFp8g4x9TgN1fF8O2F4xB3GiNnQevWPcg9RdxSnOsO4R8_EPDQCmhyOD4ceOMWxrjX1Gb3XrHectCwfD9oX1DWspCGArj3Nzmw4-OArPhowPIeNFgWDI1rlcNA-znTmgCacbYHm-wPUdYGwTAazo4EM8Jlciapwpo7BAdNH1s0rg8XZrxrDD5Of7PyWR7mVxerQOaAjRHzQxbi0QeNVt1geAs-He1j0UhFqbTVyLQiauhcS8m1NqX7iXQy5Z1ZrnI0Tl7a4CM3WM1LFm_NjNc3IsDwzVx8OWX2D3PqV4BmviqYOby4XAJDJmbu124q9hAhivVnq9WfZiBAhUe6MATL8iaBXH4IAIgJ-ChZawUFN2CiNCdq29rO2XDtvtPiXOro7x1KF5QFKdO6aquMKRoCVUr3sGDAo-qY67FLWS3eJ9AGqN1KWmlBOjFH7phhiDjHyGFBT7LgJsdAS1_SoDx-wA9H6ASoG_ReiAV6b0ZAgPASnz7ctvsZxJT9Auz0TT_dJla1A1pajPP9MmABVAAMpYAA-vYHUuudQigOy-xzhcCuHUSCrx29oDVo4YVTAnIUT42rtQh6gVxXDIdQ7QDDlAsOBvjf0MxRb404nQBMH1Z1SPrB7hH9gz0E_VlzXxiLfWBCBe8DmoUU4rhXR8Ch_ZORtu0yu1TDXWu9eG-N6b83Az3YeJuyGgv_WUtpYrTmsbNmJsV8zkKavmudf66Nybs3Z2hnjHI8jAB-g9O1r9UsDx6L43_YuQZoznOLCyf3fJrIAglOoBU5QNTvpNMrmj7H4jGa8PGbu2Z56TWawuf7xDy3R2_HOb7xsrhoWXmZI8EvmqA_mMAgWPUOwf24WFyMWIOkWPWCWHeOeA2aWHaoWpWqA5We8lWMWSYO-G2V2n-0uV2J8NuRWsOqAY63KCOk6w05OQqdU5KRUC6WOaSOOq68qJOxOPMpOKO1kkuLB6QsucodEmojEzEXSbETEzUy03OUE2eKU4mohfk8u36rOC-pOaC96y0DuUwBqiUyU6Awh2U4GfBEYphMAmm9yShJh4mby8Oyg9BlUCuY0Suf4AES62ODABqIoZ4WoVM7Qj8e8SYMASY70_6-hqSa0kOZBVMr2d0_QtuVw_hWoP0Caf-Eap00aSYYAeRSYaM1YtAWARGwRQiA8Qi5ASYz0RRFgiEIBcoj8A8rgAAnO9B4HjHUQmoErjMEXjB4AAOzvRgBdEZEjA2C0A5GxqxrdGcKpEBEZFCjuBpDTFgADwwBCIeDdGJDzg9SFpNExroDvRnSuDdGIRBAnRNFCLPToCuCDG1EZEzB9BSI5EDyDFLbHFFF3bREGrPLazUCCzdB7SJEWBYGnRhARDdFJ44LtBJiWLdGbZxFOYnYwAZHZ5XDFDF5cxHxcBbY5Y-JkHQ5vJPGwFtZygg7dFYGWDB6nTmjF7dHZ69JppDZwlfRExOGI7lTI5fpnpC4i63ri4nxeEUA-G45cRQRpDOiZC0B6jZDC6qHqr8nXq3qJD_oGq857RSkZBZBymXo0zrDlDbCYanSDEbHWgZFwRHR9GDFnR8TdHJIBKjinQnGxb2kZGqbqYvTvTulmADL26Ab2iHY877qckuH84aF-CcKMTibClaCikcGyoSk9BwDvpGRqok5k6E6hSS77JmLBD9TUTM62Bs4c62jOS87pnHoRl8nykCli4S4PrJnIm9SqHVmnruG_pTQBn6pq5TB2FAlUxnBwBabjxEKIYzxkLVzxpYHmgmnsD0kjZ77AD1IwlTDN4z5rn6zsDFBrnZZrlvLsBXCoB5xQBt4JooHZb1IeIW6kFOYNHJAblszFBCKxZvSl54n3J5mEB0DL5CIcgRhr5vLnnZ7JYslOojaJ4Zqv6_TAS6b8b4wdaEE1iznznmg94lYALHQ4GEZXDoVLk1ibb2Zf5Q4TEvAwDnkhpZEYBk7g74nXlV57Qtk_4lHrmDJsyt6AG2DAEgycBgFoAQFBbQErib7kkxbdbRY4AfHIXt5JqoFd5DYYUXz76H6KZ-Cn7tCemX6jnaZwV8b6aCZIEXwma3Zw60HKAozbBRzirUDsEgIMCgnsD8CoDeiMhIBOVATlB_Cljmg_hSJwzrD8DVx-LRT8CfYgAxaRUBXVj8DlDryeRhUeVkxcx4SwDQhYDehSLPpkiUC7E5B5AFATgSE_DFjVCgggAZH8BRBoCJX8CqDYDirRUWCxUwDzDhgrRCmJWOXNVclYS1UgAAB6vqr5Z0TVNY_A9Eog7l_AQ170fqOA70Y1PV26jBoU_VA1z0gmOASYS1HlxZrO614l21u1_ASpdZKpGQiQ61r5vqeMJ1ggEhVo61eMc1A8C1_A6wVs8gPKpV3gHwvJKQNlqAdlMqYEr2IAtAPoWQYV_AzECmEBk15o6k_A31i88gQAA",mdxType:"Playground"},Object(c.b)(a.b,{mdxType:"PageProvider"},Object(c.b)(O,{color:h.a.gray,renderOverlay:Object(c.b)(i.a.Fragment,null,Object(c.b)("div",{style:{height:"80vh",position:"relative"}},Object(c.b)(b.a,{color:h.a.gray,mdxType:"DescriptionBox"},Object(c.b)("h4",null,"Description #1"),Object(c.b)("p",null,"Supplementary content #1"))),Object(c.b)("div",{style:{height:"80vh",position:"relative"}},Object(c.b)(b.a,{color:h.a.red,mdxType:"DescriptionBox"},Object(c.b)("h4",null,"Description #2"),Object(c.b)("p",null,"Supplementary content #2"))),Object(c.b)("div",{style:{height:"80vh",position:"relative"}},Object(c.b)(b.a,{color:h.a.blue,mdxType:"DescriptionBox"},Object(c.b)("h4",null,"Description #3"),Object(c.b)("p",null,"Supplementary content #3")))),mdxType:"StickyScene"},function(e){var n=e.isIntersecting,t=e.scrolledRatio;return Object(c.b)(d.a,{mdxType:"CenterBox"},Object(c.b)("h4",null,"<StickyScene> background"),Object(c.b)("li",null,"isIntersecting: ",Object(c.b)("b",null,"".concat(n))),Object(c.b)("li",null,"scrolledRatio: ",Object(c.b)("b",null,t.toFixed(4))))}))),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Import ",Object(c.b)("inlineCode",{parentName:"p"},"<StickyScene>"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { PageProvider } from '@react-scrolly/core';\nimport { StickyScene } from '@react-scrolly/plot'\n")),Object(c.b)("p",null,"Use it in your component:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"<StickyScene>")," takes two components from the following props to render:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"children"),":\nBackground content; it sticks to the viewport while the user is scrolling through the foreground content.")),Object(c.b)("p",null,"Since ",Object(c.b)("inlineCode",{parentName:"p"},"<StickyScene>")," is just a ",Object(c.b)("inlineCode",{parentName:"p"},"<Section>")," that helps you achieve the sticky scrolling effect with ease, it provides the same information like ",Object(c.b)("inlineCode",{parentName:"p"},"scrolledRatio")," as ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"/scroll_tracking/section#properties"}),"Section"),"."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"renderOverlay"),": Foreground content; normally acts as the descriptions for the background content.\nIts rendered content accounts for the real height of ",Object(c.b)("inlineCode",{parentName:"li"},"<StickyScene>"),", i.e., ",Object(c.b)("inlineCode",{parentName:"li"},"scrolledRatio")," given in the background is calculated by the reading progress of the foreground content.")))}S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/src/PinningSections/StickyScene.mdx"}}),S.isMDXComponent=!0},"./docs/src/components/DescriptionBox.jsx":function(e,n,t){"use strict";t.d(n,"a",function(){return b});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=t("./node_modules/polished/dist/polished.es.js"),c=t("./docs/src/config/media-queries.js"),s=t("./docs/src/config/theme.js");function a(){var e=Object(o.a)(["\n    width: 55%;\n  "]);return a=function(){return e},e}function l(){var e=Object(o.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 40%;\n  box-sizing: border-box;\n  border: 3px solid ",";\n  border-radius: 2px;\n  background: ",";\n  padding: 1.5rem;\n\n  ","\n\n  h4 {\n    background: ",";\n    display: inline-block;\n    padding: 0.1rem 0.5rem;\n    border-radius: 6px;\n    margin-left: -0.3rem;\n    color: ",";\n  }\n"]);return l=function(){return e},e}var d=s.a.primary,b=r.d.div(l(),function(e){var n=e.color;return void 0===n?d:n},function(e){var n=e.color,t=void 0===n?d:n;return Object(i.b)(.8,t)},c.a.greaterThan("mobile")(a()),s.a.background,s.a.primary);"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DescriptionBox",filename:"docs/src/components/DescriptionBox.jsx"}})},"./docs/src/config/shared-styles.js":function(e,n,t){"use strict";t.d(n,"a",function(){return d});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=t("./node_modules/polished/dist/polished.es.js"),c=t("./docs/src/config/media-queries.js"),s=t("./docs/src/config/theme.js");function a(){var e=Object(o.a)(["\n      font-size: 1.15rem;\n    "]);return a=function(){return e},e}function l(){var e=Object(o.a)(["\n  position: relative;\n  margin-top: -3px;\n  ",";\n  border: ",";\n  border-radius: 2px;\n\n  h5 {\n    font-size: 1.05rem;\n    margin-top: -2px;\n    margin-left: -2px;\n    color: ",";\n    background-color: ",";\n    display: inline-block;\n    padding: 0.25rem 0.75rem;\n    border-radius: 2px;\n    ","\n  }\n"]);return l=function(){return e},e}var d=Object(r.c)(l(),function(e){var n=e.height;return n?"height: ".concat(n):null},function(e){var n=e.color,t=void 0===n?s.a.gray:n;return"2.5px solid ".concat(Object(i.a)(.2)(t))},s.a.white,function(e){var n=e.color;return void 0===n?s.a.text:n},c.a.greaterThan("mobile")(a()));"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderedStyle",filename:"docs/src/config/shared-styles.js"}})}}]);
//# sourceMappingURL=docs-src-pinning-sections-sticky-scene.8bdaea5cafe5e4f080a1.js.map