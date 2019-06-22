$.ajax({
    url: "/api/products",
    contentType: "application/json; charset=utf-8",
    type: "GET",
    success: function (result) {
        $("#productList").empty();
        for (x = 0; x < result.length; x++) {
            structureProducts(result,x);
        }
    }
});

function distributorFindInfo(id) {
    var obj =
        $.ajax({
            async: false,
            url: "/api/distributors/" + id,
            dataType: 'json'
        }).done(
            function (data) {
                data;
            }
        ).responseJSON;
    return obj;
}

$("#productSearch").on('keypress', function (e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        $.ajax({
            url: "/api/products/productSearch",
            data: JSON.stringify({"name": $("#productSearch").val()}),
            contentType: "application/json; charset=utf-8",
            method: "POST",
            success: function (result) {
                $("#productList").empty();
                for (x = 0; x < result.length; x++) {
                    structureProducts(result,x);
                }
            }
        })
    }
});



function addToBudget(idProduct) {
    var client = $('#client').val();
    var quantity = $('#quantity').val();

    $.ajax({
        url: "/api/shoppingcart/" + client + "/" + idProduct,
        data: JSON.stringify({
            "quantity": quantity
        }),
        contentType: "application/json; charset=utf-8",
        method: "POST",
        success: function (result) {
                $("#quantityForm").fadeOut();
                $('#budgetList').empty();
                for (var x = 0; x < result.length; x++) {
                    structureResults(result,x,client)
                }
            }
    })
}

function bringPrice(id){
    var obj =
        $.ajax({
            async: false,
            url: "/api/products/" + id,
            dataType: 'json'
        }).done(
            function (data) {
                data;
            }
        ).responseJSON;
    return obj;
}

function deleteProduct( client, idProduct) {
    $.ajax({
        url: "/api/shoppingcart/" +  client + "/" + idProduct,
        contentType: "application/json; charset=utf-8",
        type: "DELETE",
        success: function (result) {
            $('#budgetList').empty();
            for (var x = 0; x < result.length; x++) {
                structureResults(result,x,client)
            }
        }
    })
}

function updateQuantity(idProduct) {
    var client = $('#client').val();
    var quantity = $('#quantity').val();

    $.ajax({
        url: "/api/shoppingcart/" + client + "/" + idProduct,
        data: JSON.stringify({
            "quantity": quantity
        }),
        contentType: "application/json; charset=utf-8",
        method: "PUT",
        success: function (result) {
            $("#quantityForm").fadeOut();
            console.log("flag");
            $('#budgetList').empty();
            console.log("empty");
            for (var x = 0; x < result.length; x++) {
                console.log("for structure");
               structureResults(result,x,client)
            }
        }
    })
}


function budgetForm(id) {
    $("#quantityForm").empty();
    $("#quantityForm").append(
        "<h3>Cantidad</h3>" +
        "<input placeholder='Cantidad' id='quantity' type='text' required />"+
        "<button class='formBtn' type='submit' onclick='addToBudget("+ id +")'>Agregar</button>"
    );
    $("#quantityForm").fadeToggle();
}

function updateBudgetQuantity(id) {
    $("#quantityForm").empty();
    $("#quantityForm").append(
        "<h3>Cantidad</h3>" +
        "<input placeholder='Cantidad' id='quantity' type='text' required />"+
        "<button class='formBtn' type='submit' onclick='updateQuantity("+ id +")'>Modificar</button>"
    );
    $("#quantityForm").fadeToggle();
}


$(document).mouseup(function (e) {
    var container = $("#quantityForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
});

function structureProducts(result,x){
    var distributorInfo = distributorFindInfo(result[x].distributor);
    if (distributorInfo == null) {
        $("#productList").append(
            "<table>" +
            "<tbody>" +
            "<td class='column1' id='productName"+ result[x].idProduct +"'>" + result[x].name + "</td>" +
            "<td class='column2' id='productBrand"+ result[x].idProduct +"'>Sin marca</td>" +
            "<td class='column4' id='productStock"+ result[x].idProduct +"'>" + result[x].stock.toString() + "</td>" +
            "<td class='column5' id='productPrice"+ result[x].idProduct +"'>$" + result[x].price.toString() + "</td>" +
            "<td class='column6'>" +
            "<button onclick=budgetForm(" + result[x].idProduct + ")>" +
            "<img src='IMG/new.png'/>" +
            "</button>" +
            "</td>" +
            "</tbody>" +
            "</table>" +
            "</div>")
    } else {
        $("#productList").append(
            "<table>" +
            "<tbody>" +
            "<td class='column1' id='productName"+ result[x].idProduct +"'>" + result[x].name + "</td>" +
            "<td class='column2' id='productBrand"+ result[x].idProduct +"'>" + distributorInfo.brand + "</td>" +
            "<td class='column4' id='productStock"+ result[x].idProduct +"'>" + result[x].stock.toString() + "</td>" +
            "<td class='column5' id='productPrice"+ result[x].idProduct +"'>$" + result[x].price.toString() + "</td>" +
            "<td class='column6'>" +
            "<button onclick=budgetForm(" + result[x].idProduct + ")>" +
            "<img src='IMG/new.png'/>" +
            "</button>" +
            "</td>" +
            "</tbody>" +
            "</table>" +
            "</div>"
        )
    }
}

function structureResults(result,x,client) {
    $('#budgetList').empty();
    for (var x = 0; x < result.length; x++) {
        var product = bringPrice(result[x].product);
        $('#budgetList').append(
            "<table>" +
            "<tbody>" +
            "<td class='column1PreBudget' id='budgetName'>" + product.name + "</td>" +
            "<td class='column6PreBudget' id='budgetQuantity'>" + result[x].quantity + "</td>" +
            "<td class='column5PreBudget' id='budgetPrice'>$" + product.price + "</td>" +
            "<td class='column6'>" +
            "<button onclick=deleteProduct('" + client + "'," + result[x].product + ")>" +
            "<img src='IMG/delete.png'/>" +
            "</button>" +
            "<button onclick=updateBudgetQuantity(" + result[x].product + ")>" +
            "<img src='IMG/update.png'/>" +
            "</button>" +
            "</td>" +
            "</tbody>" +
            "</table>" +
            "</div>")
    }
    $('#budgetList').append(
        "<div id='wrapper'>" +
        "<div id='container'>" +
        "<table>" +
        "<td><h2>TOTAL: </h2></td>" +
        "<td><h2 id='budgetAmount'>$" + totalBudget(client) + "</h2></td>" +
        "</table>" +
        "</div>" +
        "</div>"
    )
}

function totalBudget(client) {
    var obj =
        $.ajax({
            async: false,
            url: "/api/shoppingcart/total/" + client,
            dataType: 'json'
        }).done(
            function (data) {
                data;
            }
        ).responseJSON;
    return obj;
}

$("#buildBudget").click(function () {
    $.ajax({
        url: "/api/users/logIn",
        contentType: "application/json; charset=utf-8",
        type: "GET",
        success: function (result) {
            if(result == 0){
                window.location.replace("/login");
            }else{
                var client = $('#client').val();
                localStorage.setItem("client",client);
                window.location.href=("/presupuesto");
            }
        }
    })
})

