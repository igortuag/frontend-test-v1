# Frontend skill test - V1 - Igor Tuag

![prototype](https://i.ibb.co/P6zmF1S/Screen-Shot-2020-10-19-at-19-50-28.png)

A frontend test to test dev skills.
The candidate must produce a **catalog page** from the figma (ignore the other pages): https://www.figma.com/file/uTmmvoFOeq3Gfe96Aa77f7/Front-end-Test?node-id=1%3A871

Images can be extracted from the figma and used statically in the project. 

Requirements for the test are the use of scss, react, redux (you can use redux toolkit), the techniques used in the project will be evaluated. 

It is allowed to research on web and to use any frameworks. 

The endpoint to get the product list is available here: https://5f8df37c4c15c40016a1e46d.mockapi.io/api/v1/products

The candidate should fork this repo and use the git to delivery his work.

## Details about the test/prototype

Full resource: https://www.figma.com/file/uTmmvoFOeq3Gfe96Aa77f7/Front-end-Test?node-id=1%3A871 

### Header/Top 

It must contain false links that do not lead anywhere and do not close or change the home page.

Logo it must be a static image exported from figma.

The cart contains a counter indicating the products that have been harmed from the add to cart button on the product card.

### Banner 

It must be extracted from the figma. 

### Filters 

The filters are at the candidate's discretion, being able to choose which filters and which attributes to filter regardless of what is presented in the layout, only the visual identity of figma must be followed and is a requirement. 

When selecting filters, the product list must be changed and only the products according to the filter must be applied. 

It is not necessary to use api methods to filter products, just do not display products that do not match the selected filter. 

### Products 

They must be loaded from a mocked api or the api referenced 

When clicking on the add to cart button the product must be added to the cart virtually, in the header the product counter must be incremented 

### Newsletter

The endpoint to send the POST with the email is: https://5f8df37c4c15c40016a1e46d.mockapi.io/api/v1/subscription

### Optional (plus)

* Pagination

* The mobile version 
