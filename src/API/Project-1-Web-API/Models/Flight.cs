namespace Project_1_Web_API.Models
{
    public class Flight
    {
        public int FlightId { get; set; }
        public DateTime DepartureTime { get; set; }
        public string DepartureAirport { get; set; }
        public DateTime ArrivalTime { get; set; }
        public string ArrivalAirport { get; set; }
        public int PassangerLimit { get; }
        
        // Not stored properties
        public int PassengerCount => Passengers?.Count ?? 0;

        // Navigation properties
        public virtual ICollection<Passenger>? Passengers { get; set; }
    }
}
