const regex = "^0\\d{1,2}[ -]\\d{3,4}[ -]?\\d{3,4}";

export default function phoneRegex({ exact } = {}) {
  return exact ? new RegExp(`^${regex}$`) : new RegExp(regex, "g");
}
