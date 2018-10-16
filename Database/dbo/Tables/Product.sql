CREATE TABLE [dbo].[Product] (
    [ProductId]   INT             IDENTITY (1, 1) NOT NULL,
    [Price]       DECIMAL (10, 2) NOT NULL,
    [Description] VARCHAR (50)    NOT NULL,
    CONSTRAINT [PK_ProductId] PRIMARY KEY CLUSTERED ([ProductId] ASC)
);

