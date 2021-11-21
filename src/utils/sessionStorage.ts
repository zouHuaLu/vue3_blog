export function setItem(key: string, value: string) {
  sessionStorage.setItem(key, value);
}

export function getItem(name: string): any {
  return sessionStorage.getItem(name);
}

export function clearSessionStorage() {
  sessionStorage.clear();
}
