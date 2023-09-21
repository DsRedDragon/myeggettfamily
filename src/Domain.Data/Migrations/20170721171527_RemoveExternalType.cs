using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Domain.Data.Migrations
{
    public partial class RemoveExternalType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApplicationUser_ExternalType",
                schema: "Operations",
                table: "ApplicationUser");
            
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApplicationUser_ListEnum_ExternalTypeId",
                schema: "Operations",
                table: "ApplicationUser");

            migrationBuilder.AddForeignKey(
                name: "FK_ApplicationUser_ExternalType",
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
