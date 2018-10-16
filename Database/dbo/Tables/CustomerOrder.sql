CREATE TABLE [dbo].[CustomerOrder] (
    [OrderId]       INT      IDENTITY (1, 1) NOT NULL,
    [CreateDate]    DATETIME NOT NULL,
    [OrderStatusId] INT      NOT NULL,
    [FulfilledDate] DATETIME NULL,
    CONSTRAINT [PK_OrderId] PRIMARY KEY CLUSTERED ([OrderId] ASC),
    CONSTRAINT [FK_OrderStatus_OrderStatusId] FOREIGN KEY ([OrderStatusId]) REFERENCES [dbo].[md_OrderStatus] ([OrderStatusId])
);

