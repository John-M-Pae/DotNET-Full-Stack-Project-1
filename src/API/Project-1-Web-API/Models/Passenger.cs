namespace Project_1_Web_API.Models
{
    public class Passenger
    {
        public int BookingId { get; set; }
        public int FlightId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string? Job { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }

        // Navigational properties
        public virtual Flight Flight { get; set; }

        // Not stored properties
        public string Name => LastName + ", " + FirstName;
    }
}
