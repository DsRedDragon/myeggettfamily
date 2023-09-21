using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class Image
    {
        public int ImageId { get; set; }
        public string ImageUrl { get; set; }
        public int ArticleId { get; set; }
        public string CaptionText { get; set; }
        public bool IsActive { get; set; }
        public string ExternalId { get; set; }
        public string ExternalAlbumId { get; set; }
        public bool IsVideo { get; set; }
        public string ThumbnailUrl { get; set; }
        public DateTime? UrlRetrievalDate { get; set; }

        public virtual Article Article { get; set; }
    }
}
