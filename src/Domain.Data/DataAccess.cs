using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using DM;
using Domain.Model.Enums;
using Domain.Model.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Domain.Data
{
    public class DataAccess : IDataAccess, IDisposable
    {
        private EggettFamilyContext _context;

        public DataAccess(EggettFamilyContext context)
        {
            _context = context;
        }

        #region * ApplicationUser *

        #region GetApplicationUsers
        /// <summary>
        /// Gets the application users.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ApplicationUser> GetApplicationUsers()
        {
            return _context.ApplicationUser.Include(x => x.ApplicationUserDetail)
                .Select(r => new ApplicationUser
                {
                    AppChild = r.AppChild,
                    ApplicationUserDetail = r.ApplicationUserDetail,
                    ApplicationUserId = r.ApplicationUserId,
                    Article = r.Article,
                    Comment = r.Comment,
                    EmailAddress = r.EmailAddress,
                    ExternalId = r.ExternalId,
                    ExternalTypeId = r.ExternalTypeId,
                    FirstName = r.FirstName,
                    IsAdmin = r.IsAdmin,
                    IsSystemAdmin = r.IsSystemAdmin,
                    LastLoggedInDt = r.LastLoggedInDt,
                    LastName = r.LastName,
                    Password = r.Password,
                    ReceiveNotifications = r.ReceiveNotifications,
                    SecretAnswer = r.SecretAnswer,
                    SecretQuestion = r.SecretQuestion,
                    Suggestion = r.Suggestion,
                    Username = r.Username
                }).OrderBy(x => x.FirstName).ThenBy(x => x.LastName);
                
        }
        #endregion

        #region GetApplicationUsersAdmin
        /// <summary>
        /// Gets the application users.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ApplicationUser> GetApplicationUsersForNotifications(EmailRecipientType type)
        {
            IEnumerable<ApplicationUser> users = new List<ApplicationUser>();

            switch (type)
            {
                case EmailRecipientType.Admin:
                    users = _context.ApplicationUser.Where(x => x.IsAdmin && x.ReceiveNotifications);
                    break;
                case EmailRecipientType.SysAdmin:
                    users = _context.ApplicationUser.Where(x => x.IsSystemAdmin && x.ReceiveNotifications);
                    break;
                case EmailRecipientType.General:
                    users = _context.ApplicationUser.Where(x => x.ReceiveNotifications);
                    break;
            }

            return users;
        }
        #endregion
        
        #region GetApplicationUsersForNotifications
        /// <summary>
        /// Gets the application users.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ApplicationUser> GetApplicationUsersForNotifications()
        {
            return _context.ApplicationUser.Where(x => x.ReceiveNotifications);
        }
        #endregion

        #region GetApplicationUser
        /// <summary>
        /// Gets the application user.
        /// </summary>
        /// <returns></returns>
        public ApplicationUser GetApplicationUser(int id)
        {
            return _context.ApplicationUser.Include(x => x.AppChild).Include(x => x.ApplicationUserDetail).ThenInclude(c => c.State).ThenInclude(x => x.Country)
                .Select(r => new ApplicationUser
                {
                    AppChild = r.AppChild,
                    ApplicationUserDetail =
                    new ApplicationUserDetail
                    {
                        ApplicationUserDetailId = r.ApplicationUserDetail.ApplicationUserDetailId,
                        ApplicationUserId = r.ApplicationUserId,
                        Birthday = r.ApplicationUserDetail.Birthday,
                        CellPhone = r.ApplicationUserDetail.CellPhone,
                        City = r.ApplicationUserDetail.City,
                        HomePhone = r.ApplicationUserDetail.HomePhone,
                        ImageUrl = r.ApplicationUserDetail.ImageUrl,
                        MiddleName = r.ApplicationUserDetail.MiddleName,
                        SpouseBirthday = r.ApplicationUserDetail.SpouseBirthday,
                        SpouseCellPhone = r.ApplicationUserDetail.SpouseCellPhone,
                        SpouseFirstName = r.ApplicationUserDetail.SpouseFirstName,
                        SpouseLastName = r.ApplicationUserDetail.SpouseLastName,
                        SpouseMiddleName = r.ApplicationUserDetail.SpouseMiddleName,
                        State = new State
                        {
                            Country = r.ApplicationUserDetail.State.Country,
                            CountryId = r.ApplicationUserDetail.State.CountryId,
                            StateAbbr = r.ApplicationUserDetail.State.StateAbbr,
                            StateId = r.ApplicationUserDetail.State.StateId,
                            StateName = r.ApplicationUserDetail.State.StateName
                        },
                        StateId = r.ApplicationUserDetail.StateId,
                        StreetAddress = r.ApplicationUserDetail.StreetAddress,
                        ZipCode = r.ApplicationUserDetail.ZipCode
                    },
                    ApplicationUserId = r.ApplicationUserId,
                    Article = r.Article,
                    Comment = r.Comment,
                    EmailAddress = r.EmailAddress,
                    ExternalId = r.ExternalId,
                    ExternalTypeId = r.ExternalTypeId,
                    FirstName = r.FirstName,
                    IsAdmin = r.IsAdmin,
                    IsSystemAdmin = r.IsSystemAdmin,
                    LastLoggedInDt = r.LastLoggedInDt,
                    LastName = r.LastName,
                    Password = r.Password,
                    ReceiveNotifications = r.ReceiveNotifications,
                    SecretAnswer = r.SecretAnswer,
                    SecretQuestion = r.SecretQuestion,
                    Suggestion = r.Suggestion,
                    Username = r.Username
                }
                ).FirstOrDefault(x => x.ApplicationUserId == id);
        }
        #endregion

        #region GetAppUserView
        /// <summary>
        /// Gets the ApplicationUser.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns></returns>
        public AppUserView GetAppUserView(int id)
        {
            return _context.ApplicationUser.Where(x => x.ApplicationUserId == id).Select(x =>
            new AppUserView
            {
                ApplicationUserId = x.ApplicationUserId,
                EmailAddress = x.EmailAddress,
                ExternalType = Enum.GetValues(typeof(ExternalLoginType)).Cast<ExternalLoginType>().FirstOrDefault(e => e.ToInt() == x.ExternalTypeId).ToString(),
                ExternalTypeId = x.ExternalTypeId,
                ExternalId = x.ExternalId,
                LastName = x.LastName,
                FirstName = x.FirstName,
                LastLoggedInDt = x.LastLoggedInDt,
                IsAdmin = x.IsAdmin,
                ReceiveNotifications = x.ReceiveNotifications,
                IsSystemAdmin = x.IsSystemAdmin
            }
            ).FirstOrDefault();
        }
        #endregion

        #region GetApplicationUser
        /// <summary>
        /// Gets the application user.
        /// </summary>
        /// <returns></returns>
        public ApplicationUser GetApplicationUserByUsername(string username)
        {
            return _context.ApplicationUser.Include(x => x.AppChild).Include(x => x.ApplicationUserDetail).ThenInclude(c => c.State).ThenInclude(x => x.Country)
                .Select(r => new ApplicationUser
                {
                    AppChild = r.AppChild,
                    ApplicationUserDetail = 
                    new ApplicationUserDetail
                    {
                        ApplicationUserDetailId = r.ApplicationUserDetail.ApplicationUserDetailId,
                        ApplicationUserId = r.ApplicationUserId,
                        Birthday = r.ApplicationUserDetail.Birthday,
                        CellPhone = r.ApplicationUserDetail.CellPhone,
                        City = r.ApplicationUserDetail.City,
                        HomePhone = r.ApplicationUserDetail.HomePhone,
                        ImageUrl = r.ApplicationUserDetail.ImageUrl,
                        MiddleName = r.ApplicationUserDetail.MiddleName,
                        SpouseBirthday = r.ApplicationUserDetail.SpouseBirthday,
                        SpouseCellPhone = r.ApplicationUserDetail.SpouseCellPhone,
                        SpouseFirstName = r.ApplicationUserDetail.SpouseFirstName,
                        SpouseLastName = r.ApplicationUserDetail.SpouseLastName,
                        SpouseMiddleName = r.ApplicationUserDetail.SpouseMiddleName,
                        State = new State
                        {
                            Country = r.ApplicationUserDetail.State.Country,
                            CountryId = r.ApplicationUserDetail.State.CountryId,
                            StateAbbr = r.ApplicationUserDetail.State.StateAbbr,
                            StateId = r.ApplicationUserDetail.State.StateId,
                            StateName = r.ApplicationUserDetail.State.StateName
                        },
                        StateId = r.ApplicationUserDetail.StateId,
                        StreetAddress = r.ApplicationUserDetail.StreetAddress,
                        ZipCode = r.ApplicationUserDetail.ZipCode
                    },
                    ApplicationUserId = r.ApplicationUserId,
                    Article = r.Article,
                    Comment = r.Comment,
                    EmailAddress = r.EmailAddress,
                    ExternalId = r.ExternalId,
                    ExternalTypeId = r.ExternalTypeId,
                    FirstName = r.FirstName,
                    IsAdmin = r.IsAdmin,
                    IsSystemAdmin = r.IsSystemAdmin,
                    LastLoggedInDt = r.LastLoggedInDt,
                    LastName = r.LastName,
                    Password = r.Password,
                    ReceiveNotifications = r.ReceiveNotifications,
                    SecretAnswer = r.SecretAnswer,
                    SecretQuestion = r.SecretQuestion,
                    Suggestion = r.Suggestion,
                    Username = r.Username
                }
                ).FirstOrDefault(x => x.Username == username);
        }
        #endregion

        #region GetApplicationUserByExternalId
        /// <summary>
        /// Gets the ApplicationUser.
        /// </summary>
        /// <param name="externalId">The external id.</param>
        /// <returns></returns>
        public ApplicationUser GetApplicationUserByExternalId(string externalId)
        {
            return _context.ApplicationUser.FirstOrDefault(x => x.ExternalId == externalId);
        }
        #endregion

        #region GetAppUserViewByExternalId
        /// <summary>
        /// Gets the ApplicationUser.
        /// </summary>
        /// <param name="externalId">The external id.</param>
        /// <returns></returns>
        public AppUserView GetAppUserViewByExternalId(string externalId)
        {
            return _context.ApplicationUser.Where(x => x.ExternalId == externalId).Select(x =>
            new AppUserView
            {
                ApplicationUserId = x.ApplicationUserId,
                EmailAddress = x.EmailAddress,
                ExternalType = Enum.GetValues(typeof(ExternalLoginType)).Cast<ExternalLoginType>().FirstOrDefault(e => e.ToInt() == x.ExternalTypeId).ToString(),
                ExternalTypeId = x.ExternalTypeId,
                ExternalId = x.ExternalId,
                LastName = x.LastName,
                FirstName = x.FirstName,
                LastLoggedInDt = x.LastLoggedInDt,
                IsAdmin = x.IsAdmin,
                ReceiveNotifications = x.ReceiveNotifications,
                IsSystemAdmin = x.IsSystemAdmin
            }
            ).FirstOrDefault();
        }
        #endregion

        #region InsertApplicationUser
        /// <summary>
        /// Inserts the ApplicationUser.
        /// </summary>
        /// <param name="author">The author.</param>
        /// <returns></returns>
        public ApplicationUser InsertApplicationUser(ApplicationUser user)
        {
            try
            {
                _context.ApplicationUser.Add(user);
                _context.SaveChanges();
            }
            catch(Exception ex)
            {

            }

            return user;
        }
        #endregion

        #region UpdateApplicationUser
        /// <summary>
        /// Updates the ApplicationUser.
        /// </summary>
        /// <param name="user">The ApplicationUser.</param>
        /// <returns></returns>
        public ApplicationUser UpdateApplicationUser(ApplicationUser user)
        {
            var exists = ApplicationUserExists(user.ApplicationUserId);
            
            if (exists)
            {
                _context.Entry(user).State = EntityState.Modified;
                _context.Entry(user.ApplicationUserDetail).State = EntityState.Modified;
                _context.Entry(user.ApplicationUserDetail.State).State = EntityState.Modified;

                var existingChildren = GetAppChildrenByApplicationUserId(user.ApplicationUserId);

                var children = user.AppChild.Select(x => x.AppChildId);
                
                foreach (AppChild child in user.AppChild)
                {
                    if (child.AppChildId > 0)
                    {
                        _context.Entry(child).State = EntityState.Modified;
                    }
                    else
                    {
                        child.ApplicationUserId = user.ApplicationUserId;
                        _context.AppChild.Add(child);
                    }
                }

                foreach (AppChild child in existingChildren)
                {
                    if (!children.Contains(child.AppChildId))
                    {
                        _context.AppChild.Remove(child);
                    }
                }

                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return user;
        }
        #endregion

        #region UpdateApplicationUserAsync
        /// <summary>
        /// Updates the ApplicationUser.
        /// </summary>
        /// <param name="user">The ApplicationUser.</param>
        /// <returns></returns>
        public async Task<int> UpdateApplicationUserAsync(ApplicationUser user)
        {
            var exists = ApplicationUserExists(user.ApplicationUserId);

            if (exists)
            {
                _context.Entry(user).State = EntityState.Modified;
                return await _context.SaveChangesAsync();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }
        }
        #endregion

        #region ApplicationUserExists
        private bool ApplicationUserExists(int userId)
        {
            bool exists = _context.ApplicationUser.Any(x => x.ApplicationUserId == userId);
            return exists;
        }
        #endregion

        #endregion

        #region * ApplicationUserDetail *

        #region InsertApplicationUserDetail
        /// <summary>
        /// Inserts the ApplicationUserDetail.
        /// </summary>
        /// <param name="author">The author.</param>
        /// <returns></returns>
        public ApplicationUserDetail InsertApplicationUserDetail(ApplicationUserDetail user)
        {
            _context.ApplicationUserDetail.Add(user);
            _context.SaveChanges();

            return user;
        }
        #endregion

        #region UpdateApplicationUserDetail
        /// <summary>
        /// Updates the ApplicationUserDetail.
        /// </summary>
        /// <param name="user">The ApplicationUser.</param>
        /// <returns></returns>
        public ApplicationUserDetail UpdateApplicationUserDetail(ApplicationUserDetail user)
        {
            var exists = ApplicationUserDetailExists(user.ApplicationUserDetailId);

            if (exists)
            {
                _context.Entry(user).State = EntityState.Modified;
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return user;
        }
        #endregion

        #region ApplicationUserDetailExists
        private bool ApplicationUserDetailExists(int userId)
        {
            bool exists = _context.ApplicationUserDetail.Any(x => x.ApplicationUserDetailId == userId);
            return exists;
        }
        #endregion

        #endregion

        #region * AppChild *

        #region GetAppChildrenByApplicationUserId
        /// <summary>
        /// Gets the AppChildren By ApplicationUserId.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<AppChild> GetAppChildrenByApplicationUserId(int id)
        {
            return _context.AppChild
                .Select(r => new AppChild
                {
                    AppChildId = r.AppChildId,
                    ApplicationUser = r.ApplicationUser,
                    ApplicationUserId = r.ApplicationUserId,
                    Birthday = r.Birthday,
                    FirstName = r.FirstName,
                    ImageUrl = r.ImageUrl,
                    LastName = r.LastName,
                    MiddleName = r.MiddleName
                }
                ).Where(x => x.ApplicationUserId == id);
        }
        #endregion

        #region DeleteAppChild
        /// <summary>
        /// deletes the app child.
        /// </summary>
        /// <param name="id">The appChild id</param>
        /// <returns></returns>
        public void DeleteAppChild(int id)
        {
            var exists = AppChildExists(id);

            if (exists)
            {
                AppChild child = _context.AppChild.FirstOrDefault(x => x.AppChildId == id);
                _context.AppChild.Remove(child);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't delete.");
            }
        }

        #region AppChildExists
        private bool AppChildExists(int appChildId)
        {
            bool exists = _context.AppChild.Any(x => x.AppChildId == appChildId);
            return exists;
        }
        #endregion

        #endregion

        #endregion

        #region * Article *

        #region GetArticle

        /// <summary>
        /// Gets the article.
        /// </summary>
        /// <param name="articleId">The article id.</param>
        /// <returns></returns>
        public Article GetArticle(int articleId)
        {
            return _context.Article.FirstOrDefault(x => x.ArticleId == articleId);
        }

        #endregion

        #region GetArticles
        /// <summary>
        /// Gets the articles.
        /// </summary>
        /// <param name="articleId">The article id.</param>
        /// <returns></returns>
        public IEnumerable<Article> GetArticles()
        {
            return _context.Article;
        }
        #endregion

        #region GetArticles
        /// <summary>
        /// Gets the articles.
        /// </summary>
        /// <param name="articleId">The article id.</param>
        /// <returns></returns>
        public IEnumerable<Article> GetArticles(bool archived = false)
        {
            return _context.Article.Where(x => x.Archived == archived && x.Visible)
                .Include(x => x.Image)
                .Include(x => x.File);
        }
        #endregion

        #region InsertArticle
        /// <summary>
        /// Insert the article.
        /// </summary>
        /// <param name="article">The article.</param>
        /// <returns></returns>
        public Article InsertArticle(Article article)
        {

            _context.Article.Add(article);
            _context.SaveChanges();

            return article;
        }

        #endregion

        #region UpdateArticle
        /// <summary>
        /// Updates the article.
        /// </summary>
        /// <param name="article">The article.</param>
        /// <returns></returns>
        public Article UpdateArticle(Article article)
        {
            var exists = ArticleExists(article.ArticleId);

            if (exists)
            {
                _context.Entry(article).State = EntityState.Modified;
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return article;
        }

        #endregion

        #region DeleteArticle
        /// <summary>
        /// deletes the article.
        /// </summary>
        /// <param name="id">The article id</param>
        /// <returns></returns>
        public void DeleteArticle(int id)
        {
            var exists = ArticleExists(id);

            if (exists)
            {
                Article article = _context.Article.FirstOrDefault(x => x.ArticleId == id);
                _context.Article.Remove(article);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't delete.");
            }
        }

        #endregion

        #region ArticleExists
        private bool ArticleExists(int articleId)
        {
            bool exists = _context.Article.Any(x => x.ArticleId == articleId);
            return exists;
        }
        #endregion

        #endregion

        #region * ArticleDetail *

        #region GetArticleDetail

        /// <summary>
        /// Gets the article detail by Id.
        /// </summary>
        /// <param name="articleId">the article Id</param>
        /// <returns></returns>
        public ArticleDetail GetArticleDetail(int articleId)
        {
            return _context.ArticleDetails.FirstOrDefault(x => x.ArticleId == articleId);
        }

        #endregion

        #region GetArticleDetails
        /// <summary>
        /// Gets the article details.
        /// </summary>
        /// <param name="activeOnly">The active only.</param>
        /// <returns></returns>
        public IEnumerable<ArticleDetail> GetArticleDetails(bool activeOnly = true)
        {
            return activeOnly ? _context.ArticleDetails.Where(x => x.Visible && !x.Archived).OrderByDescending(t => t.PostedDT) : _context.ArticleDetails.OrderByDescending(t => t.PostedDT);
        }

        #endregion

        #region GetArticleDetailsList
        /// <summary>
        /// Gets the article details.
        /// </summary>
        /// <param name="activeOnly">The active only.</param>
        /// <returns></returns>
        public IEnumerable<ArticleDetail> GetArticleDetailsList(bool activeOnly)
        {
            return activeOnly ? _context.ArticleDetails.Where(x => !x.Archived).OrderByDescending(t => t.PostedDT) : _context.ArticleDetails.Where(x => x.Archived).OrderByDescending(t => t.PostedDT);
        }

        #endregion

        #region GetArticleDetailsByMonth
        /// <summary>
        /// Gets the article details by month.
        /// </summary>
        /// <param name="activeOnly">The active only.</param>
        /// <returns></returns>
        public IEnumerable<ArticleDetail> GetArticleDetailsByMonth(DateTime monthStart)
        {
            DateTime monthEnd = new DateTime(monthStart.Year, monthStart.Month, DateTime.DaysInMonth(monthStart.Year, monthStart.Month), 23, 59, 59);
            return _context.ArticleDetails.Where(t => t.Archived == true && (t.PostedDT >= monthStart && t.PostedDT <= monthEnd)).OrderByDescending(t => t.PostedDT);
        }

        #endregion

        #endregion

        #region * Archive *

        #region GetArchives
        /// <summary>
        /// Gets the archives.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Archive> GetArchives()
        {
            return _context.Archives.OrderByDescending(x => x.MonthStart);
        }

        #endregion

        #endregion
        
        #region * Comment *

        #region GetComment
        /// <summary>
        /// Gets the comment.
        /// </summary>
        /// <param name="commentId">The comment id.</param>
        /// <returns></returns>
        public Comment GetComment(int commentId)
        {
            return _context.Comment.FirstOrDefault(x => x.CommentId == commentId);
        }

        #endregion

        #region GetComments
        /// <summary>
        /// Gets the comments.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Comment> GetComments()
        {
            var comments =
            from c in _context.Comment
            let art = _context.Article.FirstOrDefault(x => x.ArticleId == c.ArticleId)
            let app = _context.ApplicationUser.FirstOrDefault(x => x.ApplicationUserId == c.ApplicationUserId)
            select new Comment
            {
                Article = art,
                ApplicationUser = app,
                ApplicationUserId = c.ApplicationUserId,
                CommentId = c.CommentId,
                ArticleId = c.ArticleId,
                Approved = c.Approved,
                CommentDt = c.CommentDt,
                CommentText = c.CommentText,
                IsNew = c.IsNew
            };

            return comments.OrderByDescending(x => x.IsNew).ThenBy(t => t.ArticleId).ThenBy(r => r.CommentDt);
        }

        #endregion

        #region GetApprovedCommentsByArticleId
        /// <summary>
        /// Gets the approved comments by article id.
        /// </summary>
        /// <param name="articleId">The article id.</param>
        /// <returns></returns>
        public IEnumerable<Comment> GetApprovedCommentsByArticleId(int articleId)
        {
            return _context.Comment.Where(x => x.Approved && x.ArticleId == articleId).OrderBy(x => x.CommentDt);
        }

        #endregion

        #region GetCommentsByArticleId
        /// <summary>
        /// Gets the comments by article id.
        /// </summary>
        /// <param name="articleId">The article id.</param>
        /// <returns></returns>
        public IEnumerable<Comment> GetCommentsByArticleId(int articleId)
        {
            return _context.Comment.Where(x => x.ArticleId == articleId && x.Approved)
            .Join(_context.ApplicationUser,
                c => c.ApplicationUserId,
                a => a.ApplicationUserId,
                (c, a) => new Comment
                {
                    ApplicationUser = a,
                    ApplicationUserId = c.ApplicationUserId,
                    CommentId = c.CommentId,
                    ArticleId = c.ArticleId,
                    Approved = c.Approved,
                    CommentDt = c.CommentDt,
                    CommentText = c.CommentText,
                    IsNew = c.IsNew
                });

        }

        #endregion

        #region InsertComment
        /// <summary>
        /// Inserts the comment.
        /// </summary>
        /// <param name="comment">The comment.</param>
        /// <returns></returns>
        public Comment InsertComment(Comment comment)
        {
            _context.Comment.Add(comment);
            _context.SaveChanges();
            
            var result = _context.Comment
                .Join(_context.ApplicationUser,
                c => c.ApplicationUserId,
                a => a.ApplicationUserId,
                (c, a) => new Comment
                {
                    ApplicationUser = a,
                    ApplicationUserId = c.ApplicationUserId,
                    CommentId = c.CommentId,
                    ArticleId = c.ArticleId,
                    Approved = c.Approved,
                    CommentDt = c.CommentDt,
                    CommentText = c.CommentText,
                    IsNew = c.IsNew
                })
                .Join(_context.Article,
                c => c.ArticleId,
                a => a.ArticleId,
                (c, a) => new Comment
                {
                    Article = a,
                    ApplicationUser = c.ApplicationUser,
                    ApplicationUserId = c.ApplicationUserId,
                    CommentId = c.CommentId,
                    ArticleId = c.ArticleId,
                    Approved = c.Approved,
                    CommentDt = c.CommentDt,
                    CommentText = c.CommentText,
                    IsNew = c.IsNew
                }).FirstOrDefault(x => x.CommentId == comment.CommentId);
            
            return result;
        }
        #endregion

        #region UpdateComment
        /// <summary>
        /// Updates the comment.
        /// </summary>
        /// <param name="comment">The comment.</param>
        /// <returns></returns>
        public Comment UpdateComment(Comment comment)
        {
            var exists = CommentExists(comment.CommentId);

            if (exists)
            {
                _context.Entry(comment).State = EntityState.Modified;
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return _context.Comment.Where(x => x.CommentId == comment.CommentId)
                .Join(_context.ApplicationUser,
                c => c.ApplicationUserId,
                a => a.ApplicationUserId,
                (c, a) => new Comment
                {
                    ApplicationUser = a,
                    ApplicationUserId = c.ApplicationUserId,
                    CommentId = c.CommentId,
                    ArticleId = c.ArticleId,
                    Approved = c.Approved,
                    CommentDt = c.CommentDt,
                    CommentText = c.CommentText,
                    IsNew = c.IsNew
                })
                .Join(_context.Article,
                c => c.ArticleId,
                a => a.ArticleId,
                (c, a) => new Comment
                {
                    Article = a,
                    ApplicationUser = c.ApplicationUser,
                    ApplicationUserId = c.ApplicationUserId,
                    CommentId = c.CommentId,
                    ArticleId = c.ArticleId,
                    Approved = c.Approved,
                    CommentDt = c.CommentDt,
                    CommentText = c.CommentText,
                    IsNew = c.IsNew
                }).FirstOrDefault();
        }
        #endregion

        #region CommentExists
        private bool CommentExists(int commentId)
        {
            bool exists = _context.Comment.Any(x => x.CommentId == commentId);
            return exists;
        }
        #endregion

        #region DeleteComment
        /// <summary>
        /// deletes the comment.
        /// </summary>
        /// <param name="id">The comment id</param>
        /// <returns></returns>
        public void DeleteComment(int id)
        {
            var exists = CommentExists(id);

            if (exists)
            {
                Comment comment = _context.Comment.FirstOrDefault(x => x.CommentId == id);
                _context.Comment.Remove(comment);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't delete.");
            }
        }

        #endregion

        #endregion

        #region * Country *

        #region GetCountry
        /// <summary>
        /// Gets the Country.
        /// </summary>
        /// <param name="Country">The Country id.</param>
        /// <returns></returns>
        public Country GetCountry(int countryId)
        {
            return _context.Country.FirstOrDefault(x => x.CountryId == countryId);
        }
        #endregion

        #region GetCountries
        /// <summary>
        /// Gets the Countries.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Country> GetCountries()
        {
            return _context.Country;
        }
        #endregion

        #endregion

        #region * File *

        #region GetFile
        /// <summary>
        /// Gets the file.
        /// </summary>
        /// <param name="commentId">The file id.</param>
        /// <returns></returns>
        public File GetFile(int fileId)
        {
            return _context.File.FirstOrDefault(x => x.FileId == fileId);
        }

        #endregion

        #region GetFilesByArticleId
        /// <summary>
        /// Gets the files by article id.
        /// </summary>
        /// <param name="articleId">The article id.</param>
        /// <returns></returns>
        public IEnumerable<File> GetFilesByArticleId(int articleId)
        {
            return _context.File.Where(x => x.ArticleId == articleId);
        }

        #endregion

        #region InsertFile
        /// <summary>
        /// Insert the File.
        /// </summary>
        /// <param name="file">The File.</param>
        /// <returns></returns>
        public File InsertFile(File file)
        {
            _context.File.Add(file);
            _context.SaveChanges();

            return file;
        }
        #endregion

        #region UpdateFile
        /// <summary>
        /// Updates the file.
        /// </summary>
        /// <param name="file">The file.</param>
        /// <returns></returns>
        public File UpdateFile(File file)
        {
            var exists = FileExists(file.FileId);

            if (exists)
            {
                _context.Entry(file).State = EntityState.Modified;
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return file;
        }
        #endregion

        #region FileExists
        private bool FileExists(int fileId)
        {
            bool exists = _context.File.Any(x => x.FileId == fileId);
            return exists;
        }
        #endregion

        #region DeleteFile
        /// <summary>
        /// deletes the file.
        /// </summary>
        /// <param name="id">The file id</param>
        /// <returns></returns>
        public void DeleteFile(int id)
        {
            var exists = FileExists(id);

            if (exists)
            {
                File file = _context.File.FirstOrDefault(x => x.FileId == id);
                _context.File.Remove(file);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't delete.");
            }
        }

        #endregion

        #endregion

        #region * Image *

        #region GetImage
        /// <summary>
        /// Gets the image.
        /// </summary>
        /// <param name="commentId">The image id.</param>
        /// <returns></returns>
        public Image GetImage(int imageId)
        {
            return _context.Image.FirstOrDefault(x => x.ImageId == imageId);
        }

        #endregion

        #region GetImagesByArticleId
        /// <summary>
        /// Gets the images by article id.
        /// </summary>
        /// <param name="articleId">The article id.</param>
        /// <returns></returns>
        public IEnumerable<Image> GetImagesByArticleId(int articleId)
        {
            return _context.Image.Where(x => x.ArticleId == articleId);
        }

        #endregion

        #region InsertImage
        /// <summary>
        /// Insert the image.
        /// </summary>
        /// <param name="image">The image.</param>
        /// <returns></returns>
        public Image InsertImage(Image image)
        {
            _context.Image.Add(image);
            _context.SaveChanges();

            return image;
        }
        #endregion

        #region UpdateImage
        /// <summary>
        /// Updates the image.
        /// </summary>
        /// <param name="image">The image.</param>
        /// <returns></returns>
        public Image UpdateImage(Image image)
        {
            var exists = ImageExists(image.ImageId);

            if (exists)
            {
                _context.Entry(image).State = EntityState.Modified;
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return image;
        }
        #endregion

        #region ImageExists
        private bool ImageExists(int imageId)
        {
            bool exists = _context.Image.Any(x => x.ImageId == imageId);
            return exists;
        }
        #endregion

        #region DeleteImage
        /// <summary>
        /// deletes the image.
        /// </summary>
        /// <param name="id">The image id</param>
        /// <returns></returns>
        public void DeleteImage(int id)
        {
            var exists = ImageExists(id);

            if (exists)
            {
                Image image = _context.Image.FirstOrDefault(x => x.ImageId == id);
                _context.Image.Remove(image);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't delete.");
            }
        }

        #endregion

        #endregion

        #region * ListCategory *

        #region GetListCategory
        /// <summary>
        /// Gets the List Category.
        /// </summary>
        /// <param name="listCategoryId">The ListCategory id.</param>
        /// <returns></returns>
        public ListCategory GetListCategory(int listCategoryId)
        {
            return _context.ListCategory.FirstOrDefault(x => x.ListCategoryId == listCategoryId);
        }

        #endregion

        #region GetListCategories
        /// <summary>
        /// Gets the List Categories.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ListCategory> GetListCategories()
        {
            return _context.ListCategory;
        }
        #endregion

        #region InsertListCategory
        /// <summary>
        /// Insert the ListCategory.
        /// </summary>
        /// <param name="file">The llist category.</param>
        /// <returns></returns>
        public ListCategory InsertListCategory(ListCategory file)
        {
            _context.ListCategory.Add(file);
            _context.SaveChanges();

            return file;
        }
        #endregion

        #region UpdateListCategory
        /// <summary>
        /// Updates the ListCategory.
        /// </summary>
        /// <param name="file">The ListCategory.</param>
        /// <returns></returns>
        public ListCategory UpdateListCategory(ListCategory file)
        {
            var exists = ListCategoryExists(file.ListCategoryId);

            if (exists)
            {
                _context.Entry(file).State = EntityState.Modified;
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return file;
        }
        #endregion

        #region ListCategoryExists
        private bool ListCategoryExists(int listCategoryId)
        {
            bool exists = _context.ListCategory.Any(x => x.ListCategoryId == listCategoryId);
            return exists;
        }
        #endregion

        #region DeleteListCategory
        /// <summary>
        /// deletes the ListCategory.
        /// </summary>
        /// <param name="id">The ListCategory id</param>
        /// <returns></returns>
        public void DeleteListCategory(int id)
        {
            var exists = ListCategoryExists(id);

            if (exists)
            {
                ListCategory category = _context.ListCategory.FirstOrDefault(x => x.ListCategoryId == id);
                _context.ListCategory.Remove(category);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't delete.");
            }
        }

        #endregion

        #endregion

        #region * ListEnum *

        #region GetListEnum
        /// <summary>
        /// Gets the ListEnum.
        /// </summary>
        /// <param name="listEnumId">The ListEnum id.</param>
        /// <returns></returns>
        public ListEnum GetListEnum(int listEnumId)
        {
            return _context.ListEnum.FirstOrDefault(x => x.ListEnumId == listEnumId);
        }

        #endregion

        #region GetListEnums
        /// Gets the List Enums.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ListEnum> GetListEnums()
        {
            return _context.ListEnum;
        }

        /// Gets the List Enums.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ListEnum> GetListEnumsByCategory(int categoryId)
        {
            return _context.ListEnum.Where(x => x.ListCategoryId == categoryId);
        }
        #endregion

        #region InsertListEnum
        /// <summary>
        /// Insert the ListEnum.
        /// </summary>
        /// <param name="file">The ListEnum.</param>
        /// <returns></returns>
        public ListEnum InsertListEnum(ListEnum file)
        {
            _context.ListEnum.Add(file);
            _context.SaveChanges();

            return file;
        }
        #endregion

        #region UpdateListEnum
        /// <summary>
        /// Updates the ListEnum.
        /// </summary>
        /// <param name="file">The ListEnum.</param>
        /// <returns></returns>
        public ListEnum UpdateListEnum(ListEnum file)
        {
            var exists = ListEnumExists(file.ListEnumId);

            if (exists)
            {
                _context.Entry(file).State = EntityState.Modified;
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return file;
        }
        #endregion

        #region ListEnumExists
        private bool ListEnumExists(int listEnumId)
        {
            bool exists = _context.ListEnum.Any(x => x.ListEnumId == listEnumId);
            return exists;
        }
        #endregion

        #region DeleteListEnum
        /// <summary>
        /// deletes the ListEnum.
        /// </summary>
        /// <param name="id">The ListEnum id</param>
        /// <returns></returns>
        public void DeleteListEnum(int id)
        {
            var exists = ListEnumExists(id);

            if (exists)
            {
                ListEnum listEnum = _context.ListEnum.FirstOrDefault(x => x.ListEnumId == id);
                _context.ListEnum.Remove(listEnum);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't delete.");
            }
        }

        #endregion

        #endregion

        #region * Setting *

        #region GetSetting
        /// <summary>
        /// Gets the Setting.
        /// </summary>
        /// <param name="settingId">The Setting id.</param>
        /// <returns></returns>
        public Setting GetSetting(int settingId)
        {
            return _context.Setting.FirstOrDefault(x => x.SettingId == settingId);
        }

        #endregion

        #region GetSettings
        /// <summary>
        /// Gets the settings.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Setting> GetSettings(bool allSettings = false)
        {
            if (allSettings)
            {
                return _context.Setting;
            }
            else
            {
                List<int> settings = new List<int> { 1, 2 }; // Header and Code
                return _context.Setting.Where(x => settings.Contains(x.SettingId));
            }
        }
        #endregion

        #region InsertSetting
        /// <summary>
        /// Insert the setting.
        /// </summary>
        /// <param name="file">The setting.</param>
        /// <returns></returns>
        public Setting InsertSetting(Setting file)
        {
            _context.Setting.Add(file);
            _context.SaveChanges();

            return file;
        }
        #endregion

        #region UpdateSetting
        /// <summary>
        /// Updates the Setting.
        /// </summary>
        /// <param name="file">The Setting.</param>
        /// <returns></returns>
        public Setting UpdateSetting(Setting file)
        {
            var exists = SettingExists(file.SettingId);

            if (exists)
            {
                _context.Entry(file).State = EntityState.Modified;
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return file;
        }
        #endregion

        #region SettingExists
        private bool SettingExists(int settingId)
        {
            bool exists = _context.Setting.Any(x => x.SettingId == settingId);
            return exists;
        }
        #endregion

        #region DeleteSetting
        /// <summary>
        /// deletes the setting.
        /// </summary>
        /// <param name="id">The setting id</param>
        /// <returns></returns>
        public void DeleteSetting(int id)
        {
            var exists = SettingExists(id);

            if (exists)
            {
                Setting setting = _context.Setting.FirstOrDefault(x => x.SettingId == id);
                _context.Setting.Remove(setting);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't delete.");
            }
        }

        #endregion

        #endregion

        #region * Suggestion *

        #region GetSuggestion
        /// <summary>
        /// Gets the Suggestion.
        /// </summary>
        /// <param name="suggestionId">The Suggestion id.</param>
        /// <returns></returns>
        public Suggestion GetSuggestion(int suggestionId)
        {
            return _context.Suggestion.FirstOrDefault(x => x.SuggestionId == suggestionId);
        }

        #endregion

        #region GetSuggestions
        /// Gets the Suggestion
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Suggestion> GetSuggestions()
        {
            return _context.Suggestion;
        }

        /// Gets the Suggestion.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Suggestion> GetSuggestionByStatus(int statusId)
        {
            return _context.Suggestion.Where(x => x.StatusId == statusId);
        }

        /// Gets the Suggestion.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Suggestion> GetSuggestionByType(int typeId)
        {
            return _context.Suggestion.Where(x => x.TypeId == typeId);
        }

        /// Gets the Suggestion.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Suggestion> GetSuggestionByStatusAndType(int statusId, int typeId)
        {
            return _context.Suggestion.Where(x => x.StatusId == statusId && x.TypeId == typeId);
        }
        #endregion

        #region InsertSuggestion
        /// <summary>
        /// Insert the Suggestion.
        /// </summary>
        /// <param name="file">The Suggestion.</param>
        /// <returns></returns>
        public Suggestion InsertSuggestion(Suggestion file)
        {
            _context.Suggestion.Add(file);
            _context.SaveChanges();

           var result = _context.Suggestion.Include(x => x.Author).Include(r => r.Status).Include(s => s.Type)
                .Select(c => new Suggestion
                {
                    Author = c.Author,
                    ApplicationuserId = c.ApplicationuserId,
                    SuggestionId = c.SuggestionId,
                    Value = c.Value,
                    StatusId = c.StatusId,
                    CreatedDt = c.CreatedDt,
                    ResolutionDt = c.ResolutionDt,
                    Status = c.Status,
                    Type = c.Type,
                    TypeId = c.TypeId
                }).FirstOrDefault(x => x.SuggestionId == file.SuggestionId);

            return result;
        }
        #endregion

        #region UpdateSuggestion
        /// <summary>
        /// Updates the Suggestion.
        /// </summary>
        /// <param name="file">The Suggestion.</param>
        /// <returns></returns>
        public Suggestion UpdateSuggestion(Suggestion file)
        {
            var exists = SuggestionExists(file.SuggestionId);

            if (exists)
            {
                _context.Entry(file).State = EntityState.Modified;
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't update.");
            }

            return file;
        }
        #endregion

        #region SuggestionExists
        private bool SuggestionExists(int suggestionId)
        {
            bool exists = _context.Suggestion.Any(x => x.SuggestionId == suggestionId);
            return exists;
        }
        #endregion

        #region DeleteSuggestion
        /// <summary>
        /// deletes the Suggestion.
        /// </summary>
        /// <param name="id">The Suggestion id</param>
        /// <returns></returns>
        public void DeleteSuggestion(int id)
        {
            var exists = SuggestionExists(id);

            if (exists)
            {
                Suggestion suggestion = _context.Suggestion.FirstOrDefault(x => x.SuggestionId == id);
                _context.Suggestion.Remove(suggestion);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Does not exist, can't delete.");
            }
        }

        #endregion

        #endregion

        #region * SuggestionView *

        #region GetSuggestionViews
        /// Gets the SuggestionView
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SuggestionView> GetSuggestionViews(int userId)
        {
            if (userId > 0)
            {
                return _context.SuggestionView.Where(x => x.ApplicationUserId == userId).OrderBy(r => r.StatusId).ThenBy(d => d.CreatedDT);
            }
            else
            {
                return _context.SuggestionView.OrderBy(r => r.StatusId).ThenBy(d => d.CreatedDT);
            }

        }

        /// Gets the SuggestionView.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SuggestionView> GetSuggestionViewByStatus(int statusId)
        {
            return _context.SuggestionView.Where(x => x.StatusId == statusId);
        }

        /// Gets the SuggestionView.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SuggestionView> GetSuggestionViewByType(int typeId)
        {
            return _context.SuggestionView.Where(x => x.TypeId == typeId);
        }

        /// Gets the SuggestionView.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<SuggestionView> GetSuggestionViewByStatusAndType(int statusId, int typeId)
        {
            return _context.SuggestionView.Where(x => x.StatusId == statusId && x.TypeId == typeId);
        }
        #endregion

        #endregion

        #region * State *

        #region GetState
        /// <summary>
        /// Gets the state.
        /// </summary>
        /// <param name="stateId">The state id.</param>
        /// <returns></returns>
        public State GetState(int stateId)
        {
            return _context.State.FirstOrDefault(x => x.StateId == stateId);
        }
        #endregion

        #region GetStates
        /// <summary>
        /// Gets the states.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<State> GetStates()
        {
            return _context.State;
        }
        #endregion

        #endregion

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
