import { Selector, t } from "testcafe";

class ShoppingCartPage {
    constructor(){
        this.productInfo = Selector(".product").child(".attributes");
        this.priceUnit = Selector(".subtotal").child(".product-subtotal")

        this.productLeicaName = Selector(".cart").find("tbody").child(1).find(".product-name");
        this.productLeicaUnitPrice = Selector(".cart").find("tbody").child(1).find(".product-unit-price");
        this.productLeicaSubTotal = Selector(".cart").find("tbody").child(1).find(".product-subtotal");
    }
}

export default ShoppingCartPage