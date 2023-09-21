using System;
using System.Collections.Generic;
using Domain.Model.Enums;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace Domain.Model.Models
{
    public partial class ApplicationUserDetail
    {
        public int ApplicationUserDetailId { get; set; }
        public int ApplicationUserId { get; set; }
        public string MiddleName { get; set; }
        public Int64? HomePhone { get; set; }
        public Int64? CellPhone { get; set; }
        public DateTime? Birthday { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public int StateId { get; set; }
        public int ZipCode { get; set; }
        public string ImageUrl { get; set; }
        public string SpouseFirstName { get; set; }
        public string SpouseMiddleName { get; set; }
        public string SpouseLastName { get; set; }
        public Int64? SpouseCellPhone { get; set; }
        public DateTime? SpouseBirthday { get; set; }
        public State State { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        
    }
}
