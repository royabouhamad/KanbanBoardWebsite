using System;
using System.ComponentModel.DataAnnotations;

namespace Kanban.Issues.API.Models.RequestModels
{
    public class CreateIssueRequestModel
    {
        [Required(ErrorMessage = "Section id is required")]
        public Guid SectionId { get; set; }

        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Section position is required")]
        public int SectionPosition { get; set; }
    }
}
