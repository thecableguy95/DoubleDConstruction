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
        public virtual DbSet<CustomerOrderShipping> CustomerOrderShipping { get; set; }
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

                entity.Property(e => e.StripePaymentId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.OrderStatus)
                    .WithMany(p => p.CustomerOrder)
                    .HasForeignKey(d => d.OrderStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CustomerOrder_OrderStatusId");
            });

            modelBuilder.Entity<CustomerOrderShipping>(entity =>
            {
                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ZipCode)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.CustomerOrderShipping)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CustomerOrderShipping_OrderId");
            });

            modelBuilder.Entity<CustomerProductOrder>(entity =>
            {
                entity.HasOne(d => d.Order)
                    .WithMany(p => p.CustomerProductOrder)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CustomerProductOrder_OrderId");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CustomerProductOrder)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CustomerProductOrder_ProductId");
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
                entity.Property(e => e.AltDescription)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OnSale)
                    .IsRequired()
                    .HasDefaultValueSql("('False')");

                entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");
            });
        }
    }
}
