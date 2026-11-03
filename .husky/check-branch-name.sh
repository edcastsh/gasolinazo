#!/bin/sh

local_branch_name="$(git rev-parse --abbrev-ref HEAD)"
protected="main"
valid_branch_regex="^(feat|feature|fix|hotfix|chore|refactor|docs|release)/[a-z0-9._-]+$"

if [ "$local_branch_name" = "HEAD" ]; then
  exit 0
fi

for branch in $protected; do
  if [ "$local_branch_name" = "$branch" ]; then
    exit 0
  fi
done

if ! printf '%s' "$local_branch_name" | grep -Eq "$valid_branch_regex"; then
  echo "Invalid branch name: '$local_branch_name'"
  echo "Expected: $valid_branch_regex"
  exit 1
fi
