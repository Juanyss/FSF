$(document).ready(function () {
        $.ajax({
            url: "/api/products/",
            type: "GET",
            success: function (result) {

                $("#productDiv").empty();
                $("#productDiv").append("<h3>Lista de productos</h3>");
                for (x = 0; x < result.length; x++) {
                    $("#productDiv").append(
                        "<fieldset class='field_set'>" +
                        "<div><strong><label>Nombre: </label></strong><label type='text' >"+ result[x].name +"</label></div>" +
                        "<div><strong><label>Tipo: </label></strong><label type='text' >"+ result[x].type +"</label></div>" +
                        "<div><strong><label>Detalle: </label></strong><label type='text' >"+ result[x].detail +"</label></div>" +
                        "<div><strong><label>Stock: </label></strong><label type='text' >"+ result[x].stock.toString() +"</label></div>" +
                        "<div><strong><label>Costo: </label></strong><label type='text' >"+ result[x].cost.toString() +"</label></div>" +
                        "<div><strong><label>Distribuidor: </label></strong><label type='text' >"+ result[x].distributor +"</label></div>" +
                        "<div><strong><label>Precio: </label></strong><label type='text' >"+ result[x].price.toString() +"</label></div>" +
                        "</fieldset>"
                    )
                }
                ;
            }
        })
})



