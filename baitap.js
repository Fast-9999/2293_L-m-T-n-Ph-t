// ==========================================
// CÂU 1: Khai báo constructor function Product
// ==========================================
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// ==========================================
// CÂU 2: Khởi tạo mảng products (5 sản phẩm, 2 danh mục)
// ==========================================
// Mình tạo dữ liệu mẫu có cả hàng đắt/rẻ, còn hàng/hết hàng để test các câu dưới
const products = [
    new Product(1, "Chuột Gaming Logitech", 45, 10, "Accessories", true),
    new Product(2, "Bàn phím cơ", 80, 5, "Accessories", true),
    new Product(3, "Màn hình Dell", 150, 0, "Electronics", false), // Hết hàng
    new Product(4, "Lót chuột", 5, 20, "Accessories", true),
    new Product(5, "Tai nghe Bluetooth", 25, 0, "Electronics", true) // Còn bán nhưng kho = 0
];

console.log("--- Danh sách sản phẩm ban đầu ---");
console.log(products);

// ==========================================
// CÂU 3: Tạo mảng mới chỉ chứa name, price (Dùng .map)
// ==========================================
// .map giúp biến đổi mảng này thành mảng khác
const productBasicInfo = products.map(product => {
    return { name: product.name, price: product.price };
});

console.log("\n--- Câu 3: Mảng chỉ có tên và giá ---");
console.log(productBasicInfo);

// ==========================================
// CÂU 4: Lọc sản phẩm còn hàng trong kho (quantity > 0) (Dùng .filter)
// ==========================================
const inStockProducts = products.filter(product => product.quantity > 0);

console.log("\n--- Câu 4: Sản phẩm còn tồn kho (>0) ---");
console.log(inStockProducts);

// ==========================================
// CÂU 5: Kiểm tra có ít nhất 1 SP giá trên 30? (Dùng .some)
// ==========================================
// .some trả về true nếu có ÍT NHẤT 1 phần tử thỏa mãn
const hasExpensiveProduct = products.some(product => product.price > 30);

console.log("\n--- Câu 5: Có sản phẩm giá > 30 không? ---");
console.log(hasExpensiveProduct); // Kết quả: true

// ==========================================
// CÂU 6: Kiểm tra TẤT CẢ sản phẩm "Accessories" có đang bán không? (Dùng .every)
// ==========================================
// Bước 1: Lọc ra nhóm Accessories trước
const accessories = products.filter(p => p.category === "Accessories");
// Bước 2: Kiểm tra tất cả nhóm đó (every trả về true nếu TẤT CẢ đều thỏa mãn)
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);

console.log("\n--- Câu 6: Tất cả đồ phụ kiện đều đang bán? ---");
console.log(allAccessoriesAvailable); 

// ==========================================
// CÂU 7: Tính tổng giá trị kho hàng (price * quantity) (Dùng .reduce)
// ==========================================
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0); // 0 là giá trị khởi tạo ban đầu của total

console.log("\n--- Câu 7: Tổng giá trị kho hàng ---");
console.log(totalInventoryValue);

// ==========================================
// CÂU 8: Dùng for...of in Tên - Danh mục - Trạng thái
// ==========================================
console.log("\n--- Câu 8: Duyệt mảng bằng for...of ---");
for (const product of products) {
    console.log(`Tên: ${product.name} | Danh mục: ${product.category} | Đang bán: ${product.isAvailable}`);
}

// ==========================================
// CÂU 9: Dùng for...in in tên thuộc tính và giá trị
// ==========================================
// for...in dùng để duyệt các KEY (thuộc tính) của 1 đối tượng
console.log("\n--- Câu 9: Duyệt thuộc tính của sản phẩm đầu tiên ---");
const firstProduct = products[0]; // Lấy ví dụ sản phẩm đầu tiên

for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// ==========================================
// CÂU 10: Lấy danh sách tên SP đang bán (isAvailable) VÀ còn hàng (quantity > 0)
// ==========================================
// Kết hợp filter (lọc) và map (lấy tên)
const activeProductNames = products
    .filter(p => p.isAvailable === true && p.quantity > 0) // Lọc trước
    .map(p => p.name); // Chỉ lấy tên sau

console.log("\n--- Câu 10: Tên các SP đang bán và còn hàng ---");
console.log(activeProductNames);