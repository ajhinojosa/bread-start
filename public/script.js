// Simple order handling
function handleOrder() {
    const quantity = document.querySelector('input[name="quantity"]:checked');
    const delivery = document.querySelector('input[name="delivery"]:checked');
    
    if (!quantity || !delivery) {
        alert('Please select a quantity and delivery method');
        return;
    }
    
    const quantityText = quantity.closest('.quantity-card').querySelector('h4').textContent;
    const deliveryText = delivery.nextElementSibling.textContent;
    
    // In a real implementation, this would submit to a form or payment processor
    alert(`Order Summary:\n\n${quantityText}\n${deliveryText}\n\nThank you! We'll contact you shortly to confirm your order and arrange delivery/pickup.`);
}

// Mobile menu toggle (for future enhancement)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Bread Start website loaded!');
});
