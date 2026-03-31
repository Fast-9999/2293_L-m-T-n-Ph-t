// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm.
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 5 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau.
const products = [
    new Product(1, "Laptop MSI", 1200, 5, "Electronics", true),
    new Product(2, "Chuột Logitech", 25, 50, "Accessories", true),
    new Product(3, "Bàn phím cơ", 45, 0, "Accessories", false),
    new Product(4, "Màn hình Dell", 300, 10, "Electronics", true),
    new Product(5, "Lót chuột", 10, 100, "Accessories", true)
];

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm. (Dùng map)
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3:", nameAndPrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0). (Dùng filter)
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30 hay không. (Dùng some)
const hasExpensiveProduct = products.some(p => p.price > 30);
console.log("Câu 5:", hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán hay không.
// Lọc danh mục trước, sau đó dùng every để kiểm tra.
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
console.log("Câu 6:", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price * quantity. (Dùng reduce)
const totalInventoryValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
console.log("Câu 7:", totalInventoryValue);

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("Câu 8:");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable}`);
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng. 
// (Tui sẽ lấy sản phẩm đầu tiên trong mảng để demo)
console.log("Câu 9:");
for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán (isAvailable = true) và còn hàng (quantity > 0)
const sellingAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("Câu 10:", sellingAndInStockNames);