using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Domain.Model.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Domain.Data
{
    public partial class EggettFamilyContext : DbContext
    {
        public virtual DbSet<ApplicationUser> ApplicationUser { get; set; }
        public virtual DbSet<ApplicationUserDetail> ApplicationUserDetail { get; set; }
        public virtual DbSet<AppChild> AppChild { get; set; }
        public virtual DbSet<Archive> Archives { get; set; }
        public virtual DbSet<Article> Article { get; set; }
        public virtual DbSet<ArticleDetail> ArticleDetails { get; set; }
        public virtual DbSet<ArticleTag> ArticleTag { get; set; }
        public virtual DbSet<Comment> Comment { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<File> File { get; set; }
        public virtual DbSet<Image> Image { get; set; }
        public virtual DbSet<ListCategory> ListCategory { get; set; }
        public virtual DbSet<ListEnum> ListEnum { get; set; }
        public virtual DbSet<Setting> Setting { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<Suggestion> Suggestion { get; set; }
        public virtual DbSet<SuggestionView> SuggestionView { get; set; }
        public virtual DbSet<Tag> Tag { get; set; }

        public EggettFamilyContext(DbContextOptions<EggettFamilyContext> options)
            : base(options)
        {
            Database.SetCommandTimeout(150000);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ApplicationUser>(entity =>
            {
                entity.ToTable("ApplicationUser", "Operations");

                entity.Property(e => e.EmailAddress).HasColumnType("varchar(100)");

                entity.Property(e => e.IsAdmin).HasDefaultValueSql("0");

                entity.Property(e => e.IsSystemAdmin).HasDefaultValueSql("0");

                entity.Property(e => e.ReceiveNotifications).HasDefaultValueSql("1");

                entity.Property(e => e.LastLoggedInDt)
                    .HasColumnName("LastLoggedInDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.ExternalTypeId).HasColumnType("int");

                entity.Property(e => e.ExternalId).HasColumnType("varchar(100)");

                entity.Property(e => e.FirstName).HasColumnType("varchar(100)");

                entity.Property(e => e.LastName).HasColumnType("varchar(100)");

               //entity.Property(e => e.Username).HasColumnType("varchar(100)");

                entity.Property(e => e.Password).HasColumnType("varchar(100)");

                entity.Property(e => e.SecretQuestion).HasColumnType("varchar(250)");

                entity.Property(e => e.SecretAnswer).HasColumnType("varchar(250)");
                
            });

            modelBuilder.Entity<ApplicationUserDetail>(entity =>
            {
                entity.ToTable("ApplicationUserDetail", "Operations");

                entity.Property(e => e.ApplicationUserId).HasColumnType("int");

                entity.Property(e => e.Birthday)
                    .HasColumnName("Birthday")
                    .HasColumnType("date");

                entity.Property(e => e.SpouseBirthday)
                    .HasColumnName("SpouseBirthday")
                    .HasColumnType("date");

                entity.Property(e => e.StateId).HasColumnType("int");

                entity.Property(e => e.ZipCode).HasColumnType("int");

                entity.Property(e => e.StreetAddress).HasColumnType("varchar(255)");

                entity.Property(e => e.MiddleName).HasColumnType("varchar(100)");

                entity.Property(e => e.HomePhone).HasColumnType("bigint");

                entity.Property(e => e.CellPhone).HasColumnType("bigint");

                entity.Property(e => e.SpouseCellPhone).HasColumnType("bigint");

                entity.Property(e => e.City).HasColumnType("varchar(100)");

                entity.Property(e => e.ImageUrl).HasColumnType("varchar(max)");

                entity.Property(e => e.SpouseFirstName).HasColumnType("varchar(100)");

                entity.Property(e => e.SpouseMiddleName).HasColumnType("varchar(100)");

                entity.Property(e => e.SpouseLastName).HasColumnType("varchar(100)");

                entity.HasOne(d => d.ApplicationUser)
                    .WithOne(p => p.ApplicationUserDetail)
                    .HasConstraintName("FK_ApplicationUserDetail_ApplicationUser");

                entity.HasOne(d => d.State)
                    .WithOne(p => p.ApplicationUserDetail)
                    .HasConstraintName("FK_ApplicationUserDetail_State");
            });

            modelBuilder.Entity<AppChild>(entity =>
            {
                entity.ToTable("AppChild", "Operations");
                
                entity.Property(e => e.Birthday)
                    .HasColumnName("Birthday")
                    .HasColumnType("date");

                entity.Property(e => e.FirstName).HasColumnType("varchar(100)");

                entity.Property(e => e.LastName).HasColumnType("varchar(100)");

                entity.Property(e => e.MiddleName).HasColumnType("varchar(100)");

                entity.Property(e => e.ImageUrl).HasColumnType("varchar(max)");

                entity.HasOne(d => d.ApplicationUser)
                    .WithMany(p => p.AppChild)
                    .HasForeignKey(d => d.ApplicationUserId)
                    .HasConstraintName("FK_AppChild_ApplicationUser");
            });

            modelBuilder.Entity<Archive>(entity =>
            {
                entity.HasKey(e => e.ArchiveName);

                entity.ToTable("Archives", "Operations");
            });

            modelBuilder.Entity<Article>(entity =>
            {
                entity.ToTable("Article", "Operations");

                entity.Property(e => e.Archived).HasDefaultValueSql("0");

                entity.Property(e => e.ArticleContent).HasColumnType("varchar(max)");

                entity.Property(e => e.IsNew).HasDefaultValueSql("1");

                entity.Property(e => e.PostedDt)
                    .HasColumnName("PostedDT")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("getdate()");

                entity.Property(e => e.Title).HasColumnType("varchar(1000)");

                entity.Property(e => e.Visible).HasDefaultValueSql("0");

                entity.HasOne(d => d.ApplicationUser)
                    .WithMany(p => p.Article)
                    .HasForeignKey(d => d.ApplicationUserId)
                    .HasConstraintName("FK_Article_ApplicationUser");
            });

            modelBuilder.Entity<ArticleDetail>(entity =>
            {
                entity.HasKey(e => e.ArticleId);

                entity.ToTable("ArticleDetails", "Operations");
            });

            modelBuilder.Entity<ArticleTag>(entity =>
            {
                entity.ToTable("ArticleTag", "Operations");

                entity.HasOne(d => d.Article)
                    .WithMany(p => p.ArticleTag)
                    .HasForeignKey(d => d.ArticleId)
                    .HasConstraintName("FK_ArticleTag_Article");

                entity.HasOne(d => d.Tag)
                    .WithMany(p => p.ArticleTag)
                    .HasForeignKey(d => d.TagId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_ArticleTag_Tag");
            });

           

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("Comment", "Operations");

                entity.Property(e => e.Approved).HasDefaultValueSql("0");

                entity.Property(e => e.CommentDt)
                    .HasColumnName("CommentDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.CommentText)
                    .IsRequired()
                    .HasColumnType("varchar(max)");

                entity.Property(e => e.IsNew);

                entity.HasOne(d => d.Article)
                    .WithMany(p => p.Comment)
                    .HasForeignKey(d => d.ArticleId)
                    .HasConstraintName("FK_Comment_Article");

                entity.HasOne(d => d.ApplicationUser)
                    .WithMany(p => p.Comment)
                    .HasForeignKey(d => d.ApplicationUserId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Comment_ApplicationUser");
            });

            modelBuilder.Entity<Country>(entity =>
            {
                entity.ToTable("Country", "Application");

                entity.Property(e => e.CountryAbbr)
                    .IsRequired()
                    .HasColumnType("varchar(20)");

                entity.Property(e => e.CountryName)
                    .IsRequired()
                    .HasColumnType("varchar(255)");
            });

            modelBuilder.Entity<File>(entity =>
            {
                entity.ToTable("File", "Operations");

                entity.Property(e => e.FileName)
                    .IsRequired()
                    .HasColumnType("varchar(200)");

                entity.Property(e => e.FileUrl)
                    .IsRequired()
                    .HasColumnType("varchar(max)");

                entity.HasOne(d => d.Article)
                    .WithMany(p => p.File)
                    .HasForeignKey(d => d.ArticleId)
                    .HasConstraintName("FK_File_Article");
            });

            modelBuilder.Entity<Image>(entity =>
            {
                entity.ToTable("Image", "Operations");

                entity.Property(e => e.ImageUrl).HasColumnType("varchar(max)");

                entity.Property(e => e.CaptionText).HasColumnType("varchar(1500)");

                entity.Property(e => e.IsActive).IsRequired().HasDefaultValueSql("((0))").HasColumnType("bit");

                entity.Property(e => e.ExternalId).HasColumnType("varchar(50)");

                entity.Property(e => e.ExternalAlbumId).HasColumnType("varchar(50)");

                entity.Property(e => e.IsVideo).IsRequired().HasDefaultValueSql("((0))").HasColumnType("bit");

                entity.Property(e => e.ThumbnailUrl).HasColumnType("varchar(max)");

                entity.Property(e => e.UrlRetrievalDate).HasColumnType("datetime");

                entity.HasOne(d => d.Article)
                    .WithMany(p => p.Image)
                    .HasForeignKey(d => d.ArticleId)
                    .HasConstraintName("FK_Image_Article");
            });

            modelBuilder.Entity<ListCategory>(entity =>
            {
                entity.ToTable("ListCategory", "Application");

                entity.Property(e => e.Description).HasColumnType("varchar(500)");

                entity.Property(e => e.EnumCode)
                    .IsRequired()
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.StringValue).HasColumnType("varchar(max)");
            });

            modelBuilder.Entity<ListEnum>(entity =>
            {
                entity.ToTable("ListEnum", "Application");

                entity.Property(e => e.Description).HasColumnType("varchar(500)");

                entity.Property(e => e.EnumCode)
                    .IsRequired()
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.Value).HasColumnType("varchar(max)");

                entity.HasOne(d => d.ListCategory)
                    .WithMany(p => p.ListEnum)
                    .HasForeignKey(d => d.ListCategoryId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_ListEnum_ListCategory");
            });

            modelBuilder.Entity<Setting>(entity =>
            {
                entity.ToTable("Setting", "Application");

                entity.Property(e => e.Encrypt).HasDefaultValueSql("0");

                entity.Property(e => e.SettingName)
                    .IsRequired()
                    .HasColumnType("varchar(500)");

                entity.Property(e => e.SettingValue)
                    .IsRequired()
                    .HasColumnType("varchar(max)");

                entity.Property(e => e.TypeId).HasDefaultValueSql("1");
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.ToTable("State", "Application");

                entity.Property(e => e.StateAbbr)
                    .IsRequired()
                    .HasColumnType("varchar(20)");

                entity.Property(e => e.StateName)
                    .IsRequired()
                    .HasColumnType("varchar(255)");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.State)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_State_Country");
            });

            modelBuilder.Entity<Suggestion>(entity =>
            {
                entity.ToTable("Suggestion", "Operations");
                
                entity.Property(e => e.CreatedDt)
                    .HasColumnName("CreatedDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.ResolutionDt)
                    .HasColumnName("ResolutionDT")
                    .HasColumnType("datetime");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnType("varchar(max)");

                entity.HasOne(d => d.Author)
                    .WithMany(p => p.Suggestion)
                    .HasForeignKey(d => d.ApplicationuserId)
                    .HasConstraintName("FK_Suggestion_ApplicationUser");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.SuggestionStatus)
                    .HasForeignKey(d => d.StatusId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Suggestion_SuggestionStatus");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.SuggestionType)
                    .HasForeignKey(d => d.TypeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Suggestion_SuggestionType");
            });

            modelBuilder.Entity<SuggestionView>(entity =>
            {
                entity.HasKey(e => new { e.SuggestionId, e.ApplicationUserId });

                entity.ToTable("SuggestionView", "Operations");
            });

            modelBuilder.Entity<Tag>(entity =>
            {
                entity.ToTable("Tag", "Operations");

                entity.Property(e => e.TagName).HasColumnType("varchar(100)");
            });
            
            base.OnModelCreating(modelBuilder);

            modelBuilder.Ignore<IdentityUserLogin<string>>();
            modelBuilder.Ignore<IdentityUserRole<string>>();
            modelBuilder.Ignore<IdentityUserClaim<string>>();
            modelBuilder.Ignore<IdentityUserToken<string>>();
            modelBuilder.Ignore<IdentityUser<string>>();
        }
    }
}