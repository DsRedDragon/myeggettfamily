using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class SuggestionView
    {
        public int SuggestionId { get; set; }
        public int ApplicationUserId { get; set; }
        public string AuthorName { get; set; }
        public string Value { get; set; }
        public int TypeId { get; set; }
        public DateTime CreatedDT { get; set; }
        public int StatusId { get; set; }
        public DateTime? ResolutionDT { get; set; }
        public string StatusName { get; set; }
        public string TypeName { get; set; }
    }
}
