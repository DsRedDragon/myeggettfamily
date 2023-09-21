using System;
using System.Collections.Generic;
using Domain.Model.Enums;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace Domain.Model.Models
{
    public partial class AppUserView
    {
        public int ApplicationUserId { get; set; }
        public string EmailAddress { get; set; }
        public bool IsAdmin { get; set; }
        public DateTime? LastLoggedInDt { get; set; }
        public bool IsSystemAdmin { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ExternalId { get; set; }
        public int ExternalTypeId { get; set; }
        public bool ReceiveNotifications { get; set; }
        public string ExternalType { get; set; }
    }
}
