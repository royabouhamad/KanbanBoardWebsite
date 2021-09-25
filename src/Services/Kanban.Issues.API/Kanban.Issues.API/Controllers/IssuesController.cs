using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kanban.Issues.API.Infrastructure;
using Kanban.Issues.API.Models.DataModels;
using Kanban.Issues.API.Models.RequestModels;
using Kanban.Issues.API.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Kanban.Issues.API.Controllers
{
    [Route("/issues")]
    public class IssuesController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        private readonly ILogger<IssuesController> logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="IssuesController"/> class.
        /// </summary>
        /// <param name="dbContext">Provides database access.</param>
        /// <param name="logger">Providing logging services.</param>
        public IssuesController(ApplicationDbContext dbContext, ILogger<IssuesController> logger)
        {
            this.dbContext = dbContext;
            this.logger = logger;
        }

        [HttpGet("list")]
        public async Task<IActionResult> GetAllIssues()
        {
            using (this.logger.BeginScope("[Controller] Begin operation to get all issues"))
            {
                try
                {
                    var result = await this.dbContext.Issues
                        .AsNoTracking()
                        .Select(x => new IssueViewModel(x))
                        .ToListAsync();

                    return this.Ok(result);
                }
                catch (Exception ex)
                {
                    this.logger.LogInformation(ex.Message);
                    return this.BadRequest(ex.Message);
                }
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetIssueById(Guid id)
        {
            using (this.logger.BeginScope("[Controller] Begin operation for retrieval of issue by id."))
            {
                try
                {
                    if (id == Guid.Empty)
                    {
                        this.logger.LogInformation("Issue id not provided");
                        this.BadRequest("Issue id must be provided");
                    }

                    var result = await this.dbContext.Issues
                        .AsNoTracking()
                        .SingleOrDefaultAsync(x => x.Id == id);

                    if (result == null)
                    {
                        return this.NotFound("Issue does not exist.");
                    }

                    return this.Ok(new IssueViewModel(result));
                }
                catch (Exception ex)
                {
                    this.logger.LogInformation(ex.Message);
                    return this.BadRequest(ex.Message);
                }
            }
        }

        [HttpPost("create")]
        public async Task<IActionResult> AddIssue([FromBody] CreateIssueRequestModel request)
        {
            using (this.logger.BeginScope("[Controller] Begin operation to add a new issue."))
            {
                try
                {
                    if (!this.ModelState.IsValid)
                    {
                        return this.BadRequest(string.Join(", ", this.ModelState.Values.SelectMany(state => state.Errors, (state, error) => error.ErrorMessage)));
                    }

                    var id = new Guid();

                    var issueToCreate = new Issue
                    {
                        Id = id,
                        SectionId = request.SectionId,
                        Title = request.Title,
                        Description = request.Description,
                        SectionPosition = request.SectionPosition,
                    };

                    await this.dbContext.AddAsync(issueToCreate);
                    await this.dbContext.SaveChangesAsync();

                    this.logger.LogInformation("Issue created successfully");
                    return this.Ok(id);
                }
                catch (Exception ex)
                {
                    this.logger.LogInformation(ex.Message);
                    return this.BadRequest(ex.Message);
                }
            }
        }
    }
}
