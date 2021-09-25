using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Kanban.Issues.API.Models.DataModels;

namespace Kanban.Issues.API.Infrastructure
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        /// <summary>
        /// Saves changes.
        /// </summary>
        /// <returns>an int.</returns>
        public Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }

        public DbSet<Issue> Issues { get; set; }

        /// <summary>
        /// This method is used to configure EF with things like relationships and conventions.
        /// </summary>
        /// <param name="modelBuilder">The model builder to use.</param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("issues");
        }
    }
}
