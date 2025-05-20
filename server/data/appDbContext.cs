using Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<StudyPlanEntry> StudyPlanEntries { get; set; }
    }
}
