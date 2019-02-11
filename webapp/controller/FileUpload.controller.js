
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller,History, UIComponent) {
	"use strict";

	return Controller.extend("demo.F4SUI.controller.FileUpload", {
		onInit: function() {
			
		},
		onExecute: function() {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("result", {}, true);
		},getRouter : function () {
			return UIComponent.getRouterFor(this);
		},
		onNavBack: function () {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("corporate", {}, true /*no history*/);
			}
		}

				
	});
});