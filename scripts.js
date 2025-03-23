document.addEventListener("DOMContentLoaded", function () {
    const cartItemsList = document.getElementById("cartItems");
    const purchaseForm = document.getElementById("purchaseForm");

    function displayCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsList.innerHTML = ""; // Clear list

        if (cart.length === 0) {
            cartItemsList.innerHTML = "<li>Your cart is empty.</li>";
            return;
        }

        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - ${item.quantity} pcs - ₱${item.price * item.quantity}`;
            cartItemsList.appendChild(li);
        });
    }

    purchaseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const address = document.getElementById("address").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const paymentMethod = document.getElementById("paymentMethod").value;

        if (!fullName || !address || !contactNumber) {
            alert("Please fill in all required fields.");
            return;
        }

        alert(`🎉 Thank you, ${fullName}! Your order will be delivered to ${address} via ${paymentMethod}.`);
        localStorage.removeItem("cart"); // Clear the cart after order
        displayCart(); // Refresh cart display
        purchaseForm.reset(); // Reset form fields
    });

    displayCart();
});
