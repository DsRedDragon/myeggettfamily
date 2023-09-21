using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class Tag
    {
        public Tag()
        {
            ArticleTag = new HashSet<ArticleTag>();
        }

        public int TagId { get; set; }
        public string TagName { get; set; }

        public virtual ICollection<ArticleTag> ArticleTag { get; set; }
    }
}
