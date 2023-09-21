using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DM;
using Domain.Data;
using Domain.Model.Enums;
using Domain.Model.Models;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace MyEggettFamily.Controllers
{
    [Route("api/[controller]")]
    public class UserController : BaseController
    {

        public UserController(IDataAccess dal, IDataProtectionProvider provider) : base(dal, provider)
        {
        }

        [HttpPost("[action]")]
        public ApplicationUser Login([FromBody]LoginModel model)
        {
            ApplicationUser user = _dal.GetApplicationUserByUsername(model.Username);

            if (user != null)
            {
                if (HashString(model.Password) != user.Password)
                {
                    user = new ApplicationUser();
                }
            }
            else
            {
                user = new ApplicationUser();
            }

            return user;
        }

        [HttpPost("[action]")]
        public ApplicationUser UpdateTime([FromBody]ApplicationUser user)
        {
            user.LastLoggedInDt = DateTime.Now;
            return _dal.UpdateApplicationUser(user);
        }

        [HttpGet("[action]")]
        public AppUserView GetUserById(int id)
        {
            AppUserView user = _dal.GetAppUserView(id);
            return user;
        }

        [HttpGet("[action]")]
        public ApplicationUser GetAppUserById(int id)
        {
            ApplicationUser user = _dal.GetApplicationUser(id);
            return user;
        }

        [HttpGet("[action]")]
        public bool CheckUsername(string username, int id)
        {
            bool result = true;
            ApplicationUser user = _dal.GetApplicationUserByUsername(username);

            if (user.IsNotNull())
            {
                if (user.ApplicationUserId == id)
                {
                    result = false;
                }
            }
            else
            {
                result = false;
            }

            return result;
        }

        [HttpGet("[action]")]
        public ForgotModel GetQuestion(string username)
        {
            ForgotModel result = new ForgotModel();
            ApplicationUser user = _dal.GetApplicationUserByUsername(username);

            if (user.IsNotNull())
            {
                result.Question = user.SecretQuestion;
                result.ApplicationUserId = user.ApplicationUserId;
            }

            return result;
        }

        [HttpGet("[action]")]
        public ApplicationUser GetUserByExternalId(string externalId)
        {
            ApplicationUser user = _dal.GetApplicationUserByExternalId(externalId);
            return user;
        }

        [HttpGet("[action]")]
        public AppUserView GetUserViewByExternalId(string externalId)
        {
            AppUserView user = _dal.GetAppUserViewByExternalId(externalId);
            
            if (user.IsNull())
            {
                user = new AppUserView
                {
                    LastLoggedInDt = DateTime.Now,
                    ReceiveNotifications = true
                };
            }

            return user;
        }

        [HttpGet("[action]")]
        public IEnumerable<ApplicationUser> GetApplicationUsers()
        {
            return _dal.GetApplicationUsers();
        }

        [HttpGet("[action]")]
        public IEnumerable<ApplicationUser> GetApplicationUsersForNotifications()
        {
            return _dal.GetApplicationUsersForNotifications();
        }


        [HttpPost("[action]")]
        public void UpdateUserDetail([FromBody]ApplicationUserDetail view)
        {
            if (view.ApplicationUserDetailId > 0)
            {
                _dal.UpdateApplicationUserDetail(view);
            }
            else
            {
                _dal.InsertApplicationUserDetail(view);
            }
        }

        [HttpPost("[action]")]
        public ForgotModel ResetPassword([FromBody]ForgotModel view)
        {
            try
            {
                ApplicationUser user = _dal.GetApplicationUser(view.ApplicationUserId);

                if (user.SecretAnswer.ToLower() == view.Answer.ToLower())
                {
                    user.Password = HashString(view.NewPassword);

                    _dal.UpdateApplicationUser(user);
                    view.Success = true;
                }
                else
                {
                    view.Success = false;
                }
            }
            catch
            {
                view.Success = false;
            }

            return view;
        }

        [HttpPost("[action]")]
        public ApplicationUser UpdateUser([FromBody]ApplicationUser view, string code)
        {
            try
            {

                if (view.ApplicationUserId > 0)
                {
                    _dal.UpdateApplicationUser(view);
                }
                else
                {
                    Setting setting = _dal.GetSetting(2);
                    if (setting.SettingValue == code)
                    {
                        view.Password = HashString(view.Password);
                        view.ApplicationUserDetail.State = null;

                        _dal.InsertApplicationUser(view);
                    }
                }

                ApplicationUser user = new ApplicationUser
                {
                    AppChild = view.AppChild,
                    ApplicationUserDetail =
                        new ApplicationUserDetail
                        {
                            ApplicationUserDetailId = view.ApplicationUserDetail.ApplicationUserDetailId,
                            ApplicationUserId = view.ApplicationUserId,
                            Birthday = view.ApplicationUserDetail.Birthday,
                            CellPhone = view.ApplicationUserDetail.CellPhone,
                            City = view.ApplicationUserDetail.City,
                            HomePhone = view.ApplicationUserDetail.HomePhone,
                            ImageUrl = view.ApplicationUserDetail.ImageUrl,
                            MiddleName = view.ApplicationUserDetail.MiddleName,
                            SpouseBirthday = view.ApplicationUserDetail.SpouseBirthday,
                            SpouseCellPhone = view.ApplicationUserDetail.SpouseCellPhone,
                            SpouseFirstName = view.ApplicationUserDetail.SpouseFirstName,
                            SpouseLastName = view.ApplicationUserDetail.SpouseLastName,
                            SpouseMiddleName = view.ApplicationUserDetail.SpouseMiddleName,
                            State = view.ApplicationUserDetail.State.IsNotNull() ? new State
                            {
                                Country = view.ApplicationUserDetail.State.Country,
                                CountryId = view.ApplicationUserDetail.State.CountryId,
                                StateAbbr = view.ApplicationUserDetail.State.StateAbbr,
                                StateId = view.ApplicationUserDetail.State.StateId,
                                StateName = view.ApplicationUserDetail.State.StateName
                            } : null,
                            StateId = view.ApplicationUserDetail.StateId,
                            StreetAddress = view.ApplicationUserDetail.StreetAddress,
                            ZipCode = view.ApplicationUserDetail.ZipCode
                        },
                    ApplicationUserId = view.ApplicationUserId,
                    Article = view.Article,
                    Comment = view.Comment,
                    EmailAddress = view.EmailAddress,
                    ExternalId = view.ExternalId,
                    ExternalTypeId = view.ExternalTypeId,
                    FirstName = view.FirstName,
                    IsAdmin = view.IsAdmin,
                    IsSystemAdmin = view.IsSystemAdmin,
                    LastLoggedInDt = view.LastLoggedInDt,
                    LastName = view.LastName,
                    Password = view.Password,
                    ReceiveNotifications = view.ReceiveNotifications,
                    SecretAnswer = view.SecretAnswer,
                    SecretQuestion = view.SecretQuestion,
                    Suggestion = view.Suggestion,
                    Username = view.Username
                };

                foreach (AppChild child in user.AppChild)
                {
                    child.ApplicationUser = null;
                }

                return user;
            }
            catch(Exception ex)
            {
                return view;
            }
        }
    }
}
