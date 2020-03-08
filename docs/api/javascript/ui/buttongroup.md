---
title: ButtonGroup
page_title: Configuration, methods and events of Kendo UI ButtonGroup
description: Learn how to define the initially selected button, select a button and get the currently selected button.
res_type: api
---

# kendo.ui.ButtonGroup

## Configuration

### enable `Boolean` *(default: true)*

Defines if the widget is initially enabled or disabled. By default, it is enabled.

#### Example

      <ul id="buttongroup">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>

    <script>
		$("#buttongroup").kendoButtonGroup({
			enable: false
		});
    </script>

### index `Number`

Defines the initially selected Button (zero based index).

#### Example

      <ul id="buttongroup">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>

    <script>
		$("#buttongroup").kendoButtonGroup({
			index: 1
		});
    </script>

### selection `String` *(default "single")*

Defines the selection type.

#### Example

      <ul id="buttongroup">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>

    <script>
		$("#buttongroup").kendoButtonGroup({
			selection: "multiple"
		});
    </script>

### items `Array`

A JavaScript array that contains the ButtonGroup's items configuration.

#### Example - initialize ButtonGroup with items

    <div id="buttonGroup"></div>
    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "Align Left", icon: "align-left", selected: true},
                { text: "Align Center", icon: "align-center"},
                { text: "Align Right", icon: "align-right"},
            ]
        });
    </script>

### items.attributes `Object`

Specifies the HTML attributes of a ButtonGroup item.

> HTML attributes which are JavaScript keywords (e.g. class) must be quoted.

#### Example - adding custom class to a button

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "Align Left", icon: "align-left"},
                { text: "Align Center", icon: "align-center", attributes: {class: "red"}},
                { text: "Align Right", icon: "align-right"},
            ]
        });
    </script>

    <style>
        .red { background-color: red; }
    </style>

### items.badge `Boolean|String|Object`

If set to true a default overlay badge will be displayed. If set to a string, an ovelay with content set to the specified string will be displayed. Can be set to a JavaScript object which represents the configuration of the [`Badge widget`](/api/javascript/ui/badge).

#### Example - boolean badge

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  badge: true },
                { text: "bar" }
            ]
        });
    </script>

#### Example - string badge

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  badge: "99+" },
                { text: "bar" }
            ]
        });
    </script>

### items.badge.appearance  `String` *(default: pill)*

Specifies the shape of the badge - `rectangle` or `pill`.

#### Example

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  badge: {
                    appearance: 'rectangle'
                    }
                },
                { text: "bar" }
            ]
        });
    </script>

### items.badge.look `String` *(default: flat)*

Specifies the look of the badge - `flat` or `outline`.

#### Example

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  badge: {
                    look: 'outline'
                    }
                },
                { text: "bar" }
            ]
        });
    </script>

### items.badge.template `String|Function`

The template which renders the content of the badge

#### Example - string template

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  badge: {
                        value: 1234,
				        template: '#=value > 99? "99+" : value#'
                    }
                },
                { text: "bar" }
            ]
        });
    </script>

#### Example - function template

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  badge: {
                        value: 1234,
                        template: function (value){
                            return value > 99 ? '99+' : value;
                        }
                    }
                },
                { text: "bar" }
            ]
        });
    </script>


### items.badge.type `String`

Specifies the type of the badge - `primary`, `secondary`, `info`, `success`, `warning` and `error`.

#### Example - string template

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  badge: {
                        type: 'warning'
                    }
                },
                { text: "bar" }
            ]
        });
    </script>

### items.badge.value `String|Number`

The value of the badge

#### Example - string template

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  badge: {
                        value: 'warning'
                    }
                },
                { text: "bar" }
            ]
        });
    </script>

### items.badge.visible `Boolean`

If set to false the badge will not be displayed.

#### Example - string template

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  badge: {
                        visible: false
                    }
                },
                { text: "bar" }
            ]
        });
    </script>

### items.enabled `Boolean` *(default: true)*

Specifies if a button is enabled.

#### Example

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  enabled: false },
                { text: "bar" }
            ]
        });
    </script>

### items.icon `String`

Defines the name of an existing icon in a Kendo theme.

#### Example

    <div id="buttonGroup"></div>

    <script>
    $("#buttonGroup").kendoButtonGroup({
      items: [
        { icon: "align-left" },
        { icon: "align-center" },
        { icon: "align-right" }
      ]
    });
    </script>

### items.iconClass `String`

Allows the usage of custom icons. Defines CSS classes which are to be applied to a span element inside the ButtonGroup item.

#### Example
    <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
    <div id="buttonGroup"></div>

    <script>
    $("#buttonGroup").kendoButtonGroup({
      items: [
        { iconClass: "fa fa-male" },
        { icon: "align-center" },
        { icon: "align-right" }
      ]
    });
    </script>

### items.imageUrl `String`

If set, the ButtonGroup will render an image with the specified URL in the button.

#### Example

    <div id="buttonGroup"></div>

    <script>
    var baseUrl = "https://demos.telerik.com/kendo-ui/content/shared/icons";
    $("#buttonGroup").kendoButtonGroup({
      items: [
					{ text: "foo", imageUrl: baseUrl + "/sports/snowboarding.png" },
					{ text: "bar", imageUrl: baseUrl + "/sports/snowboarding.png" }
      ]
    });
    </script>

### items.selected `Boolean` *(default: false)*

Specifies if a button is initially selected.

#### Example

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo",  selected: true },
                { text: "bar" }
            ]
        });
    </script>

### items.text `String`

Specifies the text of the ButtonGroup item.

#### Example

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "foo" },
                { text: "bar" }
            ]
        });
    </script>

### items.encoded `Boolean` *(default: true)*

Specifies if text field of the ButtonGroup item should be encoded.

#### Example

    <div id="buttonGroup"></div>

    <script>
        $("#buttonGroup").kendoButtonGroup({
            items: [
                { text: "<b>foo</b>", encoded: false },
                { text: "<b>bar</b>", encoded: true }
            ]
        });
    </script>

## Methods

### badge

#### Parameters

##### button `Selector|Number`

The target button specified either as a jQuery selector/object or as an button index.

##### value `String|Boolean`

The target value to be set or false to be removed.

#### Returns

`String|kendo.ui.Button` the badge value if invoked without parameters, otherwise the ButtonGroup object.

#### Example

	<ul id="buttongroup">
		<li>Option 1</li>
		<li>Option 2</li>
		<li>Option 3</li>
	</ul>

    <script>
		var buttonGroup = $("#buttongroup").kendoButtonGroup({
			select: function(e) {
				console.log("selected index:" + e.indices);
			},
			index: 0
		}).data("kendoButtonGroup");

		buttonGroup.badge(0,5);
    </script>

### current

Get the currently selected Button.

#### Returns

`jQuery` the jQuery object representing the currently selected button.

#### Example - get the index of the currently selected Button

	<ul id="buttongroup">
		<li>Option 1</li>
		<li>Option 2</li>
		<li>Option 3</li>
	</ul>

    <script>
		$("#buttongroup").kendoButtonGroup({
			select: function(e) {
				var index = this.current().index();
				console.log(index);
			}
		});
    </script>

### destroy

Prepares the **ButtonGroup** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.

> **Important:** This method does not remove the ButtonGroup element from DOM.

#### Example

      <ul id="buttongroup">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>

      <a onclick="destroy">Destroy the ButtonGroup</a>

    <script>
		$("#buttongroup").kendoButtonGroup();

		function destroy() {
			$("#buttongroup").data("kendoButtonGroup").destroy(); //detach events
			$("#buttongroup").remove(); //remove the button group from the DOM
		}
    </script>

### enable

Enables or disables the widget.

#### Parameters

##### enable `Boolean`

A boolean flag that indicates whether the widget should be enabled or disabled.

#### Example

	<a onclick="enable">Enable</a>
	<ul id="buttongroup">
		<li>Option 1</li>
		<li>Option 2</li>
		<li>Option 3</li>
	</ul>

    <script>
	$("#buttongroup").kendoButtonGroup({
		enable: false
	});
    function enable() {
        $("#btnGroup").data("kendoButtonGroup").enable(true);
    }
    </script>

### select

Select a Button.

#### Parameters

##### li `jQuery | Number`

LI element or index of the Button.

#### Example

	<ul id="buttongroup">
		<li>Option 1</li>
		<li>Option 2</li>
		<li>Option 3</li>
	</ul>


    <script>
      var buttongroup = $("#buttongroup").kendoButtonGroup().data("kendoButtonGroup");

      // selects by jQuery object
      buttongroup.select(buttongroup.element.children().eq(0));
      // selects by index
      buttongroup.select(1);
    </script>

## Events

### select

Fires when a Button is selected.

#### Example - get the index of the currently selected Button

	<ul id="buttongroup">
		<li>Option 1</li>
		<li>Option 2</li>
		<li>Option 3</li>
	</ul>

    <script>
		$("#buttongroup").kendoButtonGroup({
			select: function(e) {
				var index = this.current().index();
				console.log(index);
			}
		});
    </script>

#### Event Data

##### e.indices `Array`

The indices of the selected buttons
