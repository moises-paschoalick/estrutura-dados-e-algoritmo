package app;

public class Program {

    public static void main(String[] args) {

        //System.out.println("Oi");
        var p1 = new Product("Laptop", 1000.0, 5);
        var p2 = new Product("Headphones", 200.0, 2); //200.0 double


        System.out.println(p1);
        System.out.println(p2);
        System.out.println(String.format("%.2f", p1.price));

    }
}
