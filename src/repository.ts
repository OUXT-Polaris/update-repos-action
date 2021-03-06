const VCS_TYPE = {
  unknown: "unkown",
  git: "git",
} as const;
type VCS_TYPE = typeof VCS_TYPE[keyof typeof VCS_TYPE];

export class RepositoryInfo {
  public type: string;
  public url: string;
  public version: string;
  constructor(type: string, url: string, version: string) {
    this.type = type;
    this.url = url;
    this.version = version;
  }
}

export class Repository {
  private name_: string;
  private path_: string;
  private type_: VCS_TYPE;
  private url_: string;
  private version_: string;

  public get name(): string {
    return this.name_;
  }

  public get path(): string {
    return this.path_;
  }

  public get type(): string {
    return this.type_;
  }

  public get url(): string {
    return this.url_;
  }

  public get version(): string {
    return this.version_;
  }

  public set version(v: string) {
    this.version_ = v;
  }

  /**
   * getInfo
   */
  public getInfo(): RepositoryInfo {
    return new RepositoryInfo(this.type_, this.url_, this.version_);
  }

  constructor(
    name: string,
    path: string,
    type: string,
    url: string,
    version: string
  ) {
    this.name_ = name;
    this.path_ = path;
    if (type == "git") {
      this.type_ = VCS_TYPE.git;
    } else {
      this.type_ = VCS_TYPE.unknown;
      throw new Error("vcs type : " + type + " does not supported yet.");
    }
    this.url_ = url;
    this.version_ = version;
  }
}
