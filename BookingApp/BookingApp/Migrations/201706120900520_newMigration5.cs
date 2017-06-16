namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newMigration5 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.AppUsers", "Email");
            DropColumn("dbo.AppUsers", "Password");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AppUsers", "Password", c => c.String(maxLength: 50));
            AddColumn("dbo.AppUsers", "Email", c => c.String(maxLength: 50));
        }
    }
}
