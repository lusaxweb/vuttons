---
sidebar: auto
pageClass: docsx
docs: true
---

# Documentation

<card>

  ## Colors

  By default Vuttons has the colors (**primary**, **success**, **danger**, **warning**, **dark**) and can be used in any button in the color property, you can also put a custom color as value for example `#f0f` o `rgb(200,200,100)`

:::warning
  The colors allowed as a value are **RGB** y **HEX**
:::

<div slot="example">

  <docs-colors />

</div>

<div slot="code">

  ```html
  <template>
    <div class="demo">
      <Vutton>
        Default
      </Vutton>
      <Vutton color="success" >
        Success
      </Vutton>
      <Vutton color="danger" >
        Danger
      </Vutton>
      <Vutton color="warning">
        Warning
      </Vutton>
      <Vutton color="dark" >
        Dark
      </Vutton>
      <Vutton color="#623aeb" >
        HEX
      </Vutton>
      <Vutton color="rgb(245, 128, 81)" >
        RGB
      </Vutton>
    </div>
  </template>
  ```

</div>

</card>

<card>

  ## Active

  All the buttons can be in the active state, almost all the buttons have a different active style

<div slot="example">

  <docs-active />

</div>

<div slot="code">

  ```html
  <template>
    <div class="demo">
      <Vutton active>
        Active
      </Vutton>
      <Vutton active type="3">
        Active
      </Vutton>
      <Vutton active type="5">
        Active
      </Vutton>
      <Vutton active type="6">
        Active
      </Vutton>
      <Vutton active type="7">
        Active
      </Vutton>
    </div>
  </template>
  ```

</div>

</card>

<card>

  ## Disabled

  All buttons can be in the disabled state and with a low opacity style to inform the user

<div slot="example">

  <docs-disabled />

</div>

<div slot="code">

  ```html
  <template>
    <div class="demo">
      <Vutton disabled type="2">
        Default
      </Vutton>
      <Vutton disabled type="2" color="success" >
        Success
      </Vutton>
      <Vutton disabled type="2" color="danger" >
        Danger
      </Vutton>
      <Vutton disabled type="2" color="warning">
        Warning
      </Vutton>
      <Vutton disabled type="2" color="dark" >
        Dark
      </Vutton>
      <Vutton disabled type="2" color="#623aeb" >
        HEX
      </Vutton>
      <Vutton disabled type="2" color="rgb(245, 128, 81)" >
        RGB
      </Vutton>
    </div>
  </template>
  ```

</div>

</card>

<card>

  ## Loading

  The buttons can be in a loading state adding the property, almost all the buttons have a different load.

<div slot="example">

  <docs-loading />

</div>

<div slot="code">

  ```html
  <template>
    <div class="demo">
      <Vutton loading>
        Default
      </Vutton>
      <Vutton loading type="2" color="success" >
        Success
      </Vutton>
      <Vutton loading type="3" color="danger" >
        Danger
      </Vutton>
      <Vutton loading type="4" color="warning">
        Warning
      </Vutton>
      <Vutton loading type="5" color="dark" >
        Dark
      </Vutton>
      <Vutton loading type="6" color="#623aeb" >
        HEX
      </Vutton>
      <Vutton loading type="7" color="rgb(245, 128, 81)" >
        RGB
      </Vutton>
    </div>
  </template>
  ```

</div>

</card>

<card>

  ## Submit

  You can have a submit status on the buttons with the `submit` property, almost all the buttons have a different submit.

<div slot="example">

  <docs-submit />

</div>

<div slot="code">

  ```html
  <template>
    <div class="demo">
      <Vutton loading>
        Default
      </Vutton>
      <Vutton loading type="2" color="success" >
        Success
      </Vutton>
      <Vutton loading type="3" color="danger" >
        Danger
      </Vutton>
      <Vutton loading type="4" color="warning">
        Warning
      </Vutton>
      <Vutton loading type="5" color="dark" >
        Dark
      </Vutton>
      <Vutton loading type="6" color="#623aeb" >
        HEX
      </Vutton>
      <Vutton loading type="7" color="rgb(245, 128, 81)" >
        RGB
      </Vutton>
    </div>
  </template>
  ```

</div>

</card>

<card>

  ## Href

  If you need the button to be like a link you can do it with the `href` property and its value is a url as you would with an element `<a href="..."></a>` of **html**

:::tip
  By default it does not open a new weft, if you need that functionality for it we have the property `blank` that simulates the tag **html** `target="_blank"`
:::

<div slot="example">

  <docs-href />

</div>

<div slot="code">

  ```html
  <template>
    <div class="demo">
      <Vutton href="https://github.com/lusaxweb/vuttons">
        Default
      </Vutton>
      <Vutton blank href="https://github.com/lusaxweb/vuttons" >
        link new tab
      </Vutton>
    </div>
  </template>
  ```

</div>

</card>

<card>

  ## To

  You have the possibility to use [vue-router](https://router.vuejs.org/) with vuttons by adding the `to` property and as a value the route as if it were a `this.$router.push(...)`

<div slot="example">

  <docs-to />

</div>

<div slot="code">

  ```html
  <template>
    <div class="demo">
      <Vutton to="/">
        Buttons
      </Vutton>
      <Vutton to="/docs" >
        Docs
      </Vutton>
    </div>
  </template>
  ```

</div>

</card>

<card>

  ## Size

  You can change the size of the button with the `size` property, the allowed values ​​are:

  - extraLarge
  - large
  - default
  - small
  - mini

  :::tip
  the buttons are aligned so they are all of the same height and so do not break the design line, if you want to change a button to a specific size you can do it using css with the class `.vut`
  :::

<div slot="example">

  <docs-size />

</div>

<div slot="code">

  ```html
  <template>
    <div class="demo">
      <Vutton size="extraLarge">
        ExtraLarge
      </Vutton>
      <Vutton size="large">
        Large
      </Vutton>
      <Vutton>
        Default
      </Vutton>
      <Vutton size="small">
        Small
      </Vutton>
      <Vutton size="mini">
        mini
      </Vutton>
    </div>
  </template>
  ```

</div>

</card>

