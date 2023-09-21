using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class SettingView
    {
        public int headerId { get; set; }
        public string image { get; set; }
        public string code { get; set; }
        public int codeId { get; set; }
    }
}
