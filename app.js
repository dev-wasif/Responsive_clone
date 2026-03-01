
    const popular = document.querySelector(".popular");

    
    if (!popular) {
        alert("Popular container not found");
     
    }


    const data = [
        {
            src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500",
            title: "Lacha Paratha Deal",
            price: "Rs. 1190"
        },

          {
            src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500",
            title: "Lacha Paratha Deal",
            price: "Rs. 1190"
        },

          {
            src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500",
            title: "Lacha Paratha Deal",
            price: "Rs. 1190"
        },

            {
            src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500",
            title: "Lacha Paratha Deal",
            price: "Rs. 1190"
        },
        {
            src: "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?q=80&w=500",
            title: "Spicy Gigantic Burrito",
            price: "Rs. 590"
        },
        {
            src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500",
            title: "StripZilla",
            price: "Rs. 390"
        },
      
    ];
    
    for (let i = 0; i < data.length; i++) {

        let col = document.createElement("div");
        col.className = " d-flex jusitify-content-centercol-lg-3 col-md-6 col-sm-12 mb-4";

        let card = document.createElement("div");
        card.className = "food-card d-flex  flex-column h-100";

        let imageDiv = document.createElement("div");
        imageDiv.className = "food-image";

        let img = document.createElement("img");
        img.src = data[i].src;
        img.className = "img-fluid";

        let infoDiv = document.createElement("div");
        infoDiv.className = "food-info d-flex flex-column justify-content-between";

        let h5 = document.createElement("h5");
        h5.innerText = data[i].title;

        let priceRow = document.createElement("div");
        priceRow.className = "price-row d-flex justify-content-between align-items-center";

        let span = document.createElement("span");
        span.innerText = data[i].price;

        let btn = document.createElement("button");
        btn.className = "add-btn";
        btn.innerText = "+";

        // Structure build
        popular.appendChild(col);
        col.appendChild(card);
        card.appendChild(imageDiv);
        imageDiv.appendChild(img);
        card.appendChild(infoDiv);
        infoDiv.appendChild(h5);
        infoDiv.appendChild(priceRow);
        priceRow.appendChild(span);
        priceRow.appendChild(btn);
    }
