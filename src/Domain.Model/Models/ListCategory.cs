using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class ListCategory
    {
        public ListCategory()
        {
            ListEnum = new HashSet<ListEnum>();
        }

        public int ListCategoryId { get; set; }
        public string Description { get; set; }
        public string StringValue { get; set; }
        public string EnumCode { get; set; }

        public virtual ICollection<ListEnum> ListEnum { get; set; }
    }
}
