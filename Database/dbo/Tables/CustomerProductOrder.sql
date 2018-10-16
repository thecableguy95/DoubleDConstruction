CREATE TABLE [dbo].[CustomerProductOrder] (
    [CustomerProductOrder] INT IDENTITY (1, 1) NOT NULL,
    [ProductId]            INT NULL,
    [OrderId]              INT NULL,
    CONSTRAINT [PK_CustomerProductOrder] PRIMARY KEY CLUSTERED ([CustomerProductOrder] ASC),
    CONSTRAINT [FK_Order_OrderId] FOREIGN KEY ([OrderId]) REFERENCES [dbo].[CustomerOrder] ([OrderId]),
    CONSTRAINT [FK_Product_ProductId] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId])
);

