using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class Setting
    {
        public int SettingId { get; set; }
        public string SettingName { get; set; }
        public string SettingValue { get; set; }
        public bool Encrypt { get; set; }
        public int TypeId { get; set; }
    }
}
