YUI.add("moodle-atto_fullscreen-button",function(e,t){var n="atto_fullscreen",r="fullscreen",i=!1;e.namespace("M.atto_fullscreen").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){var t=this.addButton({icon:"icon",iconComponent:n,callback:this._toggle});t.set("title",M.util.get_string("fullscreen:desc","editor_tinymce")),this._background=e.Node.create("<div></div>"),this.get("host").on("pluginsloaded",function(t,n){this._setFullscreen(n),e.on("windowresize",e.bind(this._fitToScreen,this))},this,t)},_toggle:function(e){e.preventDefault();var t=this.buttons[r];t.getData(i)?(this.unHighlightButtons(r),this._setFullscreen(t)):(this.highlightButtons(r),this._setFullscreen(t,!0)),this.buttons[this.name].focus()},_fitToScreen:function(){var e=this.buttons[r];if(!e.getData(i))return;var t=this.get("host"),n=t.editor.get("winHeight"),s=t.editor.get("winWidth");t.editor.setStyle("height",n),t.editor.setStyle("width",s),t._wrapper.setStyle("max-height",n),t._wrapper.setStyle("width",s),t._wrapper.setStyle("min-width",s),this._background.setStyles({height:n+"px",width:s+"px"}),window.scroll(this._background.getX(),this._background.getY())},_setFullscreen:function(t,n){var r=this.get("host");n?(e.one("body").setStyle("overflow","hidden"),this._wrapperStyle={maxHeight:r._wrapper.getStyle("max-height"),minHeight:r._wrapper.getStyle("min-height"),height:r._wrapper.getStyle("height")},this._editorStyle={height:r.editor.getStyle("height")},e.one("body").insertBefore(this._background,this._wrapper),r._wrapper.setStyles({position:"fixed",top:"0px",left:"0px",scroll:"auto"})):(e.one("body").setStyle("overflow","inherit"),this._background.remove(),r._wrapper.removeAttribute("style"),r._wrapper.setStyles(this._wrapperStyle),r.editor.removeAttribute("style"),r.editor.setStyles(this._editorStyle)),t.setData(i,!!n),this._fitToScreen()}})},"@VERSION@",{requires:["event-resize","moodle-editor_atto-plugin"]});
