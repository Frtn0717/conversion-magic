const string = document.getElementById('string');
const boolean = document.getElementById('boolean');

string.addEventListener('click', function openClose(event) {
  const target = event.target;
  const resultHidden = document.querySelectorAll('.hidden');
  const resultShow = document.querySelectorAll('.show');
  const convField = document.querySelectorAll('.conv_field');

  if(target.value == 'Show result') {
    for(item of resultHidden) {
      if(target.parentNode == item.parentNode) {
        item.classList.remove('hidden');
        item.setAttribute('disabled', 'disabled');
        item.classList.add('show');
        target.value = 'Hide result';
      }
    }

    for(item of convField) {

      if(item.querySelector('.string_number_result')) {
        item.querySelector('.string_number_result').value = "'" + String(2021) + "'";
      }

      if(item.querySelector('.string_neg_number_result')) {
        item.querySelector('.string_neg_number_result').value = "'" + String(-2021) + "'";
      }

      if(item.querySelector('.string_null_result')) {
        item.querySelector('.string_null_result').value = "'" + String(null) + "'";
      }

      if(item.querySelector('.string_undefined_result')) {
        item.querySelector('.string_undefined_result').value = "'" + String(undefined) + "'";
      }

      if(item.querySelector('.string_true_result')) {
        item.querySelector('.string_true_result').value = "'" + String(true) + "'";
      }

      if(item.querySelector('.string_false_result')) {
        item.querySelector('.string_false_result').value = "'" + String(false) + "'";
      }
    }
  } else {
    for(item of resultShow) {
      if(target.parentNode == item.parentNode) {
        item.classList.remove('show');
        item.classList.add('hidden');
        target.value = 'Show result';
      }
    }
  }
});

boolean.addEventListener('click', function openClose(event) {
  const target = event.target;
  const resultHidden = document.querySelectorAll('.hidden');
  const resultShow = document.querySelectorAll('.show');
  const convField = document.querySelectorAll('.conv_field');

  if(target.value == 'Show result') {
    for(item of resultHidden) {
      if(target.parentNode == item.parentNode) {
        item.classList.remove('hidden');
        item.setAttribute('disabled', 'disabled');
        item.classList.add('show');
        target.value = 'Hide result';
      }
    }

    for(item of convField) {

      if(item.querySelector('.boolean_emp_result')) {
        item.querySelector('.boolean_emp_result').value = Boolean('');
      }

      if(item.querySelector('.boolean_zero_result')) {
        item.querySelector('.boolean_zero_result').value = Boolean(0);
      }

      if(item.querySelector('.boolean_neg_zero_result')) {
        item.querySelector('.boolean_neg_zero_result').value = Boolean(-0);
      }

      if(item.querySelector('.boolean_nan_result')) {
        item.querySelector('.boolean_nan_result').value = Boolean(NaN);
      }

      if(item.querySelector('.boolean_null_result')) {
        item.querySelector('.boolean_null_result').value = Boolean(null);
      }

      if(item.querySelector('.boolean_und_result')) {
        item.querySelector('.boolean_und_result').value = Boolean(undefined);
      }

      if(item.querySelector('.boolean_false_result')) {
        item.querySelector('.boolean_false_result').value = Boolean(false);
      }

      if(item.querySelector('.boolean_obj_result')) {
        item.querySelector('.boolean_obj_result').value = Boolean({});
      }

      if(item.querySelector('.boolean_arr_result')) {
        item.querySelector('.boolean_arr_result').value = Boolean([]);
      }

      if(item.querySelector('.boolean_symb_result')) {
        item.querySelector('.boolean_symb_result').value = Boolean(Symbol());
      }

      if(item.querySelector('.boolean_symb_log_result')) {
        item.querySelector('.boolean_symb_log_result').value = !!Symbol();
      }

      if(item.querySelector('.boolean_func_result')) {
        item.querySelector('.boolean_func_result').value = Boolean(function() {});
      }
    }
  } else {
    for(item of resultShow) {
      if(target.parentNode == item.parentNode) {
        item.classList.remove('show');
        item.classList.add('hidden');
        target.value = 'Show result';
      }
    }
  }
});