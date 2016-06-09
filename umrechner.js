
this.by_abbrev = {};

this.allSecondOptionsActive = true;

function init() {
  this.from_number = document.getElementById('from_number');
  this.from_unit = document.getElementById('from_unit');
  this.to_unit = document.getElementById('to_unit');
  this.from_unit_list = document.getElementById('from_unit_list');
  this.to_unit_list = document.getElementById('to_unit_list');
  this.results = document.getElementById('results');

  from_unit.oninput = updateSecondOptions;
  to_unit.oninput = updateResults;
  from_number.oninput = updateResults;

  //populate the option lists
  unitgroups.forEach(function(group) {
    console.log(group.type);
    group.units.forEach(function(unit) {
      var option = createOption(unit);
      to_unit_list.appendChild(option);
      unit.option = option;
      from_unit_list.appendChild(option.cloneNode(true));

      by_abbrev[unit.abbrev] = {
        'group': group,
        'unit': unit,
        'option': option
      };
    });
  });
}

if (navigator.vendor === 'Google Inc.') {
  this.createOption = function(unit) {
    var option = document.createElement('option');
    option.value = unit.abbrev;
    option.innerText = unit.name;
    return option;
  }
} else {
  this.createOption = function(unit) {
    var option = document.createElement('option');
    option.value = unit.abbrev;
    option.innerText = unit.name + " ("+unit.abbrev+")";
    return option;
  }
}

function swapUnits() {
  var tmp = from_unit.value;
  from_unit.value = to_unit.value;
  to_unit.value = tmp;
  updateResults();
}

function updateResults() {
  if (!from_number.validity.valid) {
    return;
  }
  var from_unit_info = by_abbrev[from_unit.value];
  var to_unit_info = by_abbrev[to_unit.value];
  if (from_unit_info === undefined || to_unit_info === undefined || from_unit_info.group !== to_unit_info.group) {
    return;
  }
  var value = +(from_number.value.replace(/,/, '.')); // convert to number
  var ratio = from_unit_info.unit.size / to_unit_info.unit.size;
  var result = value * ratio;
  var value_formatted = formatNumber(value, 5);
  var result_formatted = formatNumber(result, 5);
  var plural1 = (value_formatted != '1');
  var unit1 = plural1 ? from_unit_info.unit.plural : from_unit_info.unit.name;
  var plural2 = (result_formatted != '1');
  var unit2 = plural2 ? to_unit_info.unit.plural : to_unit_info.unit.name;
  results.innerHTML = value_formatted + " " + from_unit_info.unit.abbrev + " = " + result_formatted + " " + to_unit_info.unit.abbrev + "<br>" +
    value_formatted + " " + unit1 + ((plural1 || plural2) ? " sind " : " ist ") + result_formatted + " " + unit2 + ".";
}

function updateSecondOptions() {

  var firstUnit = from_unit.value;
  var unit_info = by_abbrev[firstUnit];
  if (unit_info === undefined) { // not recognized, show all options
    if (!allSecondOptionsActive) { // else, nothing to do
      clearSecondOptions();
      for (abbrev in by_abbrev) {
        to_unit_list.appendChild(by_abbrev[abbrev].option);
      }
    }
    allSecondOptionsActive = true;
  } else {
    allSecondOptionsActive = false;
    clearSecondOptions();
    group = unit_info.group;
    group.units.forEach(function(unit) {
      to_unit_list.appendChild(unit.option);
    });
  }

  updateResults();
}

function clearSecondOptions() {
  while (to_unit_list.hasChildNodes()) {
    to_unit_list.removeChild(to_unit_list.lastChild);
  }
}

function formatNumber(number, precision) {
  precision = precision || 2;
  zeros = Math.ceil(-Math.log10(number));
  precision += Math.max(zeros, 0);
  return number.toFixed(precision).replace(/\.?0*$/,'').replace(/\./,',');
}
