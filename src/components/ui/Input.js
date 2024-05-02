export default function Input(text, isRequired = false) {
    const label = document.createElement("label")
    const input = document.createElement("input")

    label.innerText = text
    label.appendChild(input)

    input.setAttribute("name", text)

    if (isRequired) {
        input.setAttribute("required", "")
    }

    return label
}