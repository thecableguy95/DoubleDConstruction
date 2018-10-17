using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DdConstruction
{
    public partial class DoubleDConstructionContext : DbContext
    {
        public DoubleDConstructionContext()
        {
        }

        public DoubleDConstructionContext(DbContextOptions<DoubleDConstructionContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CustomerOrder> CustomerOrder { get; set; }
        public virtual DbSet<CustomerProductOrder> CustomerProductOrder { get; set; }
        public virtual DbSet<MdOrderStatus> MdOrderStatus { get; set; }
        public virtual DbSet<Product> Product { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=DoubleDConstruction;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CustomerOrder>(entity =>
            {
                entity.HasKey(e => e.OrderId);

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.FulfilledDate).HasColumnType("datetime");

                entity.HasOne(d => d.OrderStatus)
                    .WithMany(p => p.CustomerOrder)
                    .HasForeignKey(d => d.OrderStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OrderStatus_OrderStatusId");
            });

            modelBuilder.Entity<CustomerProductOrder>(entity =>
            {
                entity.HasKey(e => e.CustomerProductOrder1);

                entity.Property(e => e.CustomerProductOrder1).HasColumnName("CustomerProductOrder");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.CustomerProductOrder)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Order_OrderId");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CustomerProductOrder)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Product_ProductId");
            });

            modelBuilder.Entity<MdOrderStatus>(entity =>
            {
                entity.HasKey(e => e.OrderStatusId);

                entity.ToTable("md_OrderStatus");

                entity.Property(e => e.Description)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");
            });
        }
    }
}
