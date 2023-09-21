using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class State
    {
        public int StateId { get; set; }
        public string StateName { get; set; }
        public string StateAbbr { get; set; }
        public int CountryId { get; set; }

        public virtual Country Country { get; set; }
        public ApplicationUserDetail ApplicationUserDetail { get; set; }
    }
}
