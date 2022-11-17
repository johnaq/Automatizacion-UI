import { Selector, t } from "testcafe";

class ProductPage {
    constructor(){
        this.productName = Selector(".product-name");
        this.hdd = Selector("label").withAttribute("for", "product_attribute_3_7");
        this.productRam = Selector("#product_attribute_2");
        this.productRamOption = this.productRam.find("option");
        this.productSoftware = Selector("label").withAttribute("for", "product_attribute_4_8");
        this.productPrice = Selector("#price-value-1");
        this.productAddToCartButton = Selector("#add-to-cart-button-1");
        this.notification = Selector(".bar-notification").child("p.content");
        this.shoppingCart = Selector("#topcartlink")

        this.productLeicaName = Selector(".item-grid").child(2).find(".product-title")
        this.productLeica = Selector(".item-grid").child(2).find("div.buttons").child("button.product-box-add-to-cart-button");
        this.productLeicaPrice = Selector(".item-grid").child(2).find(".actual-price");
    }

    async checkHdd(){
        await t.hover(this.hdd)
        .wait(500)
        .click(this.hdd);
    }

    async selectRam(ram){
        await t.click(this.productRam)
        .wait(500)
        .click(this.productRamOption.nth(ram))
    }

    async selectSoftware(){
        await t.click(this.productSoftware)
        .wait(500)
    }

    async productAddToCart(){
        await t.click(this.productAddToCartButton)
        .wait(1000)
    }

    async productLeicaAddToCart(){
        await t.click(this.productLeica)
        .wait(1000)
    }

    async goShoppingCart(){
        await t.click(this.shoppingCart)
        .wait(500);
    }
}

export default ProductPage