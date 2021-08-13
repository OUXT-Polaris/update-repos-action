import { ReposUpdater } from './repos_updater';

test("read_repos", () => {
  new ReposUpdater(
    "packages.repos",
    "packages_update.repos",
    "joy_to_twist",
    "master"
  );
});
