(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[44],{1069:function(e,t,n){"use strict";var a;!function(e){e[e.FRE=0]="FRE",e[e.ONEUNIT=1]="ONEUNIT"}(a||(a={})),t.e=a},1099:function(e,t,n){"use strict";n.d(t,"n",function(){return s}),n.d(t,"e",function(){return c});var a,i=n(1069),r=n(1100),o=window.$Config&&window.$Config.isINT,s="https://messaging-int.msonerm.com/",c="https://dynmsg.modpim.com/",d=((a={})[r.e.NewBrandFRE]={id:r.e.NewBrandFRE,type:i.e.FRE,checkThrottle:function(e){return e.viewCount<=2&&!e.didUserDismiss},getUpsellIframeUrl:function(e){return"".concat(o?s:c,"api/v1/messaging/web/message?puid=").concat(e.upsellUserId,"&locale=").concat(e.market,"&Source=OneDriveFRE")},shouldSendMessageOnClose:!0,renderType:0},a[r.e.OneRmO365Upsell]={id:r.e.OneRmO365Upsell,type:i.e.ONEUNIT,checkThrottle:function(e){return!0},getUpsellIframeUrl:function(e){return"".concat(o?s:c,"api/v1/messaging/web/message?puid=").concat(e.upsellUserId,"&locale=").concat(e.market,"&data=").concat(encodeURIComponent(JSON.stringify({isO365:e.isO365,bytesUsed:e.bytesUsed,bytesAvailable:e.bytesAvailable})),"&Source=OneDriveWebBanner")},shouldSendMessageOnClose:!0,renderType:1},a);t.t=d},1100:function(e,t,n){"use strict";var a;!function(e){e[e.None=0]="None",e[e.NewBrandFRE=1]="NewBrandFRE",e[e.MusicFolderCreationOld=2]="MusicFolderCreationOld",e[e.MusicFolderCreation=3]="MusicFolderCreation",e[e.OneUnitUpsell=4]="OneUnitUpsell",e[e.OneDriveBusinessUpsell=5]="OneDriveBusinessUpsell",e[e.TenGigMaxFileSize=6]="TenGigMaxFileSize",e[e.PreviewTagsView=7]="PreviewTagsView",e[e.XboxMusic=8]="XboxMusic",e[e.O365Upsell1=9]="O365Upsell1",e[e.O365Upsell2=10]="O365Upsell2",e[e.O365Upsell3=11]="O365Upsell3",e[e.O365Upsell4=12]="O365Upsell4",e[e.OneRmO365Upsell=13]="OneRmO365Upsell",e[e.FirstRunExperienceDialog=14]="FirstRunExperienceDialog",e[e.ExpiringSharingLinks=15]="ExpiringSharingLinks",e[e.MobileUpsell=16]="MobileUpsell",e[e.WrsIntroduction=17]="WrsIntroduction"}(a||(a={})),t.e=a},1488:function(e,t,n){"use strict";n.r(t),n.d(t,"resourceKey",function(){return I});var a=n(1),i=n(24),r=n(85),o=n(38),s=n(167),c=n(124),d=n(1099),l=n(19),u=n(1100),f=n(158),p=n(176),m=n(381),_=n(21),h=n(380),b=n(3),g=!b.e.isActivated("8C62316A-3AF9-4CDB-875D-5C08EA8E7C21","02/24/2022","Stash ODC test hooks to window so that they persist throughout page load and in-app navigations"),v=!b.e.isActivated("7BC6CDBD-BD48-45D5-A711-5EEF1D173418","01/26/2024","Redirects to auth on SkyApi 101/102 errors"),y=window.$Config&&window.$Config.isINT,S=function(e){function t(t,n){void 0===t&&(t={}),void 0===n&&(n={});var a=e.call(this,t,n)||this;return a._pendingRequests={},a._currentParamUpsells={},a._navigation=a.resources.consume(f.e),a}return Object(a.a)(t,e),t.prototype.canPersistUserInfo=function(){return!0},t.prototype.getCurrentParamUpsells=function(){return this._currentParamUpsells},t.prototype.setCurrentParamUpsells=function(e){this._currentParamUpsells=e},t.prototype.getAnid=function(){return c.e.getAnid()},t.prototype.getMarket=function(){return c.e.getMarket()},t.prototype.getLanguage=function(){return c.e.getLanguage()},t.prototype.isNewUser=function(){return c.e.isNewUser()},t.prototype.isAuthenticated=function(){return c.e.isAuthenticated()},t.prototype.getUserInfo=function(e){var t=this,n=Object(m.e)(),a=e?n+"?v="+Math.random():n,i=new s.e;if(this._pendingRequests[n])return this._pendingRequests[n];if(!this.isAuthenticated()||!e&&this._cachedUserInfo)return r.n.wrap(this._cachedUserInfo);var c=i.send({apiName:"GetUserInfo",url:a}).then(function(e){if(delete t._pendingRequests[n],t._cachedUserInfo=e,e&&e.notifications)for(var a=0,i=e.notifications;a<i.length;a++){var r=i[a];7===r.type&&r.param&&(t._currentParamUpsells=JSON.parse(r.param))}if(e&&e.info)for(var o=0,s=e.info;o<s.length;o++){var c=s[o];24===c.type&&(t._positioningData=c)}return e},function(e){var a;if(delete t._pendingRequests[n],v){var i=null===(a=null==e?void 0:e.data)||void 0===a?void 0:a.code;101!==i&&102!==i||(o.e.logError(e,{eventName:"SkyAPIAuthFailure"}),t._navigation.navigateTo({url:Object(_.a)()}))}return r.n.wrapError(e)});return this._pendingRequests[n]=c,c},t.prototype.setUserInfo=function(e){var t=Object(m.t)();return(new s.e).sendPostUrlEncoded("SetUserInfo",t,JSON.stringify(e)).then(function(e){return!(!e||e.error)})},t.prototype.setUserInfoWithUserFacts=function(e,t,n,a,i){var r={type:e,action:t};return n&&(r.param=n),i&&(r.data=i),a&&(r.id=a),n&&7===e&&(this._currentParamUpsells=JSON.parse(n)),this.setUserInfo(r)},t.prototype.sendShowUpsell=function(e,t,n){return this._sendUpsell(e,t,n,"SHOWED")},t.prototype.sendCloseUpsell=function(e,t,n){return this._sendUpsell(e,t,n,"CLOSE")},t.prototype.resetUpsellUserFact=function(){return this.setUserInfoWithUserFacts(7,3,JSON.stringify({}))},t.prototype.handleUpdateUpsellData=function(e,t,n){var a=this.getUpsellVariationIfApplicable(e),i=this._currentParamUpsells[a.id];i?(t&&(i.d=1),n&&i.v++):this._currentParamUpsells[a.id]={d:t?1:0,v:n?1:0}},t.prototype.updateUpsellData=function(e,t,n){return this.handleUpdateUpsellData(e,t,n),this.setUserInfoWithUserFacts(7,3,JSON.stringify(this._currentParamUpsells))},t.prototype.hasUserFact=function(e){var t=this;return this.getUserInfo(!1).then(function(n){var a=!1;if(!t._cachedUserInfo)throw new Error("CachedUserInfo is not defined when trying to access user fact");return(a=t._cachedUserInfo.info.some(function(t){return t.type===e&&t.isSet}))||(a=t._cachedUserInfo.rewards.some(function(t){return t.type===e&&t.isSet})),a})},t.prototype.getUserFact=function(e){return this.getUserInfo(!1).then(function(t){if(t&&t.info)for(var n=t.info,a=0;a<n.length;a++)if(n[a].type===e)return n[a];return null})},t.prototype.getIsPremium=function(e){return this.getUserInfo(e).then(function(e){if(e&&e.info)for(var t=e.info,n=0;n<t.length;n++)if(35===t[n].type)return!0;return!1})},t.prototype.getUpsellToShow=function(e){var t=this._checkForParamOverrides();return null!==t?r.n.wrap(t):this.checkThrottle(d.t[u.e.OneRmO365Upsell]).then(function(e){return e?d.t[u.e.OneRmO365Upsell]:null})},t.prototype.getUpsellViewCount=function(e){var t=this,n=this.getUpsellVariationIfApplicable(e);return this.getUserInfo(!1).then(function(e){var a=0;return t._currentParamUpsells[n.id]&&(a=t._currentParamUpsells[n.id].v),a},function(e){return null})},t.prototype.getUpsellDismissed=function(e){var t=this,n=this.getUpsellVariationIfApplicable(e);return this.getUserInfo(!1).then(function(e){var a=!1;return t._currentParamUpsells[n.id]&&(a=!!t._currentParamUpsells[n.id].d),a},function(e){return null})},t.prototype.checkThrottle=function(e){var t=this._navigation.viewParams,n=this.getUpsellDismissed(e),a=this.getUpsellViewCount(e);return r.n.all({didUserDismiss:n,viewCount:a}).then(function(n){var a=n.didUserDismiss,i=n.viewCount;return null!==a&&null!==i&&e.checkThrottle({viewCount:i,didUserDismiss:a,viewParams:t,market:$Config.mkt})})},t.prototype.getUpsellIframeSrc=function(e,t){var n=this;return this.getUserInfo(!1).then(function(a){if(e.getUpsellIframeUrl)return n.getIsPremium(!1).then(function(a){return e.getUpsellIframeUrl({anid:n.getAnid(),market:$Config.mkt,override:0,isNewUser:n.isNewUser(),upsellUserId:$Config.upsellUserId,variationId:e.id,availableUpsells:d.t,isO365:a,bytesAvailable:n._getTotalQuotaInBytes(t),bytesUsed:n._getQuotaUsedInBytes(t)})})})},t.prototype.getUpsellVariationIfApplicable=function(e){return e.variation?d.t[e.variation]:e},t.prototype.getUpsellDismissedById=function(e,t){return r.n.wrap(void 0)},t.prototype.getUpsellViewCountById=function(e,t){return r.n.wrap(void 0)},t.prototype.markUpsellAsSeen=function(e){return r.n.wrap(void 0)},t.prototype.markUpsellAsDismissed=function(e){return r.n.wrap(void 0)},t.prototype.getFirstRunExperienceDismissed=function(){var e=this;return this.getUserInfo(!1).then(function(t){var n=!1;return e._currentParamUpsells[u.e.FirstRunExperienceDialog]&&(n=!!e._currentParamUpsells[u.e.FirstRunExperienceDialog].d),n},function(e){return!0})},t.prototype.getFirstRunExperienceViewCount=function(){var e=this;return this.getUserInfo(!1).then(function(t){var n=0,a=e._currentParamUpsells[u.e.FirstRunExperienceDialog];return a&&(n=a.v),n})},t.prototype.updateFirstRunExperienceData=function(e,t){return this.handleUpdateFirstRunExperienceData(e,t),this.setUserInfoWithUserFacts(7,3,JSON.stringify(this._currentParamUpsells))},t.prototype.handleUpdateFirstRunExperienceData=function(e,t){var n=this._currentParamUpsells[u.e.FirstRunExperienceDialog];n?(e&&(n.d=1),t&&n.v++):this._currentParamUpsells[u.e.FirstRunExperienceDialog]={d:e?1:0,v:t?1:0}},t.prototype.hasPositioningBeenViewed=function(){var e=this;return this.getUserInfo(!1).then(function(){return!!e._positioningData},function(e){return!0})},t.prototype.datePositioningViewed=function(){var e=this;return this.getUserInfo(!1).then(function(){var t=e._positioningData;if(t)return new Date(t.createdDate+"z")})},t.prototype.getPremiumUpsellsViewed=function(){return r.n.all({hasPositioningViewed:this.hasPositioningBeenViewed(),hasNewFeaturesViewed:this.getMostRecentNewFeaturesUpsellViewed()})},t.prototype.getMostRecentNewFeaturesUpsellViewed=function(){var e=this;return this.getUserInfo(!1).then(function(){var t=e._positioningData;return!t||!!t.param&&JSON.parse(t.param).v>=2},function(e){return!0})},t.prototype.getExpiringSharingLinksSeen=function(){var e=this;return this.getUserInfo(!1).then(function(t){var n=e._currentParamUpsells[u.e.ExpiringSharingLinks];return n&&!!n.d},function(e){return!0})},t.prototype.setExpiringSharingLinksSeen=function(){var e=this._currentParamUpsells[u.e.ExpiringSharingLinks];e?e.d=1:this._currentParamUpsells[u.e.ExpiringSharingLinks]={d:1,v:1},this.setUserInfoWithUserFacts(7,3,JSON.stringify(this._currentParamUpsells))},t.prototype._checkForParamOverrides=function(){var e=this._navigation.viewParams,t=D(h.e.upsellOverride,e);return t?d.t[t]:(D(h.e.resetUpsellParams,e)&&this.resetUpsellUserFact(),null)},t.prototype._getTotalQuotaInBytes=function(e){return e&&e.properties&&e.properties.quota&&e.properties.quota.total},t.prototype._getQuotaUsedInBytes=function(e){var t=this._getTotalQuotaInBytes(e);return t?t-e.properties.quota.remaining:null},t.prototype._sendUpsell=function(e,t,n,a){var i=new s.e,r=y?d.n:d.e,o={CampaignId:e.CampaignID,ContentId:e.MessageID,Id:t,Locale:n,Source:"OneDriveWebBanner",TransactionID:e.TransactionID,Type:0,UserAction:a},c="".concat(r,"api/v1/messaging/web/useraction?").concat(l.t(o));return i.sendPost("OneRM",c,"").then(function(e){return!0},function(e){return!1})},t}(i.n);function D(e,t){return g?Object(h.t)(e,t):t[e]}t.default=S;var I=Object(p.r)("UserInfoDataSource",S)}}]);