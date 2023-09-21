using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class Suggestion
    {
        public int SuggestionId { get; set; }
        public int ApplicationuserId { get; set; }
        public string Value { get; set; }
        public int TypeId { get; set; }
        public DateTime CreatedDt { get; set; }
        public int StatusId { get; set; }
        public DateTime? ResolutionDt { get; set; }

        public virtual ApplicationUser Author { get; set; }
        public virtual ListEnum Status { get; set; }
        public virtual ListEnum Type { get; set; }
    }
}
