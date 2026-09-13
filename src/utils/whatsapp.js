export const WHATSAPP_NUMBER = '923457286042'
export const WHATSAPP_DISPLAY = '+92 345 7286042'
export const STORE_ADDRESS = '42 DB Main Yazman Road, Pakistan'
export const STORE_NAME = 'Master Solar & Electronics'

export function formatPKR(amount) {
  if (amount === null || amount === undefined) return 'Price on WhatsApp'
  return `Rs. ${Number(amount).toLocaleString('en-PK')}`
}

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export function productOrderMessage(productName) {
  return `Assalam o Alaikum, I want to order ${productName}. Please share availability and final price.`
}

export function productInquiryMessage(productName) {
  return `Assalam o Alaikum, I would like to know more about ${productName}. Please share details and price.`
}

export function cartOrderMessage(items) {
  const lines = items.map(
    (i, idx) =>
      `${idx + 1}. ${i.name}${i.brand ? ` (${i.brand})` : ''} x${i.qty}${
        i.price ? ` — ${formatPKR(i.price * i.qty)}` : ' — Price on WhatsApp'
      }`
  )
  const hasKnownPrices = items.some((i) => i.price)
  const total = items.reduce((sum, i) => sum + (i.price || 0) * i.qty, 0)
  const totalLine = hasKnownPrices ? `\n\nEstimated Total: ${formatPKR(total)}` : ''
  return `Assalam o Alaikum, I want to order the following items from Master Solar & Electronics:\n\n${lines.join(
    '\n'
  )}${totalLine}\n\nPlease confirm availability and final price.`
}

export function generalInquiryMessage() {
  return `Assalam o Alaikum, I would like to know more about your solar and electronics products.`
}
