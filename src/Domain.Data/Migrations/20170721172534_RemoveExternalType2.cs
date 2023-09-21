using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Domain.Data.Migrations
{
    public partial class RemoveExternalType2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApplicationUser_ListEnum_ExternalTypeId",
                schema: "Operations",
                table: "ApplicationUser");

            migrationBuilder.AddColumn<int>(
                name: "ListEnumId",
                schema: "Operations",
                table: "ApplicationUser",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationUser_ListEnumId",
                schema: "Operations",
                table: "ApplicationUser",
                column: "ListEnumId");

            migrationBuilder.AddForeignKey(
                name: "FK_ApplicationUser_ListEnum_ListEnumId",
                schema: "Operations",
                table: "ApplicationUser",
                column: "ListEnumId",
                principalSchema: "Application",
                principalTable: "ListEnum",
                principalColumn: "ListEnumId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApplicationUser_ListEnum_ListEnumId",
                schema: "Operations",
                table: "ApplicationUser");

            migrationBuilder.DropIndex(
                name: "IX_ApplicationUser_ListEnumId",
                schema: "Operations",
                table: "ApplicationUser");

            migrationBuilder.DropColumn(
                name: "ListEnumId",
                schema: "Operations",
                table: "ApplicationUser");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationUser_ExternalTypeId",
                schema: "Operations",
                table: "ApplicationUser",
                column: "ExternalTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ApplicationUser_ListEnum_ExternalTypeId",
                schema: "Operations",
                table: "ApplicationUser",
                column: "ExternalTypeId",
                principalSchema: "Application",
                principalTable: "ListEnum",
                principalColumn: "ListEnumId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
