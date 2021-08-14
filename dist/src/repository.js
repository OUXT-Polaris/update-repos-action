"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = exports.RepositoryInfo = void 0;
var VCS_TYPE = {
    unknown: "unkown",
    git: "git",
};
var RepositoryInfo = /** @class */ (function () {
    function RepositoryInfo(type, url, version) {
        this.type = type;
        this.url = url;
        this.version = version;
    }
    return RepositoryInfo;
}());
exports.RepositoryInfo = RepositoryInfo;
var Repository = /** @class */ (function () {
    function Repository(name, path, type, url, version) {
        this.name_ = name;
        this.path_ = path;
        if (type == "git") {
            this.type_ = VCS_TYPE.git;
        }
        else {
            this.type_ = VCS_TYPE.unknown;
            throw new Error("vcs type : " + type + " does not supported yet.");
        }
        this.url_ = url;
        this.version_ = version;
    }
    Object.defineProperty(Repository.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "type", {
        get: function () {
            return this.type_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "url", {
        get: function () {
            return this.url_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "version", {
        get: function () {
            return this.version_;
        },
        set: function (v) {
            this.version_ = v;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * getInfo
     */
    Repository.prototype.getInfo = function () {
        return new RepositoryInfo(this.type_, this.url_, this.version_);
    };
    return Repository;
}());
exports.Repository = Repository;
