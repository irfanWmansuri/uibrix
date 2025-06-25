name: "\U0001F41E Bug report"
description: Report a bug with a component
title: "[Bug] <component-name> - short description"
labels: ["bug"]
body:
  - type: textarea
    attributes:
      label: What went wrong?
      placeholder: Describe the issue...
  - type: textarea
    attributes:
      label: Steps to Reproduce
      placeholder: "1. Import component...\n2. See error..."
  - type: input
    attributes:
      label: Component name
  - type: input
    attributes:
      label: Browser/OS
