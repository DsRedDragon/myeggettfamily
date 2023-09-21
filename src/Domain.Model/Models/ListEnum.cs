using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class ListEnum
    {
        public ListEnum()
        {
            SuggestionStatus = new HashSet<Suggestion>();
            SuggestionType = new HashSet<Suggestion>();
            ExternalType = new HashSet<ApplicationUser>();
        }

        public int ListEnumId { get; set; }
        public int ListCategoryId { get; set; }
        public string Description { get; set; }
        public string Value { get; set; }
        public string EnumCode { get; set; }

        public virtual ICollection<Suggestion> SuggestionStatus { get; set; }
        public virtual ICollection<ApplicationUser> ExternalType { get; set; }
        public virtual ICollection<Suggestion> SuggestionType { get; set; }
        public virtual ListCategory ListCategory { get; set; }
    }
}
