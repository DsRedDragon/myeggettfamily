using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Domain.Data.Migrations
{
    public partial class ApplicationUserUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Password",
                schema: "Operations",
                table: "ApplicationUser",
                type: "varchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecretAnswer",
                schema: "Operations",
                table: "ApplicationUser",
                type: "varchar(250)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecretQuestion",
                schema: "Operations",
                table: "ApplicationUser",
                type: "varchar(250)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Username",
                schema: "Operations",
                table: "ApplicationUser",
                type: "varchar(100)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                schema: "Operations",
                table: "ApplicationUser");

            migrationBuilder.DropColumn(
                name: "SecretAnswer",
                schema: "Operations",
                table: "ApplicationUser");

            migrationBuilder.DropColumn(
                name: "SecretQuestion",
                schema: "Operations",
                table: "ApplicationUser");

            migrationBuilder.DropColumn(
                name: "Username",
                schema: "Operations",
                table: "ApplicationUser");
        }
    }
}
