const str = document.getElementById('string');
const bool = document.getElementById('boolean');
const num = document.getElementById('number');
const obj = document.getElementById('objects');

str.addEventListener('click', event => {
  const target = event.target;
  const resultHidden = document.querySelectorAll('.hidden');
  const resultShow = document.querySelectorAll('.show');
  const convField = document.querySelectorAll('.conv_field');

  if(target.value == 'Show result') {
    for(item of resultHidden) {
      if(target.parentNode == item.parentNode) {
        item.classList.remove('hidden');
        item.classList.add('show');
        target.value = 'Hide result';
      }
    }

    for(item of convField) {

      if(item.querySelector('.string_number_result')) {
        item.querySelector('.string_number_result').value = `'${String(2021)}'`;
      }

      if(item.querySelector('.string_neg_number_result')) {
        item.querySelector('.string_neg_number_result').value = `'${String(-2021)}'`;
      }

      if(item.querySelector('.string_null_result')) {
        item.querySelector('.string_null_result').value = `'${String(null)}'`;
      }

      if(item.querySelector('.string_undefined_result')) {
        item.querySelector('.string_undefined_result').value = `'${String(undefined)}'`;
      }

      if(item.querySelector('.string_true_result')) {
        item.querySelector('.string_true_result').value = `'${String(true)}'`;
      }

      if(item.querySelector('.string_false_result')) {
        item.querySelector('.string_false_result').value = `'${String(false)}'`;
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

bool.addEventListener('click', event => {
  const target = event.target;
  const resultHidden = document.querySelectorAll('.hidden');
  const resultShow = document.querySelectorAll('.show');
  const convField = document.querySelectorAll('.conv_field');

  if(target.value == 'Show result') {
    for(item of resultHidden) {
      if(target.parentNode == item.parentNode) {
        item.classList.remove('hidden');
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

num.addEventListener('click', event => {
  const target = event.target;
  const resultHidden = document.querySelectorAll('.hidden');
  const resultShow = document.querySelectorAll('.show');
  const convField = document.querySelectorAll('.conv_field');

  if(target.value == 'Show result') {
    for(item of resultHidden) {
      if(target.parentNode == item.parentNode) {
        item.classList.remove('hidden');
        item.classList.add('show');
        target.value = 'Hide result';
      }
    }

    for(item of convField) {

      if(item.querySelector('.number_null_result')) {
        item.querySelector('.number_null_result').value = Number(null);
      }

      if(item.querySelector('.number_und_result')) {
        item.querySelector('.number_und_result').value = Number(undefined);
      }

      if(item.querySelector('.number_true_result')) {
        item.querySelector('.number_true_result').value = Number(true);
      }

      if(item.querySelector('.number_false_result')) {
        item.querySelector('.number_false_result').value = Number(false);
      }

      if(item.querySelector('.number_str_num_result')) {
        item.querySelector('.number_str_num_result').value = Number(' 12 ');
      }

      if(item.querySelector('.number_neg_str_num_result')) {
        item.querySelector('.number_neg_str_num_result').value = Number('-12.34');
      }

      if(item.querySelector('.number_n_result')) {
        item.querySelector('.number_n_result').value = Number('\n');
      }

      if(item.querySelector('.number_str_num_sp_result')) {
        item.querySelector('.number_str_num_sp_result').value = Number(' 12s ');
      }

      if(item.querySelector('.number_num_result')) {
        item.querySelector('.number_num_result').value = Number(123);
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

obj.addEventListener('click', event => {
  const target = event.target;
  const resultHidden = document.querySelectorAll('.hidden');
  const resultShow = document.querySelectorAll('.show');
  const convField = document.querySelectorAll('.conv_field');

  if(target.value == 'Show result') {
    for(item of resultHidden) {
      if(target.parentNode == item.parentNode) {
        item.classList.remove('hidden');
        item.classList.add('show');
        target.value = 'Hide result';
      }
    }

    for(item of convField) {

      if(item.querySelector('.objects_boolean_result')) {
        item.querySelector('.objects_boolean_result').value = `${true + false}`;
      }

      if(item.querySelector('.objects_num_str_result')) {
        item.querySelector('.objects_num_str_result').value = `${12 / '6'}`;
      }

      if(item.querySelector('.objects_str_num_num_result')) {
        item.querySelector('.objects_str_num_num_result').value = `"${'number' + 15 + 3}"`;
      }

      if(item.querySelector('.objects_num_num_str_result')) {
        item.querySelector('.objects_num_num_str_result').value = `"${15 + 3 + 'number'}"`;
      }

      if(item.querySelector('.objects_arr_null_result')) {
        item.querySelector('.objects_arr_null_result').value = `${[1] > null}`;
      }

      if(item.querySelector('.objects_str_un_str_result')) {
        item.querySelector('.objects_str_un_str_result').value = `"${'foo' + + 'bar'}"`;
      }

      if(item.querySelector('.objects_str_bool_result')) {
        item.querySelector('.objects_str_bool_result').value = `${'true' == true}`;
      }

      if(item.querySelector('.objects_bool_str_result')) {
        item.querySelector('.objects_bool_str_result').value = `${false == 'false'}`;
      }

      if(item.querySelector('.objects_null_str_result')) {
        item.querySelector('.objects_null_str_result').value = `${null == ''}`;
      }

      if(item.querySelector('.objects_log_bool_str_result')) {
        item.querySelector('.objects_log_bool_str_result').value = `${!!"false" == !!"true"}`;
      }

      if(item.querySelector('.objects_arr_str_result')) {
        item.querySelector('.objects_arr_str_result').value = `${['x'] == 'x'}`;
      }

      if(item.querySelector('.objects_arr_null_num_result')) {
        item.querySelector('.objects_arr_null_num_result').value = `'${[] + null + 1}'`;
      }

      if(item.querySelector('.objects_arr_arr_result')) {
        item.querySelector('.objects_arr_arr_result').value = `${[1,2,3] == [1,2,3]}`;
      }

      if(item.querySelector('.objects_mix_log_exp_result')) {
        item.querySelector('.objects_mix_log_exp_result').value = `'${!+[]+[]+![]}'`;
      }

      if(item.querySelector('.objects_date_minus_result')) {
        item.querySelector('.objects_date_minus_result').value = `${new Date(0) - 0}`;
      }

      if(item.querySelector('.objects_date_plus_result')) {
        item.querySelector('.objects_date_plus_result').value = `'${new Date(0) + 0}'`;
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