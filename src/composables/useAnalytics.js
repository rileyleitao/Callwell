export function trackContactSales(location = '') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_sales', {
      event_category: 'conversion',
      event_label: location || window.location.pathname,
      value: 1
    })
  }
}

export function trackTryDemoClick(location = '') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'try_demo_click', {
      event_category: 'engagement',
      event_label: location || window.location.pathname,
      value: 1
    })
  }
}

export function trackDemoFormField(fieldName) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'demo_form_field', {
      event_category: 'form_engagement',
      event_label: fieldName,
      value: 1
    })
  }
}

export function trackDemoFormSubmit() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'demo_form_submit', {
      event_category: 'conversion',
      event_label: 'demo_modal',
      value: 1
    })
  }
}

export function trackDemoCallClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'demo_call_click', {
      event_category: 'conversion',
      event_label: 'demo_modal',
      value: 1
    })
  }
}
