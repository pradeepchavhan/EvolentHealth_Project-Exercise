USE [master]
GO
/****** Object:  Database [ContactManagement]    Script Date: 04/09/2018 13:38:21 ******/
CREATE DATABASE [ContactManagement] ON  PRIMARY 
( NAME = N'ContactManagement', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\ContactManagement.mdf' , SIZE = 2048KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ContactManagement_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\ContactManagement_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ContactManagement] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ContactManagement].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ContactManagement] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [ContactManagement] SET ANSI_NULLS OFF
GO
ALTER DATABASE [ContactManagement] SET ANSI_PADDING OFF
GO
ALTER DATABASE [ContactManagement] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [ContactManagement] SET ARITHABORT OFF
GO
ALTER DATABASE [ContactManagement] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [ContactManagement] SET AUTO_CREATE_STATISTICS ON
GO
ALTER DATABASE [ContactManagement] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [ContactManagement] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [ContactManagement] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [ContactManagement] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [ContactManagement] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [ContactManagement] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [ContactManagement] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [ContactManagement] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [ContactManagement] SET  DISABLE_BROKER
GO
ALTER DATABASE [ContactManagement] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [ContactManagement] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [ContactManagement] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [ContactManagement] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [ContactManagement] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [ContactManagement] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [ContactManagement] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [ContactManagement] SET  READ_WRITE
GO
ALTER DATABASE [ContactManagement] SET RECOVERY SIMPLE
GO
ALTER DATABASE [ContactManagement] SET  MULTI_USER
GO
ALTER DATABASE [ContactManagement] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [ContactManagement] SET DB_CHAINING OFF
GO
USE [ContactManagement]
GO
/****** Object:  Table [dbo].[ContactInfo]    Script Date: 04/09/2018 13:38:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ContactInfo](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NOT NULL,
	[PhoneNumber] [varchar](12) NOT NULL,
	[EmailAddress] [varchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[RegisterTimestamp] [datetime] NULL,
 CONSTRAINT [PK_ContactInfo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[ContactInfo] ON
INSERT [dbo].[ContactInfo] ([Id], [FirstName], [LastName], [PhoneNumber], [EmailAddress], [IsActive], [RegisterTimestamp]) VALUES (1, N'Pradip', N'chavhan', N'98855535356', N'pradip.chavhan@spluspl.com', 1, CAST(0x0000A8BD0099D195 AS DateTime))
SET IDENTITY_INSERT [dbo].[ContactInfo] OFF
/****** Object:  Default [DF_ContactInfo_RegisterTimestamp]    Script Date: 04/09/2018 13:38:24 ******/
ALTER TABLE [dbo].[ContactInfo] ADD  CONSTRAINT [DF_ContactInfo_RegisterTimestamp]  DEFAULT (getdate()) FOR [RegisterTimestamp]
GO
