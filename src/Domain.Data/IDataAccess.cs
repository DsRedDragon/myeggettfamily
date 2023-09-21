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
    public interface IDataAccess
    {

        #region * ApplicationUser *

        IEnumerable<ApplicationUser> GetApplicationUsers();
        IEnumerable<ApplicationUser> GetApplicationUsersForNotifications(EmailRecipientType type);
        IEnumerable<ApplicationUser> GetApplicationUsersForNotifications();
        ApplicationUser GetApplicationUser(int id);
        AppUserView GetAppUserView(int id);
        ApplicationUser GetApplicationUserByUsername(string username);
        ApplicationUser GetApplicationUserByExternalId(string externalId);
        AppUserView GetAppUserViewByExternalId(string externalId);
        ApplicationUser InsertApplicationUser(ApplicationUser user);
        ApplicationUser UpdateApplicationUser(ApplicationUser user);
        Task<int> UpdateApplicationUserAsync(ApplicationUser user);

        #endregion

        #region * ApplicationUserDetail *

        ApplicationUserDetail InsertApplicationUserDetail(ApplicationUserDetail user);
        ApplicationUserDetail UpdateApplicationUserDetail(ApplicationUserDetail user);

        #endregion

        #region * AppChild *

        IEnumerable<AppChild> GetAppChildrenByApplicationUserId(int id);
        void DeleteAppChild(int id);

        #endregion

        #region * Article *

        Article GetArticle(int articleId);
        IEnumerable<Article> GetArticles();
        IEnumerable<Article> GetArticles(bool archived = false);
        Article InsertArticle(Article article);
        Article UpdateArticle(Article article);
        void DeleteArticle(int id);

        #endregion

        #region * ArticleDetail *

        ArticleDetail GetArticleDetail(int articleId);
        IEnumerable<ArticleDetail> GetArticleDetails(bool activeOnly = true);
        IEnumerable<ArticleDetail> GetArticleDetailsList(bool activeOnly);
        IEnumerable<ArticleDetail> GetArticleDetailsByMonth(DateTime monthStart);

        #endregion

        #region * Archive *

        IEnumerable<Archive> GetArchives();

        #endregion

        #region * Comment *

        Comment GetComment(int commentId);
        IEnumerable<Comment> GetComments();
        IEnumerable<Comment> GetApprovedCommentsByArticleId(int articleId);
        IEnumerable<Comment> GetCommentsByArticleId(int articleId);
        Comment InsertComment(Comment comment);
        Comment UpdateComment(Comment comment);
        void DeleteComment(int id);

        #endregion

        #region * Country *
        Country GetCountry(int countryId);
        IEnumerable<Country> GetCountries();

        #endregion

        #region * File *

        File GetFile(int fileId);
        IEnumerable<File> GetFilesByArticleId(int articleId);
        File InsertFile(File file);
        File UpdateFile(File file);
        void DeleteFile(int id);

        #endregion

        #region * Image *

        Image GetImage(int imageId);
        IEnumerable<Image> GetImagesByArticleId(int articleId);
        Image InsertImage(Image image);
        Image UpdateImage(Image image);
        void DeleteImage(int id);

        #endregion

        #region * ListCategory *

        ListCategory GetListCategory(int listCategoryId);
        IEnumerable<ListCategory> GetListCategories();
        ListCategory InsertListCategory(ListCategory file);
        ListCategory UpdateListCategory(ListCategory file);
        void DeleteListCategory(int id);

        #endregion

        #region * ListEnum *

        ListEnum GetListEnum(int listEnumId);
        IEnumerable<ListEnum> GetListEnums();
        IEnumerable<ListEnum> GetListEnumsByCategory(int categoryId);
        ListEnum InsertListEnum(ListEnum file);
        ListEnum UpdateListEnum(ListEnum file);
        void DeleteListEnum(int id);

        #endregion

        #region * Setting *

        Setting GetSetting(int settingId);
        IEnumerable<Setting> GetSettings(bool allSettings = false);
        Setting InsertSetting(Setting file);
        Setting UpdateSetting(Setting file);
        void DeleteSetting(int id);

        #endregion

        #region * Suggestion *

        Suggestion GetSuggestion(int suggestionId);
        IEnumerable<Suggestion> GetSuggestions();
        IEnumerable<Suggestion> GetSuggestionByStatus(int statusId);
        IEnumerable<Suggestion> GetSuggestionByType(int typeId);
        IEnumerable<Suggestion> GetSuggestionByStatusAndType(int statusId, int typeId);
        Suggestion InsertSuggestion(Suggestion file);
        Suggestion UpdateSuggestion(Suggestion file);
        void DeleteSuggestion(int id);

        #endregion

        #region * SuggestionView *

        IEnumerable<SuggestionView> GetSuggestionViews(int userId);
        IEnumerable<SuggestionView> GetSuggestionViewByStatus(int statusId);
        IEnumerable<SuggestionView> GetSuggestionViewByType(int typeId);
        IEnumerable<SuggestionView> GetSuggestionViewByStatusAndType(int statusId, int typeId);

        #endregion

        #region * State *

        State GetState(int stateId);
        IEnumerable<State> GetStates();

        #endregion
    }
}
