using System;
using System.Collections.Generic;
using Domain.Model.Enums;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace Domain.Model.Models
{
    public partial class ForgotModel
    {
        public string Username { get; set; }
        public int ApplicationUserId { get; set; }
        public string NewPassword { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public bool Success { get; set; }
    }
}
