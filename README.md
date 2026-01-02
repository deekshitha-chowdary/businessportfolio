# Crothira Looms 🧶

A visually pleasing, light‑aesthetic online portfolio for **Crothira Looms** – a crochet business showcasing handmade products like keychains, flowers, and plushies. This website allows customers to browse collections, view details, and easily place orders via WhatsApp or pay via UPI.

![Crothira Looms Preview](https://via.placeholder.com/800x400?text=Crothira+Looms+Preview)

## ✨ Features

*   **Aesthetic Design**: Soft, cozy, and minimal UI using Cream, Blush Pink, and Lavender colors.
*   **Product Showcase**: Beautiful grid layout to display crochet items with "Custom" badges.
*   **Product Details**: High-quality image display with detailed descriptions, size, and material info.
*   **Easy Ordering**:
    *   **WhatsApp Integration**: "Order via WhatsApp" button pre-fills a message with the product name.
    *   **UPI QR Code**: "Pay with UPI" button opens a dynamic QR code for easy payments.
*   **Responsive**: Fully mobile-first design that looks great on all devices.
*   **Animations**: Smooth transitions and effects using Framer Motion.

## 🛠️ Tech Stack

*   **Frontend**: React.js, Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Backend**: Node.js, Express (Optional mock server included)
*   **Database**: Supabase (Client configured)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   Node.js installed (v16 or higher)
*   npm (Node Package Manager)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd crochet-portfolio
    ```

2.  **Install Frontend Dependencies**:
    ```bash
    npm install
    ```

3.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    The app should now be running at `http://localhost:5173`.

### Backend Setup (Optional)

The `server` folder contains a basic Express API.

1.  **Navigate to the server folder**:
    ```bash
    cd server
    ```

2.  **Install Backend Dependencies**:
    ```bash
    npm install
    ```

3.  **Start the Server**:
    ```bash
    npm start
    ```
    The server runs on `http://localhost:5000`.

## 📂 Project Structure

```
crochet-portfolio/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable components (Navbar, Footer, etc.)
│   ├── pages/           # Page components (Home, Shop, ProductDetail, etc.)
│   ├── lib/             # Supabase client configuration
│   ├── App.jsx          # Main application component & Routing
│   └── index.css        # Global styles & Tailwind directives
├── server/              # Express backend code
├── public/              # Public static files
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## 🎨 Customization

*   **Colors**: Edit `tailwind.config.js` to change the `cream`, `blush`, `sage`, etc. color palette.
*   **Content**: Update product data in `src/pages/Shop.jsx` and `src/pages/ProductDetail.jsx`.
*   **Images**: Add your product photos to `src/assets` and reference them in your components.
*   **UPI ID**: Update the UPI ID in `src/pages/ProductDetail.jsx` from `crothiralooms@upi` to your actual business UPI ID.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with 💖 for **Crothira Looms**.
