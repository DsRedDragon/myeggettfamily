using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Domain.Data.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Archives",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "ArticleDetails",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "ArticleTag",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Comment",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "File",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Image",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Setting",
                schema: "Application");

            migrationBuilder.DropTable(
                name: "State",
                schema: "Application");

            migrationBuilder.DropTable(
                name: "Suggestion",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "SuggestionView",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Tag",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Article",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "Country",
                schema: "Application");

            migrationBuilder.DropTable(
                name: "ApplicationUser",
                schema: "Operations");

            migrationBuilder.DropTable(
                name: "ListEnum",
                schema: "Application");

            migrationBuilder.DropTable(
                name: "ListCategory",
                schema: "Application");
        }
    }
}
