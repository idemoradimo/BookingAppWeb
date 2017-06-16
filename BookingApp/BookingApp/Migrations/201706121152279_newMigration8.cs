namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newMigration8 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Accomodations", "AverageGrade", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Accomodations", "AverageGrade", c => c.Single(nullable: false));
        }
    }
}
