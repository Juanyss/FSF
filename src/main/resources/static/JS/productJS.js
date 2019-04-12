$(document).ready(function () {
        $.ajax({
            url: "/api/products",
            type: "GET",
            success: function (result) {
                $("#productList").empty();
                for (x = 0; x < result.length; x++) {
                    $("#productList").append(
                        "<table>" +
                        "<tbody>" +
                        "<td class='column1'>"+ result[x].name +"</td>" +
                        "<td class='column2'>"+ result[x].distributor +"</td>" +
                        "<td class='column3'>"+ result[x].detail +"</td>" +
                        "<td class='column4'>"+ result[x].stock.toString() +"</td>" +
                        "<td class='column5'>$"+ result[x].cost.toString() +"</td>" +
                        "<td class='column5'>$"+ result[x].price.toString() +"</td>" +
                        "</tbody>" +
                        "</table>" +
                        "</div>"
                    )
                }
                ;
            }
        });

    $.ajax({
        url: "/api/distributors",
        type: "GET",
        success: function (result) {
            $("#distributorDropDown").empty();
            for (x = 0; x < result.length; x++) {
                $("#distributorDropDown").append(
                "<option  value='"+ result[x].idDistributor +"'>"+ result[x].brand.toString() +"</option>"
                )
            }
            ;
        }
    });


});


$("#addProduct").click(function(){
    $("#productForm").fadeToggle();
})

$(document).mouseup(function (e) {
    var container = $("#productForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
});



