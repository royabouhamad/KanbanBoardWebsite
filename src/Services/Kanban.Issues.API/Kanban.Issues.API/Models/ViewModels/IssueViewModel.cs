using System;
using Kanban.Issues.API.Models.DataModels;

namespace Kanban.Issues.API.Models.ViewModels
{
    public class IssueViewModel
    {
        private readonly Issue issue;

        public IssueViewModel(Issue issue)
        {
            this.issue = issue;
        }

        public Guid Id => this.issue.Id;

        public Guid SectionId => this.issue.SectionId;

        public string Title => this.issue.Title;

        public string Description => this.issue.Description;

        public int SectionPosition => this.issue.SectionPosition;
    }
}
