# Homestead Jewels E-Commerce Site

Welcome to the Homestead Jewels E-Commerce Site! This project is a web-based platform designed for a small homegrown jewelry brand, integrating the Stripe API for secure payment processing.

## Features

- Display of jewelry items with images, descriptions, and prices.
- Integration with Stripe API for secure payment processing.
- Responsive design for a seamless user experience on both desktop and mobile devices.

## Technologies Used

- Node.js
- Express.js
- Handlebars (hbs)
- Stripe API
- HTML
- CSS
- JavaScript

## Setup Instructions

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/homestead-jewels.git
    cd homestead-jewels
    ```

2. **Install dependencies:**

    Ensure you have Node.js installed, then run:

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add your Stripe API keys:

    ```env
    STRIPE_PUBLISHABLE_KEY=your_publishable_key
    STRIPE_SECRET_KEY=your_secret_key
    ```

4. **Run the application:**

    ```sh
    npm start
    ```

5. **Open your browser:**

    Navigate to `http://localhost:3000` to view the website.

## Contributing

We welcome contributions! If you have suggestions or improvements, please submit a pull request or open an issue.
