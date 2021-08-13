import * as fs from "fs";
import * as yaml from "js-yaml";
import { Repository } from "repository"
import { string } from "yargs";

export class ReposUpdater {
  private repos_path_: string;
  private target_repos_path_: string;
  private target_package_name_: string;
  private target_version_: string;

  get repos_path(): string {
    return this.repos_path_;
  }

  get target_package_name(): string {
    return this.target_package_name_;
  }

  get target_repos_path(): string {
    return this.target_repos_path_;
  }

  get target_version(): string {
    return this.target_version_;
  }

  /**
   * parse_yaml
   */
  private parse_yaml(yaml_string: string) {
    try {
      const doc = yaml.load(yaml_string);
    } catch (err) {
      throw err;
    }
  }

  constructor(
    repos_path: string,
    target_repos_path: string,
    target_package_name: string,
    target_version: string
  ) {
    this.repos_path_ = repos_path;
    this.target_repos_path_ = target_repos_path;
    this.target_package_name_ = target_package_name;
    this.target_version_ = target_version;
    fs.readFile(this.repos_path_, (err, data) => {
      if (err) throw err;
      this.parse_yaml(data.toString());
    });
  }
}
