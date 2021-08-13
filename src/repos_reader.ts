class ReposReader {
  private repos_path_: string;
  private update_package_name_: string;

  get repos_path(): string {
    return this.repos_path_;
  }

  get update_package_name(): string {
    return this.update_package_name_;
  }

  constructor(repos_path: string, update_package_name: string) {
    this.repos_path_ = repos_path;
    this.update_package_name_ = update_package_name;
  }
}
