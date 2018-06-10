$(function()
{

    $("#addEntry").click(function() { addEntry() });

    function addEntry()
    {
        var nameField = $("#nameField").val()
        var classField = $("#classField").val()
        var raceField = $("#raceField").val()
        var levelField = $("#levelField").val()

        if (nameField != "" && classField != "" && raceField != "" && levelField != "")
        {
            var string = "<tr>";
            string += "<td>" + nameField + "</td>";
            string += "<td>" + classField + "</td>";
            string += "<td>" + raceField + "</td>";
            string += "<td>" + levelField + "</td>";
            string += "</tr>";
            $("#characters").append(string);
        }
    }
});