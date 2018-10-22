CREATE TABLE [dbo].[CustomerOrder] (
    [OrderId]       INT      IDENTITY (1000, 1) NOT NULL,
    [CreateDate]    DATETIME NOT NULL,
    [OrderStatusId] INT      NOT NULL,
	[StripePaymentId] VARCHAR(50) NULL,
    [FulfilledDate] DATETIME NULL,
    CONSTRAINT [PK_OrderId] PRIMARY KEY CLUSTERED ([OrderId] ASC),
    CONSTRAINT [FK_CustomerOrder_OrderStatusId] FOREIGN KEY ([OrderStatusId]) REFERENCES [dbo].[md_OrderStatus] ([OrderStatusId])
);

