export function calculateAge(birthday?: Date) {
  if (!birthday || isNaN(+birthday)) {
    return '';
  }
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function getNewId(withIdObjects: Array<{ id: number }>) {
  const maxId = Math.max(...withIdObjects.map(obj => obj.id));
  return maxId + 1;
}

export function formatDate(date?: Date) {
  if (!date) {
    return '';
  }
  const d = padZero(date.getDate());
  const m = padZero(date.getMonth() + 1);
  const y = date.getFullYear();
  return y + '-' + m + '-' + d;
}

function padZero(value: number) {
  const str = value.toString();
  return str.length === 1 ? '0' + str : str;
}
