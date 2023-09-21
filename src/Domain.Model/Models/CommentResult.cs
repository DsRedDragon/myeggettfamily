using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class CommentResult
    {
        public bool Approved { get; set; }
        public int ArticleId { get; set; }
    }
}
