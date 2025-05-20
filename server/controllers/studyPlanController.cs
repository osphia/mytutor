using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudyPlanController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetPlan(int userId, int subjectId)
        {
            var dummyPlan = new List<StudyPlanEntry>
            {
                new StudyPlanEntry { Id = 1, TopicId = 1, ScheduledDate = DateTime.Today, Completed = false },
                new StudyPlanEntry { Id = 2, TopicId = 2, ScheduledDate = DateTime.Today.AddDays(1), Completed = false }
            };
            return Ok(dummyPlan);
        }
    }
}
