
        $.ajax({
            url: "/api/products",
            contentType: "application/json; charset=utf-8",
            type: "GET",
            success: function (result) {
                $("#productList").empty();
                for (x = 0; x < result.length; x++) {
                    $("#productList").append(
                        "<table>" +
                            "<tbody>" +
                                "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                                "<td class='column2' id='productBrand'>"+ result[x].distributor +"</td>" +
                                "<td class='column3' id='productDetail'>"+ result[x].detail +"</td>" +
                                "<td class='column4' id='productStock'>"+ result[x].stock.toString() +"</td>" +
                                "<td class='column5' id='productCost'>$"+ result[x].cost.toString() +"</td>" +
                                "<td class='column5' id='productPrice'>$"+ result[x].price.toString() +"</td>" +
                                "<td class='column6'>" +
                                "<button onclick=deleteProduct("+ result[x].idProduct +")>" +
                                   "<img src='IMG/delete.png'/>" +
                                "</button>" +
                                "</td>" +
                                "<td class='column6'>" +
                                "<button onclick=updateProductForm("+ result[x].idProduct +")>" +
                                   "<img src='IMG/update.png'/>" +
                                "</button>" +
                                "</td>" +
                            "</tbody>" +
                        "</table>" +
                        "</div>"
                    )
                }
                ;
            }
        });

function distributors() {
    $.ajax({
        url: "/api/distributors",
        contentType: "application/json; charset=utf-8",
        type: "GET",
        success: function (result) {
            $("#distributorDropDown").empty();
            for (x = 0; x < result.length; x++) {
                $("#distributorDropDown").append(
                    "<option  value='" + result[x].idDistributor + "'>" + result[x].brand.toString() + "</option>"
                )
            }
            ;
        }
    });
}



//Add new product
function addProduct(){

    $.ajax({
        url: "/api/products",
        data: JSON.stringify({"name": $("#newProductName").val(),
            "type":$("#newProductType").val(),
            "detail": $("#newProductDetail").val(),
            "stock":$("#newProductStock").val(),
            "cost":$("#newProductCost").val(),
            "aux":$("#distributorDropDown").val(),
            "price":$("#newProductPrice").val()}),
        contentType: "application/json; charset=utf-8",
        method: "POST",
        success: function (result) {
            $("#productForm").fadeOut();
            $("#productList").empty();
            for (x = 0; x < result.length; x++) {
                $("#productList").append(
                    "<table>" +
                    "<tbody>" +
                    "<td class='column1' >" + result[x].name + "</td>" +
                    "<td class='column2' >" + result[x].distributor + "</td>" +
                    "<td class='column3' >" + result[x].detail + "</td>" +
                    "<td class='column4' >" + result[x].stock.toString() + "</td>" +
                    "<td class='column5' >$" + result[x].cost.toString() + "</td>" +
                    "<td class='column5' >$" + result[x].price.toString() + "</td>" +
                    "<td class='column6'>" +
                    "<button onclick=deleteProduct("+ result[x].idProduct +")>" +
                    "<img src='IMG/delete.png'/>" +
                    "</button>" +
                    "</td>" +
                    "<td class='column6'>" +
                    "<button onclick=updateProductForm("+ result[x].idProduct +")>" +
                    "<img src='IMG/update.png'/>" +
                    "</button>" +
                    "</td>" +
                    "</tbody>" +
                    "</table>" +
                    "</div>"
                )
            }
        }
    });
}

        function updateProduct1(){

            $.ajax({
                url: "/api/products" + id,
                data: JSON.stringify({"name": $("#newProductName").val(),
                    "type":$("#newProductType").val(),
                    "detail": $("#newProductDetail").val(),
                    "stock":$("#newProductStock").val(),
                    "cost":$("#newProductCost").val(),
                    "aux":$("#distributorDropDown").val(),
                    "price":$("#newProductPrice").val()}),
                contentType: "application/json; charset=utf-8",
                method: "PUT",
                success: function (result) {
                    $("#productForm").fadeOut();
                    $("#productList").empty();
                    for (x = 0; x < result.length; x++) {
                        $("#productList").append(
                            "<table>" +
                            "<tbody>" +
                            "<td class='column1' >" + result[x].name + "</td>" +
                            "<td class='column2' >" + result[x].distributor + "</td>" +
                            "<td class='column3' >" + result[x].detail + "</td>" +
                            "<td class='column4' >" + result[x].stock.toString() + "</td>" +
                            "<td class='column5' >$" + result[x].cost.toString() + "</td>" +
                            "<td class='column5' >$" + result[x].price.toString() + "</td>" +
                            "<td class='column6'>" +
                            "<button onclick=deleteProduct("+ result[x].idProduct +")>" +
                            "<img src='IMG/delete.png'/>" +
                            "</button>" +
                            "</td>" +
                            "<td class='column6'>" +
                            "<button onclick=updateProductForm("+ result[x].idProduct +")>" +
                            "<img src='IMG/update.png'/>" +
                            "</button>" +
                            "</td>" +
                            "</tbody>" +
                            "</table>" +
                            "</div>"
                        )
                    }
                }
            });
        }

        function deleteProduct(id){
            $.ajax({
                url: "/api/products/" + id,
                type: "DELETE",
                success: function (result) {
                    $("#productList").empty();
                    for (x = 0; x < result.length; x++) {
                        $("#productList").append(
                            "<table>" +
                            "<tbody>" +
                            "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                            "<td class='column2' id='productBrand'>"+ result[x].distributor +"</td>" +
                            "<td class='column3' id='productDetail'>"+ result[x].detail +"</td>" +
                            "<td class='column4' id='productStock'>"+ result[x].stock.toString() +"</td>" +
                            "<td class='column5' id='productCost'>$"+ result[x].cost.toString() +"</td>" +
                            "<td class='column5' id='productPrice'>$"+ result[x].price.toString() +"</td>" +
                            "<td class='column6'>" +
                            "<button onclick=deleteProduct("+ result[x].idProduct +")>" +
                            "<img src='IMG/delete.png'/>" +
                            "</button>" +
                            "</td>" +
                            "<td class='column6'>" +
                            "<button onclick=updateProductForm("+ result[x].idProduct +")>" +
                            "<img src='IMG/update.png'/>" +
                            "</button>" +
                            "</td>" +
                            "</tbody>" +
                            "</table>" +
                            "</div>"
                        )
                    }
                    ;
                }
            });
        }

        //New product add

//Update product
function updateProductForm(id){
    bringProduct(id);
    $("#productForm").fadeToggle();

}


$("#addProduct").click(function(){
    distributors();
    $("#productForm").empty();
    $("#productForm").append(
        "<h3>Nuevo Producto</h3>" +
        "<input placeholder='Nombre' id='newProductName' type='text' required />"+
        "<select id='distributorDropDown' required />"+
        "<input placeholder='Rubro' type='text' id='newProductType' required />"+
        "<input placeholder='Detalles' type='text' id='newProductDetail' required />"+
        "<input placeholder='Stock' type='text' id='newProductStock' required />"+
        "<input placeholder='Costo' type='text' id='newProductCost' required />"+
        "<input placeholder='Precio' type='text' id='newProductPrice' required />"+
        "<button class='formBtn' type='submit' onclick='addProduct()'>Crear</button>"+
        "<button class='formBtn' type='submit'>Cancelar</button>"
    );
    $("#productForm").fadeToggle();
})

//Bring 1 product
function bringProduct(id){
    $.ajax({
        url: "/api/products/" + id,
        type: "GET",
        success:function(result){
            distributors();
            $("#productForm").empty();
            $("#productForm").append(
                "<h3>Modificar Producto</h3>" +
                "<input placeholder='Nombre' id='newProductName' type='text' required value='"+ result.name +"'> </input>"+
                "<select id='distributorDropDown' required>" +
                "<option  value='" + result[x].idDistributor + "' selected>" + result[x].brand.toString() + "</option>"+
                " </select>"+
                "<input placeholder='Rubro' type='text' id='newProductType' required value='"+result.type+"'></input>"+
                "<input placeholder='Detalles' type='text' id='newProductDetail' required value='"+result.detail+"'></input>"+
                "<input placeholder='Stock' type='text' id='newProductStock' required value='"+result.sotck+"'> </input>"+
                "<input placeholder='Costo' type='text' id='newProductCost' required value='"+result.cost+"'> </input>"+
                "<input placeholder='Precio' type='text' id='newProductPrice' required value='"+result.price+"'> </input>"+
                "<button class='formBtn' type='submit' onclick='updateProduct1()'>Crear</button>"+
                "<button class='formBtn' type='submit'>Cancelar</button>"
            );
    }
    })
}


$(document).mouseup(function (e) {
    var container = $("#productForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
});





