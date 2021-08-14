import * as fs from "fs";
const js_yaml = require("js-yaml");
import { Repository } from "./repository";
import { string } from "yargs";
import { YAMLMap } from "yaml/types";

export class ReposUpdater {
  private repos_path_: string;
  private update_repos_path_: string;
  private target_package_name_: string;
  private target_version_: string;
  private repositories_: Array<Repository>;

  get repos_path(): string {
    return this.repos_path_;
  }

  get target_package_name(): string {
    return this.target_package_name_;
  }

  get update_repos_path(): string {
    return this.update_repos_path_;
  }

  get target_version(): string {
    return this.target_version_;
  }

  /**
   * update
   */
  private update() {
    this.repositories_.forEach((repository) => {
      if (repository.name == this.target_package_name_) {
        repository.version = this.target_version_;
      }
    });
  }

  private write() {
    var dict: {
      [package_path: string]: { type: string; url: string; version: string };
    } = {};
    var repos_dict: {
      [repositories: string]: {
        [package_path: string]: { type: string; url: string; version: string };
      };
    } = {};
    this.repositories_.forEach((repository) => {
      dict[repository.path] = repository.getInfo();
    });
    repos_dict.repositories = dict;
    const yaml_string = js_yaml.dump(repos_dict);
    fs.writeFileSync(this.update_repos_path_, yaml_string);
  }

  /**
   * parse_yaml
   */
  private parse_yaml(yaml_string: string) {
    try {
      const data = js_yaml.load(yaml_string);
      Object.keys(data.repositories).forEach((package_path) => {
        const repo = new Repository(
          package_path.split("/")[package_path.split("/").length - 1],
          package_path,
          data.repositories[package_path]["type"],
          data.repositories[package_path]["url"],
          data.repositories[package_path]["version"]
        );
        this.repositories_.push(repo);
      });
    } catch (err) {
      throw err;
    }
  }

  constructor(
    repos_path: string,
    update_repos_path: string,
    target_package_name: string,
    target_version: string
  ) {
    this.repositories_ = new Array<Repository>();
    this.repos_path_ = repos_path;
    this.update_repos_path_ = update_repos_path;
    this.target_package_name_ = target_package_name;
    this.target_version_ = target_version;
    const yaml_string = fs.readFileSync(this.repos_path_, "utf8");
    this.parse_yaml(yaml_string);
    this.update();
    this.write();
  }
}
