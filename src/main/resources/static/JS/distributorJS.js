$.ajax({
            url: "/api/distributors",
            contentType: "application/json; charset=utf-8",
            type: "GET",
            success: function (result) {
                $("#distributorList").empty();
                for (x = 0; x < result.length; x++) {
                    $("#distributorList").append(
                        "<table>" +
                            "<tbody>" +
                                "<td class='column1' id='distributorName'>"+ result[x].name +"</td>" +
                                "<td class='column2' id='distributorBrand'>" + result[x].brand + "</td>" +
                                "<td class='column3' id='distributorPhone'>"+ result[x].phone +"</td>" +
                                "<td class='column4' id='distributorEmail'>"+ result[x].email +"</td>" +
                                "<td class='column5' id='distributorType'>"+ result[x].type +"</td>" +
                                "<td class='column6'>" +
                                "<button onclick=deleteDistributor("+ result[x].idDistributor +")>" +
                                   "<img src='IMG/delete.png'/>" +
                                "</button>" +
                                "<div class='divider' />" +
                                "<button onclick=updateDistributorForm("+ result[x].idDistributor +")>" +
                                   "<img src='IMG/update.png'/>" +
                                "</button>" +
                                "</td>" +
                            "</tbody>" +
                        "</table>" +
                        "</div>"
                    )
                };
            }
        });

$("#addDistributor").click(function(){
    $("#distributorForm").empty();
    $("#distributorForm").append(
        "<h3>Nuevo Distribuidor</h3>" +
        "<input placeholder='Nombre' id='newDistributorName' type='text' required />"+
        "<input placeholder='Marca' type='text' id='newDistributorBrand' required />"+
        "<input placeholder='Telefono' type='text' id='newDistributorPhone'  />"+
        "<input placeholder='Email' type='text' id='newDistributorEmail'  />"+
        "<input placeholder='Clasificacion' type='text' id='newDistributorType' required />"+
        "<button class='formBtn' type='submit' onclick='addDistributor()'>Crear</button>"
    );
    $("#distributorForm").fadeToggle();
})

function deleteDistributor(id){
            $.ajax({
                url: "/api/distributors/" + id,
                type: "DELETE",
                success: function (result) {
                    $("#distributorList").empty();
                    for (x = 0; x < result.length; x++) {
                        $("#distributorList").append(
                        "<table>" +
                        "<tbody>" +
                        "<td class='column1' id='distributorName'>"+ result[x].name +"</td>" +
                        "<td class='column2' id='distributorBrand'>" + result[x].brand + "</td>" +
                        "<td class='column3' id='distributorPhone'>"+ result[x].phone +"</td>" +
                        "<td class='column4' id='distributorEmail'>"+ result[x].email +"</td>" +
                        "<td class='column5' id='distributorType'>"+ result[x].type +"</td>" +
                        "<td class='column6'>" +
                        "<button onclick=deleteDistributor("+ result[x].idDistributor +")>" +
                        "<img src='IMG/delete.png'/>" +
                        "</button>" +
                        "<div class='divider' />" +
                        "<button onclick=updateDistributorForm("+ result[x].idDistributor +")>" +
                        "<img src='IMG/update.png'/>" +
                        "</button>" +
                        "</td>" +
                        "</tbody>" +
                        "</table>" +
                        "</div>"
                        )
                        };
                }
            });
        }



function addDistributor(){
    if(($("#newDistributorName").val() == "") || ($("#newDistributorBrand").val() == "") ||
    ($("#newDistributorType").val() == "")){
    window.alert("Faltan completar campos");
    }else{
    if($("#newDistributorPhone").val() == ""){
            $("#newDistributorPhone").val("Sin telefono");
    }
    if($("#newDistributorEmail").val() == ""){
           $("#newDistributorEmail").val("Sin email");
    }
    $.ajax({
        url: "/api/distributors",
        data: JSON.stringify({"name": $("#newDistributorName").val(),
            "brand":$("#newDistributorBrand").val(),
            "phone": $("#newDistributorPhone").val(),
            "email":$("#newDistributorEmail").val(),
            "type":$("#newDistributorType").val()}),
        contentType: "application/json; charset=utf-8",
        method: "POST",
        success: function (result) {
        $("#distributorForm").fadeOut();
        $("#distributorList").empty();
        for (x = 0; x < result.length; x++) {
        $("#distributorList").append(
        "<table>" +
        "<tbody>" +
        "<td class='column1' id='distributorName'>"+ result[x].name +"</td>" +
        "<td class='column2' id='distributorBrand'>" + result[x].brand + "</td>" +
        "<td class='column3' id='distributorPhone'>"+ result[x].phone +"</td>" +
        "<td class='column4' id='distributorEmail'>"+ result[x].email +"</td>" +
        "<td class='column5' id='distributorType'>"+ result[x].type +"</td>" +
        "<td class='column6'>" +
        "<button onclick=deleteDistributor("+ result[x].idDistributor +")>" +
        "<img src='IMG/delete.png'/>" +
        "</button>" +
        "<div class='divider' />" +
        "<button onclick=updateDistributorForm("+ result[x].idDistributor +")>" +
        "<img src='IMG/update.png'/>" +
        "</button>" +
        "</td>" +
        "</tbody>" +
        "</table>" +
        "</div>")};
        }
    })
    }
}

function updateDistributorForm(id){
    bringDistributor(id);
    $("#distributorForm").fadeToggle();

}

function bringDistributor(id){
    $.ajax({
        url: "/api/distributors/" + id,
        type: "GET",
        success:function(result){
            $("#distributorForm").empty();
            $("#distributorForm").append(
                "<h3>Modificar Distribuidor</h3>" +
                "<input placeholder='Nombre' id='newDistributorName' type='text' required value='"+result.name+"' />"+
                 "<input placeholder='Marca' type='text' id='newDistributorBrand' required value='"+result.brand+"' />"+
                 "<input placeholder='Telefono' type='text' id='newDistributorPhone' value='"+result.phone+"' />"+
                 "<input placeholder='Email' type='text' id='newDistributorEmail' value='"+result.email+"' />"+
                 "<input placeholder='Clasificacion' type='text' id='newDistributorType' required value='"+result.type+"' />"+
                 "<button class='formBtn' type='submit' onclick='updateDistributor("+result.idDistributor+")'>Modificar</button>"
            );

    }
    })
}

function updateDistributor(id){
    if(($("#newDistributorName").val() == "") || ($("#newDistributorBrand").val() == "") ||
        ($("#newDistributorType").val() == "")){
        window.alert("Faltan completar campos");
    }else{
    if($("#newDistributorPhone").val() == ""){
        $("#newDistributorPhone").val("Sin telefono");
    }
    if($("#newDistributorEmail").val() == ""){
       $("#newDistributorEmail").val("Sin email");
    }
    $.ajax({
        url: "/api/distributors/" + id ,
        data: JSON.stringify({"name": $("#newDistributorName").val(),
            "brand":$("#newDistributorBrand").val(),
            "phone": $("#newDistributorPhone").val(),
            "email":$("#newDistributorEmail").val(),
            "type":$("#newDistributorType").val()}),
        contentType: "application/json; charset=utf-8",
        method: "PUT",
        success: function (result) {
        $("#distributorForm").fadeOut();
        $("#distributorList").empty();
        for (x = 0; x < result.length; x++) {
        $("#distributorList").append(
        "<table>" +
        "<tbody>" +
        "<td class='column1' id='distributorName'>"+ result[x].name +"</td>" +
        "<td class='column2' id='distributorBrand'>" + result[x].brand + "</td>" +
        "<td class='column3' id='distributorPhone'>"+ result[x].phone +"</td>" +
        "<td class='column4' id='distributorEmail'>"+ result[x].email +"</td>" +
        "<td class='column5' id='distributorType'>"+ result[x].type +"</td>" +
        "<td class='column6'>" +
        "<button onclick=deleteDistributor("+ result[x].idDistributor +")>" +
        "<img src='IMG/delete.png'/>" +
        "</button>" +
        "<div class='divider' />" +
        "<button onclick=updateDistributorForm("+ result[x].idDistributor +")>" +
        "<img src='IMG/update.png'/>" +
        "</button>" +
        "</td>" +
        "</tbody>" +
        "</table>" +
        "</div>")};
        }
    })
    }
}


$(document).mouseup(function (e) {
    var container = $("#distributorForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
});


//Search functions

$("#searchButton").click(function(){
    $("#searchDiv").show();
    $("#distributorSearch").focus();
})

$("#distributorSearch").on('keypress', function(e){
    var code = e.keyCode || e.which;
    if(code==13){
    $.ajax({
                url: "/api/distributors/brandSearch",
                data: JSON.stringify({"brand":$("#distributorSearch").val()}),
                contentType: "application/json; charset=utf-8",
                method: "POST",
                success: function (result) {
                $("#distributorList").empty();
                for (x = 0; x < result.length; x++) {
                $("#distributorList").append(
                "<table>" +
                "<tbody>" +
                "<td class='column1' id='distributorName'>"+ result[x].name +"</td>" +
                "<td class='column2' id='distributorBrand'>" + result[x].brand + "</td>" +
                "<td class='column3' id='distributorPhone'>"+ result[x].phone +"</td>" +
                "<td class='column4' id='distributorEmail'>"+ result[x].email +"</td>" +
                "<td class='column5' id='distributorType'>"+ result[x].type +"</td>" +
                "<td class='column6'>" +
                "<button onclick=deleteDistributor("+ result[x].idDistributor +")>" +
                "<img src='IMG/delete.png'/>" +
                "</button>" +
                "<div class='divider' />" +
                "<button onclick=updateDistributorForm("+ result[x].idDistributor +")>" +
                "<img src='IMG/update.png'/>" +
                "</button>" +
                "</td>" +
                "</tbody>" +
                "</table>" +
                "</div>")};
                }
            })
    }
})

