sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createAPIModel: function() {
			var oModel = new JSONModel();
			oModel.setData({
				cols: [{
					name: "No"
				}, {
					name: "Activity"
				}, {
					name: "Description"
				},{
					name: "Action"
				}],
				items: [{
				NO	: "1",
				Activity: "Create account clerk",
				Description: "Creates accounting clerk authorization",
				Action : "{sap-icon://cloud}"
				}]
			});
			return oModel;			
		}

	};
});