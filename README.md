# update-repos-action

Javascript action for updating repos file in ROS2.

## parameters
|       name        | required | default |               description               |
| ----------------- | -------- | ------- | --------------------------------------- |
| input_repos_file  | true     |         | input repos file path                   |
| output_repos_file | true     |         | output repos file path                  |
| package_name      | false    |         | package name you want to update version |
| target_version    | false    | master  | target version you want to install      |