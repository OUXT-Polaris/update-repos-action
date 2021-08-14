import { ReposUpdater } from "./repos_updater";
// const core = require('@actions/core');
import { getInput, setFailed } from "@actions/core";

async function main() {
  try {
    const input_repos_file = getInput("input_repos_file");
    const output_repos_file = getInput("output_repos_file");
    const package_name = getInput("package_name");
    const target_version = getInput("target_version");
    new ReposUpdater(
      input_repos_file,
      output_repos_file,
      package_name,
      target_version
    );
  } catch (error) {
    setFailed(error.message);
  }
}

main();
