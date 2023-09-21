using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Domain.Data;

namespace Domain.Data.Migrations
{
    [DbContext(typeof(EggettFamilyContext))]
    [Migration("20170124150010_InsertAppChild")]
    partial class InsertAppChild
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Domain.Model.Models.AppChild", b =>
                {
                    b.Property<int>("AppChildId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ApplicationUserId");

                    b.Property<DateTime>("Birthday")
                        .HasColumnName("Birthday")
                        .HasColumnType("date");

                    b.Property<string>("FirstName")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("varchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("MiddleName")
                        .HasColumnType("varchar(100)");

                    b.HasKey("AppChildId");

                    b.HasIndex("ApplicationUserId");

                    b.ToTable("AppChild","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.ApplicationUser", b =>
                {
                    b.Property<int>("ApplicationUserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EmailAddress")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("ExternalId")
                        .HasColumnType("varchar(100)");

                    b.Property<int>("ExternalTypeId")
                        .HasColumnType("int");

                    b.Property<string>("FirstName")
                        .HasColumnType("varchar(100)");

                    b.Property<bool>("IsAdmin")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<bool>("IsSystemAdmin")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<DateTime?>("LastLoggedInDt")
                        .HasColumnName("LastLoggedInDT")
                        .HasColumnType("datetime");

                    b.Property<string>("LastName")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Password")
                        .HasColumnType("varchar(100)");

                    b.Property<bool>("ReceiveNotifications")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("1");

                    b.Property<string>("SecretAnswer")
                        .HasColumnType("varchar(250)");

                    b.Property<string>("SecretQuestion")
                        .HasColumnType("varchar(250)");

                    b.Property<string>("Username")
                        .HasColumnType("varchar(100)");

                    b.HasKey("ApplicationUserId");

                    b.HasIndex("ExternalTypeId");

                    b.ToTable("ApplicationUser","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Archive", b =>
                {
                    b.Property<string>("ArchiveName")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("MonthStart");

                    b.HasKey("ArchiveName");

                    b.ToTable("Archives","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Article", b =>
                {
                    b.Property<int>("ArticleId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ApplicationUserId");

                    b.Property<bool>("Archived")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<string>("ArticleContent")
                        .HasColumnType("varchar(max)");

                    b.Property<bool>("IsNew")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("1");

                    b.Property<DateTime>("PostedDt")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("PostedDT")
                        .HasColumnType("datetime")
                        .HasDefaultValueSql("getdate()");

                    b.Property<string>("Title")
                        .HasColumnType("varchar(1000)");

                    b.Property<bool>("Visible")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.HasKey("ArticleId");

                    b.HasIndex("ApplicationUserId");

                    b.ToTable("Article","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.ArticleDetail", b =>
                {
                    b.Property<int>("ArticleId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ApplicationUserId");

                    b.Property<bool>("Archived");

                    b.Property<string>("ArticleContent");

                    b.Property<string>("AuthorName");

                    b.Property<bool>("IsNew");

                    b.Property<DateTime>("PostedDT");

                    b.Property<string>("Title");

                    b.Property<bool>("Visible");

                    b.HasKey("ArticleId");

                    b.ToTable("ArticleDetails","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.ArticleTag", b =>
                {
                    b.Property<int>("ArticleTagId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArticleId");

                    b.Property<int>("TagId");

                    b.HasKey("ArticleTagId");

                    b.HasIndex("ArticleId");

                    b.HasIndex("TagId");

                    b.ToTable("ArticleTag","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Comment", b =>
                {
                    b.Property<int>("CommentId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ApplicationUserId");

                    b.Property<bool>("Approved")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<int>("ArticleId");

                    b.Property<DateTime>("CommentDt")
                        .HasColumnName("CommentDT")
                        .HasColumnType("datetime");

                    b.Property<string>("CommentText")
                        .IsRequired()
                        .HasColumnType("varchar(max)");

                    b.Property<bool>("IsNew");

                    b.HasKey("CommentId");

                    b.HasIndex("ApplicationUserId");

                    b.HasIndex("ArticleId");

                    b.ToTable("Comment","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Country", b =>
                {
                    b.Property<int>("CountryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CountryAbbr")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("CountryName")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("CountryId");

                    b.ToTable("Country","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.File", b =>
                {
                    b.Property<int>("FileId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArticleId");

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasColumnType("varchar(200)");

                    b.Property<string>("FileUrl")
                        .IsRequired()
                        .HasColumnType("varchar(max)");

                    b.HasKey("FileId");

                    b.HasIndex("ArticleId");

                    b.ToTable("File","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Image", b =>
                {
                    b.Property<int>("ImageId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArticleId");

                    b.Property<string>("CaptionText")
                        .HasColumnType("varchar(1500)");

                    b.Property<string>("ExternalAlbumId")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("ExternalId")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("varchar(max)");

                    b.Property<bool>("IsActive")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValueSql("((0))");

                    b.Property<bool>("IsVideo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValueSql("((0))");

                    b.Property<string>("ThumbnailUrl")
                        .HasColumnType("varchar(max)");

                    b.Property<DateTime?>("UrlRetrievalDate")
                        .HasColumnType("datetime");

                    b.HasKey("ImageId");

                    b.HasIndex("ArticleId");

                    b.ToTable("Image","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.ListCategory", b =>
                {
                    b.Property<int>("ListCategoryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .HasColumnType("varchar(500)");

                    b.Property<string>("EnumCode")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<string>("StringValue")
                        .HasColumnType("varchar(max)");

                    b.HasKey("ListCategoryId");

                    b.ToTable("ListCategory","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.ListEnum", b =>
                {
                    b.Property<int>("ListEnumId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .HasColumnType("varchar(500)");

                    b.Property<string>("EnumCode")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.Property<int>("ListCategoryId");

                    b.Property<string>("Value")
                        .HasColumnType("varchar(max)");

                    b.HasKey("ListEnumId");

                    b.HasIndex("ListCategoryId");

                    b.ToTable("ListEnum","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.Setting", b =>
                {
                    b.Property<int>("SettingId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Encrypt")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("0");

                    b.Property<string>("SettingName")
                        .IsRequired()
                        .HasColumnType("varchar(500)");

                    b.Property<string>("SettingValue")
                        .IsRequired()
                        .HasColumnType("varchar(max)");

                    b.Property<int>("TypeId")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("1");

                    b.HasKey("SettingId");

                    b.ToTable("Setting","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.State", b =>
                {
                    b.Property<int>("StateId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CountryId");

                    b.Property<string>("StateAbbr")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("StateName")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("StateId");

                    b.HasIndex("CountryId");

                    b.ToTable("State","Application");
                });

            modelBuilder.Entity("Domain.Model.Models.Suggestion", b =>
                {
                    b.Property<int>("SuggestionId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ApplicationuserId");

                    b.Property<DateTime>("CreatedDt")
                        .HasColumnName("CreatedDT")
                        .HasColumnType("datetime");

                    b.Property<DateTime?>("ResolutionDt")
                        .HasColumnName("ResolutionDT")
                        .HasColumnType("datetime");

                    b.Property<int>("StatusId");

                    b.Property<int>("TypeId");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("varchar(max)");

                    b.HasKey("SuggestionId");

                    b.HasIndex("ApplicationuserId");

                    b.HasIndex("StatusId");

                    b.HasIndex("TypeId");

                    b.ToTable("Suggestion","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.SuggestionView", b =>
                {
                    b.Property<int>("SuggestionId");

                    b.Property<int>("ApplicationUserId");

                    b.Property<string>("AuthorName");

                    b.Property<DateTime>("CreatedDT");

                    b.Property<DateTime?>("ResolutionDT");

                    b.Property<int>("StatusId");

                    b.Property<string>("StatusName");

                    b.Property<int>("TypeId");

                    b.Property<string>("TypeName");

                    b.Property<string>("Value");

                    b.HasKey("SuggestionId", "ApplicationUserId");

                    b.ToTable("SuggestionView","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.Tag", b =>
                {
                    b.Property<int>("TagId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("TagName")
                        .HasColumnType("varchar(100)");

                    b.HasKey("TagId");

                    b.ToTable("Tag","Operations");
                });

            modelBuilder.Entity("Domain.Model.Models.AppChild", b =>
                {
                    b.HasOne("Domain.Model.Models.ApplicationUser", "ApplicationUser")
                        .WithMany("AppChild")
                        .HasForeignKey("ApplicationUserId")
                        .HasConstraintName("FK_AppChild_ApplicationUser")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Model.Models.ApplicationUser", b =>
                {
                    b.HasOne("Domain.Model.Models.ListEnum", "ExternalType")
                        .WithMany("ExternalType")
                        .HasForeignKey("ExternalTypeId")
                        .HasConstraintName("FK_ApplicationUser_ExternalType")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Model.Models.Article", b =>
                {
                    b.HasOne("Domain.Model.Models.ApplicationUser", "ApplicationUser")
                        .WithMany("Article")
                        .HasForeignKey("ApplicationUserId")
                        .HasConstraintName("FK_Article_ApplicationUser");
                });

            modelBuilder.Entity("Domain.Model.Models.ArticleTag", b =>
                {
                    b.HasOne("Domain.Model.Models.Article", "Article")
                        .WithMany("ArticleTag")
                        .HasForeignKey("ArticleId")
                        .HasConstraintName("FK_ArticleTag_Article")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.Model.Models.Tag", "Tag")
                        .WithMany("ArticleTag")
                        .HasForeignKey("TagId")
                        .HasConstraintName("FK_ArticleTag_Tag");
                });

            modelBuilder.Entity("Domain.Model.Models.Comment", b =>
                {
                    b.HasOne("Domain.Model.Models.ApplicationUser", "ApplicationUser")
                        .WithMany("Comment")
                        .HasForeignKey("ApplicationUserId")
                        .HasConstraintName("FK_Comment_ApplicationUser");

                    b.HasOne("Domain.Model.Models.Article", "Article")
                        .WithMany("Comment")
                        .HasForeignKey("ArticleId")
                        .HasConstraintName("FK_Comment_Article")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Model.Models.File", b =>
                {
                    b.HasOne("Domain.Model.Models.Article", "Article")
                        .WithMany("File")
                        .HasForeignKey("ArticleId")
                        .HasConstraintName("FK_File_Article")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Model.Models.Image", b =>
                {
                    b.HasOne("Domain.Model.Models.Article", "Article")
                        .WithMany("Image")
                        .HasForeignKey("ArticleId")
                        .HasConstraintName("FK_Image_Article")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Model.Models.ListEnum", b =>
                {
                    b.HasOne("Domain.Model.Models.ListCategory", "ListCategory")
                        .WithMany("ListEnum")
                        .HasForeignKey("ListCategoryId")
                        .HasConstraintName("FK_ListEnum_ListCategory");
                });

            modelBuilder.Entity("Domain.Model.Models.State", b =>
                {
                    b.HasOne("Domain.Model.Models.Country", "Country")
                        .WithMany("State")
                        .HasForeignKey("CountryId")
                        .HasConstraintName("FK_State_Country");
                });

            modelBuilder.Entity("Domain.Model.Models.Suggestion", b =>
                {
                    b.HasOne("Domain.Model.Models.ApplicationUser", "Author")
                        .WithMany("Suggestion")
                        .HasForeignKey("ApplicationuserId")
                        .HasConstraintName("FK_Suggestion_ApplicationUser")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.Model.Models.ListEnum", "Status")
                        .WithMany("SuggestionStatus")
                        .HasForeignKey("StatusId")
                        .HasConstraintName("FK_Suggestion_SuggestionStatus");

                    b.HasOne("Domain.Model.Models.ListEnum", "Type")
                        .WithMany("SuggestionType")
                        .HasForeignKey("TypeId")
                        .HasConstraintName("FK_Suggestion_SuggestionType");
                });
        }
    }
}
