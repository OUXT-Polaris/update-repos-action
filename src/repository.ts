const VCS_TYPE = {
    unknown: "unkown",
    git: "git",
  } as const;
  type VCS_TYPE = typeof VCS_TYPE[keyof typeof VCS_TYPE];
  
export class Repository {
    private name_: string;
    private type_: VCS_TYPE;
    private url_: string;
    private version_: string;
    constructor(name: string, type: string, url: string, version: string) {
      this.name_ = name;
      if (type == "git") {
        this.type_ = VCS_TYPE.git;
      } else {
        this.type_ = VCS_TYPE.unknown;
      }
      this.url_ = url;
      this.version_ = version;
    }
  }