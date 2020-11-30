$(document).ready(function(){
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers",function(data){
        console.log(data)
        var table=$("#mansTable");
        $.each(data,function(key,value){
            var row=$('<tr></tr>');
            var idCell=$('<td>'+value._id+'</td>');
            var nameCell=$('<td>'+value.name+'</td>');
            var countryCell=$('<td>'+value.country+'</td>');
            var foundedCell=$('<td>'+value.founded+'</td>');
            $(row).append(idCell);
            $(row).append(nameCell);
            $(row).append(countryCell);
            $(row).append(foundedCell);
            $(table).append(row);
        })
    })
})