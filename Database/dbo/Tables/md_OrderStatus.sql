CREATE TABLE [dbo].[md_OrderStatus] (
    [OrderStatusId] INT          IDENTITY (1, 1) NOT NULL,
    [Description]   VARCHAR (50) NULL,
    CONSTRAINT [PK_OrderStatusId] PRIMARY KEY CLUSTERED ([OrderStatusId] ASC)
);

