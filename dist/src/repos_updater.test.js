"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repos_updater_1 = require("./repos_updater");
test("read_repos", function () {
    var updater = new repos_updater_1.ReposUpdater("./src/packages.repos", "packages_update.repos", "joy_to_twist", "master");
    expect(updater).toBeDefined();
});
