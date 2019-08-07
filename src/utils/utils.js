export function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getStorage(key) {
  const value = localStorage.getItem(key)
  return /^\{.*\}$/.test(value) ? JSON.parse(value) : value
}

export default {
  setStorage,
  getStorage
}
