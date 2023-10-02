export const fetchProduct = async (shortURL) => {
    const response = await fetch(`/product/${shortURL}`);
    return await response.json();
  };
  
  export const createProduct = async (data) => {
    const response = await fetch('/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.text();
  };
  