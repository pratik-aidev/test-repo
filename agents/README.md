# Multi-Agent Team

This folder defines a reusable Codex agent team for building web applications quickly with clear ownership.

## Team

- `team-lead.md`: breaks work into milestones, assigns owners, and keeps the team aligned
- `frontend-developer.md`: owns UI, client state, UX polish, and frontend integration
- `backend-developer.md`: owns APIs, services, data models, security, and performance
- `devops-engineer.md`: owns local setup, CI/CD, environments, deployment, observability, and secrets flow
- `qa-tester.md`: owns test strategy, regression checks, acceptance criteria, and release confidence
- `code-reviewer.md`: owns review quality, risks, maintainability, and merge readiness

## Recommended workflow

1. Start in the main repo and define the product goal, stack, and deadline.
2. Ask the Team Lead agent to produce a build plan with milestones and task splits.
3. Run FE and BE agents in separate worktrees for implementation.
4. Run DevOps in parallel once the first architecture decisions are clear.
5. Ask QA to turn requirements into test cases before implementation is done.
6. Use Code Reviewer before merging any branch back into main.

## Suggested ownership split

- `FE`: `src/ui`, `src/pages`, `src/components`, `src/styles`, frontend tests
- `BE`: `src/api`, `src/services`, `src/db`, `src/auth`, backend tests
- `DevOps`: Docker, CI workflows, deployment config, environment docs, monitoring setup
- `QA`: test plans, smoke checks, e2e coverage, acceptance reports
- `Reviewer`: review all branches before merge, focus on regressions and missing tests

## Fast-start prompt

Use this with the Team Lead agent:

`We are building a new web application. Read the agent prompts in /agents, propose the delivery plan, split the work for FE, BE, DevOps, QA, and Reviewer, and define the first milestone so implementation can start immediately.`
