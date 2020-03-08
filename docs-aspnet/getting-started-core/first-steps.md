---
title: First Steps on VS for Windows
page_title: Getting Started on Visual Studio for Windows
description: "Create a sample project on Visual Studio for Windows with Progress Telerik UI for ASP.NET Core (aka MVC 6 or ASP.NET Core MVC)."
previous_url: /aspnetmvc-apps/mvc-6/getting-started, /mvc-6/getting-started, /getting-started/getting-started
slug: gettingstarted_aspnetmvc6_aspnetmvc
position: 1
permalink: /getting-started/first-steps
---

# First Steps on VS for Windows

<iframe width="700" height="400" src="https://www.youtube.com/embed/AIFNeWrZCdM?list=PLvmaC-XMqeBaHWzU1zyFgaNi2pcuix6Ps" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Welcome to the First Steps on Windows guide on getting started with Progress<sup>®</sup> Telerik<sup>®</sup> UI for ASP.NET Core with Visual Studio!

The guide creates a use-case scenario which demonstrates how to start working with the suite and implements the Kendo UI DatePicker for ASP.NET Core in your project by using the Telerik UI DatePicker HtmlHelper or TagHelper. For its purposes, the guide uses Visual Studio for Windows 2019.

To configure an ASP.NET Core web application to use UI for ASP.NET Core, you can use either of the following approaches:
* (Demonstrated in this guide) Create the application from scratch and manually add the necessary setup.
* [Use the Telerik UI for ASP.NET Core Visual Studio extensions]({% slug overview_visualstudio_aspnetcore %}) and create an application that has all necessary scripts, styles, and editor templates.

To get up and running with the project:

1. [Meet the requirements](#meeting-the-requirements)
1. [Create the ASP.NET Core application](#creating-the-application)
1. [Add the UI for ASP.NET Core NuGet package](#adding-the-nuget-package)
1. [Add reference to Kendo.Mvc.UI](#adding-reference-to-kendomvcui)
1. [Include the Telerik UI for ASP.NET Core client-side resources](#including-the-telerik-ui-for-aspnet-core-client-side-resources)

## Meeting the Requirements

Follow the instructions from the [official .NET Core documentation site](https://docs.microsoft.com/en-us/dotnet/core/windows-prerequisites).

## Creating the Application

1. Open Visual Studio for Windows 2019 and select **Create a New Project**.
1. Select **ASP.NET Core Web Application** and click **Next**.
1. Set a name and location for the project and click **Create**.
1. Select **Web Application (Model-View-Controller)** and click **Create**.

## Adding the NuGet Package

1. Open the NuGet Package Manager.

	![Locating and opening the NuGet package manager menu](../getting-started-core/images/manage-nuget.png)

1. Add a new [package source](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui#package-sources) to https://nuget.telerik.com/nuget.

	![Adding the new NuGet source dialog](../getting-started-core/images/add-nuget-source.png)

1. From the package source drop-down, select **Telerik Source** and add your credentials (telerik.com email and password) as prompted.

	![Adding the credentials and authenticating for NuGet](../getting-started-core/images/nuget-authenticate.png)

1. Click the **Browse** tab and search for `Telerik.UI.for.AspNet.Core` to install it. As a result, a line similar to `<PackageReference Include="Telerik.UI.for.AspNet.Core" Version="{{ site.mvcCoreVersion }}" />` is added to your `.csproj` file.

	![Selecting and installing the NuGet package](../getting-started-core/images/nuget-install.png)

## Adding reference to Kendo.Mvc.UI

1. Open the `Startup.cs` file and register the Kendo UI services in the `ConfigureServices` method.

		public void ConfigureServices(IServiceCollection services)
		{
			// Add the Kendo UI services to the services container.
			services.AddKendo();
		}

1. Import the `Kendo.Mvc.UI` namespace in `~/Views/_ViewImports.cshtml` through `@using Kendo.Mvc.UI`. If you intend to use the Telerik UI ASP.NET Core Tag Helpers, add them with `@addTagHelper *, Kendo.Mvc`.

        @using MyASPNETCoreProject
	    @using MyASPNETCoreProject.Models
        @addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
        @addTagHelper *, Kendo.Mvc
        @using Kendo.Mvc.UI

## Including the Telerik UI for ASP.NET Core client-side resources

1. Include the client-side resources.

	> * The CDN links and/or package versions have to point to the same UI for ASP.NET Core version which your project references.
	> * The Kendo UI scripts have to be placed after `jQuery`.

	7.1 Go to `~\Views\Shared\_Layout.cshtml` and add the theme of your choice to the `<head>` of the document. Since the Microsoft project uses Bootstrap, you can use the Kendo UI SASS Bootstrap v4 theme to match it.

	7.2 The Microsoft ASP.NET Core Web Application template comes with a jQuery script reference at the end of _Layout.cshtml file. Find it and remove it. The Kendo UI script files required by UI for ASP.NET Core must be loaded in the `<head>` tag after the `jQuery` script. 

	7.3 Copy and paste the scripts from the snippet bellow to the `<head>` tag in the _Layout. The content of the `<head>` tag with the theme file and the script files included should look as shown in the snippet below. `kendo.all.min.js` and `kendo.aspnetmvc.min.js` script files have to be loaded after the `jquery.min.js` script. `jQuery` should be loaded only once in the `<head>` tag. Make sure there are no duplicate references elsewhere in the _Layout. 

		<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>@ViewData["Title"] - TelerikAspNetCoreApp</title>

		<link href="https://kendo.cdn.telerik.com/{{ site.mvcCoreVersion }}/styles/kendo.bootstrap-v4.min.css" rel="stylesheet" type="text/css" />

		<script src="https://kendo.cdn.telerik.com/{{ site.mvcCoreVersion }}/js/jquery.min.js"></script>
		<script src="https://kendo.cdn.telerik.com/{{ site.mvcCoreVersion }}/js/kendo.all.min.js"></script>
		<script src="https://kendo.cdn.telerik.com/{{ site.mvcCoreVersion }}/js/kendo.aspnetmvc.min.js"></script>
		</head>   			

1. Use a Kendo UI widget by adding the snippet from the following example to `~/Views/Home/Index.cshtml`.

	```tab-HtmlHelper
		<div class="text-center">
    		<h2>Kendo UI DatePicker</h2>
    		@(Html.Kendo().DatePicker()
       			.Name("my-picker")
    		)
		</div>
	```
	```tab-TagHelper
		<div class="text-center">
    		<h2>Kendo UI DatePicker</h2>
			<kendo-datepicker name="my-picker"/>
		</div>
	```

	As a result, the following sample page is created.

    ![Sample page](../getting-started-core/images/sample-page.png)

## Next Steps

* [Use data-bound widgets]({% slug environmentsupport_core %}#json-serialization)
* [Ways to download and install UI for ASP.NET Core (overview)]({% slug downloadinstall_aspnetcore %})
* [Create your own custom bundles]({% slug custombundles_core %})
* [Explore the helper script dependencies]({% slug script_filesfor_barcodes_widgets %})

## See Also

* [Installing UI for ASP.NET Core with Bower]({% slug bowerpackage_core %})
* [Installing UI for ASP.NET Core by Using the CDN Services]({% slug cdnservices_core %})
* [Installing UI for ASP.NET Core with NPM]({% slug npmpackages_core %})
* [Installing UI for ASP.NET Core with NuGet]({% slug nuget_install_aspnetmvc6_aspnetmvc %})
