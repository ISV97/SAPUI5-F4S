
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
		"sap/ui/core/Fragment",
		"sap/m/MessageToast"
], function (Controller, UIComponent, Fragment) {
	"use strict";

	return Controller.extend("demo.F4SUI.controller.Main", {
		
			onInit: function(){
				//var oRouter = UIComponent.getRouterFor(this);
					this.byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent){
				this._bKeyboard = oEvent.type === "keyup";
			}, this);
			},
			onPress: function(){
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("corporate", {}, true);
			},
			handlePressOpenMenu: function(oEvent) {
			var oButton = oEvent.getSource();

			// create menu only once
			if (!this._menu) {
				this._menu = sap.ui.xmlfragment(
					"sap.ui.unified.Main.Main",
					this
				);
				this.getView().addDependent(this._menu);
			}

			var eDock = sap.ui.core.Popup.Dock;
			this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
		},
			handleMenuItemPress: function(oEvent) {
			var msg = "'" + oEvent.getParameter("item").getText() + "' pressed";
		//	MessageToast.show(msg);
		},

		handleTextFieldItemPress: function(oEvent) {
			var msg = "'" + oEvent.getParameter("item").getValue() + "' entered";
		//	MessageToast.show(msg);
		}
	});
});


