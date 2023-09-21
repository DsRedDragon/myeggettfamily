using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class ArticleDetail
    {
        public int ArticleId { get; set; }
        public string ArticleContent { get; set; }
        public string Title { get; set; }
        public System.DateTime PostedDT { get; set; }
        public int ApplicationUserId { get; set; }
        public string AuthorName { get; set; }
        public bool Archived { get; set; }
        public bool Visible { get; set; }
        public bool IsNew { get; set; }
    }
}
