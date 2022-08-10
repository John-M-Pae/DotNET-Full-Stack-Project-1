using Microsoft.EntityFrameworkCore;
using Project_1_Web_API.Models;

namespace Project_1_Web_API.Data
{
    public class PassengerContext : DbContext
    {
        public PassengerContext(DbContextOptions<PassengerContext> options)
            : base(options) { }
        public DbSet<Project_1_Web_API.Models.Passenger>? Passenger { get; set; }
        public DbSet<Project_1_Web_API.Models.Flight>? Flight { get; set; }
    }
}
