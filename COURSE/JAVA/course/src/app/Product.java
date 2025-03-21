package app;

public class Product {

    public String name;
    public double price;
    private int quantity;

    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return name + ", $" + String.format("%.2f", price) + ", " + quantity;
    }
}
