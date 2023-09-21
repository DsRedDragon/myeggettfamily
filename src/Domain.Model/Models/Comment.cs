using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class Comment
    {
        public int CommentId { get; set; }
        public int ArticleId { get; set; }
        public string CommentText { get; set; }
        public DateTime CommentDt { get; set; }
        public bool Approved { get; set; }
        public int ApplicationUserId { get; set; }
        public bool IsNew { get; set; }

        public virtual Article Article { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
