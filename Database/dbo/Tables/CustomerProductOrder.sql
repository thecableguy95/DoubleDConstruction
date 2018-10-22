CREATE TABLE [dbo].[CustomerProductOrder] (
	[CustomerProductOrderId] INT IDENTITY (1, 1) NOT NULL,
	[ProductId]            INT NOT NULL,
	[Quantity]			   INT NOT NULL, 
	[OrderId]              INT NOT NULL,
	CONSTRAINT [PK_CustomerProductOrder] PRIMARY KEY CLUSTERED ([CustomerProductOrderId] ASC),
	CONSTRAINT [FK_CustomerProductOrder_OrderId] FOREIGN KEY ([OrderId]) REFERENCES [dbo].[CustomerOrder] ([OrderId]),
	CONSTRAINT [FK_CustomerProductOrder_ProductId] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId])
);

