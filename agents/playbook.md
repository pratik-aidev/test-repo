# Web App Delivery Playbook

Use this playbook when you want the team to build a new web application quickly.

## Phase 1: Alignment

- Team Lead defines product goal, user persona, main features, stack, and milestone 1
- QA writes acceptance criteria for the first milestone
- DevOps defines the local run flow and CI baseline

## Phase 2: Parallel build

- FE builds screens, UX flow, and API integration points
- BE builds API, auth, database, and service logic
- DevOps sets up environment management, deployment path, and health checks

## Phase 3: Stabilization

- QA runs smoke and regression checks
- Reviewer inspects changed branches for bugs, gaps, and risky code
- Team Lead resolves priority conflicts and scopes the next milestone

## Standard prompts

### Team Lead

`Read /agents and plan the delivery of a web app for [PRODUCT IDEA]. Propose milestone 1, split work across FE, BE, DevOps, QA, and Code Review, and list the first tasks each role should start now.`

### FE

`Act as the Frontend Developer agent from /agents/frontend-developer.md. Build the UI for [FEATURE OR SCREEN], keep it responsive, and leave a short integration note for BE and QA.`

### BE

`Act as the Backend Developer agent from /agents/backend-developer.md. Implement the backend for [FEATURE OR FLOW], define clear request and response contracts, and leave integration notes for FE and QA.`

### DevOps

`Act as the DevOps Engineer agent from /agents/devops-engineer.md. Set up the local workflow, environment configuration, CI checks, and deployment path for this app.`

### QA

`Act as the QA Tester agent from /agents/qa-tester.md. Create a focused test plan for [MILESTONE OR FEATURE], identify critical risks, and define the smoke tests that must pass before merge.`

### Reviewer

`Act as the Code Reviewer agent from /agents/code-reviewer.md. Review the current changes, list findings by severity, and call out missing tests or regressions.`
