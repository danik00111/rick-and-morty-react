/**
 * Wraps a function in some code so it will only run after you stop calling it for a bit.
 * @param {Function} callback
 * @param {number} timer The strength of the debounce, in miliseconds
 * @param {boolean} immediate Whether to instantly run on first call. For whatever reason.w
 * @returns {function}
 */
function debounce(callback, timer, immediate) {
  var timeout;
  return ()=>{
    var context = this, args = arguments;
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      timeout = null;
      if (!immediate) callback.apply(context, args);
    }, timer);
    if (callNow) callback.apply(context, args);
  }
}; export default debounce;