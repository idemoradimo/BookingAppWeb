namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NewMigration : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Accomodations", "Address", c => c.String(nullable: false, maxLength: 300));
            AlterColumn("dbo.Accomodations", "ImageURL", c => c.String(nullable: false));
            AlterColumn("dbo.AccomodationTypes", "Name", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("dbo.Comments", "Text", c => c.String(maxLength: 250));
            AlterColumn("dbo.Rooms", "Description", c => c.String(maxLength: 250));
            AlterColumn("dbo.Places", "Name", c => c.String(nullable: false, maxLength: 200));
            AlterColumn("dbo.Regions", "Name", c => c.String(nullable: false, maxLength: 200));
            AlterColumn("dbo.Countries", "Name", c => c.String(nullable: false, maxLength: 200));
            CreateIndex("dbo.AccomodationTypes", "Name", unique: true);
            CreateIndex("dbo.Countries", "Name", unique: true);
        }
        
        public override void Down()
        {
            DropIndex("dbo.Countries", new[] { "Name" });
            DropIndex("dbo.AccomodationTypes", new[] { "Name" });
            AlterColumn("dbo.Countries", "Name", c => c.String(maxLength: 50));
            AlterColumn("dbo.Regions", "Name", c => c.String(maxLength: 50));
            AlterColumn("dbo.Places", "Name", c => c.String(maxLength: 50));
            AlterColumn("dbo.Rooms", "Description", c => c.String(maxLength: 50));
            AlterColumn("dbo.Comments", "Text", c => c.String(maxLength: 50));
            AlterColumn("dbo.AccomodationTypes", "Name", c => c.String(maxLength: 50));
            AlterColumn("dbo.Accomodations", "ImageURL", c => c.String(maxLength: 50));
            AlterColumn("dbo.Accomodations", "Address", c => c.String(maxLength: 50));
        }
    }
}
