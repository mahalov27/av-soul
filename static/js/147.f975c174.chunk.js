"use strict";(self.webpackChunkav_soul=self.webpackChunkav_soul||[]).push([[147],{1289:function(o,r,t){var a=t(1917),e=t(184),i={initial:{opacity:0},animate:{opacity:1,transition:{duration:1}},exit:{opacity:0}};r.Z=function(o){var r=o.children;return(0,e.jsx)(a.E.div,{variants:i,initial:"initial",animate:"animate",exit:"exit",children:r})}},8147:function(o,r,t){t.r(r),t.d(r,{default:function(){return F}});var a=t(885),e=t(2791),i=t(7689),l=t(9434),g=t(5671),n=t(3144),s=t(7326),c=t(136),f=t(3668);function p(o,r){if(null==o)return{};var t,a,e=function(o,r){if(null==o)return{};var t,a,e={},i=Object.keys(o);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(e[t]=o[t]);return e}(o,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(o,t)&&(e[t]=o[t])}return e}function y(){return y=Object.assign||function(o){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(o[a]=t[a])}return o},y.apply(this,arguments)}function m(o,r){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),t.push.apply(t,a)}return t}function u(o){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){d(o,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))}))}return o}function d(o,r,t){return r in o?Object.defineProperty(o,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[r]=t,o}var _={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},C=function(o){(0,c.Z)(t,o);var r=(0,f.Z)(t);function t(o){var a,e;return(0,g.Z)(this,t),(a=r.call(this,o)).reCalculateColumnCount=a.reCalculateColumnCount.bind((0,s.Z)(a)),a.reCalculateColumnCountDebounce=a.reCalculateColumnCountDebounce.bind((0,s.Z)(a)),e=a.props.breakpointCols&&a.props.breakpointCols.default?a.props.breakpointCols.default:parseInt(a.props.breakpointCols)||2,a.state={columnCount:e},a}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var o=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){o.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var o=window&&window.innerWidth||1/0,r=this.props.breakpointCols;"object"!==typeof r&&(r={default:parseInt(r)||2});var t=1/0,a=r.default||2;for(var e in r){var i=parseInt(e);i>0&&o<=i&&i<t&&(t=i,a=r[e])}a=Math.max(1,parseInt(a)||1),this.state.columnCount!==a&&this.setState({columnCount:a})}},{key:"itemsInColumns",value:function(){for(var o=this.state.columnCount,r=new Array(o),t=e.Children.toArray(this.props.children),a=0;a<t.length;a++){var i=a%o;r[i]||(r[i]=[]),r[i].push(t[a])}return r}},{key:"renderColumns",value:function(){var o=this.props,r=o.column,t=o.columnAttrs,a=void 0===t?{}:t,i=o.columnClassName,l=this.itemsInColumns(),g="".concat(100/l.length,"%"),n=i;n&&"string"!==typeof n&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof n&&(n="my-masonry-grid_column"));var s=u(u(u({},r),a),{},{style:u(u({},a.style),{},{width:g}),className:n});return l.map((function(o,r){return e.createElement("div",y({},s,{key:r}),o)}))}},{key:"logDeprecated",value:function(o){console.error("[Masonry]",o)}},{key:"render",value:function(){var o=this.props,r=(o.children,o.breakpointCols,o.columnClassName,o.columnAttrs,o.column,o.className),t=p(o,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),a=r;return"string"!==typeof r&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof r&&(a="my-masonry-grid")),e.createElement("div",y({},t,{className:a}),this.renderColumns())}}]),t}(e.Component);C.defaultProps=_;var P=C,j=t(1289),v=JSON.parse('[{"id":"01","src":"/images/portfolio/DSC00089.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"02","src":"/images/portfolio/DSC00510.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"03","src":"/images/portfolio/DSC00613.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"04","src":"/images/portfolio/DSC02365.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"05","src":"/images/portfolio/DSC02516.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"06","src":"/images/portfolio/DSC02565.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"07","src":"/images/portfolio/DSC02610.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"08","src":"/images/portfolio/DSC03001.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"09","src":"/images/portfolio/DSC03005.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"10","src":"/images/portfolio/DSC03697.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"11","src":"/images/portfolio/DSC03739.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"12","src":"/images/portfolio/DSC03844.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"13","src":"/images/portfolio/DSC03882.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"14","src":"/images/portfolio/DSC04177.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"15","src":"/images/portfolio/DSC05083.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"16","src":"/images/portfolio/DSC05094.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"17","src":"/images/portfolio/DSC05104.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"18","src":"/images/portfolio/DSC05280-2.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"19","src":"/images/portfolio/DSC05286.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"20","src":"/images/portfolio/DSC05536.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"21","src":"/images/portfolio/DSC05570.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"22","src":"/images/portfolio/DSC05689.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"23","src":"/images/portfolio/DSC05698.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"24","src":"/images/portfolio/DSC05757-2.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"25","src":"/images/portfolio/DSC05825.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"26","src":"/images/portfolio/DSC05848.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"27","src":"/images/portfolio/DSC06286.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"28","src":"/images/portfolio/DSC06660.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"29","src":"/images/portfolio/DSC06751.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"30","src":"/images/portfolio/DSC06913.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"31","src":"/images/portfolio/DSC06949.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"32","src":"/images/portfolio/DSC07069.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"33","src":"/images/portfolio/DSC07134.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"34","src":"/images/portfolio/DSC07138.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"35","src":"/images/portfolio/DSC07139.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"36","src":"/images/portfolio/DSC07187.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"37","src":"/images/portfolio/DSC08337.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"38","src":"/images/portfolio/DSC08564.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"39","src":"/images/portfolio/DSC09101.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"40","src":"/images/portfolio/DSC09111.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"41","src":"/images/portfolio/DSC09253.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"42","src":"/images/portfolio/DSC09287.jpeg","category":"portraits","alt":{"ua":"//images\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"43","src":"/images/portfolio/DSC09408-2.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"44","src":"/images/portfolio/DSC09498.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"45","src":"/images/portfolio/DSC09965.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"46","src":"/images/portfolio/IMG_4391.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"47","src":"/images/portfolio/IMG_5449-2.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"48","src":"/images/portfolio/IMG_5768-2.jpeg","category":"portraits","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0434\u0456\u0432\u0447\u0438\u043d\u0438","eng":"Portrait of girl"}},{"id":"49","src":"/images/portfolio/photo-output.jpg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"50","src":"/images/portfolio/IMG_4743.JPG","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"51","src":"/images/portfolio/IMG_4717.JPG","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"52","src":"/images/portfolio/IMG_4716.JPG","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"53","src":"/images/portfolio/IMG_4715.JPG","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"54","src":"/images/portfolio/IMG_4708.JPG","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"55","src":"/images/portfolio/IMG_0313.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"56","src":"/images/portfolio/DSC09541.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"57","src":"/images/portfolio/DSC09424.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"58","src":"/images/portfolio/DSC09362.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"59","src":"/images/portfolio/DSC09351.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"60","src":"/images/portfolio/DSC09347.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"61","src":"/images/portfolio/DSC08787.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"62","src":"/images/portfolio/DSC08575.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"63","src":"/images/portfolio/DSC08466-1.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"64","src":"/images/portfolio/DSC07258.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"65","src":"/images/portfolio/DSC07137.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"66","src":"/images/portfolio/DSC06620.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"67","src":"/images/portfolio/DSC04150.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"68","src":"/images/portfolio/DSC03943-1.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"69","src":"/images/portfolio/DSC03661.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"70","src":"/images/portfolio/DSC03507.jpeg","category":"wedding_&_love_story","alt":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0438\u0445","eng":"Portrait of lovers"}},{"id":"71","src":"/images/portfolio/photo-output-1.JPG","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"72","src":"/images/portfolio/IMG_4757-1.JPG","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"73","src":"/images/portfolio/IMG_4746-1.JPG","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"74","src":"/images/portfolio/IMG_4744-1.JPG","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"75","src":"/images/portfolio/IMG_4741-1.JPG","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"76","src":"/images/portfolio/IMG_4707-1.JPG","category":"family_&_pregnancy","alt":{"ua":"//imagesPortrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"77","src":"/images/portfolio/IMG_4687-1.JPG","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"78","src":"/images/portfolio/DSC09898-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"79","src":"/images/portfolio/DSC09793-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"80","src":"/images/portfolio/DSC09716-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"81","src":"/images/portfolio/DSC09705-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"82","src":"/images/portfolio/DSC09691-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"83","src":"/images/portfolio/DSC09552-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"84","src":"/images/portfolio/DSC09231-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"85","src":"/images/portfolio/DSC08827-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"86","src":"/images/portfolio/DSC08466-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"87","src":"/images/portfolio/DSC08385-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"88","src":"/images/portfolio/DSC08369-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"89","src":"/images/portfolio/DSC07025-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"90","src":"/images/portfolio/DSC06261-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"91","src":"/images/portfolio/DSC06245-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"92","src":"/images/portfolio/DSC06127-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"93","src":"/images/portfolio/DSC04552-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"94","src":"/images/portfolio/DSC04463-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"95","src":"/images/portfolio/DSC04463(1)-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"96","src":"/images/portfolio/DSC04441-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"97","src":"/images/portfolio/DSC04215-2-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"98","src":"/images/portfolio/DSC04215-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"99","src":"/images/portfolio/DSC04181-2-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"100","src":"/images/portfolio/DSC04181-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"101","src":"/images/portfolio/DSC04156-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"102","src":"/images/portfolio/DSC03943-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"103","src":"/images/portfolio/DSC03680-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"104","src":"/images/portfolio/DSC03627-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"105","src":"/images/portfolio/DSC02981-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"106","src":"/images/portfolio/DSC02710-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"107","src":"/images/portfolio/DSC02307-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"108","src":"/images/portfolio/DSC02230-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"109","src":"/images/portfolio/DSC02153-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"110","src":"/images/portfolio/DSC01861-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"111","src":"/images/portfolio/DSC01819-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"112","src":"/images/portfolio/DSC00891-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"113","src":"/images/portfolio/DSC00529-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"114","src":"/images/portfolio/DSC00416-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"115","src":"/images/portfolio/DSC00407-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}},{"id":"116","src":"/images/portfolio/DSC00394-1.jpeg","category":"family_&_pregnancy","alt":{"ua":"Portrait of family","eng":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u0441\u0456\u043c\'\u0457"}}]'),D=JSON.parse('{"portraits":{"ua":"\u041f\u043e\u0440\u0442\u0440\u0435\u0442\u0438","eng":"Portraits"},"wedding_&_love_story":{"ua":"\u0412\u0435\u0441\u0456\u043b\u043b\u044f \u0442\u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043a\u043e\u0445\u0430\u043d\u0456","eng":"Weddings & Love Stories"},"family_&_pregnancy":{"ua":"\u0421\u0456\u043c\'\u044f \u0442\u0430 \u0432\u0430\u0433\u0456\u0442\u043d\u0456\u0441\u0442\u044c","eng":"Family & Pregnancy"}}'),S=t(234),h="ModalView_modal__BZA6E",w="ModalView_btn__a-Pd8",b="ModalView_viewImg__aQdt+",k="ModalView_nextBtn__JrxkS",x="ModalView_img__Pw65d",O="ModalView_closeBtn__JDrDW",I=t(184),N=function(o){var r=o.list,t=o.func,i=o.idx,l=(0,e.useState)(0),g=(0,a.Z)(l,2),n=g[0],s=g[1];(0,e.useEffect)((function(){s(Number(i))}),[i]);return(0,I.jsxs)("div",{className:h,children:[(0,I.jsx)("button",{type:"button",className:w,onClick:function(){s((0,S.S)(r.length,n))},children:(0,I.jsx)("img",{src:"/av-soul/images/icons/arrow.png",className:x,alt:"button to previous"})}),(0,I.jsx)("img",{src:"/av-soul"+r[n].src,alt:r[n].alt.ua,className:b}),(0,I.jsx)("button",{type:"button",className:w+" "+k,onClick:function(){s((0,S.d)(r.length,n))},children:(0,I.jsx)("img",{src:"/av-soul/images/icons/arrow.png",className:x,alt:"button to next"})}),(0,I.jsx)("button",{type:"button",className:O+" "+w,onClick:t,children:(0,I.jsx)("img",{src:"/av-soul/images/icons/close.png",alt:"close button",className:x})})]})},G="PortfolioCategoryItemsPage_titleBlock__BUucg",M="PortfolioCategoryItemsPage_linkToBack__rumEr",J="PortfolioCategoryItemsPage_title__7lb1S",A="PortfolioCategoryItemsPage_list__LPDtc",Z="PortfolioCategoryItemsPage_img__lB9Jh",E="PortfolioCategoryItemsPage_grid__KdbBJ",B="PortfolioCategoryItemsPage_gridColumn__xb4hg",F=function(){var o=(0,i.UO)().category,r=(0,l.v9)((function(o){return o.myLanguage})),t=(0,i.s0)(),g=(0,i.TH)(),n=(0,e.useState)(0),s=(0,a.Z)(n,2),c=s[0],f=s[1],p=(0,e.useState)(null),y=(0,a.Z)(p,2),m=y[0],u=y[1],d=(0,e.useState)(!1),_=(0,a.Z)(d,2),C=_[0],S=_[1];(0,e.useEffect)((function(){var r=v.filter((function(r){return r.category===o}));f(r)}),[o]);var h=function(o){C?(S(!1),u(0)):(u(o.target.dataset.idx),S(!0))};return(0,I.jsxs)(j.Z,{children:[(0,I.jsxs)("div",{className:G,children:[(0,I.jsx)("img",{src:"/av-soul/images/icons/up-arrow.png",className:M,onClick:function(){var o=g.hash.length;t(o>0?-2:-1)},alt:"ua"===r?"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430\u0437\u0430\u0434":"Link to back"}),(0,I.jsx)("h1",{className:J,children:D[o][r]})]}),0===c.length&&(0,I.jsx)("p",{children:"not found images"}),(0,I.jsx)("div",{className:A,children:(0,I.jsx)(P,{breakpointCols:{default:4,960:3,540:2},className:E,columnClassName:B,children:c.length>0&&c.map((function(o,t){var a=o.id,e=o.src,i=o.alt;return(0,I.jsx)("div",{children:(0,I.jsx)("img",{src:"/av-soul"+e,alt:i[r],className:Z,"data-idx":t,onClick:h})},a)}))})}),C&&(0,I.jsx)(N,{list:c,idx:m,func:h})]})}},234:function(o,r,t){t.d(r,{S:function(){return e},d:function(){return a}});var a=function(o,r){return o-1>r?r+1:0},e=function(o,r){return r>0?r-1:o-1}}}]);
//# sourceMappingURL=147.f975c174.chunk.js.map