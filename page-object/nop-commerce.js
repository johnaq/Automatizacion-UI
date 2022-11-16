import { Selector, t } from "testcafe";

class NopCommerce {

    constructor(){
        this.computerLink = Selector("a").withText("Computer");
        this.desktopsLink = Selector("a").withText("Desktops");
        this.productTitle = Selector("a").withText("Build");
        this.addToCart = Selector("div.buttons").child("button.product-box-add-to-cart-button");

        this.productName = Selector(".product-name");
        this.hdd = Selector("#product_attribute_3_7");

        this.productRam = Selector("#product_attribute_2");
        this.productRamOption = this.productRam.find("option");

        this.productSoftware1 = Selector("#product_attribute_5_11");
        this.productSoftware2 = Selector("#product_attribute_5_12");

        this.productAddToCartButton = Selector("#add-to-cart-button-1");
    }

    async hoverMenuComputer(){
        await t.hover(this.computerLink)
        .wait(500);
    }

    async clickMenuDesktops(){
        await t.click(this.desktopsLink)
        .wait(500);
    }

    async clickAddToCart(){
        await t.hover(this.addToCart)
        .wait(500)
        .click(this.addToCart)
    }

    async checkHdd(){
        await t.hover(this.hdd)
        .wait(500)
        .click(this.hdd);
    }

    async selectRam(ram){
        await t.click(this.productRam)
        .wait(500)
        .click(this.productRamOption.withText(ram))
    }

    async selectSoftware(){
        await t.click(this.productSoftware1)
        .wait(500)
        .click(this.productSoftware2)
    }

    async productAddToCart(){
        await t.click(this.productAddToCartButton)
        .wait(2000)
    }

}

export default NopCommerce