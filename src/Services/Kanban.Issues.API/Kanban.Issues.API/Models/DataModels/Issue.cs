using System;

namespace Kanban.Issues.API.Models.DataModels
{
    public class Issue
    {
        public Guid Id { get; set; }

        public Guid SectionId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int SectionPosition { get; set; }
    }
}
