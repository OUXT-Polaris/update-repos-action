import { ReposUpdater } from "./repos_updater";

test("read_repos", () => {
  new ReposUpdater(
    "./src/packages.repos",
    "packages_update.repos",
    "joy_to_twist",
    "master"
  );
});
