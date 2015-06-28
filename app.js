$(document).ready(function() {

  $("#form").submit(function(){

    // Collect form values
    var gender = $("#gender").val();
    var age = Number($("#age").val());
    var height = Number($("#height").val());
    var weight = Number($("#weight").val());
    var exercise = Number($("#exercise").val());

    alert(gender);
    alert(age);
    alert(height);
    alert(weight);
    alert(exercise);
    return false;

    // Estimate Maximum Heart Rate (MHR)
    var mhr = Number(208 - (0.7 * age));

    // Calculate minimum and maximum exercise heart rate
    var min = Number((mhr / 100) * 55);
    var max = Number((mhr / 100) * 75);

    // Estimate Basal Metabolic Rate (BMR)
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
