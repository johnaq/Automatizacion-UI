import NopCommerce from '../page-object/nop-commerce'


const nopCommerce = new NopCommerce()


fixture `Abrir pagina NopCommerce`
.page `https://demo.nopcommerce.com/`

test("Dar clic en el menu Computers > Desktops", async t => {
    await t.maximizeWindow();
    await t.wait(1000);
    await nopCommerce.hoverMenuComputer();
    await t.wait(1000);
    await nopCommerce.clickMenuDesktops();

    await t.expect(nopCommerce.productTitle.innerText).eql('Build your own computer');
})

test("Dar clic en Add to cart", async t => {
    await nopCommerce.addToCart();
    await t.wait(1000);

    await t.exists(nopCommerce.priceValue).ok();
})


