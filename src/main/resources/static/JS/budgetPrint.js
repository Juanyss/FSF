var client = localStorage.getItem("client");
$.ajax({
    url: "/api/shoppingcart/" + client,
    contentType: "application/json; charset=utf-8",
    type: "GET",
    success: function (result) {
        $("#infoDate").append(
            "Fecha: " + dateFormat()
        )
        $("#clientId").append(
            "<table class='table-Budget'>" +
            "<tr class='row100 head'>" +
            "<th class='column-Total'><STRONG>Cliente: </STRONG><label id='userBudget'>" + client + "</label></th>" +
            "</tr>" +
            "</table>" +
            "<br>")

        for (x = 0; x < result.length; x++) {
        var product = bringPrice(result[x].product);
        $("#budgetPrint").append(
        "<div class='table100-body js-pscroll' id='productList'>" +
        "<table class='table-Budget'>" +
        "<thead>" +
        "<tr class='row100 head'>" +
        "<th class='column1-Budget'> " +product.name + " </th>" +
        "<th class='column2'>" + result[x].quantity + "</th>" +
        "<th class='column2'>$" + product.price + "</th>" +
        "</tr>" +
        "</thead>" +
        "</table>" +
        "</div>")
        }

        $("#totalBudget").append(
            "<table class='table-Budget'>" +
            "<tr class='row100 head'>" +
            "<th class='column-Total'>Total</th>" +
            "<th class='column-TotalAmount' id='BudgetTotalAmount'>$" + totalBudget(client) + "</th>" +
            "</tr>" +
            "</table>" +
            "</div>")

        dateFormat();
    }
})

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

function dateFormat(){
    var d = new Date();
    var format = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
    return format;
}