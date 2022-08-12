namespace Project_1_Web_API.Models
{
    public class Flight
    {
        public int Id { get; set; }
        public DateTime DepartureTime { get; set; }
        public string DepartureAirport { get; set; }
        public DateTime ArrivalTime { get; set; }
        public string ArrivalAirport { get; set; }
        public int MaxCapacity { get; set; }

        // Not stored
        //public int PassengersOnFlight => Passengers?.Count ?? 0;

        // Navigation
        //public virtual ICollection<Passenger>? Passengers { get; set; }
    }
}
