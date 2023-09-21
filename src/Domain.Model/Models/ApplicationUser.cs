using System;
using System.Collections.Generic;
using Domain.Model.Enums;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace Domain.Model.Models
{
    public partial class ApplicationUser
    {

        public ApplicationUser()
        {
            Article = new HashSet<Article>();
            Comment = new HashSet<Comment>();
            Suggestion = new HashSet<Suggestion>();
            AppChild = new HashSet<AppChild>();
        }

        public int ApplicationUserId { get; set; }
        public string EmailAddress { get; set; }
        public bool IsAdmin { get; set; }
        public DateTime? LastLoggedInDt { get; set; }
        public bool IsSystemAdmin { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ExternalId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string SecretQuestion { get; set; }
        public string SecretAnswer { get; set; }
        public int ExternalTypeId { get; set; }
        public bool ReceiveNotifications { get; set; }
        public ApplicationUserDetail ApplicationUserDetail { get; set; }

        public virtual ICollection<Article> Article { get; set; }
        public virtual ICollection<AppChild> AppChild { get; set; }
        public virtual ICollection<Comment> Comment { get; set; }
        public virtual ICollection<Suggestion> Suggestion { get; set; }
    }
}
