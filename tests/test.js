import NopCommerce from '../page-object/nop-commerce'


const nopCommerce = new NopCommerce()
var precio;

fixture `Realizar compra de un computador`
.page `https://demo.nopcommerce.com/`

test("Build your own computer", async t => {
    await t.maximizeWindow().wait(500);
    await nopCommerce.hoverMenuComputer();
    await nopCommerce.clickMenuDesktops();
    await nopCommerce.clickAddToCart();
    await t.expect(nopCommerce.productName.innerText).eql("Build your own computer");
    
    await nopCommerce.selectRam("8GB [+$60.00]")
    await nopCommerce.checkHdd();
    await nopCommerce.selectSoftware();
    precio = await nopCommerce.productPrice.innerText;
    await nopCommerce.productAddToCart();
    await t.expect(nopCommerce.notification.innerText).contains("The product has been added to your shopping cart")

    await nopCommerce.irAlCarrito();

    await t.wait(2000);
})


