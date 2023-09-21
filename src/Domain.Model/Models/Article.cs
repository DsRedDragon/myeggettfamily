using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class Article
    {
        public Article()
        {
            ArticleTag = new HashSet<ArticleTag>();
            Comment = new HashSet<Comment>();
            File = new HashSet<File>();
            Image = new HashSet<Image>();
        }

        public int ArticleId { get; set; }
        public string Title { get; set; }
        public int? ApplicationUserId { get; set; }
        public string ArticleContent { get; set; }
        public DateTime PostedDt { get; set; }
        public bool Visible { get; set; }
        public bool Archived { get; set; }
        public bool IsNew { get; set; }

        public virtual ICollection<ArticleTag> ArticleTag { get; set; }
        public virtual ICollection<Comment> Comment { get; set; }
        public virtual ICollection<File> File { get; set; }
        public virtual ICollection<Image> Image { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
