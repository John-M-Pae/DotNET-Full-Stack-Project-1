using Microsoft.EntityFrameworkCore;
using Project_1_Web_API.Models;

namespace Project_1_Web_API.Data
{
    public class PassengerContext : DbContext
    {
        public PassengerContext(DbContextOptions<PassengerContext> options)
            : base(options) { }
        public DbSet<Passenger>? Passengers { get; set; }
        public DbSet<Flight>? Flights { get; set; }
    }
}
