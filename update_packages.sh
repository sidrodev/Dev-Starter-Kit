#!/bin/bash

echo "Running npm audit to check for vulnerable packages..."
vulnerable_packages=$(npm audit --json | jq -r '.actions[].resolves[].id')

if [ -n "$vulnerable_packages" ]; then
  echo "Updating vulnerable packages..."
  for package in $vulnerable_packages; do
    echo "Updating $package to the latest version..."
    npm audit fix --force
  done
else
  echo "No vulnerable packages found."
fi

echo "Running npm outdated to check for any remaining outdated packages..."
outdated_packages=$(npm outdated --json | jq -r 'keys | join(" ")')

if [ -n "$outdated_packages" ]; then
  echo "Updating remaining outdated packages..."
  IFS=' ' read -ra packages_array <<< "$outdated_packages"
  for package in "${packages_array[@]}"; do
    echo "Updating $package to the latest version..."
  done
  npm install "${packages_array[@]/%/@latest}"
else
  echo "All packages are up-to-date."
fi
