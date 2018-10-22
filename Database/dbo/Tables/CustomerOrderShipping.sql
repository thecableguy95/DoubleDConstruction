CREATE TABLE [dbo].[CustomerOrderShipping]
(
	[CustomerOrderShippingId] INT IDENTITY (1, 1) NOT NULL,
	[Name]	VARCHAR(50) NOT NULL,
	[Address] VARCHAR(100) NOT NULL,
	[City] VARCHAR(50) NOT NULL,
	[State] VARCHAR(50) NOT NULL,
	[ZipCode] VARCHAR(10) NOT NULL,
	[OrderId]              INT NOT NULL,
	CONSTRAINT [PK_CustomerOrderShipping] PRIMARY KEY CLUSTERED ([CustomerOrderShippingId] ASC),
	CONSTRAINT [FK_CustomerOrderShipping_OrderId] FOREIGN KEY ([OrderId]) REFERENCES [dbo].[CustomerOrder] ([OrderId]),
)
