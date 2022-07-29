/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cai_shell_plug/CAI_Shell_Plugin/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});