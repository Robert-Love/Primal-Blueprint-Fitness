$(document).ready(function() {

  $("#form").submit(function(){

    // Collect form values
    var gender = $("input:radio[name=gender]:checked").val();
    var age = Number($("input[name=age]").val());
    var height = Number($("input[name=height]").val());
    var weight = Number($("input[name=weight]").val());
    var exercise = Number($("input:radio[name=exercise]:checked").val());

    // Estimate maximum heart rate (MHR)
    var mhr = Number(208 - (0.7 * age));

    // Calculate minimum and maximum exercise heart rate
    var min = Number((mhr / 100) * 55);
    var max = Number((mhr / 100) * 75);

    // Estimate basal metabolic rate (BMR)
    var bmr = 1720.279;
    if (gender == "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    var intake = Number(bmr * exercise);

    // Populate results
    $("#min").text(Math.round(min));
    $("#max").text(Math.round(max));
    $("#intake").text(Math.round(intake));

    return false;

  });

});
