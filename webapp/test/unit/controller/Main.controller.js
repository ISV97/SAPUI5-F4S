/*global QUnit*/

sap.ui.define([
	"demo/F4SUI/controller/Main.controller"
], function (oController) {
	"use strict";

	QUnit.module("Main Controller");

	QUnit.test("I should test the Main controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});