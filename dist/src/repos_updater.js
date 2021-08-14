"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReposUpdater = void 0;
var fs = __importStar(require("fs"));
var repository_1 = require("./repository");
var js_yaml = require("js-yaml");
var ReposUpdater = /** @class */ (function () {
    function ReposUpdater(repos_path, update_repos_path, target_package_name, target_version) {
        this.repositories_ = new Array();
        this.repos_path_ = repos_path;
        this.update_repos_path_ = update_repos_path;
        this.target_package_name_ = target_package_name;
        this.target_version_ = target_version;
        var yaml_string = fs.readFileSync(this.repos_path_, "utf8");
        this.parse_yaml(yaml_string);
        this.update();
        this.write();
    }
    Object.defineProperty(ReposUpdater.prototype, "repos_path", {
        get: function () {
            return this.repos_path_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReposUpdater.prototype, "target_package_name", {
        get: function () {
            return this.target_package_name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReposUpdater.prototype, "update_repos_path", {
        get: function () {
            return this.update_repos_path_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReposUpdater.prototype, "target_version", {
        get: function () {
            return this.target_version_;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * update
     */
    ReposUpdater.prototype.update = function () {
        var _this = this;
        this.repositories_.forEach(function (repository) {
            if (repository.name == _this.target_package_name_) {
                repository.version = _this.target_version_;
            }
        });
    };
    ReposUpdater.prototype.write = function () {
        var dict = {};
        var repos_dict = {};
        this.repositories_.forEach(function (repository) {
            dict[repository.path] = repository.getInfo();
        });
        repos_dict.repositories = dict;
        var yaml_string = js_yaml.dump(repos_dict);
        fs.writeFileSync(this.update_repos_path_, yaml_string);
    };
    /**
     * parse_yaml
     */
    ReposUpdater.prototype.parse_yaml = function (yaml_string) {
        var _this = this;
        var data = js_yaml.load(yaml_string);
        Object.keys(data.repositories).forEach(function (package_path) {
            var repo = new repository_1.Repository(package_path.split("/")[package_path.split("/").length - 1], package_path, data.repositories[package_path]["type"], data.repositories[package_path]["url"], data.repositories[package_path]["version"]);
            _this.repositories_.push(repo);
        });
    };
    return ReposUpdater;
}());
exports.ReposUpdater = ReposUpdater;
