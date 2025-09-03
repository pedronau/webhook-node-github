import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GitHubService {
  constructor() {}

  onStar(payload: GitHubStarPayload): string {
    const { action, sender, repository, starred_at } = payload;

    return `User ${sender.login} ${action} star on ${repository.full_name}: ${starred_at}`;
  }

  onIssue(payload: GitHubIssuePayload): string {
    const { action, sender, repository, issue } = payload;

    if (action === "opened") {
      return `An issue was opened by ${issue.user.login} with title ${issue.title}`;
    }

    if (action === "closed") {
      return `An issue was closed by ${issue.user.login} with title ${issue.title}`;
    }

    if (action === "reopened") {
      return `An issue was reopened by ${issue.user.login} with title ${issue.title}`;
    }

    return `Unhandled action for the issue event ${action}`;
  }
}
