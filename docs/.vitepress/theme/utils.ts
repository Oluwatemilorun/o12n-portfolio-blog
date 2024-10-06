/**
 * Formatting time
 *
 * @param date time to format
 * @returns Formatted time in YYYY/MM/dd AM hh:mm
 */
export function formatDate(date: string) {
  const formatDate = new Date(date);
  return formatDate.toLocaleString('en', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
}

/**
 * Get the specified parameter in the URL path
 */
export function getQueryParam(paramName: string) {
  const reg = new RegExp("(^|&)"+ paramName +"=([^&]*)(&|$)");
  let value = decodeURIComponent(window.location.search.substr(1)).match(reg);
  if (value != null) {
    return unescape(value[2]);
  } 
  return null;
}

/**
 * Jump to the specified link
 */
export function goToLink(url: string, paramName: string, paramValue: string) {
  if (paramName) {
    window.location.href = url + '?' + paramName + '=' + paramValue;
  } else {
    window.location.href = url;
  }
}
