using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class CommentData
    {
        public int applicationUserId { get; set; }
        public bool isAdmin { get; set; }
        public int articleId { get; set; }
        public string message { get; set; }
    }
}
