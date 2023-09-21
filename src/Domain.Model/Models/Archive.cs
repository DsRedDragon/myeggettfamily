using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class Archive
    {
        public Nullable<System.DateTime> MonthStart { get; set; }
        public string ArchiveName { get; set; }
    }
}
