using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class File
    {
        public int FileId { get; set; }
        public string FileName { get; set; }
        public string FileUrl { get; set; }
        public int ArticleId { get; set; }

        public virtual Article Article { get; set; }
    }
}
