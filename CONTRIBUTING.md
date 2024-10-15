Purpose

**This document outlines the workflow for using Git and GitHub effectively as a team to ensure smooth collaboration, reduce conflicts, and maintain a stable codebase.
**

**Branching Strategy**

1. Create a New Branch: Each team member should create a separate branch for each feature or bug fix

_git checkout -b feature/your-feature-name_

2. Make Changes and Commit:
After making changes, stage and commit your changes with a clear message.

_git add .
git commit -m "Your descriptive commit message"_

3. Push Your Branch to GitHub:
Push your branch to the remote repository.

_git push origin feature/your-feature-name_

4. Pull Requests
Create a Pull Request:
After pushing your branch, go to the GitHub repository and create a pull request (PR) from your branch to the main branch.

5. Code Review:
Team members should review each other's PRs to provide feedback and catch any errors before merging.
Merge Pull Requests:
Once the PR is approved, it can be merged into the main branch. This can be done through the GitHub interface or using the command line.

6. Regularly Pull Changes:
Team members should frequently pull the latest changes from the main branch into their working branch to stay up-to-date.

_git checkout main
git pull origin main
git checkout feature/your-feature-name
git merge main
_

7. Commit Often:
Make small, frequent commits to help facilitate easier merges.

8. Clear Communication:
Keep communication open regarding who is working on what features to avoid overlap.

8. Conflict Resolution:
If a merge conflict occurs, Git will indicate the conflicting files.
Resolve the conflicts manually and then add the resolved files:

_git add .
git commit -m "Resolved merge conflicts"_

9. Branch Naming Conventions
Use clear naming conventions for branches:
_
feature/your-feature-name
bugfix/your-bugfix-name
hotfix/urgent-fix_







