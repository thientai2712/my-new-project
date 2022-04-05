//Khởi tạo hàm product nhận giá trị
function product(id, productName, photo, price, quanlity, size) {
    this.id = id;
    this.productName = productName;
    this.photo = photo;
    this.price = price;
    this.quanlity = quanlity;
    this.size = size;
}
//Khởi tạo hàm Cart nhận giá trị
function Cart(id, productName, photo, price, count, size) {
    this.id = id,
        this.productName = productName;
    this.photo = photo;
    this.price = price;
    this.count = count;
    this.amount = this.price * this.count;
    this.size = size;
}
//Đưa giá trị vào products
let products = [
    new product(1, "NMD_R1 ", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d44fa06fc83f4644b7e8acbc01160e1b_9366/Giay_NMD_R1_Primeblue_DJen_GZ9258_01_standard.jpg", 1500000, 1, 40),
    new product(2, "SUPERSTAR", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg", 1750000, 1, 41),
    new product(3, "RETROPY E5", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b6d962830baf42139221ad4e014f032e_9366/Giay_Retropy_E5_Mau_xanh_da_troi_GW6059_01_standard.jpg", 1250000, 1, 44),
    new product(4, "ULTRABOOST 21", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f14062ee23c411eba1bad5c0080abbb_9366/Giay_UltraBoost_21_COLD.RDY_DJen_FZ2558_01_standard.jpg", 1650000, 1, 43),
    new product(5, "ZX 2K BOOST 2.0", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d79107c8dcb34f49937aad5c00811ee1_9366/Giay_ZX_2K_Boost_2.0_Xam_GZ7745_01_standard.jpg", 2590000, 1, 40)
]
//Renderproduct----------
function renderProduct() {
    let htmls = products.map(function (product) {
        return `
        <div class="product">
            <h3 class="heading" id="brand">${product.productName}</h3>
            <img src="${product.photo}" alt="">
            <p id="priceId">${formatCurrency(product.price)}</p>
            <select id="sizeId" name="size" class="addToo" onclick="">
                        <option value="size" disabled selected>Size</option>
                        <option >${product.size}</option>
            </select>
            <button class="addTo" onclick="addToCart(${product.id})">Add to cart</button>   
        </div>
        `
    })
    document.querySelector("#show-product").innerHTML = htmls.join("")
}
function formatCurrency(number) {
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
//ADDtoCart-------
let cart = [];
function addToCart(productId) {
    let cartInfo = document.querySelector("#cart-area>a");
    let product = products.find(function (pdt) {
        return pdt.id == productId;
    })
    let foundProduct = cart.find(function (cartItem) {
        return cartItem.id == productId;
    })
    if (foundProduct === undefined) {
        let cartItem = new Cart(product.id, product.productName, product.photo, product.price, 1, product.size)
        cart.push(cartItem);
    } else {
        foundProduct.count++;
        foundProduct.amount = foundProduct.count * foundProduct.price;
    }
    cartInfo.innerHTML = `<i class="fas fa-shopping-cart"></i>(${cart.length})`;
    document.getElementById("total-Cart").innerHTML = (" Tổng tiền: " + totalCartItem(total) + " đ ");
}
// showCartItem-------
function showCartDetail() {
    let htmls = cart.map(function (item, index) {
        return `
        <tr class = "tr_${cart.id}">
                    <td>${item.productName}</td>
                    <td>
                        <img class='photo' src="${item.photo}">
                    </td>
                    <td>${item.size}</td>
                    <td>
                        ${item.count}
                    </td>
                    <td>${formatCurrency(item.price)}</td>
                    <td td_${cart.id}>${formatCurrency(item.amount)}</td>
                    <td>
                        <button onclick="removeCartItem(${index})">Remove</button>
                    </td>
        </tr>
        `
        /* <tr>
        <th><p style="font-weight: bold;">Tổng tiền:${totalCartItem(total)}</p></th>
        </tr> */
    })
    document.querySelector("#cart-detail>tbody").innerHTML = htmls.join("");

}
//remove cartItem
function removeCartItem(index){
    if (confirm("Are you sure to remove?")){
        cart.splice(index, 1);
        showCartDetail();
        document.querySelector("#cart-area>a").innerHTML = `<i class="fas fa-shopping-cart"></i>(${cart.length})`;
        document.getElementById("total-Cart").innerHTML = (" Tổng tiền: " + totalCartItem(total) + " đ ");
}
} 
//total cartItem
let total = 0;
function totalCartItem(total){
    for (i=0;i<cart.length;i++){
        total += cart[i].amount;
    }
    return total;
}
renderProduct()