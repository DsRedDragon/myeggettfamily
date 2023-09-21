using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Domain.Data.Migrations
{
    public partial class RemoveSpouseUrlColumnApplicationUserDetailTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SpouseImageUrl",
                schema: "Operations",
                table: "ApplicationUserDetail");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SpouseImageUrl",
                schema: "Operations",
                table: "ApplicationUserDetail",
                type: "varchar(max)",
                nullable: true);
        }
    }
}
