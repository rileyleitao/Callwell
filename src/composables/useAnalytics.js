export function trackContactSales(location = '') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_sales', {
      event_category: 'conversion',
      event_label: location || window.location.pathname,
      value: 1
    })
  }
}
