using System;
using System.Collections.Generic;
using Domain.Model.Enums;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace Domain.Model.Models
{
    public partial class AppChild
    {
        public int AppChildId { get; set; }
        public int ApplicationUserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string ImageUrl { get; set; }
        public DateTime? Birthday { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
