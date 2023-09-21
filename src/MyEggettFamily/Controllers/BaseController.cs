using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using Domain.Data;
using Domain.Model.Enums;
using Domain.Model.Models;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MyEggettFamily;

namespace MyEggettFamily.Controllers
{
    public abstract class BaseController : Controller
    {
        protected IDataAccess _dal;
        protected IDataProtector _protector;

        protected BaseController(IDataAccess dal, IDataProtectionProvider provider)
        {
            _dal = dal;
            _protector = provider.CreateProtector(GetType().FullName);
        }

        public string EncryptString(string input)
        {
            return _protector.Protect(input);
        }

        public string DecryptString(string input)
        {
            return _protector.Unprotect(input);
        }

        public string HashString(string input)
        {
            using (var sha256 = SHA256.Create())
            {
                // Send a sample text to hash.
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));

                // Get the hashed string.
                var hash = BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();

                return hash;
            }
            
        }
        
        public async void SendEmail(string subject, string body, EmailRecipientType type)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("My Eggett Family Admin", "admin@MyEggettFamily.com"));
            message.Subject = subject;
            var bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = string.Format("<h1>My Eggett Family</h1><hr /> {0}<hr /><h6>You can unsubscribe from these notifications from your profile at <a href='http://www.MyEggettFamily.com'>My Eggett Family</a></h6>", body);
            message.Body = bodyBuilder.ToMessageBody();

            IEnumerable<ApplicationUser> users = new List<ApplicationUser>();

            users = _dal.GetApplicationUsersForNotifications(type);
            foreach (var user in users)
            {
                if (user.EmailAddress.Trim() != string.Empty)
                {
                    message.Bcc.Add(new MailboxAddress(string.Format("{0} {1}", user.FirstName, user.LastName), user.EmailAddress));
                }
            }

            using (var client = new SmtpClient())
            {
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                await client.ConnectAsync("smtp.office365.com", 587, false).ConfigureAwait(false);

                // Note: since we don't have an OAuth2 token, disable
                // the XOAUTH2 authentication mechanism.
                client.AuthenticationMechanisms.Remove("XOAUTH2");

                // Note: only needed if the SMTP server requires authentication
                await client.AuthenticateAsync("dhales@myeggettfamily.com", "Slayers1").ConfigureAwait(false);

                await client.SendAsync(message).ConfigureAwait(false);
                await client.DisconnectAsync(true).ConfigureAwait(false);
            }

        }
    }
}
