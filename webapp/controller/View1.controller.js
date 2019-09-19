sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.egitim.LocalModel.controller.View1", {
		onInit: function () {

		},

		ikiyeGit: function () {

			var myJSON = {
				"Customer": "Customer1",
				"Salesman": "Salesman1",
				"TxnKey": "TxnKey1"
			};

			var oModel = new sap.ui.model.json.JSONModel(myJSON);
			this.getOwnerComponent().setModel(oModel, "local");

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2");
		}
	});
});