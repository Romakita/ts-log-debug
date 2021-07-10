(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{764:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"class-patternlayout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-patternlayout"}},[t._v("#")]),t._v(" Class PatternLayout")]),t._v(" "),s("Badge",{attrs:{text:"Class",type:"class"}}),t._v(" "),s("Badge",{attrs:{text:"return",title:"{Function}",type:"return"}}),t._v(" "),s("Badge",{attrs:{text:"authors",title:"['Stephan Strittmatter', 'Jan Schmidle']",type:"authors"}}),t._v(" "),s("section",{staticClass:"table-features"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[t._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { PatternLayout } "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@tsed/logger"')])])])]),s("tr",[s("th",[t._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/tsedio/logger/blob/v5.17.0/packages/logger/src/layouts/components/PatternLayout.ts#L0-L0"}},[t._v("/packages/logger/src/layouts/components/PatternLayout.ts")])])])])])]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" PatternLayout "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/logger/layouts/class/BaseLayout.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("BaseLayout")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    #"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/logger/layouts/interfaces/IBasicLayoutConfiguration.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("IBasicLayoutConfiguration")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[t._v('<span class="token function">transform</span><span class="token punctuation">(</span>loggingEvent<span class="token punctuation">:</span> <a href="/api/logger/core/LogEvent.html"><span class="token">LogEvent</span></a><span class="token punctuation">,</span> timezoneOffset?<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("PatternLayout\nFormat for specifiers is %[padding].[truncation][field]{[format]}\ne.g. %5.10p - left pad the log level by 5 characters, up to a max of 10\nFields can be any of:")]),t._v(" "),s("ul",[s("li",[t._v("%r time in toLocaleTimeString format")]),t._v(" "),s("li",[t._v("%p log level")]),t._v(" "),s("li",[t._v("%c log category")]),t._v(" "),s("li",[t._v("%h hostname")]),t._v(" "),s("li",[t._v("%m log data")]),t._v(" "),s("li",[t._v("%j log data as JSON")]),t._v(" "),s("li",[t._v("%d date in constious formats")]),t._v(" "),s("li",[t._v("%% %")]),t._v(" "),s("li",[t._v("%n newline")]),t._v(" "),s("li",[t._v("%z pid")]),t._v(" "),s("li",[t._v("%x{[tokenname]} add dynamic tokens to your log. Tokens are specified in the tokens parameter\nYou can use %[ and %] to define a colored block.")])]),t._v(" "),s("p",[t._v("Tokens are specified as simple key:value objects.\nThe key represents the token name whereas the value can be a string or function\nwhich is called to extract the value to put in the log message. If token is not\nfound, it doesn't replace the field.")]),t._v(" "),s("p",[t._v("A sample token would be: { 'pid' : function() { return process.pid; } }")]),t._v(" "),s("p",[t._v("Takes a pattern string, array of tokens and returns a layouts function.")]),t._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loggingEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/logger/core/LogEvent.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("LogEvent")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timezoneOffset?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);