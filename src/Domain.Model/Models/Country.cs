using System;
using System.Collections.Generic;

namespace Domain.Model.Models
{
    public partial class Country
    {
        public Country()
        {
            State = new HashSet<State>();
        }

        public int CountryId { get; set; }
        public string CountryName { get; set; }
        public string CountryAbbr { get; set; }

        public virtual ICollection<State> State { get; set; }
    }
}
