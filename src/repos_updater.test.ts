import { ReposUpdater } from "./repos_updater";

test("read_repos", () => {
  const updater = new ReposUpdater(
    "./src/packages.repos",
    "packages_update.repos",
    "joy_to_twist",
    "master"
  );
  expect(updater).toBeDefined()
});
