using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Data;
using Domain.Model.Enums;
using Domain.Model.Models;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;
using MyEggettFamily;

namespace MyEggettFamily.Controllers
{
    [Route("api/[controller]")]
    public class ArticleController : BaseController
    {
        public ArticleController(IDataAccess dal, IDataProtectionProvider provider) : base(dal, provider)
        {
        }

        [HttpGet("[action]")]
        public IEnumerable<ArticleDetail> GetArticles()
        {
            IEnumerable<ArticleDetail> articles = _dal.GetArticleDetails();
            return articles;
        }

        [HttpGet("[action]")]
        public IEnumerable<ArticleDetail> GetArticlesList(bool activeOnly)
        {
            IEnumerable<ArticleDetail> articles = _dal.GetArticleDetailsList(activeOnly);
            return articles;
        }

        [HttpGet("[action]")]
        public ArticleDetailView GetArticle(int articleId)
        {
            ArticleDetail article = _dal.GetArticleDetail(articleId);
            ArticleDetailView art = new ArticleDetailView
            {
                ApplicationUserId = article.ApplicationUserId,
                AuthorName = article.AuthorName,
                ArticleId = article.ArticleId,
                IsNew = article.IsNew,
                Archived = article.Archived,
                ArticleContent = article.ArticleContent,
                PostedDT = article.PostedDT,
                Title = article.Title,
                Visible = article.Visible
            };
            return art;
        }

        [HttpGet("[action]")]
        public IEnumerable<Archive> GetArchiveList()
        {
            IEnumerable<Archive> archives = _dal.GetArchives();
            return archives;
        }

        [HttpGet("[action]")]
        public IEnumerable<ArticleDetail> GetArchivesByMonth(DateTime start)
        {
            IEnumerable<ArticleDetail> archives = _dal.GetArticleDetailsByMonth(start);
            return archives;
        }

        [HttpPost("[action]")]
        public ArticleDetail UpdateArticle([FromBody]ArticleDetail view)
        {
            Article article = new Article
            {
                ApplicationUserId = view.ApplicationUserId,
                Archived = view.Archived,
                ArticleContent = view.ArticleContent,
                ArticleId = view.ArticleId,
                IsNew = view.IsNew,
                PostedDt = view.PostedDT,
                Title = view.Title,
                Visible = view.Visible
            };

            if (article.ArticleId > 0)
            {
                _dal.UpdateArticle(article);
            }
            else
            {
                //article.PostedDt = DateTime.Now;
                _dal.InsertArticle(article);

                view.ArticleId = article.ArticleId;
            }
            
            return view;
        }

        [HttpGet("[action]")]
        public void DeleteArticle(int articleId)
        {
            _dal.DeleteArticle(articleId);
        }

        [HttpPost("[action]")]
        public void SendNotification([FromBody]ArticleDetail view)
        {
            string subject = string.Empty;
            StringBuilder sb = new StringBuilder();

            if (view.IsNew)
            {
                sb.Append("<b>There is new article.</b> <br /> ");
                subject = "New Article";
            }
            else
            {
                sb.Append("<b>An article has been updated.</b> <br /> ");
                subject = "Article Updated";
            }

            sb.Append("<table><tr><td><b>Article By:</b></td><td>");
            sb.Append(view.AuthorName);
            sb.Append("</td></tr><tr><td><b>Posted Date:</b></td><td>");
            sb.Append(view.PostedDT);
            sb.Append("</td></tr><tr><td><b>Title:</b></td><td>");
            sb.Append(view.Title);
            sb.Append("</td></tr><tr><td><b>Preview:</b></td><td>");
            if (view.ArticleContent.Length > 100)
            {
                sb.Append(view.ArticleContent.Substring(0, 100));
            }
            else
            {
                sb.Append(view.ArticleContent);
            }
            sb.Append(".....</td></tr></table><br /><a href='http://www.MyEggettFamily.com/view/");
            sb.Append(view.ArticleId);
            sb.Append("'>Check it out</a>");

            SendEmail(subject, sb.ToString(), EmailRecipientType.General);
        }

        [HttpPost("[action]")]
        public void SendSubmittedNotification([FromBody]ArticleDetail view)
        {
            string subject = string.Empty;
            StringBuilder sb = new StringBuilder();
            
            sb.Append("<b>There is new article that has been submitted for approval.</b> <br /> ");
            subject = "New Article Submitted";

            sb.Append("<table><tr><td><b>Article By:</b></td><td>");
            sb.Append(view.AuthorName);
            sb.Append("</td></tr><tr><td><b>Posted Date:</b></td><td>");
            sb.Append(view.PostedDT);
            sb.Append("</td></tr><tr><td><b>Title:</b></td><td>");
            sb.Append(view.Title);
            sb.Append("</td></tr><tr><td><b>Preview:</b></td><td>");
            if (view.ArticleContent.Length > 100)
            {
                sb.Append(view.ArticleContent.Substring(0, 100));
            }
            else
            {
                sb.Append(view.ArticleContent);
            }
            sb.Append(".....</td></tr></table><br /><a href='http://www.MyEggettFamily.com/admin/");
            sb.Append("'>Check it out</a>");

            SendEmail(subject, sb.ToString(), EmailRecipientType.Admin);
        }
    }
}
