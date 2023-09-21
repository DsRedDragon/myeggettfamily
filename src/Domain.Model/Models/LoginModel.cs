using System;
using System.Collections.Generic;
using Domain.Model.Enums;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace Domain.Model.Models
{
    public partial class LoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
