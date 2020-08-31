function calculate() {

  // Collect form values
  var gender = $("#gender").val();
  var age = Number($("#age").val());
  var height = Number($("#height").val());
  var weight = Number($("#weight").val());
  var activity = Number($("#activity").val());

  // Calculate estimated maximum heart rate
  // Source: https://www.marksdailyapple.com/action-item-4-exercise-primally-move-lift-and-sprint/
  var maxHeartRate = Number(208 - (0.7 * age));

  // Calculate minimum and maximum exercise heart rate
  var minExerciseHeartRate = Number((maxHeartRate / 100) * 55);
  var maxExerciseHeartRate = Number((maxHeartRate / 100) * 75);

  // Use Harris-Benedict equation to calculate:
  // 1. Estimated basal metabolic rate (BMR)
  // 2. Recommended daily kilocalorie intake
  // Source: https://en.wikipedia.org/wiki/Harris-Benedict_equation
  var basalMetabolicRate = (10 * weight) + (6.25 * height) - (5 * age);
  if (gender == "male") {
    basalMetabolicRate += 5;
  } else {
    basalMetabolicRate -= 161
  }
  var dailyKilocalorieIntake = Number(basalMetabolicRate * activity);

  // Exercise Zone Numbers
  $("#maximum-heart-rate").text(Math.round(maxHeartRate));
  $("#maximum-heart-rate-55").text(Math.round(minExerciseHeartRate));
  $("#maximum-heart-rate-75").text(Math.round(maxExerciseHeartRate));

  // Caloric Expenditure
  $("#basal-metabolic-rate").text(Math.round(basalMetabolicRate));
  $("#activity-factor").text(activity);
  $("#total-average-daily-calorie-expenditure").text(Math.round(dailyKilocalorieIntake));

  // Macronutrient Calculations

  return;
}

$(document).ready(function() {
  $("#gender, #age, #height, #weight, #activity").change(function() {
    calculate();
  });
});
