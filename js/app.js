!function(e){function t(a){if(n[a])return n[a].exports;var d=n[a]={exports:{},id:a,loaded:!1};return e[a].call(d.exports,d,d.exports,t),d.loaded=!0,d.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var d=n(1),i=a(d);console.log(i.default)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=n(2),i=a(d),o=n(3),s=a(o),r=(0,s.default)('[data-remodal-id="wizard"]'),l={github:"github.com",bitbucket:"bitbucket.org",gitlab:"gitlab.com"},c={REPO_URL:"https://{placeholder}/getgrav/grav.git"},u=0,f=0,p=null;(0,s.default)(document).on("closed",r,function(e){u=0}),(0,s.default)(document).on("click","[data-gitsync-action]",function(e){e.preventDefault();var t=(0,s.default)(e.target).closest("[data-gitsync-action]"),n=r.find('[data-gitsync-action="previous"]'),a=r.find('[data-gitsync-action="next"]'),d=r.find('[data-gitsync-action="save"]'),i=t.data("gitsyncAction");r.find(".step-"+u+" > .panel").slideUp(),u+="next"===i?1:-1,r.find(".step-"+u+" > .panel").slideDown(),d.addClass("hidden"),"next"===i&&n.removeClass("hidden"),u<=0&&n.addClass("hidden"),u>0&&a.removeClass("hidden"),u===f&&(a.addClass("hidden"),n.removeClass("hidden"),d.removeClass("hidden"))}),(0,s.default)(document).on("change",'[name="gitsync[repository]"]',function(e){var t=(0,s.default)(e.target);p=t.val(),Object.keys(l).forEach(function(e){r.find(".hidden-step-"+e)[e===p?"removeClass":"addClass"]("hidden"),e===p&&r.find('input[name="gitsync[repo_url]"][placeholder]').attr("placeholder",c.REPO_URL.replace(/\{placeholder\}/,l[e]))})}),(0,s.default)(document).ready(function(){if(f=r.find('[class^="step-"]').length-1,r.wrapInner("<form></form>"),r.find("form > [class^=step-]:not(.step-"+u+") > .panel").hide().removeClass("hidden"),i.default.first_time){var e=r.remodal({closeOnConfirm:!1});e.open()}}),t.default=i.default},function(e,t){e.exports=GitSync},function(e,t){e.exports=jQuery}]);
//# sourceMappingURL=app.js.map