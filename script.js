function orderNow(productName){
  // Change phone number to your WhatsApp number (Sri Lanka: 94xxxxxxxxx)
  const phone = "94771234567";
  const msg = `Hello SPICEORA! I want to order: ${productName}. Please send price & delivery details.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
