# Task 5

## Overview
Task 5 is a web application built using React, and Tailwind CSS. It fetches and displays a list of products from a fake store API, allowing users to add products to a cart and view or remove them.

## Features
- Display a list of products with images, titles, descriptions, and prices.
- Add products to a shopping cart.
- View and remove products from the cart.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for fetching data.

## Installation

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd task5
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Run Development Server**:
    ```sh
    npm run dev
    ```

 ```

## Components

**Navbar** : Displays the application title and cart icon with item count.
**ProductCard** : Fetches product data and renders `ProductList` and `CartList`.
**ProductList** : Displays individual product details and an "Add to Cart" button.
**CartList** : Shows items in the cart with a "Remove" button.

## API
The product data is fetched from [Fake Store API](https://fakestoreapi.com/products).
