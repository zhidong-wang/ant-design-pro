(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{gQJD:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE")),d=n(t("d6i3")),u=t("n43w"),c={namespace:"profileAndadvanced",state:{advancedOperation1:[],advancedOperation2:[],advancedOperation3:[]},effects:{fetchAdvanced:d.default.mark(function e(a,t){var n,r,c;return d.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.call,r=t.put,e.next=3,n(u.queryAdvancedProfile);case 3:return c=e.sent,e.next=6,r({type:"show",payload:c});case 6:case"end":return e.stop()}},e)})},reducers:{show:function(e,a){var t=a.payload;return(0,r.default)({},e,t)}}},i=c;a.default=i},n43w:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.queryAdvancedProfile=c;var r=n(t("d6i3")),d=n(t("1l/V")),u=n(t("sy1d"));function c(){return i.apply(this,arguments)}function i(){return i=(0,d.default)(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("/api/profile/advanced"));case 1:case"end":return e.stop()}},e)})),i.apply(this,arguments)}}}]);