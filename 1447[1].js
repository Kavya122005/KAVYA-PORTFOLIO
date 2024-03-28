"use strict";(self.odspNextWebpackJsonp=self.odspNextWebpackJsonp||[]).push([[1447],{3877:function(e,t,n){n.r(t),n.d(t,{resourceKey:function(){return I}});var a=n(27420),i=n(33133),r=n(1140),o=n(82309),s=n(19903),c=n(46268),d=n(42966),l=n(28260),u=n(53890),f=n(64827),p=n(40494),m=n(30814),_=n(66709),h=n(57607),b=n(34689),g=!b.MU.isActivated("8C62316A-3AF9-4CDB-875D-5C08EA8E7C21","02/24/2022","Stash ODC test hooks to window so that they persist throughout page load and in-app navigations"),v=!b.MU.isActivated("7BC6CDBD-BD48-45D5-A711-5EEF1D173418","01/26/2024","Redirects to auth on SkyApi 101/102 errors"),y=window.$Config&&window.$Config.isINT,S=function(e){function t(t,n){void 0===t&&(t={}),void 0===n&&(n={});var a=e.call(this,t,n)||this;return a._pendingRequests={},a._currentParamUpsells={},a._navigation=a.resources.consume(f.G),a}return(0,a.XT)(t,e),t.prototype.canPersistUserInfo=function(){return!0},t.prototype.getCurrentParamUpsells=function(){return this._currentParamUpsells},t.prototype.setCurrentParamUpsells=function(e){this._currentParamUpsells=e},t.prototype.getAnid=function(){return c.Z.getAnid()},t.prototype.getMarket=function(){return c.Z.getMarket()},t.prototype.getLanguage=function(){return c.Z.getLanguage()},t.prototype.isNewUser=function(){return c.Z.isNewUser()},t.prototype.isAuthenticated=function(){return c.Z.isAuthenticated()},t.prototype.getUserInfo=function(e){var t=this,n=(0,m.TR)(),a=e?n+"?v="+Math.random():n,i=new s.Z;if(this._pendingRequests[n])return this._pendingRequests[n];if(!this.isAuthenticated()||!e&&this._cachedUserInfo)return r.XP.wrap(this._cachedUserInfo);var c=i.send({apiName:"GetUserInfo",url:a}).then(function(e){if(delete t._pendingRequests[n],t._cachedUserInfo=e,e&&e.notifications)for(var a=0,i=e.notifications;a<i.length;a++){var r=i[a];7===r.type&&r.param&&(t._currentParamUpsells=JSON.parse(r.param))}if(e&&e.info)for(var o=0,s=e.info;o<s.length;o++){var c=s[o];24===c.type&&(t._positioningData=c)}return e},function(e){var a;if(delete t._pendingRequests[n],v){var i=null===(a=null==e?void 0:e.data)||void 0===a?void 0:a.code;101!==i&&102!==i||(o.Z.logError(e,{eventName:"SkyAPIAuthFailure"}),t._navigation.navigateTo({url:(0,_.zP)()}))}return r.XP.wrapError(e)});return this._pendingRequests[n]=c,c},t.prototype.setUserInfo=function(e){var t=(0,m.nT)();return(new s.Z).sendPostUrlEncoded("SetUserInfo",t,JSON.stringify(e)).then(function(e){return!(!e||e.error)})},t.prototype.setUserInfoWithUserFacts=function(e,t,n,a,i){var r={type:e,action:t};return n&&(r.param=n),i&&(r.data=i),a&&(r.id=a),n&&7===e&&(this._currentParamUpsells=JSON.parse(n)),this.setUserInfo(r)},t.prototype.sendShowUpsell=function(e,t,n){return this._sendUpsell(e,t,n,"SHOWED")},t.prototype.sendCloseUpsell=function(e,t,n){return this._sendUpsell(e,t,n,"CLOSE")},t.prototype.resetUpsellUserFact=function(){return this.setUserInfoWithUserFacts(7,3,JSON.stringify({}))},t.prototype.handleUpdateUpsellData=function(e,t,n){var a=this.getUpsellVariationIfApplicable(e),i=this._currentParamUpsells[a.id];i?(t&&(i.d=1),n&&i.v++):this._currentParamUpsells[a.id]={d:t?1:0,v:n?1:0}},t.prototype.updateUpsellData=function(e,t,n){return this.handleUpdateUpsellData(e,t,n),this.setUserInfoWithUserFacts(7,3,JSON.stringify(this._currentParamUpsells))},t.prototype.hasUserFact=function(e){var t=this;return this.getUserInfo(!1).then(function(n){var a=!1;if(!t._cachedUserInfo)throw new Error("CachedUserInfo is not defined when trying to access user fact");return(a=t._cachedUserInfo.info.some(function(t){return t.type===e&&t.isSet}))||(a=t._cachedUserInfo.rewards.some(function(t){return t.type===e&&t.isSet})),a})},t.prototype.getUserFact=function(e){return this.getUserInfo(!1).then(function(t){if(t&&t.info)for(var n=t.info,a=0;a<n.length;a++)if(n[a].type===e)return n[a];return null})},t.prototype.getIsPremium=function(e){return this.getUserInfo(e).then(function(e){if(e&&e.info)for(var t=e.info,n=0;n<t.length;n++)if(35===t[n].type)return!0;return!1})},t.prototype.getUpsellToShow=function(e){var t=this._checkForParamOverrides();return null!==t?r.XP.wrap(t):this.checkThrottle(d.XP[u.Z.OneRmO365Upsell]).then(function(e){return e?d.XP[u.Z.OneRmO365Upsell]:null})},t.prototype.getUpsellViewCount=function(e){var t=this,n=this.getUpsellVariationIfApplicable(e);return this.getUserInfo(!1).then(function(e){var a=0;return t._currentParamUpsells[n.id]&&(a=t._currentParamUpsells[n.id].v),a},function(e){return null})},t.prototype.getUpsellDismissed=function(e){var t=this,n=this.getUpsellVariationIfApplicable(e);return this.getUserInfo(!1).then(function(e){var a=!1;return t._currentParamUpsells[n.id]&&(a=!!t._currentParamUpsells[n.id].d),a},function(e){return null})},t.prototype.checkThrottle=function(e){var t=this._navigation.viewParams,n=this.getUpsellDismissed(e),a=this.getUpsellViewCount(e);return r.XP.all({didUserDismiss:n,viewCount:a}).then(function(n){var a=n.didUserDismiss,i=n.viewCount;return null!==a&&null!==i&&e.checkThrottle({viewCount:i,didUserDismiss:a,viewParams:t,market:$Config.mkt})})},t.prototype.getUpsellIframeSrc=function(e,t){var n=this;return this.getUserInfo(!1).then(function(a){if(e.getUpsellIframeUrl)return n.getIsPremium(!1).then(function(a){return e.getUpsellIframeUrl({anid:n.getAnid(),market:$Config.mkt,override:0,isNewUser:n.isNewUser(),upsellUserId:$Config.upsellUserId,variationId:e.id,availableUpsells:d.XP,isO365:a,bytesAvailable:n._getTotalQuotaInBytes(t),bytesUsed:n._getQuotaUsedInBytes(t)})})})},t.prototype.getUpsellVariationIfApplicable=function(e){return e.variation?d.XP[e.variation]:e},t.prototype.getUpsellDismissedById=function(e,t){return r.XP.wrap(void 0)},t.prototype.getUpsellViewCountById=function(e,t){return r.XP.wrap(void 0)},t.prototype.markUpsellAsSeen=function(e){return r.XP.wrap(void 0)},t.prototype.markUpsellAsDismissed=function(e){return r.XP.wrap(void 0)},t.prototype.getFirstRunExperienceDismissed=function(){var e=this;return this.getUserInfo(!1).then(function(t){var n=!1;return e._currentParamUpsells[u.Z.FirstRunExperienceDialog]&&(n=!!e._currentParamUpsells[u.Z.FirstRunExperienceDialog].d),n},function(e){return!0})},t.prototype.getFirstRunExperienceViewCount=function(){var e=this;return this.getUserInfo(!1).then(function(t){var n=0,a=e._currentParamUpsells[u.Z.FirstRunExperienceDialog];return a&&(n=a.v),n})},t.prototype.updateFirstRunExperienceData=function(e,t){return this.handleUpdateFirstRunExperienceData(e,t),this.setUserInfoWithUserFacts(7,3,JSON.stringify(this._currentParamUpsells))},t.prototype.handleUpdateFirstRunExperienceData=function(e,t){var n=this._currentParamUpsells[u.Z.FirstRunExperienceDialog];n?(e&&(n.d=1),t&&n.v++):this._currentParamUpsells[u.Z.FirstRunExperienceDialog]={d:e?1:0,v:t?1:0}},t.prototype.hasPositioningBeenViewed=function(){var e=this;return this.getUserInfo(!1).then(function(){return!!e._positioningData},function(e){return!0})},t.prototype.datePositioningViewed=function(){var e=this;return this.getUserInfo(!1).then(function(){var t=e._positioningData;if(t)return new Date(t.createdDate+"z")})},t.prototype.getPremiumUpsellsViewed=function(){return r.XP.all({hasPositioningViewed:this.hasPositioningBeenViewed(),hasNewFeaturesViewed:this.getMostRecentNewFeaturesUpsellViewed()})},t.prototype.getMostRecentNewFeaturesUpsellViewed=function(){var e=this;return this.getUserInfo(!1).then(function(){var t=e._positioningData;return!t||!!t.param&&JSON.parse(t.param).v>=2},function(e){return!0})},t.prototype.getExpiringSharingLinksSeen=function(){var e=this;return this.getUserInfo(!1).then(function(t){var n=e._currentParamUpsells[u.Z.ExpiringSharingLinks];return n&&!!n.d},function(e){return!0})},t.prototype.setExpiringSharingLinksSeen=function(){var e=this._currentParamUpsells[u.Z.ExpiringSharingLinks];e?e.d=1:this._currentParamUpsells[u.Z.ExpiringSharingLinks]={d:1,v:1},this.setUserInfoWithUserFacts(7,3,JSON.stringify(this._currentParamUpsells))},t.prototype._checkForParamOverrides=function(){var e=this._navigation.viewParams,t=D(h.V.upsellOverride,e);return t?d.XP[t]:(D(h.V.resetUpsellParams,e)&&this.resetUpsellUserFact(),null)},t.prototype._getTotalQuotaInBytes=function(e){return e&&e.properties&&e.properties.quota&&e.properties.quota.total},t.prototype._getQuotaUsedInBytes=function(e){var t=this._getTotalQuotaInBytes(e);return t?t-e.properties.quota.remaining:null},t.prototype._sendUpsell=function(e,t,n,a){var i=new s.Z,r=y?d.eX:d.kH,o={CampaignId:e.CampaignID,ContentId:e.MessageID,Id:t,Locale:n,Source:"OneDriveWebBanner",TransactionID:e.TransactionID,Type:0,UserAction:a},c="".concat(r,"api/v1/messaging/web/useraction?").concat(l.J$(o));return i.sendPost("OneRM",c,"").then(function(e){return!0},function(e){return!1})},t}(i.XP);function D(e,t){return g?(0,h.y)(e,t):t[e]}t.default=S;var I=(0,p.m7)("UserInfoDataSource",S)}
,42966:function(e,t,n){n.d(t,{eX:function(){return s},kH:function(){return c}});var a,i=n(40175),r=n(53890),o=window.$Config&&window.$Config.isINT,s="https://messaging-int.msonerm.com/",c="https://dynmsg.modpim.com/",d=((a={})[r.Z.NewBrandFRE]={id:r.Z.NewBrandFRE,type:i.Z.FRE,checkThrottle:function(e){return e.viewCount<=2&&!e.didUserDismiss},getUpsellIframeUrl:function(e){return"".concat(o?s:c,"api/v1/messaging/web/message?puid=").concat(e.upsellUserId,"&locale=").concat(e.market,"&Source=OneDriveFRE")},shouldSendMessageOnClose:!0,renderType:0},a[r.Z.OneRmO365Upsell]={id:r.Z.OneRmO365Upsell,type:i.Z.ONEUNIT,checkThrottle:function(e){return!0},getUpsellIframeUrl:function(e){return"".concat(o?s:c,"api/v1/messaging/web/message?puid=").concat(e.upsellUserId,"&locale=").concat(e.market,"&data=").concat(encodeURIComponent(JSON.stringify({isO365:e.isO365,bytesUsed:e.bytesUsed,bytesAvailable:e.bytesAvailable})),"&Source=OneDriveWebBanner")},shouldSendMessageOnClose:!0,renderType:1},a);t.XP=d}
,40175:function(e,t){var n;!function(e){e[e.FRE=0]="FRE",e[e.ONEUNIT=1]="ONEUNIT"}(n||(n={})),t.Z=n}
,53890:function(e,t){var n;!function(e){e[e.None=0]="None",e[e.NewBrandFRE=1]="NewBrandFRE",e[e.MusicFolderCreationOld=2]="MusicFolderCreationOld",e[e.MusicFolderCreation=3]="MusicFolderCreation",e[e.OneUnitUpsell=4]="OneUnitUpsell",e[e.OneDriveBusinessUpsell=5]="OneDriveBusinessUpsell",e[e.TenGigMaxFileSize=6]="TenGigMaxFileSize",e[e.PreviewTagsView=7]="PreviewTagsView",e[e.XboxMusic=8]="XboxMusic",e[e.O365Upsell1=9]="O365Upsell1",e[e.O365Upsell2=10]="O365Upsell2",e[e.O365Upsell3=11]="O365Upsell3",e[e.O365Upsell4=12]="O365Upsell4",e[e.OneRmO365Upsell=13]="OneRmO365Upsell",e[e.FirstRunExperienceDialog=14]="FirstRunExperienceDialog",e[e.ExpiringSharingLinks=15]="ExpiringSharingLinks",e[e.MobileUpsell=16]="MobileUpsell",e[e.WrsIntroduction=17]="WrsIntroduction"}(n||(n={})),t.Z=n}
}]);