using DdConstruction.DomainModel;
using DdConstruction.Service;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using NJsonSchema;
using NSwag.AspNetCore;

namespace DdConstruction
{
    public class Startup
    {
        private readonly IConfiguration Configuration;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var serviceConfiguration = Configuration.Get<ServiceConfiguration>();
            services.Configure<ServiceConfiguration>(Configuration);
            services.AddScoped(sp => sp.GetService<IOptionsSnapshot<ServiceConfiguration>>()?.Value);

            services.AddScoped(sp =>
            {
                var config = sp.GetRequiredService<ServiceConfiguration>();
                var optionsBuilder = new DbContextOptionsBuilder<DoubleDConstructionContext>();
                optionsBuilder.UseSqlServer(config.SqlServerConnectionString);

                return optionsBuilder.Options;
            });

            services.AddCors(options => options.AddPolicy("DefaultPolicyName", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().AllowCredentials()));

            services.AddDbContext<DoubleDConstructionContext>(ServiceLifetime.Scoped);

            services.AddMvc();

            services.AddDdConstructionService();

            services.AddSwagger();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            // Register the Swagger generator and the Swagger UI middlewares
            app.UseSwaggerUi3WithApiExplorer(settings =>
            {
                settings.GeneratorSettings.DefaultPropertyNameHandling =
                    PropertyNameHandling.CamelCase;
            });

            app.UseCors("DefaultPolicyName");

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
