using Microsoft.EntityFrameworkCore;
using Project_1_Web_API.Models;

namespace Project_1_Web_API.Data
{
    public class FlightContext : DbContext
    {
        public FlightContext(DbContextOptions<FlightContext> options)
            : base(options) { }

        public DbSet<Passenger>? Passengers { get; set; }

        public DbSet<Project_1_Web_API.Models.Flight>? Flight { get; set; }

        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    builder.Entity<Passenger>()
        //        .HasKey(p => p.Id);
        //}
    }   
}       
