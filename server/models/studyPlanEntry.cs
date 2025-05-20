namespace Server.Models
{
    public class StudyPlanEntry
    {
        public int Id { get; set; }
        public int TopicId { get; set; }
        public DateTime ScheduledDate { get; set; }
        public bool Completed { get; set; }
    }
}
