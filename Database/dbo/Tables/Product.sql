CREATE TABLE [dbo].[Product] (
    [ProductId]   INT             IDENTITY (1, 1) NOT NULL,
    [Price]       DECIMAL (10, 2) NOT NULL,
    [Description] VARCHAR (50)    NOT NULL,
	[AltDescription] VARCHAR (50)    NULL,
    [OnSale] BIT NOT NULL DEFAULT ('False'), 
    CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED ([ProductId] ASC)
);

