using System;
//using CopyToMeService.Areas.Identity.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

/*
[assembly: HostingStartup(typeof(CopyToMeService.Areas.Identity.IdentityHostingStartup))]
namespace CopyToMeService.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<CopyToMeServiceIdentityDbContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("CopyToMeServiceIdentityDbContextConnection")));

                services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<CopyToMeServiceIdentityDbContext>();
            });
        }
    }
}*/