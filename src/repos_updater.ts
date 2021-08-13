import 'js-yaml'

class ReposUpdater {
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
  }
}
