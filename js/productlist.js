fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut", "opacity");
  }

  copy
    .querySelector(".read-more")
    .setAttribute("href", `product.html?id=${product.id}`);

  copy.querySelector("img").src =
    imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //appende
  document.querySelector("main").appendChild(copy);
}

/*
   <article class="smallproduct">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
            alt="blå t-shirt"
          />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p>T-shirts | Nike</p>
          <p>DKK 1595,-</p>
          <a class="link" href="product.html">Read More</a>
        </article>
*/

/*	
id	1165
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
basecolour	"Blue"
season	"Summer"
productionyear	2013
usagetype	"Sports"
productdisplayname	"Mean Team India Cricket Jersey"
parsed	1
soldout	0
relid	1165
price	2495
discount	45
variantname	"Authentic Jersey"
brandname	"Nike"
brandbio	"Nike, creating experiences for today’s athlete"
brandimage	"http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg"
agegroup	"Adults-Men"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	"<p>Polyester<br />Machine wash</p>"
sizefitdesc	null
description	"<p>Blue jersey with a tipped collar, concealed, half buttoned placket, Nike print on the right chest, Team India print and applique on the front, short sleeves, tri-colour side panels, print at the back</p>"
styledesc	"<p>Root for our country in style with this team India jersey from Nike. The Dri-fit fabric and panel"

*/
