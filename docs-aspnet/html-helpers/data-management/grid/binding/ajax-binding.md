---
title: Ajax Binding
page_title: Ajax Binding
description: "Learn how to implement Ajax binding with the Telerik UI Grid HtmlHelper for {{ site.framework }}."
previous_url: /helpers/html-helpers/grid/ajax-binding, /helpers/data-management/grid/binding/ajax-binding
slug: htmlhelpers_grid_aspnetcore_ajaxbinding
position: 2
---

# Ajax Binding

You can configure the Grid HtmlHelper extension for Ajax binding.

When configured for Ajax binding, the Grid for {{ site.framework }} makes Ajax requests when doing paging, sorting, filtering, grouping, or when saving data. For a runnable example, refer to the [demo on Ajax binding of the Grid](https://demos.telerik.com/{{ site.platform }}/grid/customajaxbinding).  

The Ajax-bound mode has the following features:
- The Grid retrieves only the data (in JSON format) representing the current page. As a result, only the Grid is updated.
- All Grid templates (column, detail) are executed client-side. They follow the [Kendo UI for jQuery template](https://docs.telerik.com/kendo-ui/framework/templates/overview) definition rules and may contain embedded JavaScript code.

To configure the Grid for {{ site.framework }} to do Ajax binding to the **Products** table of the Northwind database:

1. Create a new {{ site.framework }} web application. Follow the steps from the [introductory article]({% if site.core %}{% slug gettingstarted_aspnetmvc6_aspnetmvc %}{% else %}{% slug gettingstarted_aspnetmvc %}{% endif %}) to add {{ site.product }} to the application.
1. Install the EntityFrameworkCore NuGet package.
1. Install Microsoft.EntityFrameworkCore.SqlServer package.
1. Run the following command in the Package Management Console. It will generate models from the tables in a database called 'Sample'. For more information on scaffolding a model from an existing database refer to [this Microsoft article](https://docs.microsoft.com/en-us/ef/core/get-started/aspnetcore/existing-db#reverse-engineer-your-model).

    Scaffold-DbContext "Server=.\SQLSERVER;Database=Sample;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models

1. Open the `HomeController.cs` and add a new action method which will return the Products as JSON. The Grid makes Ajax requests to this action.

        public IActionResult Customers_Read()
        {
        }

1. Add a new parameter of type `Kendo.Mvc.UI.DataSourceRequest` to the action. It will contain the current Grid request information&mdash;page, sort, group, and filter. Decorate that parameter with the `Kendo.Mvc.UI.DataSourceRequestAttribute`. This attribute will populate the `DataSourceRequest` object from the posted data. Now import the `Kendo.Mvc.UI` namespace.

        public IActionResult Customers_Read([DataSourceRequest]DataSourceRequest request)
        {
        }

1. Use the `ToDataSourceResult` extension method to convert the Products to a `Kendo.Mvc.UI.DataSourceResult` object. This extension method will page, filter, sort, or group your data using the information provided by the `DataSourceRequest` object. To use the `ToDataSourceResult` extension method, import the `Kendo.Mvc.Extensions` namespace.

        public ActionResult Customers_Read([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new SampleContext())
            {
                IEnumerable<Customers> customers = northwind.Customers;
                DataSourceResult result = customers.ToDataSourceResult(request);
            }
        }

1. Return the `DataSourceResult` as JSON. Configure the Kendo UI Grid for Ajax binding.

        public ActionResult Customers_Read([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new SampleContext())
            {
                IEnumerable<Customers> customers = northwind.Customers;
                DataSourceResult result = customers.ToDataSourceResult(request);
                return Json(result);
            }
        }

1. In the view, configure the Grid to use the action method created in the previous steps.

        @(Html.Kendo().Grid<KendoGridAjaxBinding.Models.Customers>()
              .Name("grid")
              .DataSource(dataSource => dataSource //Configure the Grid data source.
                  .Ajax() //Specify that Ajax binding is used.
                  .Read(read => read.Action("Customers_Read", "Home")) // Set the action method which will return the data in JSON format.
               )
              .Columns(columns =>
              {
                  //Create a column bound to the ProductID property.
                  columns.Bound(product => product.ProductID);
                  //Create a column bound to the ProductName property.
                  columns.Bound(product => product.ProductName);
                  //Create a column bound to the UnitsInStock property.
                  columns.Bound(product => product.UnitsInStock);
              })
              .Pageable() // Enable paging
              .Sortable() // Enable sorting
        )

1. Build and run the application.

## See Also

* [Custom Ajax Binding by the Grid HtmlHelper for {{ site.framework }} (Demo)](https://demos.telerik.com/{{ site.platform }}/grid/customajaxbinding)
* [Knowledge Base Section](/knowledge-base)
* [Server-Side API](/api/grid)
