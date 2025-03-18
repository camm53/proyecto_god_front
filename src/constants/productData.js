// Database of products
const products = [
    {
      "id": "1",
      "name": "Audífonos Pabloksy 7.1",
      "price": "9,000,000$",
      "description": "Descripción de audífonos de alta calidad con sonido 7.1.",
      "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwlLa2yHwfzwFKizJJgxqHyPvNiOb2LQe3CObmbN297C4hTUp9",
      "technicalDetails": {
        "connection": "Bluetooth",
        "sound": "Sonido envolvente 7.1",
        "battery": "Batería de larga duración"
      }
    },
    {
      "id": "2",
      "name": "Audífonos BossHugo 7.1",
      "price": "8,500,000$",
      "image": "https://via.placeholder.com/500",
      "description": "Audífonos de alta fidelidad con cancelación de ruido.",
      "technicalDetails": {
        "noiseCancellation": "Cancelación de ruido activa",
        "sound": "Sonido 7.1",
        "connection": "Conexión USB-C"
      }
    },
    {
      "id": "3",
      "name": "Mouse Gaming Pro",
      "price": "4,500,000$",
      "image": "https://via.placeholder.com/500",
      "description": "Mouse ergonómico para gaming profesional con alta precisión.",
      "technicalDetails": {
        "dpi": "16,000 DPI",
        "rgb": "RGB personalizable",
        "buttons": "8 botones programables"
      }
    }
];
  
  // Related products mapping
  const relatedProductsMap = {
    "1": ["2", "3"],
    "2": ["1", "3"],
    "3": ["1", "2"]
  };
  
  /**
   * Fetch a product by its ID
   * @param {string} id - Product ID to fetch
   * @returns {Object} - The found product or null
   */
  export const fetchProductById = (id) => {
    return products.find(product => product.id === id) || products[0]; // Fallback to first product for demo
  };
  
  /**
   * Get related products for a given product ID
   * @param {string} productId - The ID of the product to find relations for
   * @returns {Array} - An array of related product objects
   */
  export const getRelatedProducts = (productId) => {
    const relatedIds = relatedProductsMap[productId] || [];
    return products.filter(product => relatedIds.includes(product.id));
  };
  
  // Export the entire products array if needed elsewhere
  export const getAllProducts = () => products;