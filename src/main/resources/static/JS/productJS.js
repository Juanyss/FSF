
        $.ajax({
            url: "/api/products",
            contentType: "application/json; charset=utf-8",
            type: "GET",
            success: function (result) {
                $("#productList").empty();
                for (x = 0; x < result.length; x++) {
                    var distributorInfo = distributorFindInfo(result[x].distributor);
                    if (distributorInfo == null){
                    $("#productList").append(
                    "<table>" +
                    "<tbody>" +
                    "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                    "<td class='column2' id='productBrand'>Sin marca</td>" +
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
                    "</div>")
                    }else{
                    $("#productList").append(
                        "<table>" +
                            "<tbody>" +
                                "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                                "<td class='column2' id='productBrand'>" + distributorInfo.brand + "</td>" +
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
                };
            }
        }
        });

function distributors(id) {
    $.ajax({
        url: "/api/distributors",
        contentType: "application/json; charset=utf-8",
        type: "GET",
        success: function (result) {
            $("#distributorDropDown").empty();
            distributorFind(id);
            for (x = 0; x < result.length; x++) {
                $("#distributorDropDown").append(
                    "<option  value='" + result[x].idDistributor + "'>" + result[x].brand.toString() + "</option>"
                )
            }
            ;
        }
    });
}

function distributorFind(id) {
            $.ajax({
                url: "/api/distributors/" + id,
                contentType: "application/json; charset=utf-8",
                type: "GET",
                success: function (data) {
                    $("#distributorDropDown").append(
                        "<option  value='" + data.idDistributor + "' selected>" + data.brand.toString() + "</option>"
                    )
                }
            });
        }

        function distributorFindInfo(id) {
            var obj=
            $.ajax({
                async:false,
                url: "/api/distributors/" + id,
                dataType : 'json'}).done(
                    function(data){
                        data;
                    }
            ).responseJSON;
            return obj;
        }



//Add new product
function addProduct(){
    if(($("#newProductName").val() == "") || ($("#newProductType").val() == "") ||
                ($("#newProductStock").val() == "") || ($("#newProductCost").val() == "")
                || ($("#newProductPrice").val() == "")){
                window.alert("Faltan completar campos")
    }else{
    if($("#newProductDetail").val() == ""){
    $("#newProductDetail").val("Sin detalles");
    }
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
                                var distributorInfo = distributorFindInfo(result[x].distributor);
                                if (distributorInfo == null){
                                $("#productList").append(
                                "<table>" +
                                "<tbody>" +
                                "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                                "<td class='column2' id='productBrand'>Sin marca</td>" +
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
                                "</div>")
                                }else{
                                $("#productList").append(
                                    "<table>" +
                                        "<tbody>" +
                                            "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                                            "<td class='column2' id='productBrand'>" + distributorInfo.brand + "</td>" +
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
                            };
                        }
        }
    });
    }
}

        function updateProduct1(id){
            if(($("#newProductName").val() == "") || ($("#newProductType").val() == "") ||
            ($("#newProductStock").val() == "") || ($("#newProductCost").val() == "") || ($("#newProductPrice").val() == "")){
            window.alert("Faltan completar campos")
            }else{
            if($("#newProductDetail").val() == ""){
                $("#newProductDetail").val("Sin detalles");
            }
            $.ajax({
                url: "/api/products/" + id,
                data: JSON.stringify({
                    "name": $("#newProductName").val(),
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
                                        var distributorInfo = distributorFindInfo(result[x].distributor);
                                        if (distributorInfo == null){
                                        $("#productList").append(
                                        "<table>" +
                                        "<tbody>" +
                                        "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                                        "<td class='column2' id='productBrand'>Sin marca</td>" +
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
                                        "</div>")
                                        }else{
                                        $("#productList").append(
                                            "<table>" +
                                                "<tbody>" +
                                                    "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                                                    "<td class='column2' id='productBrand'>" + distributorInfo.brand + "</td>" +
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
                                    };
                                }
                }
            })
            };
        }

        function deleteProduct(id){
            $.ajax({
                url: "/api/users/logIn",
                contentType: "application/json; charset=utf-8",
                type: "GET",
                success: function (result) {
                    if(result == 0){
                        window.location.replace("/login");
                    }else{
                    $.ajax({
                    url: "/api/products/" + id,
                    type: "DELETE",
                    success: function (result) {
                        $("#productList").empty();
                        for (x = 0; x < result.length; x++) {
                        var distributorInfo = distributorFindInfo(result[x].distributor);
                        if (distributorInfo == null){
                        $("#productList").append(
                        "<table>" +
                        "<tbody>" +
                        "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                        "<td class='column2' id='productBrand'>Sin marca</td>" +
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
                        "</div>")
                        }else{
                            $("#productList").append(
                            "<table>" +
                            "<tbody>" +
                            "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                            "<td class='column2' id='productBrand'>" + distributorInfo.brand + "</td>" +
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
                            };
                            }
                }
            });
        }}})}

        //New product add

//Update product
function updateProductForm(id){
    $.ajax({
        url: "/api/users/logIn",
        contentType: "application/json; charset=utf-8",
        type: "GET",
        success: function (result) {
            if(result == 0){
                window.location.replace("/login");
            }else{
            bringProduct(id);
            $("#productForm").fadeToggle();
            }
        }
    })
}


$("#addProduct").click(function(){
    $.ajax({
            url: "/api/users/logIn",
            contentType: "application/json; charset=utf-8",
            type: "GET",
            success: function (result) {
                if(result == 0){
                    window.location.replace("/login");
                }else{
                    distributors();
                    $("#productForm").empty();
                    $("#productForm").append(
                    "<h3>Nuevo Producto</h3>" +
                    "<input placeholder='Nombre' id='newProductName' type='text' required />"+
                    "<select id='distributorDropDown' required />"+
                    "<input placeholder='Rubro' type='text' id='newProductType' required />"+
                    "<input placeholder='Detalles' type='text' id='newProductDetail' />"+
                    "<input placeholder='Stock' type='text' id='newProductStock' required />"+
                    "<input placeholder='Costo' type='text' id='newProductCost' required />"+
                    "<input placeholder='Precio' type='text' id='newProductPrice' required />"+
                    "<button class='formBtn' type='submit' onclick='addProduct()'>Crear</button>"
                    );
                    $("#productForm").fadeToggle();
}}})})

//Bring 1 product
function bringProduct(id){
    $.ajax({
        url: "/api/products/" + id,
        type: "GET",
        success:function(result){
            $("#productForm").empty();
            distributors(result.distributor);
            $("#productForm").append(
                "<h3>Modificar Producto</h3>" +
                "<input placeholder='Nombre' id='newProductName' type='text' required value='"+ result.name +"'> </input>"+
                "<select id='distributorDropDown' required/>" +
                "<input placeholder='Rubro' type='text' id='newProductType' required value='"+result.type+"'></input>"+
                "<input placeholder='Detalles' type='text' id='newProductDetail' value='"+result.detail+"'></input>"+
                "<input placeholder='Stock' type='text' id='newProductStock' required value='"+result.stock+"'> </input>"+
                "<input placeholder='Costo' type='text' id='newProductCost' required value='"+result.cost+"'> </input>"+
                "<input placeholder='Precio' type='text' id='newProductPrice' required value='"+result.price+"'> </input>"+
                "<button class='formBtn' type='submit' onclick='updateProduct1("+ result.idProduct +")'>Modificar</button>"

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

//Search functions

$("#searchButton").click(function(){
    $("#searchDiv").show();
    $("#productSearch").focus();
})

$("#productSearch").on('keypress', function(e){
    var code = e.keyCode || e.which;
    if(code==13){
    $.ajax({
                url: "/api/products/productSearch",
                data: JSON.stringify({"name": $("#productSearch").val()}),
                contentType: "application/json; charset=utf-8",
                method: "POST",
                success: function (result) {
                for (x = 0; x < result.length; x++) {
                $("#productList").empty();
                for (x = 0; x < result.length; x++) {
                    var distributorInfo = distributorFindInfo(result[x].distributor);
                    if (distributorInfo == null){
                    $("#productList").append(
                    "<table>" +
                    "<tbody>" +
                    "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                    "<td class='column2' id='productBrand'>Sin marca</td>" +
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
                    "</div>")
                    }else{
                        $("#productList").append(
                        "<table>" +
                        "<tbody>" +
                        "<td class='column1' id='productName'>"+ result[x].name +"</td>" +
                        "<td class='column2' id='productBrand'>" + distributorInfo.brand + "</td>" +
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
                        };
                    }
            }
            }
    })
}})







