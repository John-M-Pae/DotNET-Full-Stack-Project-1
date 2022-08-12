using Microsoft.EntityFrameworkCore;
using Project_1_Web_API.Models;

namespace Project_1_Web_API.Data
{
    public class AirlineContext : DbContext
    {
        public AirlineContext(DbContextOptions<AirlineContext> options)
            : base(options) { }
        public DbSet<Passenger>? Passengers { get; set; }
        public DbSet<Flight>? Flights { get; set; }

        //protected override void OnModelCreating(ModelBuilder dbModel)
        //{
        //    dbModel.Entity<Passenger>()
        //        .HasOne();
        //}
    }
}
